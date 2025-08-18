import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Twitter,
  LineChart,
  Globe,
  Mail,
  ExternalLink,
} from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const rawSocials = [
  { name: "GitHub",   href: site.social.github,   Icon: Github },
  { name: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  { name: "X / Twitter", href: site.social.x,     Icon: Twitter },
  { name: "Kaggle",   href: site.social.kaggle,   Icon: LineChart },
  { name: "Website",  href: site.social.website,  Icon: Globe },
] as const satisfies ReadonlyArray<{ name: string; href?: string; Icon: LucideIcon }>;

// Narrow ONLY href to string; keep Icon as LucideIcon
const socials = rawSocials.filter(
  (s): s is (typeof rawSocials)[number] & { href: string } =>
    typeof s.href === "string" && s.href.length > 0
);
  // If your sections live on the homepage, keep these as hash links.
  // If you create dedicated pages later, switch them to "/projects", "/skills", etc.
  const nav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
    { label: "Socials", href: "/social" },
  ];

  return (
    <footer
      className="mt-16 border-t border-[--color-border] bg-[--color-background]/80 backdrop-blur"
      aria-labelledby="site-footer-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand / Summary */}
          <section aria-label="Brand">
            <h2 id="site-footer-heading" className="text-lg font-semibold tracking-tight">
              {site.name}
            </h2>
            <p className="mt-2 max-w-prose text-sm text-[--color-muted]">
              {site.description}
            </p>

            {/* Email */}
            <div className="mt-4">
              <a
                href={`mailto:${site.social.email || "you@yourdomain.com"}`}
                className="inline-flex items-center gap-2 rounded-lg border border-[--color-border] bg-[--color-surface] px-3 py-2 text-sm hover:bg-[--color-surface-2]"
                aria-label="Email me"
              >
                <Mail className="size-4" />
                <span className="font-medium">
                  {site.social.email || "you@yourdomain.com"}
                </span>
              </a>
            </div>
          </section>

          {/* Site navigation */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-[--color-muted]">Navigate</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm md:block">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-1 text-[--color-muted] hover:bg-[--color-surface] hover:text-[--color-foreground]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <section aria-label="Social links">
            <h3 className="text-sm font-semibold text-[--color-muted]">Socials</h3>
            {socials.length ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {socials.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${name}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-[--color-border]
                                 bg-[--color-surface] px-3 py-2 text-sm hover:bg-[--color-surface-2]"
                    >
                      <Icon className="size-4" />
                      <span>{name}</span>
                      <ExternalLink className="size-3 opacity-60" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-[--color-muted]">
                Add your profiles in <code>src/lib/site.ts</code> to show social links here.
              </p>
            )}
          </section>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-[--color-border]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[--color-muted] md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[--color-border] bg-[--color-surface] px-2 py-1 hover:bg-[--color-surface-2]"
              aria-label="Next.js website"
            >
              Built with Next.js
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[--color-border] bg-[--color-surface] px-2 py-1 hover:bg-[--color-surface-2]"
              aria-label="Tailwind CSS website"
            >
              Styled with Tailwind v4
            </a>
            <a
              href="#main"
              className="rounded-md border border-[--color-border] bg-[--color-surface] px-2 py-1 hover:bg-[--color-surface-2]"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
