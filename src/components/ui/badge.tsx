import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        green: "bg-green-50 text-green",
        orange: "bg-orange/10 text-orange-hover",
        gold: "bg-gold/15 text-[#8a6d12]",
        outline: "border border-line text-muted",
        solid: "bg-green text-white",
        glass: "border border-white/30 bg-white/10 text-white backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "green",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
