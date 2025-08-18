"use client";

import { useActionState } from "react";
import { sendMessage } from "@/app/actions";

type State = { ok?: boolean; message?: string };
const initialState: State = {};

export default function Contact() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  return (
    <section id="contact" className="mx-auto mt-16 max-w-3xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Let’s work together</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Tell me about your project or role. I usually reply within 24–48 hours.
        </p>
      </div>

      <form action={formAction} className="mt-8 space-y-4 rounded-2xl border border-neutral-200/70 bg-white/70 p-6 backdrop-blur shadow-[0_6px_24px_-12px_rgba(0,0,0,0.25)] dark:border-neutral-800/70 dark:bg-neutral-950/60">
        {/* Honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="text-neutral-700 dark:text-neutral-300">Name</span>
            <input name="name" required className="rounded-xl border border-neutral-200/60 bg-white/60 px-3 py-2 dark:border-neutral-800/60 dark:bg-neutral-900/60" />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-neutral-700 dark:text-neutral-300">Email</span>
            <input type="email" name="email" required className="rounded-xl border border-neutral-200/60 bg-white/60 px-3 py-2 dark:border-neutral-800/60 dark:bg-neutral-900/60" />
          </label>
        </div>

        <label className="grid gap-1 text-sm">
          <span className="text-neutral-700 dark:text-neutral-300">Message</span>
          <textarea name="message" rows={5} required className="rounded-xl border border-neutral-200/60 bg-white/60 px-3 py-2 dark:border-neutral-800/60 dark:bg-neutral-900/60" />
        </label>

        <div className="flex items-center justify-between gap-4">
          <button
            disabled={pending}
            className="rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-neutral-900"
          >
            {pending ? "Sending…" : "Send message"}
          </button>
          
          <span id="resume">
            <a href="/resume/Thrang_CV.pdf" className="text-sm underline underline-offset-4">
                Download résumé
            </a>
          </span>
          
        </div>

        {state.message && (
          <p className={`text-sm ${state.ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
            {state.message}
          </p>
        )}
      </form>
    </section>
  );
}
