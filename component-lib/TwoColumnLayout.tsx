import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NestedTwoColumnLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  layoutLevel: "nested";
  maxWidth?: never;
  children: ReactNode;
};

interface RootTwoColumnLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  layoutLevel: "root";
  maxWidth?: string;
  children: ReactNode;
};

interface ColumnProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  columnPercent?: number;
  minWidth?: string;
  children: ReactNode;
}

export function TwoColumnLayout({
  layoutLevel,
  maxWidth = "1700px",
  className = "",
  children,
  ...props
}: NestedTwoColumnLayoutProps | RootTwoColumnLayoutProps) {
  return (
    <div
      style={{ maxWidth: layoutLevel == "root" ? `${maxWidth}` : "none" }}
      className={
        layoutLevel == "root"
          ? twMerge("mx-auto flex w-dvw flex-wrap", className)
          : twMerge("flex w-full flex-wrap", className)
      }
      {...props}
    >
      {children}
    </div>
  );
}

// Control when TwoColumnLayout starts wrapping and unwrapping by changing the pixel value in 'min-w-[300px]'
const LeftColumn = ({
  columnPercent = 50,
  minWidth = "0",
  className = "",
  children,
  ...props
}: ColumnProps) => {
  return (
    <div
      style={{
        flexBasis: `${columnPercent}%`,
        minWidth: `${minWidth}`,
      }}
      className = {twMerge("grow", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const RightColumn = ({
  columnPercent = 50,
  minWidth = "0",
  className = "",
  children,
  ...props
}: ColumnProps) => {
  return (
    <div
      style={{
        flexBasis: `${columnPercent}%`,
        minWidth: `${minWidth}`,
      }}
      className = {twMerge("grow", className)}
      {...props}
    >
      {children}
    </div>
  );
};

TwoColumnLayout.LeftColumn = LeftColumn;
TwoColumnLayout.RightColumn = RightColumn;
