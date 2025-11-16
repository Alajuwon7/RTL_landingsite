import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  background?: "primary" | "secondary" | "hero" | "subtle";
}

const backgroundMap: Record<NonNullable<SectionProps["background"]>, string> = {
  primary:
    "bg-[linear-gradient(180deg,#1a1b23_0%,rgba(70,29,64,0.55)_50%,#17161d_100%)]",
  secondary:
    "bg-[linear-gradient(180deg,#22232d_0%,rgba(45,16,33,0.55)_58%,#1a1b23_100%)]",
  hero:
    "bg-[linear-gradient(180deg,rgba(40,18,46,0.75)_0%,rgba(27,16,29,0.92)_55%,#191923_100%)]",
  subtle: "bg-[linear-gradient(135deg,rgba(166,20,112,0.08),rgba(226,2,26,0.08))]",
};

export const Section = ({
  className,
  children,
  container = true,
  background,
  ...props
}: SectionProps) => {
  const content = (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-[clamp(1rem,5vw,2rem)]",
        container ? undefined : "max-w-none px-0",
      )}
    >
      {children}
    </div>
  );

  return (
    <section
      className={cn(
        "relative py-[clamp(3rem,8vh,6rem)]",
        background ? backgroundMap[background] : undefined,
        className,
      )}
      {...props}
    >
      {container ? content : children}
    </section>
  );
};
