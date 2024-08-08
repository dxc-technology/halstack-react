import { spaces } from "./variables";

export type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
export type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
export type Side = keyof Margin;

const getMargin = (marginProp: Space | Margin | undefined, side: Side) =>
  marginProp && typeof marginProp === "object"
    ? (marginProp[side] && spaces[marginProp[side]]) || "0px"
    : marginProp && typeof marginProp === "string"
      ? spaces[marginProp]
      : "0px";

export default getMargin;
