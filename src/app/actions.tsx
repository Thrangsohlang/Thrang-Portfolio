"use server";

export type ActionState = { ok?: boolean; message?: string };

export async function sendMessage(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const botField = String(formData.get("company") || ""); // honeypot

  if (botField) return { ok: false, message: "Spam detected." };
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return { ok: false, message: "Please complete all fields correctly." };
  }

  // TODO: persist/notify (DB, email, webhook)
  await new Promise((r) => setTimeout(r, 400));

  return { ok: true, message: "Thanks! I’ll get back to you soon." };
}

/** If you also used useActionState for this one, update it too */
export async function subscribe(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = String(formData.get("email") || "");
  if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, message: "Enter a valid email." };

  await new Promise((r) => setTimeout(r, 400));
  return { ok: true, message: "You're on the list. 🎉" };
}
