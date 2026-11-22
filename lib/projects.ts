export type Area = "backend" | "frontend" | "ai" | "devops" | "data" | "library";

export interface Project {
  slug: string; // = GitHub repository name
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  areas: Area[];
  tests: string;
  featured?: boolean;
}

const repo = (slug: string) => `https://github.com/Nack34/${slug}`;
export const repoUrl = repo;

export const PROJECTS: Project[] = [
  {
    slug: "mini-shop", title: "Mini e-commerce with Stripe", featured: true,
    summary: "Storefront and checkout: prices set by the server, atomic stock reservations, verified and idempotent Stripe webhooks.",
    highlights: ["The last unit sells exactly once under a race", "Signed webhooks, retries handled", "Reservations expire and release stock"],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Playwright"], areas: ["backend", "frontend"], tests: "23 + 4 E2E",
  },
  {
    slug: "corrector", title: "AI grading with rubrics", featured: true,
    summary: "Claude grades open answers against a teacher's rubric, with structured output, injection checks, human review and an eval harness.",
    highlights: ["Forced tool output, validated and clamped", "Prompt-injection detection", "Eval: MAE / within-1 vs. teacher grades"],
    stack: ["FastAPI", "Claude", "Next.js", "PostgreSQL"], areas: ["ai", "backend", "frontend"], tests: "21 + 4 E2E",
  },
  {
    slug: "microshop", title: "Microservices with RabbitMQ + observability", featured: true,
    summary: "Gateway and three services running a choreography saga over RabbitMQ, with metrics, alerts and one trace across every hop.",
    highlights: ["Idempotent consumers, durable queues", "OpenTelemetry trace through HTTP and AMQP", "Prometheus alerts with unit tests"],
    stack: ["Node/TS", "Python", "RabbitMQ", "OpenTelemetry", "Prometheus", "Grafana"], areas: ["backend", "devops"], tests: "23 + E2E",
  },
  {
    slug: "nest-auth", title: "Authentication service", featured: true,
    summary: "Email + Google login, rotating refresh tokens with reuse detection, TOTP two-factor with recovery codes, roles and rate limits.",
    highlights: ["Replay of a refresh token revokes the session", "TOTP from the RFCs, secrets encrypted at rest", "Same suite on SQLite and PostgreSQL"],
    stack: ["NestJS", "TypeORM", "PostgreSQL", "OAuth2"], areas: ["backend"], tests: "28",
  },
  {
    slug: "docs-chat", title: "Chat with your PDFs (RAG)",
    summary: "Upload PDFs and ask questions; answers cite the page they come from. pgvector search, Claude or OpenAI, or an offline mode.",
    highlights: ["Citations to the source page", "pgvector HNSW index", "Works without an API key"],
    stack: ["FastAPI", "pgvector", "Claude", "React"], areas: ["ai", "backend"], tests: "21",
  },
  {
    slug: "support-agent", title: "AI support agent with tools",
    summary: "A LangGraph agent that looks up orders, searches the FAQ and starts returns, pausing for human confirmation before acting.",
    highlights: ["Human-in-the-loop with interrupt", "Tested without calling the LLM"],
    stack: ["LangGraph", "FastAPI", "Python"], areas: ["ai", "backend"], tests: "15",
  },
  {
    slug: "gastos-bot", title: "Telegram expense bot with Claude",
    summary: "Log expenses in plain Spanish, get summaries and the dollar rate. Claude tool use, with an offline fallback.",
    highlights: ["Tool-use loop with errors fed back to the model", "Argentine amounts and time zone"],
    stack: ["Python", "Claude", "Telegram"], areas: ["ai"], tests: "28",
  },
  {
    slug: "expense-tracker", title: "Expense approvals",
    summary: "Employees submit expenses, managers approve or reject with a reason, monthly report. JWT security without extra libraries.",
    highlights: ["Nobody approves their own expense", "Playwright E2E of the full approval flow"],
    stack: ["Spring Boot", "Angular", "PostgreSQL"], areas: ["backend", "frontend"], tests: "16 + 7 E2E",
  },
  {
    slug: "clinic-appointments", title: "Clinic appointments",
    summary: "Front-desk booking with free slots per doctor's schedule; a filtered unique index makes double booking impossible.",
    highlights: ["Race-proof booking, tested with two browsers", "TimeProvider for deterministic tests"],
    stack: [".NET 10", "EF Core", "React", "PostgreSQL"], areas: ["backend", "frontend"], tests: "23 + 5 E2E",
  },
  {
    slug: "inventory", title: "Inventory management",
    summary: "Products, stock movements as an audit log, low-stock alerts and a dashboard.",
    highlights: ["Stock only changes through movements", "select_for_update against lost updates"],
    stack: ["Django REST", "Angular", "PostgreSQL"], areas: ["backend", "frontend"], tests: "25 + 6 E2E",
  },
  {
    slug: "realtime-whiteboard", title: "Real-time whiteboard",
    summary: "Shared drawing rooms over WebSockets with a typed protocol, validated messages and live cursors.",
    highlights: ["Typed shared protocol", "Batched points every 40 ms"],
    stack: ["Socket.IO", "React", "TypeScript"], areas: ["frontend", "backend"], tests: "20",
  },
  {
    slug: "image-resizer", title: "Serverless image resizer",
    summary: "S3 upload → Lambda → WebP thumbnails, with presigned uploads, a dead-letter queue and infrastructure as code.",
    highlights: ["Can't trigger itself", "Decompression-bomb safe", "Tested with moto"],
    stack: ["AWS Lambda", "S3", "DynamoDB", "SAM", "Python"], areas: ["devops", "backend"], tests: "20",
  },
  {
    slug: "legal-doc-classifier", title: "Legal document classifier",
    summary: "Classifies court documents by type with TF-IDF and linear models, chosen by cross-validation, with explanations.",
    highlights: ["Model chosen with cross-validation", "Explains each prediction"],
    stack: ["scikit-learn", "FastAPI"], areas: ["data", "ai"], tests: "11",
  },
  {
    slug: "tasks-api", title: "Tasks API",
    summary: "A clean REST API with JWT auth, ownership checks and 98% test coverage.",
    highlights: ["404, not 403, for other users' tasks"],
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL"], areas: ["backend"], tests: "15",
  },
  {
    slug: "url-shortener", title: "URL shortener",
    summary: "Short links with click stats and rate limiting, on Redis.",
    highlights: ["Collision-free codes with SET NX"],
    stack: ["Express", "TypeScript", "Redis"], areas: ["backend"], tests: "25",
  },
  {
    slug: "validar-ar", title: "validar-ar (npm)",
    summary: "Validates Argentine CUIT, CBU and DNI. ESM + CommonJS, typed.",
    highlights: ["Published from CI on tag"],
    stack: ["TypeScript", "npm"], areas: ["library"], tests: "16",
  },
  {
    slug: "tidycsv", title: "tidycsv (PyPI)",
    summary: "A CLI that cleans messy CSV files: encodings, separators, headers, types.",
    highlights: ["Trusted publishing to PyPI"],
    stack: ["Python", "Typer", "PyPI"], areas: ["library", "data"], tests: "26",
  },
];

export const AREA_LABELS: Record<Area, string> = {
  backend: "Backend", frontend: "Frontend", ai: "AI / LLM", devops: "Cloud & DevOps", data: "Data / ML", library: "Libraries",
};

/** Filter by area and free text (title, summary or a technology). Pure, so it's unit-tested. */
export function filterProjects(projects: Project[], area: Area | "all", query: string): Project[] {
  const q = query.trim().toLowerCase();
  return projects.filter(
    (p) =>
      (area === "all" || p.areas.includes(area)) &&
      (!q || [p.title, p.summary, ...p.stack].some((text) => text.toLowerCase().includes(q))),
  );
}

export function allTechnologies(projects: Project[]): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of projects) for (const t of p.stack) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
