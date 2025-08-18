import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Indexing policy:
 * - Production: allow all, expose sitemap + host
 * - Non-production (preview/dev) or NO_INDEX=1: disallow all
 *
 * Set NEXT_PUBLIC_SITE_URL to canonical domain in production.
 * To force no-index anywhere, set NEXT_PUBLIC_NO_INDEX=1 (or NO_INDEX=1).
 */
function isProduction() {
  // Prefer Vercel's env if available; fallback to NODE_ENV
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === "production";
  return process.env.NODE_ENV === "production";
}

function isNoIndex() {
  const flags = new Set([
    String(process.env.NEXT_PUBLIC_NO_INDEX || "").trim(),
    String(process.env.NO_INDEX || "").trim(),
  ]);
  return flags.has("1") || flags.has("true");
}

export default function robots(): MetadataRoute.Robots {
  const disallowAll = !isProduction() || isNoIndex();

  if (disallowAll) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      sitemap: `${site.url}/sitemap.xml`,
      host: site.url,
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
