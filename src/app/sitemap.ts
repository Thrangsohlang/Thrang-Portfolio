import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Keep this list in sync with your top-level routes.
 * Add/remove paths as you create pages.
 */
const ROUTES = ["", "/social", "/projects", "/skills", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === "" ? 1 :
      path === "/projects" ? 0.8 :
      0.7,
  }));
}
