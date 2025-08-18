"use client";

import Link from "next/link";
import {
  Github, Linkedin, Twitter, LineChart, Globe, ExternalLink
} from "lucide-react";

export type IconKey =
  | "github" | "linkedin" | "twitter" | "kaggle" | "globe";

const ICONS: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  kaggle: LineChart,
  globe: Globe,
};

export default function SocialCard({
  name, href, tag, icon = "globe",
}: { name: string; href: string; tag?: string; icon?: IconKey }) {
  const Icon = ICONS[icon];

  // Normalize display host without protocol for subtitle
  const subtitle = href.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name}`}
      className="group relative block rounded-2xl border border-[--color-border]
                 bg-[--color-surface] p-5 backdrop-blur-sm
                 shadow-[0_12px_40px_-16px_rgba(0,0,0,.7)]
                 transition hover:-translate-y-1 hover:bg-[--color-surface-2] hover:border-white/20"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="grid size-10 place-items-center rounded-xl bg-[--color-brand]/12 text-[--color-brand]">
          <Icon className="size-5" />
        </span>
        {tag ? (
          <span className="rounded-full border border-white/12 bg-white/10 px-2 py-1 text-[11px] text-neutral-200">
            {tag}
          </span>
        ) : null}
      </div>

      <h2 className="flex items-center gap-2 text-lg font-semibold">
        {name}
        <ExternalLink className="size-4 opacity-60" aria-hidden />
      </h2>
      <p className="mt-1 text-sm text-[--color-muted] line-clamp-1">{subtitle}</p>

      {/* subtle brand glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 20% 0%, color-mix(in oklch, var(--color-brand) 10%, transparent), transparent 40%)",
        }}
      />
    </Link>
  );
}
