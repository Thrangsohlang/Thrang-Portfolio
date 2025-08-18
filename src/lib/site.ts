

export type SocialLinks = Partial<{
  email: string;
  github: string;
  linkedin: string;
  x: string;          
  kaggle: string;
  facebook: string;
  instagram: string;
  threads: string;
  website: string;
}>;

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  creator?: string;
  keywords: string[];
  social: SocialLinks;
};

const isProd = process.env.NODE_ENV === "production";

/** Best-effort base URL detection with env fallbacks. */
function detectBaseUrl(): string {
  // Prefer explicit public URL
  const explicit = process.env.NEXT_PUBLIC_SITE_URL; 
  if (explicit) return normalizeUrl(explicit);

  // Vercel preview/production: provides host without protocol.
  const vercelHost = process.env.VERCEL_URL; //
  if (vercelHost) return `https://${vercelHost.replace(/\/+$/, "")}`;

  // Local dev default
  return "http://localhost:3000";
}

/** Normalize to https?://host[:port][/path] (no trailing slash for hosts) */
function normalizeUrl(input: string): string {
  let url = input.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    const u = new URL(url);
    // remove trailing slash on origin-level only
    if (u.pathname === "/") return `${u.origin}`;
    return `${u.origin}${u.pathname.replace(/\/+$/, "")}${u.search}${u.hash}`;
  } catch {
    // last resort: treat as host
    return `https://${url.replace(/\/+$/, "")}`;
  }
}

/** Coerce any value to a normalized https URL (or undefined). */
function coerceUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    return normalizeUrl(value);
  } catch {
    return undefined;
  }
}

/** Join with base URL. If input is already absolute, return as-is. */
export function absoluteUrl(pathOrUrl: string, base = BASE_URL): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

/** Canonical URL builder for metadata. */
export const canonical = (path = "") => absoluteUrl(path);

/** Default OG & Twitter image endpoints (handled by app/opengraph-image.tsx etc.). */
export const ogImageUrl = (path = "/opengraph-image") => absoluteUrl(path);
export const twitterImageUrl = (path = "/twitter-image") => absoluteUrl(path);

/** Flatten social links to array for JSON-LD Person.sameAs */
export function sameAs(social: SocialLinks): string[] {
  return Object.values(social)
    .filter(Boolean)
    .map((v) => v!) // v is string
    .map((v) => (v.includes("@") && !v.startsWith("mailto:") && !v.startsWith("https") ? `mailto:${v}` : v))
    .map((v) => (v.startsWith("mailto:") ? v : coerceUrl(v) ?? v))
    .filter((v, i, arr) => arr.indexOf(v) === i); // dedupe
}

/** Build JSON-LD for your Person profile. Use with <Script type="application/ld+json" /> */
export function jsonLdPerson(cfg: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: cfg.name,
    url: cfg.url,
    jobTitle: "AI/ML Engineer",
    description: cfg.description,
    sameAs: sameAs(cfg.social),
  };
}

/** Keywords helper (kept typed & deduped) */
const KEYWORDS = [
  "AI Engineer",
  "ML Engineer",
  "Generative AI",
  "Agents",
  "RAG",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "OpenAI",
  "VLLM",
  "Ollama",
  "FastAPI",
  "Next.js",
  "Tailwind CSS",
  "Computer Vision",
  "YOLO",
  "DeepSORT",
  "ONNX",
  "TensorRT",
  "OpenVINO",
  "ChromaDB",
  "Pinecone",
  "PostgreSQL",
  "SQL",
  "Docker",
] as const;

const BASE_URL = detectBaseUrl();


const RAW_SITE: SiteConfig = {
  name: "Thrang Sohlang",
  title: "AI/ML Engineer — Portfolio",
  description:
    "AI/ML Engineer focused on agentic systems, RAG pipelines, and real-time computer vision. Open to roles and collaborations. Looking for Investors.",
  url: normalizeUrl(BASE_URL),
  locale: "en-IN",
  creator: "@thrang_sohlang", 
  keywords: Array.from(new Set(KEYWORDS as unknown as string[])),
  social: {
    email: "thrangsohlang@gmail.com",
    github: coerceUrl("https://github.com/Thrangsohlang"),
    linkedin: coerceUrl("https://www.linkedin.com/in/thrangsohlang/"),
    x: coerceUrl("https://x.com/thrang_sohlang"),
    kaggle: coerceUrl("https://www.kaggle.com/thrangsohlang21"),
    website: coerceUrl("https://thrangsohlang.com"),
  },
};

/** Freeze to avoid accidental mutation at runtime. */
export const site: SiteConfig = deepFreeze(RAW_SITE);

/** Tiny deepFreeze util so config stays immutable. */
function deepFreeze<T>(obj: T): T {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    // @ts-expect-error: This is the description of why I put this error here. I just know that there will be error.
    const value = obj[prop];
    if (
      value !== null &&
      (typeof value === "object" || typeof value === "function") &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  });
  return obj;
}

/** Optional: small runtime sanity checks in dev. */
if (!isProd) {
  try {
    // Must be absolute
    new URL(site.url);
  } catch {
    
    console.warn(
      `[site] Invalid site.url: "${site.url}". Set NEXT_PUBLIC_SITE_URL or VERCEL_URL.`
    );
  }
  if (site.creator && !site.creator.startsWith("@")) {
    
    console.warn(
      `[site] Expected creator handle with @, got "${site.creator}". Example: "@yourhandle".`
    );
  }
}

/** Convenience exports often used in metadata/layouts */
export const SITE_NAME = site.name;
export const SITE_TITLE = site.title;
export const SITE_DESCRIPTION = site.description;
export const SITE_URL = site.url;
export const SITE_LOCALE = site.locale;
export const SITE_CREATOR = site.creator;
export const SITE_KEYWORDS = site.keywords;
export const SITE_SOCIAL = site.social;
