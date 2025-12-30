import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

interface OneColumnLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  maxWidth?: string;
  children: ReactNode;
}

export function OneColumnLayout({
  maxWidth = "80ch",
  children,
  ...props
}: OneColumnLayoutProps) {
  return (
    <div style={{ maxWidth: `${maxWidth}`, marginInline: "auto" }} {...props}>
      {children}
    </div>
  );
}
