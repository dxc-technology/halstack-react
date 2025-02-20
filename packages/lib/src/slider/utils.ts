import SliderPropsType from "./types";
import { getMargin } from "../common/utils";

const sizes = {
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

export const calculateWidth = (margin: SliderPropsType["margin"], size: SliderPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

/**
 * This function calculates the closest tick value to the target value within the range [min, max].
 * 
 * @param target the target value to round up
 * @param step the step value that defines the ticks from the range
 * @param min the minimum value of the range
 * @param max the maximum value of the range
 * @returns the closest tick value to the target value
 */
export const roundUp = (target: number, step: number, min: number, max: number) => {
  if (target < min) return min;
  else if (target > max) return max;
  else if (step === 1) return target;

  let percentage = 0;
  let acc = target - min;
  for (let tick = min; tick <= max; tick += step) {
    if (Math.abs(target - tick) <= Math.abs(acc)) {
      percentage = tick;
      acc = target - tick;
    } else break;
  }
  return percentage;
};