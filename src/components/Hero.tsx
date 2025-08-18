import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto px-6 pt-24">
      <div className="mx-auto grid min-h-[70svh] place-items-center">
        <div
          className="relative w-full max-w-5xl rounded-[--radius-card]
                     border border-[--color-border]
                     bg-[--color-surface] p-10 sm:p-16 text-center
                     shadow-[0_10px_40px_-20px_rgb(0_0_0_/_0.5)]"
        >
          {/* soft brand glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-[--radius-card]"
            style={{
              background:
                "radial-gradient(800px circle at 20% 0%, color-mix(in oklch, var(--color-brand) 12%, transparent), transparent 40%)",
            }}
            aria-hidden
          />

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Hi, I’m <span className="text-[--color-brand]">Thrang</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-[--color-muted]">
            AI/ML Engineer specializing in agentic systems, RAG, and real-time
            computer vision. I build production-grade tools with Next.js, FastAPI,
            GPT, and YOLO.
          </p>

          {/* quick skill chips (kept subtle on dark) */}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              "LLMs",
              "Agents",
              "RAG",
              "LangGraph",
              "FastAPI",
              "Next.js",
              "YOLO",
              "Computer Vision",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/12 bg-white/10
                           px-3 py-1 text-xs text-neutral-200"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* CTAs – consistent with other sections */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#projects"
              className="rounded-xl bg-[--color-brand] px-5 py-3 text-sm font-medium
                         text-[--color-brand-foreground] transition hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/social"
              className="rounded-xl border border-[--color-border] bg-[--color-surface]
                         px-5 py-3 text-sm hover:bg-[--color-surface-2]"
            >
              Socials
            </Link>
            <Link
              href="/#contact"
              className="rounded-xl border border-[--color-border] bg-[--color-surface]
                         px-5 py-3 text-sm hover:bg-[--color-surface-2]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
