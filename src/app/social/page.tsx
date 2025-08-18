import type { Metadata } from "next";
import Link from "next/link";
import { site, SITE_URL } from "@/lib/site";
import SocialCard, { type IconKey } from "@/components/social/SocialCard";
import CopyEmailButton from "@/components/social/CopyEmailButton";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Follow and connect — GitHub, LinkedIn, Kaggle, and more. Reach out for roles and collaborations.",
  alternates: { canonical: `${SITE_URL}/social` },
  openGraph: {
    title: "Connect — Socials",
    description:
      "GitHub, LinkedIn, Kaggle, YouTube, and more. Let’s collaborate.",
    url: `${SITE_URL}/social`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/twitter-image"] },
};

type SocialEntry = { name: string; href?: string; tag?: string; icon?: IconKey };

/** Raw entries (allow undefined href from site.social) */
const RAW_ENTRIES: ReadonlyArray<SocialEntry> = [
  { name: "GitHub",         href: site.social.github,   tag: "Open Source",  icon: "github"   as IconKey },
  { name: "LinkedIn",       href: site.social.linkedin, tag: "Professional", icon: "linkedin" as IconKey },
  { name: "X / Twitter",    href: site.social.x,        tag: "Updates",      icon: "twitter"  as IconKey },
  { name: "Kaggle",         href: site.social.kaggle,   tag: "Datasets",     icon: "kaggle"   as IconKey },
  { name: "Website",        href: site.social.website,  tag: "Site",         icon: "globe"    as IconKey },
];

/** Keep only entries that actually have a link, and narrow the type so href is a string */
const ENTRIES: Array<SocialEntry & { href: string }> = RAW_ENTRIES.filter(
  (s): s is SocialEntry & { href: string } => typeof s.href === "string" && s.href.length > 0
);

export default function SocialPage() {
  const email = site.social.email;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">Connect</h1>
        <p className="mt-3 text-[--color-muted]">
          Follow, collaborate, or just say hi. I’m most active on GitHub and LinkedIn.
        </p>
      </header>

      {/* Email + primary CTA */}
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
        <CopyEmailButton email={email} />
        {site.social.github && (
          <Link
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[--color-brand] px-4 py-2
                       text-sm font-medium text-[--color-brand-foreground] transition hover:opacity-90"
          >
            Verify on GitHub
          </Link>
        )}
      </div>

      {/* Cards */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ENTRIES.map((s) => (
          <SocialCard key={s.name} name={s.name} href={s.href} tag={s.tag} icon={s.icon} />
        ))}
        {!ENTRIES.length && (
          <p className="text-center text-sm text-[--color-muted] sm:col-span-2 lg:col-span-3">
            No social links configured. Add them in <code>src/lib/site.ts</code>.
          </p>
        )}
      </section>
    </main>
  );
}
