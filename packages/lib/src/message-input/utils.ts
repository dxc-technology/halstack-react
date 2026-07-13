import MessageInputPropsType from "./types";
import { css } from "@emotion/react";

export const makeCancelable = (promise: Promise<string[]>) => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise<string[]>((resolve, reject) => {
    promise.then(
      (val) => {
        if (hasCanceled_) {
          reject(new Error("Is canceled"));
        } else {
          resolve(val);
        }
      },
      (promiseError) => {
        if (hasCanceled_) {
          reject(new Error("Is canceled"));
        } else if (promiseError instanceof Error) {
          reject(promiseError);
        } else {
          reject(new Error(String(promiseError)));
        }
      }
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

export const isLengthIncorrect = (
  value: string,
  minLength: MessageInputPropsType["minLength"],
  maxLength: MessageInputPropsType["maxLength"]
) =>
  value != null && ((minLength != null && value.length < minLength) || (maxLength != null && value.length > maxLength));

export const isNumberIncorrect = (
  value: number,
  minNumber: MessageInputPropsType["minLength"],
  maxNumber: MessageInputPropsType["maxLength"]
) => (minNumber != null && value < minNumber) || (maxNumber != null && value > maxNumber);

export const transformSpecialChars = (str: string) => {
  const specialCharsRegex = /[\\*()[\]{}+?/]/;
  let value = str;
  if (specialCharsRegex.test(value)) {
    const regexAsString = specialCharsRegex.toString().split("");
    const uniqueSpecialChars = regexAsString.filter((item, index) => regexAsString.indexOf(item) === index);
    uniqueSpecialChars.forEach((specialChar) => {
      if (str.includes(specialChar)) {
        value = value.replace(specialChar, `\\${specialChar}`);
      }
    });
  }
  return value;
};

export const inputStylesByStatePromptInput = (disabled: boolean, error: boolean, focus?: boolean) => css`
  background-color: ${disabled ? `var(--color-bg-neutral-lightest)` : `transparent`};

  border-radius: var(--border-radius-l);

  border: ${!disabled && error ? "var(--border-width-m)" : "var(--border-width-s)"} var(--border-style-default)
    ${(() => {
      if (disabled) return "var(--border-color-neutral-lighter)";
      else if (error) return "var(--border-color-error-medium)";
      else return "var(--border-color-neutral-lighter)";
    })()};

  ${!disabled
    ? `
      &:hover {
        border-color: ${error ? "var(--border-color-error-strong)" : "var(--border-color-primary-strong)"};
      }

      &:focus {
        outline-offset: -2px;
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        border-color: transparent;
      }
    `
    : "cursor: not-allowed;"};

  ${focus && !disabled
    ? `
      outline-offset: -2px;
      outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
      border-color: transparent;
    `
    : ""};
`;
