import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

interface CardGridProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  maxColumns: number;
  gap: string; // gap is in pixels, because you rarely use rem or em for gap
  minItemPixelWidth: string;
  children: ReactNode;
}

export default function CardGrid({
  maxColumns,
  gap,
  minItemPixelWidth,
  children,
  ...props
}: CardGridProps) {
  const gap_count = maxColumns - 1;
  const total_gap_pixelWidth = `${gap_count} * ${gap}`;
  const itemMaxPixelWidth = `calc((100% - ${total_gap_pixelWidth}) / ${maxColumns})`;

  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: `repeat(auto-fit, minmax(max(${minItemPixelWidth}, ${itemMaxPixelWidth}), 1fr))`,
        gridGap: gap,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
