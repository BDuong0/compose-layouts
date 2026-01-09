import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from 'tailwind-merge'

interface CardGridProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  maxColumns: number;
  gap: string; // gap is in pixels, because you rarely use rem or em for gap
  minItemPixelWidth: string;
  children: ReactNode;
}

export function CardGrid({
  maxColumns,
  gap,
  minItemPixelWidth,
  children,
  className = "",
  ...props
}: CardGridProps) {
  const gap_count = maxColumns - 1;
  const total_gap_pixelWidth = `${gap_count} * ${gap}`;
  const itemMaxPixelWidth = `calc((100% - ${total_gap_pixelWidth}) / ${maxColumns})`;
  const gridTemplateColumns = `repeat(auto-fit, minmax(max(${minItemPixelWidth}, ${itemMaxPixelWidth}), 1fr))`

  return (
    <div
      style={{
        gridGap: gap,
        gridTemplateColumns: gridTemplateColumns,
      }}
      className={twMerge(`grid w-full`, className)}
      {...props}
    >
      {children}
    </div>
  );
}
