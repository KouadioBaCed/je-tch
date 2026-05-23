"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

export interface AccordionItemData {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  /** Allow multiple panels open at once. Defaults to single-open. */
  multiple?: boolean;
  className?: string;
}

export function Accordion({ items, multiple = false, className }: AccordionProps) {
  const [open, setOpen] = React.useState<string[]>([]);

  function toggle(id: string) {
    setOpen((prev) => {
      const isOpen = prev.includes(id);
      if (multiple) {
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  }

  return (
    <div className={cn("divide-y divide-line overflow-hidden rounded-lg border border-line bg-white", className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-surface sm:px-6"
              >
                <span className="font-heading text-base font-bold text-ink sm:text-lg">
                  {item.trigger}
                </span>
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border border-line text-green transition-all duration-300",
                    isOpen && "rotate-45 border-green bg-green text-white"
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 pr-12 text-[0.95rem] leading-relaxed text-muted sm:px-6">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
