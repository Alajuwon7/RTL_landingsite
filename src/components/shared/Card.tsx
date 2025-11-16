import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const cardStyles = cva("relative rounded-[var(--radius-card)] p-8 transition-all duration-300", {
  variants: {
    variant: {
      base: "glass-card",
      elevated:
        "glass-card before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(166,20,112,0.5),transparent)] before:content-[''] shadow-[0_10px_15px_rgba(0,0,0,0.4)]",
    },
    padding: {
      none: "p-0",
      sm: "p-6",
      md: "p-8",
      lg: "p-12",
    },
  },
  defaultVariants: {
    variant: "base",
    padding: "md",
  },
});

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardStyles>;

export const Card = ({ className, variant, padding, ...props }: CardProps) => (
  <div className={cn(cardStyles({ variant, padding }), className)} {...props} />
);
