import TextInputPropsType from "./types";
import { getMargin } from "../common/utils";

const sizes = {
  small: "240px",
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

export const calculateWidth = (margin: TextInputPropsType["margin"], size: TextInputPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

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

export const hasSuggestions = (suggestions: TextInputPropsType["suggestions"]) =>
  typeof suggestions === "function" || (suggestions ? suggestions.length > 0 : false);

export const isRequired = (value: string, optional: boolean) => value === "" && !optional;

export const isNumberIncorrect = (
  value: number,
  minNumber: TextInputPropsType["minLength"],
  maxNumber: TextInputPropsType["maxLength"]
) => (minNumber != null && value < minNumber) || (maxNumber != null && value > maxNumber);

export const patternMismatch = (pattern: TextInputPropsType["pattern"], value: string) =>
  pattern != null && !new RegExp(pattern).test(value);

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

export const getNumberErrorMessage = (
  checkedValue: number,
  valueGreaterThanOrEqualToErrorMessage: (value: number) => string,
  valueLessThanOrEqualToErrorMessage: (value: number) => string,
  minNumber?: number,
  maxNumber?: number
) =>
  minNumber != null && checkedValue < minNumber
    ? valueGreaterThanOrEqualToErrorMessage?.(minNumber)
    : maxNumber != null && checkedValue > maxNumber
      ? valueLessThanOrEqualToErrorMessage?.(maxNumber)
      : undefined;

export const decrementNumber = (
  currentValue: string | undefined,
  disabled: boolean,
  readOnly: boolean,
  changeValue: (value: number | string) => void,
  stepNumber?: number,
  minNumber?: number,
  maxNumber?: number
) => {
  if (!disabled && !readOnly) {
    const numberValue = Number(currentValue);
    const steppedValue = Math.round((numberValue - (stepNumber ?? 0) + Number.EPSILON) * 100) / 100;

    if (currentValue !== "") {
      if (minNumber != null && (numberValue < minNumber || steppedValue < minNumber)) {
        changeValue(numberValue);
      } else if (maxNumber != null && numberValue > maxNumber) {
        changeValue(maxNumber);
      } else if (numberValue === minNumber) {
        changeValue(minNumber);
      } else {
        changeValue(steppedValue);
      }
    } else if (minNumber != null && minNumber >= 0) {
      changeValue(minNumber);
    } else if (maxNumber != null && maxNumber < 0) {
      changeValue(maxNumber);
    } else if (stepNumber != null) {
      changeValue(-stepNumber);
    }
  }
};

export const incrementNumber = (
  currentValue: string | undefined,
  disabled: boolean,
  readOnly: boolean,
  changeValue: (value: number | string) => void,
  stepNumber?: number,
  minNumber?: number,
  maxNumber?: number
) => {
  if (!disabled && !readOnly) {
    const numberValue = Number(currentValue);
    const steppedValue = Math.round((numberValue + (stepNumber ?? 0) + Number.EPSILON) * 100) / 100;

    if (currentValue !== "") {
      if (maxNumber != null && (numberValue > maxNumber || steppedValue > maxNumber)) {
        changeValue(numberValue);
      } else if (minNumber != null && numberValue < minNumber) {
        changeValue(minNumber);
      } else if (numberValue === maxNumber) {
        changeValue(maxNumber);
      } else {
        changeValue(steppedValue);
      }
    } else if (minNumber != null && minNumber > 0) {
      changeValue(minNumber);
    } else if (maxNumber != null && maxNumber <= 0) {
      changeValue(maxNumber);
    } else if (stepNumber != null) {
      changeValue(stepNumber);
    }
  }
};

export const setNumberProps = (type?: string, min?: number, max?: number, step?: number, ref?: HTMLInputElement) => {
  if (min != null) ref?.setAttribute("min", min.toString());
  if (max != null) ref?.setAttribute("max", max.toString());
  if (step != null) ref?.setAttribute("step", step.toString());
  if (type != null) ref?.setAttribute("type", type);
};
