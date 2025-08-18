"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

export default function CopyEmailButton({ email }: { email?: string }) {
  const [copied, setCopied] = useState(false);
  const value = email || "you@yourdomain.com";

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: open mailto if clipboard fails (older browsers)
      window.location.href = `mailto:${value}`;
    }
  }

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-xl border border-[--color-border]
                   bg-[--color-surface] px-4 py-2 text-sm
                   shadow-[0_12px_40px_-16px_rgba(0,0,0,.7)]
                   transition hover:bg-[--color-surface-2] hover:border-white/20"
        aria-label="Copy email address"
      >
        <Mail className="size-4" />
        <span className="font-medium">{value}</span>
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>

      {/* direct mailto as secondary action */}
      <a
        href={`mailto:${value}`}
        className="rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-xs
                   hover:bg-[--color-surface-2]"
        aria-label="Compose email"
      >
        Compose
      </a>
    </div>
  );
}
