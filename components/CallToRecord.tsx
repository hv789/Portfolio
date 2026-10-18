"use client";

import { useEffect, useState } from "react";

// An illustrative call, parsed the way the voice-agent pipeline does it:
// spoken Japanese → highlighted entities → a structured daily-report record.
type Kind = "task" | "meeting" | "wellbeing";
type Seg = { text: string; entity?: Kind };

const SEGMENTS: Seg[] = [
  { text: "今日は" },
  { text: "見積書を3件作成", entity: "task" },
  { text: "して、午後は" },
  { text: "顧客との打ち合わせが1時間", entity: "meeting" },
  { text: "ありました。" },
  { text: "ちょっと疲れています", entity: "wellbeing" },
  { text: "。" },
];

const FIELDS: { key: Kind; value: string; color: string }[] = [
  { key: "task", value: "Quote preparation × 3", color: "text-lime" },
  { key: "meeting", value: "Client meeting, 60 min", color: "text-teal" },
  { key: "wellbeing", value: "Tired, suggest a check-in", color: "text-amber" },
];

const SEG_MS = 320;
const MARK_MS = 420;
const BARS = [10, 16, 8, 14, 6, 12, 9];

export default function CallToRecord() {
  const total = SEGMENTS.length;
  const [shown, setShown] = useState(0);
  const [marked, setMarked] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(total);
      setMarked(FIELDS.length);
      return;
    }
    const timers: number[] = [];
    const t0 = 700;
    SEGMENTS.forEach((_, i) => timers.push(window.setTimeout(() => setShown(i + 1), t0 + i * SEG_MS)));
    const parseStart = t0 + total * SEG_MS + 300;
    FIELDS.forEach((_, i) => timers.push(window.setTimeout(() => setMarked(i + 1), parseStart + i * MARK_MS)));
    return () => timers.forEach(clearTimeout);
  }, [total]);

  const order = (e?: Kind) => (e ? FIELDS.findIndex((f) => f.key === e) : -1);
  const done = marked === FIELDS.length;

  return (
    <figure className="call" aria-label="Example: a voice-agent call turned into a structured daily report">
      <div className="call__top">
        <span className="inline-flex items-center gap-3">
          <span className="wave" data-done={done ? "true" : "false"} aria-hidden>
            {BARS.map((h, i) => (
              <i key={i} style={{ height: h, animationDelay: `${i * 90}ms` }} />
            ))}
          </span>
          daily_report_call.wav
        </span>
        <span className={`inline-flex items-center gap-2 ${done ? "text-lime" : ""}`} aria-live="polite">
          {done ? <span className="dot" aria-hidden /> : null}
          {done ? "filed" : "parsing…"}
        </span>
      </div>

      <p className="mt-5 font-jp text-[1.0625rem] leading-[1.95] text-ink" lang="ja">
        {SEGMENTS.map((s, i) => {
          const o = order(s.entity);
          return (
            <span key={i} className="seg" data-shown={i < shown ? "true" : "false"}>
              {s.entity ? (
                <span className="entity" data-kind={s.entity} data-marked={o > -1 && o < marked ? "true" : "false"}>
                  {s.text}
                </span>
              ) : (
                s.text
              )}
            </span>
          );
        })}
      </p>
      <p className="mt-1 text-sm text-ink-mute">
        “Made three quotes today, then a one-hour client meeting in the afternoon. A bit tired.”
      </p>

      <div className="mt-5 rounded-xl border border-line bg-bg/70 p-4 font-mono text-[0.8125rem] leading-6">
        <p className="mb-1 text-ink-dim">{"{"} daily_report</p>
        <dl>
          {FIELDS.map((f, i) => (
            <div key={f.key} className="field grid grid-cols-[6.5rem_1fr] gap-3 pl-4" data-shown={i < marked ? "true" : "false"}>
              <dt className={f.color}>{f.key}:</dt>
              <dd className="text-ink">&quot;{f.value}&quot;</dd>
            </div>
          ))}
        </dl>
        <p className="mt-1 text-ink-dim">{"}"}</p>
      </div>
      <figcaption className="mt-4 text-xs leading-5 text-ink-mute">
        Illustrative example of the voice-agent pipeline I built: one phone call becomes a structured report,
        analytics and an early wellbeing signal.
      </figcaption>
    </figure>
  );
}
