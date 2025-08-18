import SocialCard from "@/components/social/SocialCard";
import { site } from "@/lib/site";

export default function HomeSocialStrip() {
  const picks = [
    site.social.github && { name: "GitHub", href: site.social.github, tag: "Open Source", icon: "github" as const },
    site.social.linkedin && { name: "LinkedIn", href: site.social.linkedin, tag: "Professional", icon: "linkedin" as const },
    site.social.x && { name: "X / Twitter", href: site.social.x, tag: "Updates", icon: "twitter" as const },
  ].filter(Boolean) as { name: string; href: string; tag?: string; icon?: "github" | "linkedin" | "twitter" }[];

  if (!picks.length) return null;

  return (
    <section className="mx-auto mt-12 max-w-6xl px-6">
      <header className="mb-4">
        <h2 className="text-xl font-semibold tracking-tight">Find me online</h2>
        <p className="mt-1 text-[--color-muted] text-sm">Open source, updates, and professional profile.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((p) => (
          <SocialCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
