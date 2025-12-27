import * as stylex from "@stylexjs/stylex";
import {
  createAnimateToggleContext,
  useAnimateToggle,
  useAnimateToggleContext,
} from "@/hooks/useAnimateToggle";
import { useMediaQuery } from "usehooks-ts";
import {
  AriaAttributes,
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode,
} from "react";

interface NavMenuWrapperStylesTypes {
  main: any;
  show: CSSProperties;
  hide: CSSProperties;
}

const AnimateToggleContext = createAnimateToggleContext<HTMLDivElement>()

const NavMenuWrapperStyles: NavMenuWrapperStylesTypes = {
  main: stylex.create({
    desktop: {
      display: "flex",
      flexDirection: "row",
    },
    mobile: {
      display: "none",
      opacity: 0,
      position: {
        default: "absolute",
        "@media (min-width: 768px)": "relative",
      },
      backgroundColor: "var(--color-stone-800)",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100dvh",
      "transition-property": "opacity",
      "transition-duration": "400ms",
    },
  }),
  show: {
    display: "block",
    opacity: 1,
  },
  hide: {
    display: "none",
    opacity: 0,
  },
};

const NavMenuContentStyles = stylex.create({
  desktop: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "red",
    padding: 0,
    margin: 0,
    gap: "6px",
  },
  mobile: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    width: "80%",
    marginInline: "auto",
    gap: "12px",
  },
});

interface NavMenuProps extends ComponentPropsWithoutRef<"nav"> {
  children: ReactNode;
}

const NavBar = ({ children, ...props }: NavMenuProps) => {
  // const { isToggled, setIsToggled } = useToggle();
  const { elementRef, getElementRef } = useAnimateToggle<HTMLDivElement>();
  const isTabletOrMobile = useMediaQuery("(max-width: 768px)");

  const context = {
    refObject: elementRef,
    getElementRef: getElementRef,
  };

  return (
    <AnimateToggleContext.Provider value={context}>
      <nav {...props}>
        {children}

        <div
          ref={getElementRef}
          {...stylex.props(
            isTabletOrMobile
              ? NavMenuWrapperStyles.main.mobile
              : NavMenuWrapperStyles.main.desktop,
          )}
        >
          {isTabletOrMobile && (
            <div className="mx-auto flex w-8/10 items-center justify-around bg-red-400 max-md:w-screen max-md:justify-between">
              <img
                width={50}
                src="https://vite.dev/logo.svg"
                alt="Vite logo"
                className="opacity-0"
              />
              <NavBarMenuCloseTrigger />
            </div>
          )}

          <ul
            {...stylex.props(
              isTabletOrMobile
                ? NavMenuContentStyles.mobile
                : NavMenuContentStyles.desktop,
            )}
          >
            <NavMenuLink href="">MENU</NavMenuLink>
            <NavMenuLink href="">ORDER</NavMenuLink>
            <NavMenuLink href="">LOCATIONS</NavMenuLink>
            <NavMenuLink href="">ABOUT</NavMenuLink>
          </ul>
        </div>
      </nav>
    </AnimateToggleContext.Provider>
  );
};

interface NavBarLogoProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

const NavBarLogo = ({ children, ...props }: NavBarLogoProps) => {
  return <div {...props}>{children}</div>;
};

interface NavBarMenuOpenTriggerProps
  extends ComponentPropsWithoutRef<"button"> {
  showStyles?: CSSProperties;
  children?: ReactNode;
}

const NavBarOpenTrigger = ({
  showStyles = NavMenuWrapperStyles.show,
  children = <MenuIcon />,
  className = "block cursor-pointer rounded px-2 py-2 transition-colors hover:bg-[#44403b] md:hidden",
}: NavBarMenuOpenTriggerProps) => {
  const { show } = useAnimateToggle();
  const { refObject, getElementRef } = useAnimateToggleContext(AnimateToggleContext);

  return (
    <button
      className={className}
      onClick={() => {
        show(refObject, showStyles);
      }}
    >
      {children}
    </button>
  );
};

interface NavBarMenuContentProps extends ComponentPropsWithoutRef<"button"> {
  showMobileStyles?: CSSProperties;
  showDesktopStyles?: CSSProperties;
  children?: ReactNode;
}

const NavBarMenuContent = () => {
  const {getElementRef} = useAnimateToggleContext(AnimateToggleContext);

  return <div ref={getElementRef}></div>;
};

interface NavBarMenuCloseTrigger {
  hideStyles?: CSSProperties;
  children?: ReactNode;
}

const NavBarMenuCloseTrigger = ({
  hideStyles = NavMenuWrapperStyles.hide,
  children = <XMarkIcon />,
}: NavBarMenuCloseTrigger) => {
  const { hide } = useAnimateToggle();
  const {refObject} = useAnimateToggleContext(AnimateToggleContext);

  return (
    <button
      className="h-max cursor-pointer rounded-md px-2 py-2 transition-colors hover:bg-stone-700"
      onClick={() => {
        hide(refObject, hideStyles);
      }}
    >
      {children}
    </button>
  );
};

interface NavMenuLinkProps
  extends ComponentPropsWithoutRef<"li">,
    AriaAttributes {
  href: string;
  children: ReactNode;
}

const NavMenuLink = ({ href, children }: NavMenuLinkProps) => {
  return (
    <li className="font-accent w-max rounded-md px-3 py-1 font-semibold text-white transition-colors hover:bg-stone-700">
      <a href={href}>{children}</a>
    </li>
  );
};

const MenuIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ffffff"
    >
      <path
        d="M3 5H21"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M3 12H21"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M3 19H21"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

const XMarkIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ffffff"
    >
      <path
        d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export { NavBar, NavBarLogo, NavBarOpenTrigger };
