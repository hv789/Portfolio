// All site copy lives here. Public-copy rules: never name internal products (describe the work
// instead); client names and revenue figures shown here are approved for public use; keep
// claims to what was actually built and shipped.

export const profile = {
  name: "Harsha Vardhan",
  handle: "hv789",
  role: "AI Engineer",
  email: "hv2003789@gmail.com",
  linkedin: "https://www.linkedin.com/in/hv8",
  linkedinShort: "/in/hv8",
  github: "https://github.com/hv789",
  githubShort: "github.com/hv789",
  resume: "/Harsha_Vardhan_Resume.pdf",
};

export const marquee = [
  "Claude tool use", "Subagents", "MCP servers", "LLM-as-judge evals", "Langfuse tracing", "Vapi voice agents",
  "Twilio / SIP", "Soniox STT", "Cartesia TTS", "Structured outputs", "Model routing", "PM4Py process mining",
  "Rust / Tauri", "FastAPI", "TypeScript", "AWS CDK", "Firebase", "Databricks",
];

export const now = {
  title: "An agentic process-mining platform",
  summary:
    "Enterprise teams don't know which of their workflows are worth automating. The platform watches how work actually happens on employees' desktops, mines the real processes, and turns them into shipped automations, with AI agents doing the heavy lifting and humans approving every step.",
  doing: [
    "Desktop capture agent in Rust/Tauri and the event contract the AI pipeline is built on",
    "Multi-agent automation delivery on Claude: evidence → process maps → generated, tested automations",
    "Human-in-the-loop operator Q&A that sends model gaps back to the people who do the work",
    "Identity, MFA and tenant isolation across the product family",
  ],
  tags: ["Claude", "MCP", "LLM-as-judge evals", "Rust / Tauri", "FastAPI", "AWS"],
};

export const clients = ["NTT DATA", "Toyota", "Mitsubishi Motors", "DeCoA", "Amgen"];

export const stats = [
  { prefix: "¥", value: 23, suffix: "M+", label: "monthly revenue across the two AI products I build for" },
  { prefix: "", value: 5, suffix: "", label: "enterprise clients across automotive, IT services and healthcare" },
  { prefix: "", value: 2, suffix: "", label: "AI products in production that I've built core systems for" },
];

export const about = {
  lead: [
    { text: "I'm an AI engineer at a Tokyo AI company, working with Japanese enterprises. " },
    { text: "I build agents that take real actions in production: they call, extract, decide and file the work.", mark: true },
    { text: " Not chat windows." },
  ],
  cards: [
    {
      kicker: "Now",
      title: "AI Engineer at I'mbesideyou",
      body: "Voice agents and multi-agent systems for enterprise clients in Japan: a voice-AI reporting platform and an agentic process-mining and automation platform.",
    },
    {
      kicker: "How I build",
      title: "Evals before vibes",
      body: "Every agent ships with provenance, boolean LLM-as-judge checks and cost ledgers. If a model can't cite where a fact came from, it doesn't get written.",
    },
    {
      kicker: "Background",
      title: "IIT Bhubaneswar, ex-ZS",
      body: "B.Tech in ECE (2025). At ZS Associates I built data pipelines and the client interface for a $2M analytics program at Amgen.",
    },
  ],
};

export type Tag = { label: string; tone?: "lime" | "teal" | "amber" | "violet" };

export type Work = {
  title: string;
  clients: string;
  status: string;
  summary: string;
  points: string[];
  tags: Tag[];
};

