"use client";

import { useEffect, useState } from "react";

// An illustrative call, parsed the way the voice-agent pipeline does it:
// spoken Japanese → highlighted entities → a structured daily-report record.
type Seg = { text: string; entity?: "task" | "meeting" | "wellbeing" };

const SEGMENTS: Seg[] = [
  { text: "今日は" },
  { text: "見積書を3件作成", entity: "task" },
  { text: "して、午後は" },
  { text: "顧客との打ち合わせが1時間", entity: "meeting" },
  { text: "ありました。" },
  { text: "ちょっと疲れています", entity: "wellbeing" },
  { text: "。" },
];

const FIELDS = [
  { key: "task", label: "task", value: "Quote preparation × 3" },
  { key: "meeting", label: "meeting", value: "Client meeting, 60 min" },
  { key: "wellbeing", label: "wellbeing", value: "Tired, suggest a check-in" },
] as const;

const SEG_MS = 340;
const MARK_MS = 420;

export default function CallToRecord() {
  const total = SEGMENTS.length;
  const [shown, setShown] = useState(0); // segments revealed
  const [marked, setMarked] = useState(0); // entities highlighted + fields filed

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(total);
      setMarked(FIELDS.length);
      return;
    }
    const timers: number[] = [];
    SEGMENTS.forEach((_, i) => timers.push(window.setTimeout(() => setShown(i + 1), 400 + i * SEG_MS)));
    const parseStart = 400 + total * SEG_MS + 300;
    FIELDS.forEach((_, i) => timers.push(window.setTimeout(() => setMarked(i + 1), parseStart + i * MARK_MS)));
    return () => timers.forEach(clearTimeout);
  }, [total]);

  const entityOrder = (e?: Seg["entity"]) => (e ? FIELDS.findIndex((f) => f.key === e) : -1);
  const done = marked === FIELDS.length;

  return (
    <figure className="rounded-xl border border-rule bg-panel p-5 sm:p-6" aria-label="Example: a voice-agent call turned into a structured daily report">
      <div className="flex items-center justify-between gap-3 text-sm text-muted">
        <span>Daily report call</span>
        <span className="inline-flex items-center gap-2" aria-live="polite">
          <span className={`size-2 rounded-full ${done ? "bg-signal" : "animate-pulse bg-ai"}`} aria-hidden />
          {done ? "Filed" : "Parsing"}
        </span>
      </div>

      <p className="mt-4 font-jp text-[1.0625rem] leading-[1.9] text-ink" lang="ja">
        {SEGMENTS.map((s, i) => {
          const order = entityOrder(s.entity);
          return (
            <span key={i} className="seg" data-shown={i < shown ? "true" : "false"}>
              {s.entity ? (
                <span className="entity" data-marked={order > -1 && order < marked ? "true" : "false"}>
                  {s.text}
                </span>
              ) : (
                s.text
              )}
            </span>
          );
        })}
      </p>
      <p className="mt-1 text-sm text-muted">
        “Made three quotes today, then a one-hour client meeting in the afternoon. A bit tired.”
      </p>

      <dl className="mt-5 border-t border-rule pt-4 font-mono text-[0.8125rem] leading-6 tabular-nums">
        {FIELDS.map((f, i) => (
          <div key={f.key} className="field grid grid-cols-[6.5rem_1fr] gap-3" data-shown={i < marked ? "true" : "false"}>
            <dt className="text-muted">{f.label}</dt>
            <dd className="text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-4 text-xs leading-5 text-muted">
        Illustrative example of the pipeline I built: a phone call becomes a structured report, analytics and an
        early wellbeing signal.
      </figcaption>
    </figure>
  );
}
