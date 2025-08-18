// "use client";

// import { useMemo, useState } from "react";
// import {
//   Wand2, Brain, CircuitBoard, Server, Database, Boxes, MonitorSmartphone,
//   Smartphone, Wrench, Copy, Check
// } from "lucide-react";

// type Level = "advanced" | "intermediate" | "learning";
// type Skill = { name: string; level?: Level; note?: string };
// type Category = { id: string; title: string; icon: React.ElementType; items: Skill[] };

// const CATEGORIES: Category[] = [
//   {
//     id: "llm",
//     title: "LLMs & Agents",
//     icon: Wand2,
//     items: [
//       { name: "RAG (design, eval, hybrid search)", level: "advanced" },
//       { name: "LangChain", level: "advanced" },
//       { name: "CrewAI", level: "intermediate" },
//       { name: "LangGraph", level: "advanced" },
//       { name: "OpenAI API (chat, tools, embeddings)", level: "advanced" },
//       { name: "VLLM", level: "intermediate" },
//       { name: "Ollama", level: "intermediate" },
//       { name: "AutoGen", level: "intermediate" },
//       { name: "AWS Bedrock", level: "intermediate" },
//     ],
//   },
//   {
//     id: "ml",
//     title: "AI / ML",
//     icon: Brain,
//     items: [
//       { name: "PyTorch", level: "advanced" },
//       { name: "TensorFlow", level: "intermediate" },
//       { name: "scikit-learn", level: "advanced" },
//       { name: "NLTK", level: "intermediate" },
//       { name: "Model evaluation & prompt eval", level: "intermediate" },
//     ],
//   },
//   {
//     id: "cv",
//     title: "Computer Vision",
//     icon: CircuitBoard,
//     items: [
//       { name: "YOLO (v5+)", level: "advanced" },
//       { name: "DeepSORT", level: "advanced" },
//       { name: "OpenCV", level: "advanced" },
//       { name: "VGG (classical CV)", level: "intermediate" },
//     ],
//   },
//   {
//     id: "backend",
//     title: "Backend & APIs",
//     icon: Server,
//     items: [
//       { name: "FastAPI", level: "advanced" },
//       { name: "RESTful APIs & Webhooks", level: "intermediate" },
//       { name: "Streaming responses", level: "advanced" },
//       { name: "Authentication & rate limiting", level: "intermediate" },
//     ],
//   },
//   {
//     id: "data",
//     title: "Data & Vector Stores",
//     icon: Database,
//     items: [
//       { name: "SQL / SQLite", level: "advanced" },
//       { name: "PostgreSQL", level: "intermediate" },
//       { name: "ChromaDB", level: "advanced" },
//       { name: "Pinecone", level: "intermediate" },
//       { name: "Metadata design & chunking", level: "advanced" },
//     ],
//   },
//   {
//     id: "devops",
//     title: "Deployment & Optimization",
//     icon: Boxes,
//     items: [
//       { name: "ONNX Runtime", level: "intermediate" },
//       { name: "TensorRT", level: "intermediate" },
//       { name: "OpenVINO", level: "intermediate" },
//       { name: "Docker", level: "learning" },
//       { name: "Model quantization", level: "intermediate" },
//       { name: "Vercel / Edge", level: "intermediate" },
//       // (You mentioned no CI/CD yet—leaving it out of main list on purpose)
//     ],
//   },
//   {
//     id: "frontend",
//     title: "Frontend",
//     icon: MonitorSmartphone,
//     items: [
//       { name: "Next.js (App Router)", level: "intermediate" },
//       { name: "React 19 (Server Actions)", level: "intermediate" },
//       { name: "Tailwind CSS v4", level: "intermediate" },
//       { name: "TypeScript", level: "intermediate" },
//       { name: "Accessibility & UX patterns", level: "intermediate" },
//     ],
//   },
//   {
//     id: "mobile",
//     title: "Mobile",
//     icon: Smartphone,
//     items: [
//       { name: "Flutter", level: "intermediate" },
//     ],
//   },
//   {
//     id: "tooling",
//     title: "Tooling",
//     icon: Wrench,
//     items: [
//       { name: "Git & GitHub", level: "advanced" },
//       { name: "Logging & Observability (basic)", level: "intermediate" },
//       { name: "Testing (unit/integration – focused)", level: "intermediate" },
//     ],
//   },
// ];

// function levelClass(level?: Level) {
//   switch (level) {
//     case "advanced":
//       return "border-emerald-400/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300";
//     case "intermediate":
//       return "border-amber-400/40 bg-amber-500/10 text-amber-600 dark:text-amber-300";
//     case "learning":
//       return "border-sky-400/40 bg-sky-500/10 text-sky-600 dark:text-sky-300";
//     default:
//       return "border-neutral-300/50 bg-neutral-100/60 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300";
//   }
// }

