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
 * Rounds a number to a specific number of decimal places.
 * this function tries to avoid floating point inaccuracies, present in JS:
 * 
 * 0.1 + 0.2 === 0.3 // false
 * 
 * @param number the number to round
 * @param step slider step value that defines the number of decimal places
 * @returns the rounded number
 */
export const stepPrecision = (target: number, step: number) => {
  const precision = step.toString().split(".")[1]?.length ?? 0;
  return Number(target.toFixed(precision));
};

/**
 * This function calculates the closest tick value to the target value within the range [min, max].
 * 
 * @param target the target value to round up
 * @param step the step value that defines the ticks from the range
 * @param min the minimum value of the range
 * @param max the maximum value of the range
 * @returns the closest tick value to the target value
 */
export const roundUp = (target: number, step: number, min: number, max: number): number => {
  if (target === 0) return 0;
  else if (target <= min) return min;
  else if (target >= max) return max;
  else if (step === 1) return Math.round(target);

  const ticks = Array.from({ length: Math.floor((max - min) / step) + 1 }, (_, index) => stepPrecision(min + index * step, step));
  if (ticks.includes(target)) return target;

  let rounded = 0;
  let acc = Infinity;
  for (const tick of ticks) {
    const diff = Math.abs(stepPrecision(target - tick, target));
    if (diff < Math.abs(acc) || (diff === Math.abs(acc) && target > 0)) {
      rounded = tick;
      acc = diff;
    } else break;
  };
  return rounded;
};
