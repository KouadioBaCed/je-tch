import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, "aria-invalid": invalid, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        aria-invalid={invalid}
        className={cn(
          "flex h-12 w-full rounded-lg border border-line bg-white px-4 py-2 text-sm text-ink shadow-sm transition-colors",
          "placeholder:text-muted/70",
          "focus-visible:outline-none focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/30",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
