import { spaces } from "./variables";
import { Space, Margin, Side } from "./types";

export const getMargin = (marginProp: Space | Margin | undefined, side: Side) =>
  marginProp && typeof marginProp === "object"
    ? (marginProp[side] && spaces[marginProp[side]]) || "0px"
    : marginProp && typeof marginProp === "string"
      ? spaces[marginProp]
      : "0px";

export const getLengthErrorMessage = ({
  value,
  minLength,
  maxLength,
  minLengthErrorMessage,
  maxLengthErrorMessage,
}: {
  value: string;
  minLength?: number;
  maxLength?: number;
  minLengthErrorMessage: (minLength: number) => string;
  maxLengthErrorMessage: (maxLength: number) => string;
}) => {
  if (minLength != null && value.length < minLength && minLengthErrorMessage) {
    return minLengthErrorMessage(minLength);
  }
  if (maxLength != null && value.length > maxLength && maxLengthErrorMessage) {
    return maxLengthErrorMessage(maxLength);
  }
  return undefined;
};
