"use client";

import Link from "next/link";
import { Github, ExternalLink, Sparkle } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  status?: "wip" | "done";
};

const PROJECTS: Project[] = [
  {
    title: "Research Paper Retriever",
    description:
      "Rag pipeline with chunking + vector search. FastAPI backend, React UI. JWT-based auth and Role-based scopes (ingest, search, retrieve)",
    tech: ["React", "FastAPI", "ChromaDB", "Sentence-Transformer"],
    repo: "https://github.com/Thrangsohlang/Research_Assistant",
    featured: true,
    status: "done",
  },
  {
    title: "HTS Agent",
    description:
      "Tariff Chatbot + classifier + calculator with tools and function calling.",
    tech: ["Langchain", "Python", "Pydantic", "FastAPI", "Streamlit", "OpenAI API"],
    repo: "https://github.com/Thrangsohlang/HTSAgent",
    featured: true,
    status: "done",
  },
  {
    title: "Chatbot with Gemini",
    description:
      "Simple multi-turn chatbot with PDF, Doc ingestion and retrieval along with html, javascript and css-based UI",
    tech: ["Python", "Gemini API", "Langchain", "HTML", "Javascript", "CSS"],
    featured: false,
    status: "done",
  },
  {
    title: "Gene Mutation Classification",
    description:
      "Classic ML Classification: feature engineering, model comparison, and reporting.",
    tech: ["Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    status: "done",
  },
  {
    title: "Alpherg-Viator",
    description:
      "AI Agent Travel assistant with access to real time database for hotels, guides, cabs. Itinerary Planning and single payment window.",
    tech: ["Python", "Langgraph", "PostGres", "FastAPI", "AWS", "Next.js", "Tailwind CSS"],
    featured: true,
    status: "wip",
  },
];

function Badge({
  children,
  intent = "neutral",
}: {
  children: React.ReactNode;
  intent?: "neutral" | "accent";
}) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium border transition";
  const styles =
    intent === "accent"
      ? "border-white/15 bg-[--color-brand]/15 text-[--color-brand]"
      : "border-white/12 bg-white/10 text-neutral-200";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

function TechChip({ label }: { label: string }) {
  return (
    <li
      className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1
                 text-xs text-neutral-200 shadow-sm backdrop-blur"
    >
      {label}
    </li>
  );
}

function CardActions({ repo, demo }: { repo?: string; demo?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {repo && (
        <Link
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          className="group inline-flex items-center gap-2 rounded-lg border border-[--color-border]
                     bg-[--color-surface] px-3 py-2 text-sm font-medium text-[--color-foreground]
                     shadow-sm transition hover:-translate-y-0.5 hover:bg-[--color-surface-2]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]"
        >
          <Github className="size-4" />
          <span>Code</span>
        </Link>
      )}
      {demo && (
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open live demo"
          className="group inline-flex items-center gap-2 rounded-lg
                     bg-[--color-brand] px-3 py-2 text-sm font-medium text-[--color-brand-foreground]
                     shadow-sm transition hover:-translate-y-0.5 hover:opacity-90
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]"
        >
          <ExternalLink className="size-4" />
          <span>Live</span>
        </Link>
      )}
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  repo,
  demo,
  featured,
  status,
}: Project) {
  return (
    <article
        className="group relative flex flex-col justify-between rounded-2xl
                    border border-[oklch(0.45_0.15_25)] bg-[--color-surface] p-5
                    backdrop-blur shadow-[0_12px_40px_-16px_rgba(0,0,0,.7)]
                    transition hover:-translate-y-1 hover:bg-[--color-surface-2]
                    hover:border-[oklch(0.17_0.20_25)]"
    >


      {/* top meta */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {featured && (
            <Badge intent="accent">
              <Sparkle className="size-3.5" />
              Featured
            </Badge>
          )}
          {status === "wip" && <Badge>WIP</Badge>}
        </div>
      </div>

      {/* title and description */}
      <header>
        <h3 className="text-xl font-semibold tracking-tight text-[--color-foreground]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[--color-muted]">
          {description}
        </p>
      </header>

      {/* tech chips */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <TechChip key={t} label={t} />
        ))}
      </ul>

      {/* actions */}
      <div className="mt-6">
        <CardActions repo={repo} demo={demo} />
      </div>

      {/* subtle gradient hover accent (brand-aware) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
        style={{
        background:
            "radial-gradient(600px circle at 20% 0%, color-mix(in oklch, oklch(0.65 0.13 180) 12%, transparent), transparent 40%)",
        }}
        aria-hidden
      />
    </article>
  );
}

export default function ProjectsSection() {
  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    (e.currentTarget as HTMLElement).style.setProperty("--x", `${e.clientX - rect.left}px`);
    (e.currentTarget as HTMLElement).style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="projects"
      onMouseMove={onMouseMove}
      className="mx-auto mt-16 max-w-6xl px-6 py-16"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="projects-heading" className="text-3xl font-bold tracking-tight">
          Projects
        </h2>
        <p className="mt-3 text-[--color-muted]">
          A selection of things I&apos;ve build recently. Click through for code or a live demo.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