// function SkillBadge({ s }: { s: Skill }) {
//   return (
//     <li
//       className={`rounded-full border ${levelClass(s.level)} px-3 py-1 text-[12px] font-medium shadow-sm backdrop-blur`}
//       title={s.note ?? s.level}
//     >
//       {s.name}
//     </li>
//   );
// }

// export default function Skills() {
//   const [active, setActive] = useState<string>("llm");
//   const [copied, setCopied] = useState(false);

//   const flatList = useMemo(() => {
//     const arr = CATEGORIES.flatMap(c => c.items.map(i => i.name));
//     return Array.from(new Set(arr)).join(", ");
//   }, []);

//   async function copyAll() {
//     await navigator.clipboard.writeText(flatList);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1200);
//   }

//   return (
//     <section id="skills" className="mx-auto mt-16 max-w-6xl px-6 py-16">
//       <div className="mx-auto max-w-3xl text-center">
//         <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
//         <p className="mt-3 text-neutral-600 dark:text-neutral-300">
//           My current stack across LLMs/agents, ML, backend, data, and deployment.
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="mx-auto mt-8 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2">
//         {CATEGORIES.map(({ id, title }) => (
//           <button
//             key={id}
//             onClick={() => setActive(id)}
//             className={`rounded-full border px-3 py-1.5 text-sm transition
//               ${active === id
//                 ? "border-[--color-brand] bg-[--color-brand]/10 text-[--color-brand]"
//                 : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-850"
//               }`}
//           >
//             {title}
//           </button>
//         ))}

