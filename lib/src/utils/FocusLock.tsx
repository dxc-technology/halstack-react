import React, { useCallback, useEffect, useRef } from "react";

const not = {
  inert: ":not([inert]):not([inert] *)",
  negTabIndex: ':not([tabindex^="-"])',
  disabled: ":not(:disabled):not([aria-disabled='true'])",
};

const focusableItems = [
  `a[href]${not.inert}${not.negTabIndex}`,
  `area[href]${not.inert}${not.negTabIndex}`,
  `input:not([type="hidden"])${not.inert}${not.negTabIndex}${not.disabled}`,
  `select${not.inert}${not.negTabIndex}${not.disabled}`,
  `textarea${not.inert}${not.negTabIndex}${not.disabled}`,
  `button${not.inert}${not.negTabIndex}${not.disabled}`,
  `details${not.inert} > summary:first-of-type${not.negTabIndex}`,
  `iframe${not.inert}${not.negTabIndex}`,
  `audio[controls]${not.inert}${not.negTabIndex}`,
  `video[controls]${not.inert}${not.negTabIndex}`,
  `[contenteditable]${not.inert}${not.negTabIndex}`,
  `[tabindex]${not.inert}${not.negTabIndex}${not.disabled}`,
].join(",");

const getFocusableElements = (container: HTMLElement): HTMLElement[] =>
  Array.prototype.slice
    .call(container.querySelectorAll(focusableItems))
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
 *
 * @param element
 * @returns
 */
const attempFocus = (element: HTMLElement): boolean => {
  element?.focus();
  return document.activeElement === element;
};

/**
 * Traps the focus inside the children of the component. It will focus the first focusable element when the component is mounted.
 * When the focus is on the last focusable element and the user tries to focus the next element, it will focus the first element.
 * When the focus is on the first focusable element and the user tries to focus the previous element, it will focus the last element.
 * The focus can't be moved outside the children unless the children are removed from the DOM (for example, a Dialog, a Modal, etc).
 *
 * @param children: React.ReactNode
 * @returns
 */
const FocusLock = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const childrenContainerRef = useRef<HTMLDivElement>();

  const focusFirst = useCallback(() => {
    const focusableElements = getFocusableElements(childrenContainerRef.current);
    for (let i = 0; i < focusableElements.length; i++) if (attempFocus(focusableElements[i])) return;
  }, []);

  const focusLast = useCallback(() => {
    const focusableElements = getFocusableElements(childrenContainerRef.current);
    for (let i = focusableElements.length; i > 0; i--) if (attempFocus(focusableElements[i])) return;
  }, []);

  useEffect(() => {
    focusFirst();
  }, []);

  return (
    <>
      <div onFocus={focusLast} tabIndex={0} />
      <div ref={childrenContainerRef}>{children}</div>
      <div onFocus={focusFirst} tabIndex={0} />
    </>
  );
};

export default FocusLock;
