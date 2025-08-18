"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
// If you created a ThemeToggle, you can import it; otherwise remove the usage below.
// import ThemeToggle from "@/components/theme-toggle";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "About",    href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume",   href: "/#resume" },
  { label: "Contact",  href: "/#contact" },
  { label: "Socials",  href: "/social" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState<string>("");

  // Track hash for anchor-based active states on the homepage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const set = () => setHash(window.location.hash || "");
    set(); // initial
    window.addEventListener("hashchange", set);
    return () => window.removeEventListener("hashchange", set);
  }, []);

  // Subtle condensed style on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(item: NavItem) {
    // Anchor links highlight only on homepage when the hash matches
    if (item.href.startsWith("/#")) {
      const anchor = item.href.replace("/",""); // -> "#about"
      return pathname === "/" && hash === anchor;
    }
    // Normal route match
    return pathname === item.href;
  }

  function linkClass(item: NavItem) {
    const active = isActive(item);
    return [
      "rounded-lg px-3 py-2 text-sm transition",
      active
        ? "bg-[--color-surface-2] text-[--color-foreground]"
        : "text-[--color-muted] hover:bg-[--color-surface] hover:text-[--color-foreground]"
    ].join(" ");
  }

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "border-b border-[--color-border]",
        "bg-[--color-background]/80 backdrop-blur",
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(0,0,0,.45)]" : "",
      ].join(" ")}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* Put your image in /public/images/Thrang_Passport.jpeg */}
          <span className="relative block size-9 overflow-hidden rounded-full border border-[--color-border]">
            <Image
              src="/images/Thrang_Passport.jpeg"
              alt="Thrang Sohlang"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-tight">Thrang Sohlang</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item)} aria-current={isActive(item) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}

          {/* Optional theme toggle — remove if you don’t have it */}
          {/* <div className="ml-2"><ThemeToggle /></div> */}
        </nav>

        {/* Mobile menu button */}
        <button
          className="grid size-10 place-items-center rounded-lg border border-[--color-border] bg-[--color-surface] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[--color-border] bg-[--color-background] md:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-3 grid gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item)}
                onClick={() => setOpen(false)}
                aria-current={isActive(item) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            {/* Optional theme toggle on mobile */}
            {/* <div className="mt-2"><ThemeToggle /></div> */}
          </nav>
        </div>
      )}
    </header>
  );
}
