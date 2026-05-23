"use client";

import * as React from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  tone?: "light" | "dark";
  className?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ tone = "dark", className }: NewsletterFormProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Adresse e-mail invalide.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMessage("Merci ! Vous êtes bien inscrit·e.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Une erreur est survenue. Réessayez.");
    }
  }

  const isDark = tone === "dark";

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-2.5 rounded-lg px-4 py-3.5 text-sm font-medium",
          isDark ? "bg-white/10 text-white" : "bg-green-50 text-green",
          className
        )}
        role="status"
      >
        <CheckCircle2 className="size-5 shrink-0 text-green-light" />
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex flex-col gap-2", className)} noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Adresse e-mail
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          className={cn(
            isDark && "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:border-white"
          )}
          required
        />
        <Button type="submit" variant="primary" disabled={status === "loading"} className="shrink-0">
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
          S'abonner
        </Button>
      </div>
      {status === "error" && (
        <p className={cn("text-xs", isDark ? "text-orange" : "text-red-600")} role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
