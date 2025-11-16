import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type ButtonElement = HTMLButtonElement;

type ButtonProps = React.ButtonHTMLAttributes<ButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

const buttonStyles = cva("inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300", {
  variants: {
    variant: {
      primary:
        "btn-primary",
      secondary:
        "btn-secondary",
      ghost:
        "inline-flex items-center justify-center px-4 py-3 rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-[rgba(166,20,112,0.1)] hover:border-[rgba(166,20,112,1)]",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const Button = forwardRef<ButtonElement, ButtonProps>(
  ({ className, variant, size, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonStyles({ variant, size }), className)} {...props}>
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