export const work: Work[] = [
  {
    title: "Voice-AI reporting platform",
    clients: "DeCoA, Mitsubishi Motors",
    status: "In production · ¥8M+/mo",
    summary:
      "Voice agents call each employee, take a spoken daily report in Japanese, and turn it into structured reports, HR analytics and early wellbeing signals. I owned the platform end to end.",
    points: [
      "Distributed call-concurrency control so bursts of calls across tenants are queued, never dropped",
      "Anonymous compliance hotline with privacy-minimal server-side tools",
      "Japanese speech tuning (custom vocabulary, endpointing) and per-tenant LLM spend caps",
    ],
    tags: [
      { label: "Vapi", tone: "lime" }, { label: "Twilio / SIP", tone: "teal" }, { label: "Soniox" }, { label: "Cartesia" },
      { label: "OpenAI" }, { label: "Langfuse", tone: "amber" }, { label: "Firebase" },
    ],
  },
  {
    title: "Desktop capture for process mining",
    clients: "NTT DATA, Toyota",
    status: "In production · platform ¥15M+/mo",
    summary:
      "A Windows agent that records how back-office teams actually work, so the platform can map processes and find what to automate. I designed and built the agent and led the event contract the OCR/LLM pipeline is built on.",
    points: [
      "Runs unattended on locked-down corporate PCs with signed auto-update",
      "UI Automation, Office and browser signals instead of screenshot OCR: coverage 62.5% → 87%",
      "Proxy-proof, offline-first uploads that work behind enterprise network restrictions",
    ],
    tags: [{ label: "Rust", tone: "amber" }, { label: "Tauri 2", tone: "lime" }, { label: "UI Automation" }, { label: "COM" }, { label: "Chrome MV3" }, { label: "FastAPI", tone: "teal" }],
  },
  {
    title: "Multi-agent automation delivery",
    clients: "Enterprise clients of the platform",
    status: "Live · 2026",
    summary:
      "Scheduled Claude agents read client evidence (Slack, Drive, Jira, screen recordings) into a provenanced record, then generate, test and ship automations behind human approval gates.",
    points: [
      "17 subagents with mandatory provenance, growing the record to ~3K facts across ~99 processes",
      "MCP server with OAuth and 23 tools, sharing one handler layer with the UI and in-app agent",
      "Boolean LLM-as-judge evals with golden sets and mutation tests; run cost bounded by model routing",
    ],
    tags: [{ label: "Claude", tone: "lime" }, { label: "MCP", tone: "teal" }, { label: "LLM-as-judge", tone: "amber" }, { label: "AWS Lambda" }, { label: "CDK" }, { label: "GitHub Actions" }],
  },
  {
    title: "Identity and MFA layer",
    clients: "Platform-wide",
    status: "Shipped · 2026",
    summary:
      "One sign-in across a family of SaaS tools: a token-exchange service that turns per-tool logins into audience-scoped JWTs, with email-OTP MFA across web, operator and desktop apps.",
    points: ["Audience-scoped RS256 JWTs with a key-rotation path", "Closed 5 cross-tenant access holes"],
    tags: [{ label: "FastAPI", tone: "teal" }, { label: "PostgreSQL" }, { label: "Firebase Auth" }, { label: "JWKS", tone: "violet" }],
  },
  {
    title: "Data-analytics program",
    clients: "Amgen, via ZS Associates",
    status: "Shipped · 2025 · $2M program",
    summary:
      "Pipelines across Databricks and AWS Redshift, the client-side React interface the business teams used, and LLM-powered analysis tools with tracing.",
    points: ["Contributed to $45K in cost savings", "LLM analysis tools instrumented with Langfuse"],
    tags: [{ label: "Databricks", tone: "amber" }, { label: "Redshift" }, { label: "React", tone: "teal" }, { label: "Python" }, { label: "Langfuse" }],
  },
];

export const experience = [
  {
    when: "Dec 2025 — Present",
    where: "Tokyo (remote)",
    org: "I'mbesideyou",
    role: "AI Engineer — agentic AI and voice AI",
    bullets: [
      "Voice-AI reporting platform for DeCoA and Mitsubishi Motors, owned end to end",
      "Desktop capture agent and event contract for a process-mining platform used by NTT DATA and Toyota",
      "Multi-agent automation delivery on Claude with an MCP server and LLM-as-judge evals",
      "Identity layer and email-OTP MFA across the product family",
    ],
  },
  {
    when: "Jul 2025 — Dec 2025",
    where: "Pune",
    org: "ZS Associates",
    role: "Software Engineer — data and analytics",
    bullets: [
      "Databricks and Redshift pipelines for Amgen's $2M data-analytics program",
      "Client-side React interface for the program's business teams",
      "LLM-powered analysis tools with Langfuse tracing",
    ],
  },
  {
    when: "2021 — 2025",
    where: "Bhubaneswar",
    org: "IIT Bhubaneswar",
    role: "B.Tech, Electronics and Communication Engineering",
    bullets: ["JEE Advanced 2021: All India Rank 3,348 of 1.4M+", "Inter-IIT Tech Meet 11.0: silver and bronze medals"],
  },
];

export const faq = [
  {
    q: "What roles are you open to?",
    a: "AI Engineer, Forward-Deployed Engineer and Software Engineer roles where I can build agentic and LLM systems that real users depend on. I'm open on location: on-site, hybrid or remote, in any country.",
  },
  {
    q: "What do you actually build?",
    a: "Production AI systems end to end: voice agents that take calls and turn speech into structured data, multi-agent pipelines that read messy enterprise evidence and produce automations, and the unglamorous parts around them (auth, data pipelines, desktop agents, deployment).",
  },
  {
    q: "How do you make agents reliable in production?",
    a: "Provenance on every fact an agent writes, boolean LLM-as-judge checks with golden and holdout sets, deterministic code for anything that can be computed, human approval gates before anything reaches a client, and a cost ledger per run with model routing to keep spend bounded.",
  },
  {
    q: "Have you worked directly with enterprise clients?",
    a: "Yes. My current work is for large Japanese enterprises across automotive and IT services, which means locked-down corporate networks, Japanese-language AI and strict data privacy. At ZS Associates I worked on a $2M analytics program for a healthcare client.",
  },
  {
    q: "What's your core stack?",
    a: "Python and TypeScript, Claude and OpenAI APIs, MCP, Langfuse, Vapi and Twilio for voice, FastAPI, PostgreSQL, Firebase, Rust/Tauri for desktop, and AWS (CDK, ECS, Lambda) for infrastructure.",
  },
  {
    q: "What's the fastest way to reach you?",
    a: "Email at hv2003789@gmail.com, or a message on LinkedIn.",
  },
];
