// 1200x630 share card for a document: the label on the left, page 1 peeking in on the right.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Doc } from "@/lib/documents";

export const cardSize = { width: 1200, height: 630 };

export async function documentCard(doc: Doc) {
  const png = await readFile(join(process.cwd(), "public", doc.preview));
  const src = `data:image/png;base64,${png.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07080a",
          backgroundImage:
            "radial-gradient(700px 360px at 0% 0%, rgba(180,242,77,0.16), transparent 60%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          color: "#f2f4f0",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640, padding: "72px 0 72px 80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#b4f24d" }} />
            <span>harsha</span>
            <span style={{ color: "#8a918a", marginLeft: -16 }}>.vardhan</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3, color: "#b4f24d", lineHeight: 1 }}>{doc.label}</span>
            <span style={{ fontSize: 34, marginTop: 20 }}>Harsha Vardhan, AI Engineer</span>
          </div>
          <span style={{ fontSize: 26, color: "#a8afa8" }}>PDF · harshavardhan-dev.vercel.app</span>
        </div>
        <div style={{ display: "flex", position: "relative", flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            width={470}
            height={609}
            style={{
              position: "absolute",
              left: 50,
              top: 64,
              borderRadius: 10,
              boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(180,242,77,0.35)",
            }}
          />
        </div>
      </div>
    ),
    cardSize,
  );
}
