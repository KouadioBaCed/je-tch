"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  /** ISO target date. */
  target: string;
  tone?: "light" | "dark";
  className?: string;
}

interface TimeLeft {
  jours: number;
  heures: number;
  min: number;
  sec: number;
}

function diff(target: number): TimeLeft {
  const total = Math.max(0, target - Date.now());
  const sec = Math.floor(total / 1000);
  return {
    jours: Math.floor(sec / 86400),
    heures: Math.floor((sec % 86400) / 3600),
    min: Math.floor((sec % 3600) / 60),
    sec: sec % 60,
  };
}

export function Countdown({ target, tone = "dark", className }: CountdownProps) {
  const targetMs = React.useMemo(() => new Date(target).getTime(), [target]);
  const [time, setTime] = React.useState<TimeLeft | null>(null);

  React.useEffect(() => {
    setTime(diff(targetMs));
    const id = setInterval(() => setTime(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const isDark = tone === "dark";
  const units: { key: keyof TimeLeft; label: string }[] = [
    { key: "jours", label: "Jours" },
    { key: "heures", label: "Heures" },
    { key: "min", label: "Min" },
    { key: "sec", label: "Sec" },
  ];

  return (
    <div className={cn("flex items-stretch gap-2 sm:gap-3", className)} role="timer" aria-live="off">
      {units.map((u, i) => (
        <React.Fragment key={u.key}>
          <div
            className={cn(
              "flex min-w-[3.75rem] flex-col items-center rounded-lg px-2.5 py-2.5 sm:min-w-[4.5rem] sm:px-4",
              isDark
                ? "border border-white/15 bg-white/10 backdrop-blur-sm"
                : "border border-line bg-white shadow-soft"
            )}
          >
            <span
              className={cn(
                "font-heading text-2xl font-extrabold tabular-nums sm:text-3xl",
                isDark ? "text-white" : "text-green"
              )}
            >
              {time ? String(time[u.key]).padStart(2, "0") : "--"}
            </span>
            <span
              className={cn(
                "mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] sm:text-xs",
                isDark ? "text-white/60" : "text-muted"
              )}
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className={cn("self-center text-2xl font-bold", isDark ? "text-white/30" : "text-line")}>
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
