import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

/** Lightweight native select, styled to match the design system. */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, "aria-invalid": invalid, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          aria-invalid={invalid}
          className={cn(
            "flex h-12 w-full appearance-none rounded-lg border border-line bg-white px-4 pr-10 text-sm text-ink shadow-sm transition-colors",
            "focus-visible:outline-none focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/30",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
          aria-hidden
        />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
