import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

type NestedThreeColumnLayoutProps = {
  layoutLevel: "nested";
  maxWidth?: never;
  children: ReactNode;
};

type RootThreeColumnLayoutProps = {
  layoutLevel: "root";
  maxWidth?: string;
  children: ReactNode;
};

interface ColumnProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  columnPercent?: number;
  minWidth?: string;
  children: ReactNode;
}

export default function ThreeColumnLayout({
  layoutLevel,
  maxWidth = "1700px",
  children,
}: NestedThreeColumnLayoutProps | RootThreeColumnLayoutProps) {
  return (
    <div
      style={{ maxWidth: layoutLevel == "root" ? `${maxWidth}` : "none" }}
      className={
        layoutLevel == "root"
          ? "mx-auto flex w-full flex-wrap"
          : "flex w-full flex-wrap"
      }
    >
      {children}
    </div>
  );
}

// Control when ThreeColumnLayout starts wrapping and unwrapping by changing the pixel value in 'min-w-[300px]'
const LeftColumn = ({
  columnPercent = 33.33,
  minWidth = "33ch",
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

const MiddleColumn = ({
  columnPercent = 33.33,
  minWidth = "33ch",
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
  columnPercent = 33.33,
  minWidth = "33ch",
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

ThreeColumnLayout.LeftColumn = LeftColumn;
ThreeColumnLayout.MiddleColumn = MiddleColumn;
ThreeColumnLayout.RightColumn = RightColumn;
