// Renders text as per-character spans (with a running --i index) so CSS can
// stagger a letter-by-letter reveal. Each word stays unbroken and carries its
// trailing space, so a wrapped line never starts with a stray space. Server component.
import type { CSSProperties, ElementType } from "react";

export type Part = { text: string; className?: string; br?: boolean };

type Word = { text: string; className?: string; space: boolean; br: boolean };

function toWords(parts: Part[]): Word[] {
  const words: Word[] = [];
  parts.forEach((p) => {
    p.text.split(/(\s+)/).forEach((tok) => {
      if (!tok) return;
      if (/^\s+$/.test(tok)) {
        if (words.length) words[words.length - 1].space = true;
        return;
      }
      words.push({ text: tok, className: p.className, space: false, br: false });
    });
    if (p.br && words.length) words[words.length - 1].br = true;
  });
  return words;
}

export default function SplitText({
  parts,
  as: Tag = "span",
  className = "",
  label,
}: {
  parts: Part[];
  as?: ElementType;
  className?: string;
  label?: string;
}) {
  let i = 0;
  const plain = label ?? parts.map((p) => p.text).join("");
  return (
    <Tag className={`split ${className}`} data-split aria-label={plain}>
      {toWords(parts).map((w, wi) => (
        <span key={wi} aria-hidden>
          <span className={`w ${w.className ?? ""}`}>
            {[...w.text].map((ch, ci) => (
              <span key={ci} className="ch" style={{ "--i": i++ } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
          {w.space ? " " : null}
          {w.br ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
