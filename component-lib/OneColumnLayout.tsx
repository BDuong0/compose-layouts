import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface OneColumnLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  maxWidth?: string;
  children: ReactNode;
}

export function OneColumnLayout({
  maxWidth = "80ch",
  className="",
  children,
  ...props
}: OneColumnLayoutProps) {
  return (
    <div style={{ maxWidth: `${maxWidth}`}} className={twMerge("mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
