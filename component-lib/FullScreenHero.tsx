import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

type FullScreenHeroLayoutProps = {
  maxWidth?: string;
  rowGap: string;
  children: ReactNode;
};

interface FullSectionProps extends ComponentPropsWithoutRef<"section">, AriaAttributes {
  children: ReactNode;
}

export default function FullScreenHero({
  maxWidth = "1920px",
  rowGap,
  children,
}: FullScreenHeroLayoutProps) {
  return (
    <div
      style={{ maxWidth: `${maxWidth}`, rowGap: `${rowGap}` }}
      className="mx-auto flex flex-col"
    >
      {children}
    </div>
  );
}

const FullSection = ({ children, ...props }: FullSectionProps) => {
  return (
    <section style={{ minHeight: "100vh" }} {...props}>
      {children}
    </section>
  );
};

FullScreenHero.FullSection = FullSection;
