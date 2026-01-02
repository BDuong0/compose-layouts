import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

type ThreeSectionLayoutProps = {
  maxWidth?: string;
  children: ReactNode;
};

interface ColumnProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  children: ReactNode;
}

export function ThreeSectionLayout({
  maxWidth = "1600px",
  children,
}: ThreeSectionLayoutProps) {
  return (
    <div style={{ maxWidth: `${maxWidth}` }} className="mx-auto flex flex-col">
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
