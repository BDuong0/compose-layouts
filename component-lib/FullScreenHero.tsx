import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface FullScreenHeroLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  maxWidth?: string;
  rowGap: string;
  children: ReactNode;
};

interface FullSectionProps extends ComponentPropsWithoutRef<"section">, AriaAttributes {
  children: ReactNode;
}

export function FullScreenHero({
  maxWidth = "1920px",
  rowGap,
  children,
  className = "",
  ...props
}: FullScreenHeroLayoutProps) {
  return (
    <div
      style={{ maxWidth: `${maxWidth}`, rowGap: `${rowGap}` }}
      className={twMerge(`mx-auto flex flex-col`, className)}
      {...props}
    >
      {children}
    </div>
  );
}

const FullSection = ({ children, className = "", ...props}: FullSectionProps) => {
  return (
    <section className={twMerge("min-h-screen", className)} {...props}>
      {children}
    </section>
  );
};

FullScreenHero.FullSection = FullSection;
