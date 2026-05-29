"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/lib/data";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "2250574746714";

interface WhatsAppContactFormProps {
  tone?: "light" | "dark";
  className?: string;
}

export function WhatsAppContactForm({ tone = "dark", className }: WhatsAppContactFormProps) {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (message.trim().length < 3) {
      setError("Écrivez un court message avant d'envoyer.");
      return;
    }
    const intro = name.trim() ? `Bonjour, je suis ${name.trim()}.` : "Bonjour,";
    const text = `${intro}\n${message.trim()}\n\n— via le site ${EVENT.shortName}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const isDark = tone === "dark";
  const darkField =
    "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:border-white";

  return (
    <form onSubmit={onSubmit} className={cn("flex flex-col gap-2.5", className)} noValidate>
      <label htmlFor="wa-name" className="sr-only">
        Votre nom
      </label>
      <Input
        id="wa-name"
        type="text"
        placeholder="Votre nom (optionnel)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
        className={cn(isDark && darkField)}
      />

      <label htmlFor="wa-message" className="sr-only">
        Votre message
      </label>
      <Textarea
        id="wa-message"
        placeholder="Votre message…"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          if (error) setError("");
        }}
        aria-invalid={!!error}
        className={cn("min-h-24", isDark && darkField)}
        required
      />

      {error && (
        <p className={cn("text-xs", isDark ? "text-orange" : "text-red-600")} role="alert">
          {error}
        </p>
      )}

      <Button type="submit" variant="green" className="shrink-0 self-start">
        <Send className="size-4" />
        Envoyer sur WhatsApp
      </Button>
    </form>
  );
}
