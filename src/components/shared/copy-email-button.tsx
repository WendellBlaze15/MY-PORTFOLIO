"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CopyEmailButtonProps = {
  email: string;
  className?: string;
  disabled?: boolean;
};

export function CopyEmailButton({
  email,
  className,
  disabled,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const isPlaceholder = disabled || email.includes("[PLACEHOLDER]");

  async function handleCopy() {
    if (isPlaceholder) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={handleCopy}
      disabled={isPlaceholder}
      className={cn("gap-2", className)}
      aria-label={isPlaceholder ? "Email placeholder" : "Copy email address"}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Copied" : isPlaceholder ? "Email [PLACEHOLDER]" : "Copy email"}
    </Button>
  );
}
