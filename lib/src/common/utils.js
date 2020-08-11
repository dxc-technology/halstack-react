import { spaces } from "./variables.js";

export const getMargin = (marginProp, side) => {
  if (marginProp && typeof marginProp === "object") {
    return (marginProp[side] && spaces[marginProp[side]]) || "0px";
  } else {
    return (marginProp && spaces[marginProp]) || "0px";
  }
};

export const getCustomTheme = (defaultTheme, customTheme) => {
  const newTheme = defaultTheme;
  if (customTheme) {
    Object.keys(newTheme).map(function (component) {
      if (customTheme[component]) {
        Object.keys(newTheme[component]).map(function (objectKey) {
          if (customTheme[component][objectKey]) {
            newTheme[component][objectKey] = customTheme[component][objectKey];
          }
        });
      }
    });
  }
  return newTheme;
};
