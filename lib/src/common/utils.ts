import { spaces } from "./variables";

export const getMargin = (marginProp: string | object, side: string) =>
  marginProp && typeof marginProp === "object"
    ? (marginProp[side] && spaces[marginProp[side]]) || "0px"
    : marginProp && typeof marginProp === "string"
      ? spaces[marginProp]
      : "0px";
