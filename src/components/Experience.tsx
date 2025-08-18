"use client";

type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  tech?: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Pisces Nexus",
    role: "Founder, CEO",
    start: "Jun 2025",
    end: "Present",
    bullets: [
      "Founded Pisces Nexus and built Alpherg Viator, an AI-powered travel assistant with unified single payment window.",
      "Designed and implemented system architecture integrating itinerary generation, hotel/cab/guide booking, and payment gateway.",
      "Led product strategy and development, bridging AI workflows with real-world travel solutions.",
    ],
    tech: ["LangGraph", "OpenAI", "Next.js", "FastAPI"],
  },
  {
    company: "Sustainability Economics, Bangalore",
    role: "AI Engineer",
    start: "March 2025",
    end: "May 2025",
    bullets: [
      "Building AI agent for automating ETL pipeline",
      "Performed R&D for Automating Financial Data Extraction and Validation",
    ],
    tech: ["AWS", "Python", "LangGraph", "AutoGen", "Azure Document Intelligence", "Google Document AI"],
  },
  {
    company: "Sarjen Systems (Client of Datalabs), Ahmedabad",
    role: "AI/ML Developer",
    start: "Aug 2024",
    end: "Feb 2025",
    bullets: [
      "Enhanced an internal RAG system for enterprise-wide PDF and flowchart search.",
      "Built custom extractors for structured query over flow-based documents.",
      "Developed a real-time golf-ball tracking POC with YOLO + DeepSORT, achieving ~1 min latency on 120 FPS videos.",
    ],
    tech: ["YOLO", "DeepSort", "Python", "RAG", "NLP", "Computer Vision", "OpenCV"],
  },
  {
    company: "DataLabs AI",
    role: "AI/ML Engineer",
    start: "June 2024",
    end: "Feb 2025",
    bullets: [
      "Designed a web-scraping pipeline (20 GB marketing data) with Scrapy + Selenium.",
      "Automated data normalization and filtering, cutting manual cleaning by 45%.",
      "Prototyped a GPT-powered assistant for structured sales-data queries.",
    ],
    tech: ["Scrapy", "Selenium", "Python", "OpenAI"],
  },
  {
    company: "Response Informatics Ltd., Hyderabad",
    role: "Data Science Intern",
    start: "Oct 2023",
    end: "June 2024",
    bullets: [
      "Co-developed an internal NLP dashboard that automated SQL query generation along with visualization on streamlit.",
      "Conducted EDA and trained models to support stakeholder analytics workflows.",
    ],
    tech: ["Streamlit", "Python", "OpenAI", "NLP", "Scikit-Learn"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto mt-16 max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <p className="mt-3 text-[--color-muted]">Roles, impact, and the tech I used.</p>
      </div>

      <ol className="mx-auto mt-10 grid max-w-5xl gap-8">
        {EXPERIENCE.map((item) => (
          <li
            key={item.company}
            className="group relative rounded-2xl
                       border border-[oklch(0.62_0.12_180)]  /* teal */
                       bg-[--color-surface] p-6 backdrop-blur-sm
                       shadow-[0_12px_40px_-16px_rgba(0,0,0,.7)]
                       transition hover:-translate-y-1 hover:bg-[--color-surface-2]
                       hover:border-[oklch(0.70_0.13_180)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-[--color-foreground]">{item.role}</h3>
                <p className="text-sm text-[--color-muted]">{item.company}</p>
              </div>
              <time className="text-xs text-[--color-muted]">
                {item.start} — {item.end}
              </time>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[--color-muted]">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {item.tech?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10
                               px-2.5 py-1 text-xs text-neutral-200 shadow-sm backdrop-blur"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}

            {/* subtle hover glow (teal-tinted) */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(600px circle at 20% 0%, color-mix(in oklch, oklch(0.70 0.13 180) 12%, transparent), transparent 40%)",
              }}
              aria-hidden
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
