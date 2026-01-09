import { AriaAttributes, ComponentPropsWithoutRef, createContext, ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";

interface NestedThreeColumnLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  layoutLevel: "nested";
  gap?: string;
  maxWidth?: never;
  children: ReactNode;
};

interface RootThreeColumnLayoutProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  layoutLevel: "root";
  gap?: string;
  maxWidth?: string;
  children: ReactNode;
};

interface ColumnProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  columnPercent?: number;
  minWidth?: string;
  children: ReactNode;
}

type ThreeColumnLayoutContext = {
  gap: string;
};
const ThreeColumnContext = createContext<ThreeColumnLayoutContext>({gap: "0px"});

export function ThreeColumnLayout({
  layoutLevel,
  gap = "0px",
  maxWidth = "1700px",
  className = "",
  children,
  ...props
}: NestedThreeColumnLayoutProps | RootThreeColumnLayoutProps) {
  const baseLayoutStyles = "flex w-full flex-wrap max-w-none"
  const rootLayoutStyles = "flex w-full flex-wrap mx-auto"
  
  return (
    <ThreeColumnContext.Provider value={{gap: gap}}>
      <div
        style={layoutLevel == "root" ? {gap: gap, maxWidth: maxWidth} : {gap: gap} }
        className={layoutLevel == "root" ? twMerge(baseLayoutStyles, className) : twMerge(rootLayoutStyles, className)}
        {...props}
      >
        {children}
      </div>
    </ThreeColumnContext.Provider>
  );
}

// Control when ThreeColumnLayout starts wrapping and unwrapping by changing the pixel value in 'min-w-[300px]'
const LeftColumn = ({
  columnPercent = 33.33,
  minWidth = "33ch",
  className = "",
  children,
  ...props
}: ColumnProps) => {
  const { gap } = useContext(ThreeColumnContext)
  
  return (
    <div
      style={{
        flexBasis: `calc(${columnPercent}% - (${gap} * 2 / 3))`,
        minWidth: `${minWidth}`,
      }}
      className={twMerge("grow", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const MiddleColumn = ({
  columnPercent = 33.33,
  minWidth = "33ch",
  className = "",
  children,
  ...props
}: ColumnProps) => {
  const { gap } = useContext(ThreeColumnContext)
  
  return (
    <div
      style={{
        flexBasis: `calc(${columnPercent}% - (${gap} * 2 / 3))`,
        minWidth: `${minWidth}`,
      }}
      className={twMerge("grow", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const RightColumn = ({
  columnPercent = 33.33,
  minWidth = "33ch",
  className = "",
  children,
  ...props
}: ColumnProps) => {
  const { gap } = useContext(ThreeColumnContext)
  
  return (
    <div
      style={{
        flexBasis: `calc(${columnPercent}% - (${gap} * 2 / 3))`,
        minWidth: `${minWidth}`,
      }}
      className={twMerge("grow", className)}
      {...props}
    >
      {children}
    </div>
  );
};

ThreeColumnLayout.LeftColumn = LeftColumn;
ThreeColumnLayout.MiddleColumn = MiddleColumn;
ThreeColumnLayout.RightColumn = RightColumn;
