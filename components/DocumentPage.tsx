import type { Metadata } from "next";
import type { Doc } from "@/lib/documents";

export function documentMetadata(doc: Doc): Metadata {
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/${doc.slug}` },
    openGraph: { title: doc.title, description: doc.description, url: `/${doc.slug}`, type: "website" },
  };
}

export default function DocumentPage({ doc }: { doc: Doc }) {
  return (
    <>
      <div className="backdrop" aria-hidden />
      <main className="wrap py-16 md:py-24">
        <a href="/" className="font-mono text-[13px] text-ink-mute hover:text-lime">
          ← harsha.vardhan
        </a>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-[clamp(34px,5vw,64px)] font-bold leading-none tracking-tight">{doc.label}</h1>
            <p className="mt-4 max-w-[56ch] text-[16px] leading-relaxed">{doc.description}</p>
          </div>
          <a href={doc.pdf} className="btn btn--primary">
            Download PDF
          </a>
        </div>
        <a href={doc.pdf} className="mt-12 block overflow-hidden rounded-[14px] border border-line bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={doc.preview} alt={`${doc.label} of Harsha Vardhan, page 1`} width={1081} height={1400} className="h-auto w-full" />
        </a>
      </main>
    </>
  );
}
