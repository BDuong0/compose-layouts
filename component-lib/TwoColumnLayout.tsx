import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

type NestedTwoColumnLayoutProps = {
  layoutLevel: "nested";
  maxWidth?: never;
  children: ReactNode;
};

type RootTwoColumnLayoutProps = {
  layoutLevel: "root";
  maxWidth?: string;
  children: ReactNode;
};

interface ColumnProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  columnPercent?: number;
  minWidth?: string;
  children: ReactNode;
}

export default function TwoColumnLayout({
  layoutLevel,
  maxWidth = "1700px",
  children,
}: NestedTwoColumnLayoutProps | RootTwoColumnLayoutProps) {
  return (
    <div
      style={{ maxWidth: layoutLevel == "root" ? `${maxWidth}` : "none" }}
      className={
        layoutLevel == "root"
          ? "mx-auto flex w-dvw flex-wrap"
          : "flex w-full flex-wrap"
      }
    >
      {children}
    </div>
  );
}

// Control when TwoColumnLayout starts wrapping and unwrapping by changing the pixel value in 'min-w-[300px]'
const LeftColumn = ({
  columnPercent = 50,
  minWidth = "0",
  children,
  ...props
}: ColumnProps) => {
  return (
    <div
      style={{
        flexBasis: `${columnPercent}%`,
        minWidth: `${minWidth}`,
        flexGrow: 1,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const RightColumn = ({
  columnPercent = 50,
  minWidth = "0",
  children,
  ...props
}: ColumnProps) => {
  return (
    <div
      style={{
        flexBasis: `${columnPercent}%`,
        minWidth: `${minWidth}`,
        flexGrow: 1,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

TwoColumnLayout.LeftColumn = LeftColumn;
TwoColumnLayout.RightColumn = RightColumn;
