import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names with Tailwind conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number with non-breaking French thousands separators. */
export function formatFr(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}
