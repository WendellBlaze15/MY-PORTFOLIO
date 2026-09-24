"use client";

import { send } from "@emailjs/browser";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { getEmailJSConfig } from "@/lib/emailjs";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "success" | "error";

const EMPTY: Values = { name: "", email: "", subject: "", message: "" };
const FIELDS: Field[] = ["name", "email", "subject", "message"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COOLDOWN_MS = 30_000;

function validate(values: Values): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 100) errors.name = "Name must be 100 characters or fewer.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > 150) errors.subject = "Subject must be 150 characters or fewer.";

  if (!message) errors.message = "Please enter a message.";
  else if (message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (message.length > 5000) errors.message = "Message must be 5000 characters or fewer.";

  return errors;
}

const inputClass =
  "w-full rounded-xl border border-border bg-foreground/[0.03] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors outline-none hover:border-primary/30 focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30 aria-[invalid=true]:border-rose-500/60 aria-[invalid=true]:focus-visible:ring-rose-500/25 disabled:opacity-60";

function FieldError({ field, error }: { field: Field; error?: string }) {
  if (!error) return null;
  return (
    <p id={`contact-${field}-error`} className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
      {error}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const submittingRef = useRef(false);
  const lastSentRef = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);

  const sending = status === "sending";

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = event.target.name as Field;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    // Clear a field's error as soon as the user edits it
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "success" || status === "error") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    // Honeypot: real users never fill this hidden field
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    if (Date.now() - lastSentRef.current < COOLDOWN_MS) {
      setStatus("error");
      setFeedback("Your message was just sent. Please wait a moment before sending another.");
      return;
    }

    const config = getEmailJSConfig();
    if (!config) {
      setStatus("error");
      setFeedback(
        `The contact form isn't configured yet. Please email me directly at ${siteConfig.email}.`
      );
      return;
    }

    submittingRef.current = true;
    setStatus("sending");
    setFeedback("");

    const name = values.name.trim();
    const email = values.email.trim();

    try {
      // `reply_to` only takes effect when the EmailJS template's "Reply To"
      // field is set to {{reply_to}} — see docs/emailjs/README.md
      await send(
        config.serviceId,
        config.templateId,
        {
          from_name: name,
          from_email: email,
          name,
          email,
          subject: values.subject.trim(),
          message: values.message.trim(),
          to_email: siteConfig.email,
          reply_to: email,
          sent_at: new Date().toLocaleString("en-PH", { dateStyle: "medium", timeStyle: "short" }),
          site_url: siteConfig.url,
        },
        { publicKey: config.publicKey }
      );
      lastSentRef.current = Date.now();
      setStatus("success");
      setFeedback("Thanks for reaching out! Your message was sent — I'll get back to you soon.");
      setValues(EMPTY);
      setErrors({});
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setFeedback(
        `Sorry, your message couldn't be sent. Please try again or email me directly at ${siteConfig.email}.`
      );
    } finally {
      submittingRef.current = false;
    }
  }

  function fieldProps(field: Field) {
    const error = errors[field];
    return {
      id: `contact-${field}`,
      name: field,
      value: values[field],
      onChange: handleChange,
      disabled: sending,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `contact-${field}-error` : undefined,
      className: inputClass,
    };
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="glass-card relative space-y-4 p-5 sm:p-6"
      aria-label="Contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input type="text" autoComplete="name" placeholder="Your name" maxLength={100} {...fieldProps("name")} />
          <FieldError field="name" error={errors.name} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            maxLength={254}
            {...fieldProps("email")}
          />
          <FieldError field="email" error={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input type="text" placeholder="What's this about?" maxLength={150} {...fieldProps("subject")} />
        <FieldError field="subject" error={errors.subject} />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Tell me about your project, opportunity, or idea…"
          maxLength={5000}
          {...fieldProps("message")}
          className={cn(inputClass, "min-h-32 resize-y")}
        />
        <FieldError field="message" error={errors.message} />
      </div>

      {/* Honeypot — hidden from people and assistive tech */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite" role="status">
        {status === "success" && feedback ? (
          <p className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-3 text-sm text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
            {feedback}
          </p>
        ) : null}
        {status === "error" && feedback ? (
          <p className="flex items-start gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3.5 py-3 text-sm text-rose-700 dark:text-rose-300">
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            {feedback}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={sending}
        aria-busy={sending}
        className="h-11 w-full rounded-xl px-5 shadow-[0_10px_30px_-10px_var(--primary)] sm:w-auto"
      >
        {sending ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send /> Send Message
          </>
        )}
      </Button>
    </form>
  );
}
