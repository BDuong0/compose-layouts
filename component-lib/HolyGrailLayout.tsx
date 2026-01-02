import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";

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

type HolyGrailLayoutProps = {
  maxWidth?: string;
  children: ReactNode;
};

interface HolyGrailSectionProps
  extends ComponentPropsWithoutRef<"div">,
    AriaAttributes {
  children: ReactNode;
}

export function HolyGrailLayout({ children }: HolyGrailLayoutProps) {
  return <div {...stylex.props(styles.main)}>{children}</div>;
}

const Header = ({ children, ...props }: HolyGrailSectionProps) => {
  return (
    <div style={{ gridArea: "header" }} {...props}>
      {children}
    </div>
  );
};

const Left = ({ children, ...props }: HolyGrailSectionProps) => {
  return (
    <div style={{ gridArea: "left" }} {...props}>
      {children}
    </div>
  );
};

const Content = ({ children, ...props }: HolyGrailSectionProps) => {
  return (
    <div style={{ gridArea: "content" }} {...props}>
      {children}
    </div>
  );
};

const Right = ({ children, ...props }: HolyGrailSectionProps) => {
  return (
    <div style={{ gridArea: "right" }} {...props}>
      {children}
    </div>
  );
};

const Footer = ({ children, ...props }: HolyGrailSectionProps) => {
  return (
    <div style={{ gridArea: "footer" }} {...props}>
      {children}
    </div>
  );
};

HolyGrailLayout.Header = Header;
HolyGrailLayout.Left = Left;
HolyGrailLayout.Content = Content;
HolyGrailLayout.Right = Right;
HolyGrailLayout.Footer = Footer;
