// Public documents linked from LinkedIn Featured. Each gets a preview page at /<slug>
// so link previews have a thumbnail (LinkedIn can't build one from a bare PDF).
export type Doc = {
  slug: "resume" | "cover-letter";
  label: string;
  title: string;
  description: string;
  pdf: string;
  preview: string;
};

export const documents: Record<Doc["slug"], Doc> = {
  resume: {
    slug: "resume",
    label: "Resume",
    title: "Resume: Harsha Vardhan, AI Engineer",
    description: "One-page resume: AI Engineer building agentic systems, voice AI agents and production LLM systems.",
    pdf: "/Harsha_Vardhan_Resume.pdf",
    preview: "/previews/resume.png",
  },
  "cover-letter": {
    slug: "cover-letter",
    label: "Cover letter",
    title: "Cover letter: Harsha Vardhan",
    description: "General cover letter for AI Engineer, Forward-Deployed Engineer and Software Engineer roles.",
    pdf: "/Harsha_Vardhan_Cover_Letter.pdf",
    preview: "/previews/cover-letter.png",
  },
};
