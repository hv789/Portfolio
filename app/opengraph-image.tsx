// Share card for link previews (LinkedIn, Slack, X). Rendered once at build time.
import { ImageResponse } from "next/og";

export const alt = "Harsha Vardhan, AI Engineer: voice agents and agentic systems for enterprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#07080a",
          backgroundImage:
            "radial-gradient(700px 360px at 0% 0%, rgba(180,242,77,0.16), transparent 60%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          color: "#f2f4f0",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#b4f24d" }} />
            <span>harsha</span>
            <span style={{ color: "#8a918a", marginLeft: -16 }}>.vardhan</span>
          </div>
          <span style={{ color: "#b4f24d", fontSize: 26 }}>harshavardhan-dev.vercel.app</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 76, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
          <span>I build&nbsp;</span>
          <span style={{ color: "#5eead4" }}>voice agents&nbsp;</span>
          <span>&amp;&nbsp;</span>
          <span style={{ color: "#b4f24d" }}>agentic systems&nbsp;</span>
          <span>for&nbsp;</span>
          <span style={{ color: "#fbbf24" }}>enterprises.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a8afa8" }}>
          <span>AI Engineer · Forward-Deployed Engineer · Software Engineer</span>
        </div>
      </div>
    ),
    size,
  );
}
