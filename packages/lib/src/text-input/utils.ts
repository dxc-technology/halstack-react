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

export const isLengthIncorrect = (
  value: string,
  minLength: TextInputPropsType["minLength"],
  maxLength: TextInputPropsType["maxLength"]
) =>
  value != null && ((minLength != null && value.length < minLength) || (maxLength != null && value.length > maxLength));

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
