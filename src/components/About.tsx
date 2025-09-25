import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-6 py-16">
      <div
        className="relative overflow-hidden rounded-[--radius-card] border border-[--color-border]
                   bg-[--color-surface] p-8 sm:p-12 shadow-[0_10px_40px_-20px_rgb(0_0_0_/_0.5)]"
      >
        {/* soft brand glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-[--radius-card]"
          style={{
            background:
              "radial-gradient(700px circle at 15% 0%, color-mix(in oklch, var(--color-brand) 10%, transparent), transparent 45%)",
          }}
          aria-hidden
        />

        <div className="grid gap-10 md:grid-cols-3">
          {/* Text block */}
          <div className="md:col-span-2">
            <h2 id="about-heading" className="text-3xl font-bold tracking-tight">
              About me
            </h2>

            <p className="mt-4 text-[--color-muted] text-lg leading-relaxed">
              I’m an AI/ML Engineer focused on{" "}
              <span className="text-[--color-foreground] font-medium">agentic systems, RAG pipelines</span>, and{" "}
              <span className="text-[--color-foreground] font-medium">real-time computer vision</span>.
              I love shipping production tools with <span className="font-medium">Next.js</span>,{" "}
              <span className="font-medium">FastAPI</span>, <span className="font-medium">GPT</span>, and{" "}
              <span className="font-medium">YOLO</span>—always aiming for practical impact and clean UX.
            </p>
            {/* <p className="mt-2 text-[--color-muted] text-lg leading-relaxed">
              I&apos;m also the founder of{" "}
              <span className="text-[--color-foreground] font-medium">Pisces Nexus</span>, an{" "}
              AI-native platform for tourism. The goal is simple: make{" "}
              <span className="font-medium">LLM agents</span> and{" "}
              <span className="font-medium">retrieval</span> useful—secure, personalized, observable and production-ready.{" "}
              If you&apos;d like to try it early, I&apos;m opening a small private beta.
            </p> */}

            {/* Education callout */}
            <div
              className="mt-6 inline-flex items-center gap-3 rounded-xl border border-[--color-border]
                         bg-[--color-surface] px-4 py-3 text-sm"
            >
              <span className="rounded-md bg-[--color-brand]/12 px-2 py-1 text-[--color-brand] font-semibold">
                Education
              </span>
              <span className="text-[--color-foreground]">
                Postgraduate in <strong>Physics</strong> from <strong>IIT Hyderabad</strong> (2022)
              </span>
            </div>

            {/* Focus tags */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {["LLMs", "Agents", "RAG", "LangGraph", "FastAPI", "Next.js", "YOLO / CV", "MLOps-lite"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs text-neutral-200"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="rounded-xl bg-[--color-brand] px-5 py-3 text-sm font-medium text-[--color-brand-foreground] transition hover:opacity-90"
              >
                View Projects
              </Link>
              <Link
                id="resume"
                href="/resume/Thrang_CV.pdf"
                className="rounded-xl border border-[--color-border] bg-[--color-surface] px-5 py-3 text-sm hover:bg-[--color-surface-2]"
              >
                Download résumé
              </Link>
              <Link
                href="/#contact"
                className="rounded-xl border border-[--color-border] bg-[--color-surface] px-5 py-3 text-sm hover:bg-[--color-surface-2]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Side panel: avatar + quick facts */}
          <aside className="md:col-span-1">
            {/* Avatar */}
            <div className="mx-auto w-36 sm:w-40">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-[--color-border]">
                <Image
                  src="/images/Thrang_Passport.jpeg"
                  alt="Thrang Sohlang"
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Quick facts */}
            <dl className="mt-6 grid gap-3 text-sm">
              <div className="rounded-lg border border-[--color-border] bg-[--color-surface] p-3">
                <dt className="text-[--color-muted]">Role</dt>
                <dd className="font-medium">AI/ML Engineer</dd>
              </div>
              <div className="rounded-lg border border-[--color-border] bg-[--color-surface] p-3">
                <dt className="text-[--color-muted]">Specialty</dt>
                <dd className="font-medium">Agents · RAG · CV</dd>
              </div>
              <div className="rounded-lg border border-[--color-border] bg-[--color-surface] p-3">
                <dt className="text-[--color-muted]">Open to</dt>
                <dd className="font-medium">Roles & collaborations</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
