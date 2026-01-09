import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";
import { twMerge } from "tailwind-merge";

const styles = stylex.create({
  main: {
    display: "grid",
    minHeight: "100dvh",
    backgroundColor: {
      default: "red",
      "@media (min-width: 768px)": "blue",
    },
    // Set custom "Left" and "Right" Column size for what looks best for your website
    gridTemplateColumns: {
      default: "1fr",
      "@media (min-width: 768px)": "200px 1fr 200px",
    },
    gridTemplateRows: {
      default: "auto minmax(75px, auto) 1fr minmax(75px, auto) auto",
      "@media (min-width: 768px)": "auto 1fr auto",
    },
    // I can add more than 2 gridTempalteAreas if looks best for your website
    gridTemplateAreas: {
      default: `
        "header"
        "left"
        "content"
        "right"
        "footer"
        `,
      "@media (min-width: 768px)": `
        "header header header"
        "left content right"
        "footer footer footer";
        `,
    },
  },
});

interface HolyGrailLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  maxWidth?: string;
  children: ReactNode;
};

interface HolyGrailSectionProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  children: ReactNode;
}

export function HolyGrailLayout({ children, ...props }: HolyGrailLayoutProps) {
  return <div {...stylex.props(styles.main)} {...props}>{children}</div>;
}

const Header = ({ children, className="", ...props }: HolyGrailSectionProps) => {
  return (
    <div className={twMerge("row-[header/header] col-[header/header]", className)} {...props}>
      {children}
    </div>
  );
};

const Left = ({ children, className="", ...props }: HolyGrailSectionProps) => {
  return (
    <div className={twMerge("row-[left/left] col-[left/left]", className)} {...props}>
      {children}
    </div>
  ); 
};

const Content = ({ children, className="", ...props }: HolyGrailSectionProps) => {
  return (
    <div className={twMerge("row-[content/content] col-[content/content]", className)} {...props}>
      {children}
    </div> 
  );
};

const Right = ({ children, className="", ...props }: HolyGrailSectionProps) => {
  return (
    <div className={twMerge("row-[right/right] col-[right/right]", className)} {...props}>
      {children}
    </div>
  );
};

const Footer = ({ children, className="", ...props }: HolyGrailSectionProps) => {
  return (
    <div className={twMerge("row-[footer/footer] col-[footer/footer]", className)} {...props}>
      {children}
    </div>
  );
};

HolyGrailLayout.Header = Header;
HolyGrailLayout.Left = Left;
HolyGrailLayout.Content = Content;
HolyGrailLayout.Right = Right;
HolyGrailLayout.Footer = Footer;
