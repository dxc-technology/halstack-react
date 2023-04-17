import { spaces } from "./variables";

export const getMargin = (marginProp: string | object, side: string) => {
  if (marginProp && typeof marginProp === "object") {
    return (marginProp[side] && spaces[marginProp[side]]) || "0px";
  } else if (marginProp && typeof marginProp === "string") {
    return spaces[marginProp];
  } else return "0px";
};
