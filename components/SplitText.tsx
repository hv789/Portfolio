// Renders text as per-character spans (with a running --i index) so CSS can
// stagger a letter-by-letter reveal. Words stay unbroken. Server component.
import type { CSSProperties, ElementType } from "react";

export type Part = { text: string; className?: string; br?: boolean };

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
      {parts.map((p, pi) => (
        <span key={pi} className={p.className} aria-hidden>
          {p.text.split(/(\s+)/).map((word, wi) =>
            /^\s+$/.test(word) ? (
              " "
            ) : (
              <span key={wi} className="w">
                {[...word].map((ch, ci) => (
                  <span key={ci} className="ch" style={{ "--i": i++ } as CSSProperties}>
                    {ch}
                  </span>
                ))}
              </span>
            ),
          )}
          {p.br ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