//         <button
//           onClick={copyAll}
//           aria-label="Copy all skills"
//           className="ml-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
//         >
//           {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
//           {copied ? "Copied" : "Copy all"}
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {CATEGORIES.map(({ id, title, icon: Icon, items }) => (
//           <article
//             key={id}
//             className={`group relative rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-sm transition
//             dark:border-neutral-800/70 dark:bg-neutral-950/60 hover:bg-[--color]
//             ${active === id ? "outline -outline-offset-2 outline-[--color-brand]" : ""}`}
//           >
//             <header className="mb-4 flex items-center gap-3">
//               <span className="grid size-9 place-items-center rounded-xl bg-[--color-brand]/10 text-[--color-brand]">
//                 <Icon className="size-5" />
//               </span>
//               <h3 className="text-lg font-semibold">{title}</h3>
//             </header>

//             <ul className="flex flex-wrap gap-2">
//               {items.map((s) => (
//                 <SkillBadge key={s.name} s={s} />
//               ))}
//             </ul>

//             {/* hover accent */}
//             <div
//               className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
//               style={{ background: "radial-gradient(500px circle at 20% 0%, rgba(124,58,237,0.07), transparent 40%)" }}
//             />
//           </article>
//         ))}
//       </div>

//       {/* Legend */}
//       <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-xs">
//         <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-300">Advanced</span>
//         <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-2 py-1 text-amber-700 dark:text-amber-300">Intermediate</span>
//         <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-2 py-1 text-sky-700 dark:text-sky-300">Learning</span>
//       </div>
//     </section>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import {
  Wand2, Brain, CircuitBoard, Server, Database, Boxes, MonitorSmartphone,
  Smartphone, Wrench, Copy, Check
} from "lucide-react";

type Level = "advanced" | "intermediate" | "learning";
type Skill = { name: string; level?: Level; note?: string };
type Category = { id: string; title: string; icon: React.ElementType; items: Skill[] };

const CATEGORIES: Category[] = [
  {
    id: "llm",
    title: "LLMs & Agents",
    icon: Wand2,
    items: [
      { name: "RAG (design, eval, hybrid search)", level: "advanced" },
      { name: "LangChain", level: "advanced" },
      { name: "CrewAI", level: "intermediate" },
      { name: "LangGraph", level: "advanced" },
      { name: "OpenAI API (chat, tools, embeddings)", level: "advanced" },
      { name: "VLLM", level: "intermediate" },
      { name: "Ollama", level: "intermediate" },
      { name: "AutoGen", level: "intermediate" },
      { name: "AWS Bedrock", level: "intermediate" },
    ],
  },
  {
    id: "ml",
    title: "AI / ML",
    icon: Brain,
    items: [
      { name: "PyTorch", level: "advanced" },
      { name: "TensorFlow", level: "intermediate" },
      { name: "scikit-learn", level: "advanced" },
      { name: "NLTK", level: "intermediate" },
      { name: "Model evaluation & prompt eval", level: "intermediate" },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: CircuitBoard,
    items: [
      { name: "YOLO (v5+)", level: "advanced" },
      { name: "DeepSORT", level: "advanced" },
      { name: "OpenCV", level: "advanced" },
      { name: "VGG (classical CV)", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    items: [
      { name: "FastAPI", level: "advanced" },
      { name: "RESTful APIs & Webhooks", level: "intermediate" },
      { name: "Streaming responses", level: "advanced" },
      { name: "Authentication & rate limiting", level: "intermediate" },
    ],
  },
  {
    id: "data",
    title: "Data & Vector Stores",
    icon: Database,
    items: [
      { name: "SQL / SQLite", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "ChromaDB", level: "advanced" },
      { name: "Pinecone", level: "intermediate" },
      { name: "Metadata design & chunking", level: "advanced" },
    ],
  },
  {
    id: "devops",
    title: "Deployment & Optimization",
    icon: Boxes,
    items: [
      { name: "ONNX Runtime", level: "intermediate" },
      { name: "TensorRT", level: "intermediate" },
      { name: "OpenVINO", level: "intermediate" },
      { name: "Docker", level: "learning" },
      { name: "Model quantization", level: "intermediate" },
      { name: "Vercel / Edge", level: "intermediate" },
      // (You mentioned no CI/CD yet—leaving it out of main list on purpose)
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: MonitorSmartphone,
    items: [
      { name: "Next.js (App Router)", level: "intermediate" },
      { name: "React 19 (Server Actions)", level: "intermediate" },
      { name: "Tailwind CSS v4", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Accessibility & UX patterns", level: "intermediate" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    items: [
      { name: "Flutter", level: "intermediate" },
    ],
  },
  {
    id: "tooling",
    title: "Tooling",
    icon: Wrench,
    items: [
      { name: "Git & GitHub", level: "advanced" },
      { name: "Logging & Observability (basic)", level: "intermediate" },
      { name: "Testing (unit/integration – focused)", level: "intermediate" },
    ],
  },
];

function levelClass(level?: Level) {
  // glassy badges that look great on black
  switch (level) {
    case "advanced":
      return "border-emerald-400/30 bg-emerald-400/15 text-emerald-200";
    case "intermediate":
      return "border-amber-400/30 bg-amber-400/15 text-amber-200";
    case "learning":
      return "border-sky-400/30 bg-sky-400/15 text-sky-200";
    default:
      return "border-white/12 bg-white/10 text-neutral-200";
  }
}

function SkillBadge({ s }: { s: Skill }) {
  return (
    <li
      className={`rounded-full border ${levelClass(s.level)} px-3 py-1 text-[12px] font-medium shadow-sm backdrop-blur`}
      title={s.note ?? s.level}
    >
      {s.name}
    </li>
  );
}

export default function Skills() {
  const [active, setActive] = useState<string>("llm");
  const [copied, setCopied] = useState(false);

  const flatList = useMemo(() => {
    const arr = CATEGORIES.flatMap((c) => c.items.map((i) => i.name));
    return Array.from(new Set(arr)).join(", ");
  }, []);

  async function copyAll() {
    await navigator.clipboard.writeText(flatList);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <section id="skills" className="mx-auto mt-16 max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="mt-3 text-[--color-muted]">
          My current stack across LLMs/agents, ML, backend, data, and deployment.
        </p>
      </div>

      {/* Tabs */}
      <div className="mx-auto mt-8 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`rounded-full border px-3 py-1.5 text-sm transition
              ${active === id
                ? "border-[--color-brand] bg-[--color-brand]/12 text-[--color-brand]"
                : "border-[--color-border] bg-[--color-surface] text-[--color-foreground] hover:bg-[--color-surface-2]"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]`}
          >
            {title}
          </button>
        ))}

        <button
          onClick={copyAll}
          aria-label="Copy all skills"
          className="ml-2 inline-flex items-center gap-2 rounded-full border border-[--color-border]
                     bg-[--color-surface] px-3 py-1.5 text-sm text-[--color-foreground]
                     shadow-sm transition hover:-translate-y-0.5 hover:bg-[--color-surface-2]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copied" : "Copy all"}
        </button>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(({ id, title, icon: Icon, items }) => (
          <article
            key={id}
            className={`group relative rounded-2xl
                        border border-[oklch(0.64_0.16_300)]   /* violet (not red/teal/blue) */
                        bg-[--color-surface] p-6 backdrop-blur-sm
                        shadow-[0_12px_40px_-16px_rgba(0,0,0,.7)]
                        transition hover:-translate-y-1 hover:bg-[--color-surface-2]
                        hover:border-[oklch(0.70_0.18_300)]
                        ${active === id ? "outline -outline-offset-2 outline-[--color-brand]" : ""}`}
          >
            <header className="mb-4 flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-[--color-brand]/12 text-[--color-brand]">
                <Icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </header>

            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <SkillBadge key={s.name} s={s} />
              ))}
            </ul>

            {/* hover accent, violet-tinted */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(500px circle at 20% 0%, color-mix(in oklch, oklch(0.70 0.18 300) 12%, transparent), transparent 40%)",
              }}
            />
          </article>
        ))}
      </div>

      {/* Legend */}
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-xs">
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-1 text-emerald-200">
          Advanced
        </span>
        <span className="rounded-full border border-amber-400/30 bg-amber-400/15 px-2 py-1 text-amber-200">
          Intermediate
        </span>
        <span className="rounded-full border border-sky-400/30 bg-sky-400/15 px-2 py-1 text-sky-200">
          Learning
        </span>
      </div>
    </section>
  );
}
