import * as React from "react";
import { Slot } from "@/components/ui/slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.1em] [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-white shadow-soft hover:bg-orange-hover hover:shadow-soft-lg",
        green:
          "bg-green text-white shadow-soft hover:bg-green-dark hover:shadow-soft-lg",
        outline:
          "border border-line bg-white text-ink hover:border-green hover:text-green",
        "outline-light":
          "border border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/70",
        ghost: "text-ink hover:bg-surface hover:text-green",
        link: "text-green underline-offset-4 hover:underline",
        gold: "bg-gold text-ink shadow-soft hover:brightness-[0.97] hover:shadow-soft-lg",
      },
      size: {
        sm: "h-9 px-4 text-[0.8rem]",
        default: "h-11 px-6",
        lg: "h-13 px-8 text-base h-[3.25rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
