import { cn } from "@/lib/utils";

type GradientTextProps = React.HTMLAttributes<HTMLSpanElement>;

export const GradientText = ({ className, children, ...props }: GradientTextProps) => (
  <span className={cn("gradient-text", className)} {...props}>
    {children}
  </span>
);
