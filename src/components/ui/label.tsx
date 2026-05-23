import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "mb-1.5 block text-sm font-semibold text-ink peer-disabled:opacity-60",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="ml-0.5 text-orange">*</span>}
    </label>
  )
);
Label.displayName = "Label";

export { Label };
