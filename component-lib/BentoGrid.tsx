import { AriaAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";
import { twMerge } from "tailwind-merge";

type BaseBentoGridProps = {
  numOfItems: 5 | 6 | 7;
  gap?: string;
  children: ReactNode;
};

interface BentoGridWithFiveItemsProps {
  numOfItems: 5;
  layoutNum: 1 | 2;
}

interface BentoGridWithSixItemsProps {
  numOfItems: 6;
  layoutNum: 1 | 2;
}

interface BentoGridWithSevenItemsProps {
  numOfItems: 7;
  layoutNum: 1 | 2;
}

interface BentoGridItemProps extends ComponentPropsWithoutRef<"div">, AriaAttributes {
  children: ReactNode;
};

// Make some sort of list of gridTemplateAreas that serve as different ways to layout 5 items, 6 items, and 7 items
// These are gridTemplateAreas for tablet & desktop. Mobile just keep all items in a single column, regardless the amount of items

const FIVE_ITEM_LAYOUTS = {
  1: `"one one two two"
  "three four four five"`,
  2: `"one one one two"
   "one one one two"
   "three four five"`,
};

const SIX_ITEM_LAYOUTS = {
  1: `"one two"
  "three four"
  "five six"`,
  2: `"one two two"
   "one three four"
   "five five six"`,
};

const SEVEN_ITEM_LAYOUTS = {
  1: `"one one one one"
  "two three four four"
  "five six four four"
  "seven seven four four"`,
  2: `"one one one two"
  "three four four five"
  "six seven seven seven"`,
};

const styles = stylex.create({
  base: (gap, mobileTemplateAreas, desktopTemplateAreas) => ({
    display: "grid",
    gap: gap,
    gridTemplateAreas: {
      default: mobileTemplateAreas,
      "@media (min-width: 960px)": desktopTemplateAreas,
    },
  }),
});

export function BentoGrid({
  numOfItems,
  gap = "0",
  layoutNum,
  children,
}:
  | (BaseBentoGridProps & BentoGridWithFiveItemsProps)
  | (BaseBentoGridProps & BentoGridWithSixItemsProps)
  | (BaseBentoGridProps & BentoGridWithSevenItemsProps)) {
  let desktopLayoutToRender = ``;
  let mobileLayoutToRender = ``;

  const FIVE_ITEM_MOBILE_LAYOUT = `
    "one"
    "two"
    "three"
    "four"
    "five"
  `;

  const SIX_ITEM_MOBILE_LAYOUT = `
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
  `;

  const SEVEN_ITEM_MOBILE_LAYOUT = `
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
  `;

  switch (numOfItems) {
    case 5:
      mobileLayoutToRender = FIVE_ITEM_MOBILE_LAYOUT;
      desktopLayoutToRender = FIVE_ITEM_LAYOUTS[layoutNum];
      break;
    case 6:
      mobileLayoutToRender = SIX_ITEM_MOBILE_LAYOUT;
      desktopLayoutToRender = SIX_ITEM_LAYOUTS[layoutNum];
      break;
    case 7:
      mobileLayoutToRender = SEVEN_ITEM_MOBILE_LAYOUT;
      desktopLayoutToRender = SEVEN_ITEM_LAYOUTS[layoutNum];
      break;
  }

  return (
    <div
      {...stylex.props(
        styles.base(gap, mobileLayoutToRender, desktopLayoutToRender),
      )}
    >
      {children}
    </div>
  );
}

const ItemOne = ({ children, className="", ...props }: BentoGridItemProps) => {
  return (
    <div className={twMerge(`bg-red-300 row-[one/one] col-[one/one]`, className)} {...props}>
      {children}
    </div>
  );
};

const ItemTwo = ({ children, className="", ...props}: BentoGridItemProps) => {
  return (
    <div className={twMerge(`bg-blue-300 row-[two/two] col-[two/two]`, className)}>
      {children}
    </div>
  );
};

const ItemThree = ({ children, className="", ...props}: BentoGridItemProps) => {
  return (
    <div className={twMerge(`bg-green-300 row-[three/three] col-[three/three]`, className)} {...props}>
      {children}
    </div>
  );
};

const ItemFour = ({ children, className="", ...props}: BentoGridItemProps) => {
  return (
    <div className={twMerge(`bg-yellow-300 row-[four/four] col-[four/four]`, className)} {...props}>
      {children}
    </div>
  );
};

const ItemFive = ({ children, className="", ...props}: BentoGridItemProps) => {
  return (
    <div className={twMerge(`bg-orange-300 row-[five/five] col-[five/five]`, className)} {...props}>
      {children}
    </div>
  );
};

const ItemSix = ({ children, className="", ...props}: BentoGridItemProps) => {
  return (
    <div className={twMerge(`bg-teal-400 row-[six/six] col-[six/six]`, className)} {...props}>
      {children}
    </div>
  );
};

const ItemSeven = ({ children, className="", ...props}: BentoGridItemProps) => {
  return (
    <div className={twMerge(`bg-amber-900 row-[seven/seven] col-[seven/seven]`, className)} {...props}>
      {children}
    </div>
  );
};

BentoGrid.ItemOne = ItemOne;
BentoGrid.ItemTwo = ItemTwo;
BentoGrid.ItemThree = ItemThree;
BentoGrid.ItemFour = ItemFour;
BentoGrid.ItemFive = ItemFive;
BentoGrid.ItemSix = ItemSix;
BentoGrid.ItemSeven = ItemSeven;
