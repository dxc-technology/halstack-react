import React, { useCallback, useEffect, useRef, useState } from "react";

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

const getFocusableElements = (container: HTMLElement): HTMLElement[] =>
  Array.prototype.slice
    .call(container.querySelectorAll(focusableQuery))
    .filter(
      (element: HTMLElement) =>
        element.getAttribute("aria-hidden") !== "true" &&
        window.getComputedStyle(element).display !== "none" &&
        window.getComputedStyle(element).visibility !== "hidden"
    );

/**
 * This function will try to focus the element and return true if it was able to receive the focus.
 * Even if the element is focusable (passes any of the conditions of our selector), there is the possibility
 * that the element may not be focusable at all.
 * @param element: HTMLElement
 * @returns
 */
const attemptFocus = (element: HTMLElement): boolean => {
  element?.focus();
  return document.activeElement === element;
};

/**
 * @param element: HTMLElement
 * @returns boolean: true if element is contained inside a Radix Portal, false otherwise.
 */
const radixPortalContains = (activeElement: Element): boolean => {
  const radixPortals = document.querySelectorAll("[data-radix-portal]");
  return Array.prototype.slice.call(radixPortals).some((portal) => portal.contains(activeElement));
};

/**
 * Custom hook that returns an array of focusable elements inside a container.
 * @param ref: React.MutableRefObject<HTMLDivElement>
 * @returns
 */
const useFocusableElements = (ref: React.MutableRefObject<HTMLDivElement>): HTMLElement[] => {
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>();

  useEffect(() => {
    if (ref.current != null) {
      setFocusableElements(getFocusableElements(ref.current));

      const observer = new MutationObserver(() => {
        setFocusableElements(getFocusableElements(ref.current));
      });
      observer.observe(ref.current, { childList: true, subtree: true, attributes: true });
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
const FocusLock = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const childrenContainerRef = useRef<HTMLDivElement>(null);
  const focusableElements = useFocusableElements(childrenContainerRef);

  const focusFirst = useCallback(() => {
    if (focusableElements?.length === 0) childrenContainerRef.current?.focus();
    else if (focusableElements?.length > 0)
      focusableElements.some(attemptFocus);
  }, [focusableElements]);

  const focusPrevious = () => {
    const getPreviousIndex = (index: number) => (index - 1 + focusableElements.length) % focusableElements.length;
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    for (let i = getPreviousIndex(currentIndex); i !== currentIndex; i = getPreviousIndex(i)) {
      if (attemptFocus(focusableElements[i])) {
        return;
      }
    }
  }

  const focusNext = () => {
    const getNextIndex = (index: number) => (index + 1) % focusableElements.length;
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    for (let i = getNextIndex(currentIndex); i !== currentIndex; i = getNextIndex(i)) {
      if (attemptFocus(focusableElements[i])) {
        return;
      }
    }
  };

  const focusLock = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (focusableElements.length === 0) { 
        return;
      }
      if (event.shiftKey) {
        focusPrevious();
      } else {
        focusNext()
      }
    }
  };

  useEffect(() => {
    if (!childrenContainerRef.current?.contains(document.activeElement) && !radixPortalContains(document.activeElement))
      focusFirst();
  }, [focusFirst]);

  return (
    <div onKeyDown={focusLock} ref={childrenContainerRef} tabIndex={focusableElements?.length === 0 ? 0 : -1}>
      {children}
    </div>
  );
};

export default FocusLock;
