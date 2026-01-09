import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ThreeSectionLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  maxWidth?: string;
  children: ReactNode;
};

interface ColumnProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  children: ReactNode;
}

export function ThreeSectionLayout({
  maxWidth = "1600px",
  className = "",
  children,
}: ThreeSectionLayoutProps) {
  return (
    <div style={{ maxWidth: `${maxWidth}` }} className={twMerge("mx-auto flex flex-col", className)}>
      {children}
    </div>
  );
}

const Header = ({ children, ...props }: ColumnProps) => {
  return <div {...props}>{children}</div>;
};

const Content = ({ children, ...props }: ColumnProps) => {
  return <div {...props}>{children}</div>;
};

const Footer = ({ children, ...props }: ColumnProps) => {
  return <div {...props}>{children}</div>;
};

ThreeSectionLayout.Header = Header;
ThreeSectionLayout.Content = Content;
ThreeSectionLayout.Footer = Footer;
