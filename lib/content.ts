// All site copy lives here. Rules: no internal product names, no "sole engineer",
// client names and revenue are public-ok (Harsha, 2026-10-18).

export const profile = {
  name: "Harsha Vardhan",
  role: "AI Engineer",
  current: "AI Engineer at I'mbesideyou (Tokyo, remote). Before that, data and app engineering for Amgen at ZS Associates.",
  statement:
    "I build AI agents that do real work inside Japanese enterprises: voice agents that phone employees and file their daily reports, and multi-agent systems that learn how work gets done, then automate it.",
  email: "hv2003789@gmail.com",
  linkedin: "https://www.linkedin.com/in/hv8",
  github: "https://github.com/hv789",
  resume: "/Harsha_Vardhan_Resume.pdf",
  location: "Bhubaneswar, India · working with Tokyo",
};

export const clients = ["NTT DATA", "Toyota", "Mitsubishi Motors", "DeCoA", "Amgen"];

export const stack: { group: string; items: string[] }[] = [
  { group: "Agents", items: ["Claude (tool use, subagents)", "MCP", "OpenAI", "AWS Bedrock", "LLM-as-judge evals", "Langfuse"] },
  { group: "Voice", items: ["Vapi", "Twilio / SIP", "Soniox STT", "Cartesia TTS"] },
  { group: "Systems", items: ["Python", "TypeScript", "Rust / Tauri", "FastAPI", "PostgreSQL", "Firebase"] },
  { group: "Data & cloud", items: ["PM4Py", "Databricks", "Redshift", "AWS CDK, ECS, Lambda", "GitHub Actions"] },
];

export type Work = {
  title: string;
  clients: string;
  when: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const work: Work[] = [
  {
    title: "Voice-AI reporting platform",
    clients: "DeCoA, Mitsubishi Motors",
    when: "2025 – 2026 · ¥8M+ monthly revenue",
    summary:
      "Voice agents call each employee, take a spoken daily report in Japanese, and turn it into structured reports, HR analytics and early wellbeing signals. I owned the platform end to end.",
    points: [
      "Call-concurrency limiter on Firestore transactions: 0 errors at 200 simultaneous requests",
      "Anonymous compliance hotline with privacy-minimal server-side tools",
      "Japanese speech tuning (custom vocabulary, endpointing) and per-tenant LLM spend caps",
    ],
    stack: ["Vapi", "Twilio", "Soniox", "Cartesia", "OpenAI", "Langfuse", "Firebase", "PM4Py"],
  },
  {
    title: "Desktop capture for enterprise process mining",
    clients: "NTT DATA, Toyota",
    when: "2026 · platform at ¥15M+ monthly revenue",
    summary:
      "A Windows agent that records how back-office teams actually work, so the platform can map processes and find what to automate. I designed and built the capture agent and led the event contract the OCR/LLM pipeline teams build on.",
    points: [
      "Frame capture cut from 2–8 s to ~83 ms",
      "Structured UI Automation, Office and browser signals instead of screenshot OCR: coverage 62.5% → 87%",
      "Proxy-proof uploads and signed auto-update for locked-down corporate networks: 0/12 → 12/12",
    ],
    stack: ["Rust", "Tauri 2", "UI Automation", "COM", "Chrome MV3", "FastAPI", "AWS"],
  },
  {
    title: "Multi-agent automation delivery",
    clients: "Enterprise clients of the process-mining platform",
    when: "2026",
    summary:
      "Scheduled Claude agents read client evidence (Slack, Drive, Jira, screen recordings) into a provenanced record, then generate, test and ship automations behind human approval gates.",
    points: [
      "17 subagents with mandatory provenance, growing the record to ~3K facts across ~99 processes",
      "MCP server with OAuth and 23 tools, sharing one handler layer with the UI and in-app agent",
      "Boolean LLM-as-judge evals with golden sets and mutation tests; run cost bounded by model routing",
    ],
    stack: ["Claude", "MCP", "AWS Lambda", "CDK", "GitHub Actions", "React"],
  },
  {
    title: "Identity and MFA layer",
    clients: "Platform-wide",
    when: "2026",
    summary:
      "One sign-in across a family of SaaS tools: a token-exchange service that turns per-tool logins into audience-scoped JWTs, with email-OTP MFA across web, operator and desktop apps.",
    points: ["Audience-scoped RS256 JWTs with a key-rotation path", "Closed 5 cross-tenant access holes"],
    stack: ["FastAPI", "PostgreSQL", "Firebase Auth", "JWKS"],
  },
  {
    title: "Data-analytics program",
    clients: "Amgen, via ZS Associates",
    when: "2025 · $2M program",
    summary:
      "Pipelines across Databricks and AWS Redshift, the client-side React interface the business teams used, and LLM-powered analysis tools with tracing.",
    points: ["Contributed to $45K in cost savings", "LLM analysis tools instrumented with Langfuse"],
    stack: ["Databricks", "Redshift", "React", "Python", "Langfuse"],
  },
];

export const experience = [
  {
    when: "Dec 2025 – now",
    org: "I'mbesideyou",
    role: "AI Engineer",
    where: "Tokyo, remote",
    note: "Agentic AI and production LLM systems for Japanese enterprises.",
  },
  {
    when: "Jul – Dec 2025",
    org: "ZS Associates",
    role: "Software Engineer",
    where: "Pune",
    note: "Data engineering and the client interface for Amgen's analytics program.",
  },
];

export const education = {
  school: "IIT Bhubaneswar",
  degree: "B.Tech, Electronics and Communication Engineering",
  when: "2021 – 2025",
  honors: [
    "JEE Advanced 2021: All India Rank 3,348 of 1.4M+",
    "Inter-IIT Tech Meet 11.0: silver and bronze medals",
  ],
};
