import {
  Context,
  createContext,
  CSSProperties,
  RefObject,
  useCallback,
  useContext,
  useRef,
} from "react";
import { useToggle } from "usehooks-ts";

export const useAnimateToggle = <T extends HTMLElement>() => {
  const [isVisible, toggleIsVisible, setIsVisible] = useToggle();
  const elementRef = useRef<T | null>(null);

  const getElementRef = useCallback((node: T | null) => {
    if (node) {
      // console.log("Mounted:", node);
      elementRef.current = node;
    }
  }, []);

  function splitObjectIntoTwoObjects(userObj: {}) {
    const object_1 = {};
    const object_2 = {};

    Object.entries(userObj).forEach(([keyName, keyValue]) => {
      if (keyName == "display") {
        Object.defineProperty(object_1, keyName, {
          value: keyValue,
          enumerable: true,
        });
      } else {
        Object.defineProperty(object_2, keyName, {
          value: keyValue,
          enumerable: true,
        });
      }
    });

    return [object_1, object_2];
  }

  const show = useCallback(
    <T extends HTMLElement>(
      targetElementRef: RefObject<T | null>,
      cssStylesObject: CSSProperties,
    ) => {
      let element = targetElementRef.current;

      console.log(element);
      if (!element) return;

      const [object_1, object_2] = splitObjectIntoTwoObjects(cssStylesObject);

      for (let [key, value] of Object.entries(object_1)) {
        element.style.setProperty(key, String(value));
        // console.log("Property should be set");
      }

      setTimeout(() => {
        for (let [key, value] of Object.entries(object_2)) {
          element.style.setProperty(key, String(value));
          // console.log("Another property should be set");
        }
      }, 0.0001);

      setIsVisible(true);
    },
    [],
  );

  const hide = useCallback(
    <T extends HTMLElement>(
      targetElementRef: RefObject<T | null>,
      cssStylesObject: CSSProperties,
    ) => {
      let element = targetElementRef.current;
      if (!element) return;

      const [object_1, object_2] = splitObjectIntoTwoObjects(cssStylesObject);

      // 1st: Loop through key : values in 2nd object and add each property to the ref
      for (let [key, value] of Object.entries(object_2)) {
        element.style.setProperty(key, String(value));
        // console.log("Property from object_2 should be set");
      }

      // 2nd: Activate transitionend event listener for ref
      element.addEventListener(
        "transitionend",
        () => {
          // >>
          for (let [key, value] of Object.entries(object_1)) {
            element.style.setProperty(key, String(value));
          }

          // Set style attribute to empty string, because non-empty style attribute prevents CSS classes of children elements from overriding parent element styles
          for (let key of Object.keys(object_2)) {
            element.style.removeProperty(key);
            console.log("Removed prop from object_2");
          }

          for (let key of Object.keys(object_1)) {
            element.style.removeProperty(key);
            console.log("Removed prop from object_1");
          }

          setIsVisible(false);
        },
        { once: true },
      );

      // 3rd: On transitionend apply display property (i.e display: none) to the ref

      setIsVisible(false);
    },
    [],
  );

  return {
    isVisible,
    toggleIsVisible,
    setIsVisible,
    elementRef,
    getElementRef,
    show,
    hide,
  };
};

// interface AnimateToggleContextType<T extends HTMLElement> {
//   refObject: RefObject<T | null> | null,
//   getElementRef: (node: T | null) => void
// }

interface AnimateToggleContextType<T extends HTMLElement> {
  refObject: RefObject<T | null>;
  getElementRef: (node: T | null) => void;
}

export function createAnimateToggleContext<T extends HTMLElement>() {
  return createContext<AnimateToggleContextType<T>>(
    {} as AnimateToggleContextType<T>,
  );
}

export function useAnimateToggleContext<T extends HTMLElement>(
  myContext: Context<AnimateToggleContextType<T>>,
) {
  const context = useContext(myContext);

  if (!context) {
    throw new Error("Please nest component under VisibilityProvider");
  }

  return context;
}
