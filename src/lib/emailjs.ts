/**
 * EmailJS browser-side identifiers. These are public by design (EmailJS never
 * uses a private key in the browser) and are read from env vars so they are
 * not hardcoded in components. Each `process.env.NEXT_PUBLIC_*` must be
 * referenced literally so Next.js can inline it at build time.
 */
export type EmailJSConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

export function getEmailJSConfig(): EmailJSConfig | null {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) return null;
  return { serviceId, templateId, publicKey };
}
