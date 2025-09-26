import { KeyboardEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from "react";

const not = {
  negTabIndex: ':not([tabindex^="-"])',
  disabled: ":not(:disabled)",
};
const focusableQuery = [
  `a[href]${not.negTabIndex}`,
  `area[href]${not.negTabIndex}`,
  `input:not([type="hidden"])${not.negTabIndex}${not.disabled}`,
  `select${not.negTabIndex}${not.disabled}`,
  `textarea${not.negTabIndex}${not.disabled}`,
  `button${not.negTabIndex}${not.disabled}`,
  `details > summary:first-of-type${not.negTabIndex}`,
  `iframe${not.negTabIndex}`,
  `audio[controls]${not.negTabIndex}`,
  `video[controls]${not.negTabIndex}`,
  `[contenteditable]${not.negTabIndex}`,
  `[tabindex]${not.negTabIndex}${not.disabled}`,
].join(",");

const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const elements = Array.from(container.querySelectorAll<HTMLElement>(focusableQuery));
  return elements.filter(
    (element) =>
      element.getAttribute("aria-hidden") !== "true" &&
      window.getComputedStyle(element).display !== "none" &&
      window.getComputedStyle(element).visibility !== "hidden"
  );
};

/**
 * This function will try to focus the element and return true if it was able to receive the focus.
 * Even if the element is focusable (passes any of the conditions of our selector), there is the possibility
 * that the element may not be focusable at all.
 * @param element: HTMLElement
 * @returns
 */
const attemptFocus = (element: HTMLElement): boolean => {
  element.focus();
  return document.activeElement === element;
};

/**
 * @param element: HTMLElement
 * @returns boolean: true if element is contained inside a Radix Portal, false otherwise.
 */
const radixPortalContains = (activeElement: Node): boolean => {
  const radixPortals = Array.from(document.querySelectorAll<HTMLElement>("[data-radix-portal]"));
  const radixPoppers = Array.from(document.querySelectorAll<HTMLElement>("[data-radix-popper-content-wrapper]"));

  return (
    radixPortals.some((portal) => portal.contains(activeElement)) ||
    radixPoppers.some((popper) => popper.contains(activeElement))
  );
};

/**
 * Custom hook that returns an array of focusable elements inside a container.
 * @param ref: React.MutableRefObject<HTMLDivElement>
 * @returns
 */
const useFocusableElements = (ref: MutableRefObject<HTMLDivElement | null>): HTMLElement[] | null => {
  const [focusableElements, setFocusableElements] = useState<HTMLElement[] | null>(null);

  useEffect(() => {
    if (ref.current != null) {
      setFocusableElements(getFocusableElements(ref.current));

      const observer = new MutationObserver(() => {
        if (ref.current != null) {
          setFocusableElements(getFocusableElements(ref.current));
        }
      });
      observer.observe(ref.current, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return focusableElements;
};

/**
 * Traps the focus inside the children of the component. It will focus the first focusable element when the component is mounted.
 * When the focus is on the last focusable element and the user tries to focus the next element, it will focus the first element.
 * When the focus is on the first focusable element and the user tries to focus the previous element, it will focus the last element.
 * The focus can't be moved outside the children unless the children are removed from the DOM (for example, a Dialog, a Modal, etc).
 * @param children: React.ReactNode
 * @returns
 */
const FocusLock = ({ children }: { children: ReactNode }): JSX.Element => {
  const childrenContainerRef = useRef<HTMLDivElement | null>(null);
  const focusableElements = useFocusableElements(childrenContainerRef);
  const initialFocus = useRef(false);

  const focusFirst = useCallback(() => {
    if (focusableElements != null) {
      if (focusableElements.length === 0) {
        childrenContainerRef.current?.focus();
      } else if (focusableElements.length > 0) {
        focusableElements.some((element) => attemptFocus(element));
      }
    }
  }, [focusableElements]);

  const focusLast = () => {
    focusableElements
      ?.slice()
      .reverse()
      .some((element) => attemptFocus(element));
  };

  const focusLock = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab" && focusableElements?.length === 0) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (focusableElements != null && !initialFocus.current) {
      initialFocus.current = true;
      focusFirst();
    }
  }, [focusableElements, focusFirst]);

  useEffect(() => {
    const focusGuardHandler = (event: FocusEvent) => {
      const target = event.relatedTarget as Node | null;
      const container = childrenContainerRef.current;

      if (
        target != null &&
        !(
          container?.contains(target) ||
          container?.nextElementSibling?.contains(target) ||
          container?.previousElementSibling?.contains(target) ||
          radixPortalContains(target)
        )
      ) {
        focusFirst();
      }
    };

    document.addEventListener("focusout", focusGuardHandler);
    return () => {
      document.removeEventListener("focusout", focusGuardHandler);
    };
  }, [focusFirst]);

  return (
    <>
      <div onFocus={focusLast} tabIndex={0} />
      <div
        onKeyDown={focusLock}
        ref={childrenContainerRef}
        tabIndex={focusableElements?.length === 0 ? 0 : -1}
        style={{ outline: "none" }}
      >
        {children}
      </div>
      <div onFocus={focusFirst} tabIndex={0} />
    </>
  );
};

export default FocusLock;
