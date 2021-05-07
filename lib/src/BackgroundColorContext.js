/* eslint-disable prefer-template */
import React, { useMemo } from "react";
import Color from "color";
import rgbHex from "rgb-hex";

const BackgroundColorContext = React.createContext();

const getColorType = (hexColor) => {
  try {
    if (hexColor) {
      const hslColor = Color(hexColor).hsl();
      const lightnessColor = hslColor.color[2];
      return lightnessColor <= 30 ? "dark" : "light";
    }
  } catch (e) {
    return "light";
  }
};

const BackgroundColorProvider = ({ color, children }) => {
  const colorType = useMemo(() => getColorType(color), [color]);
  return <BackgroundColorContext.Provider value={colorType}>{children}</BackgroundColorContext.Provider>;
};

export default BackgroundColorContext;
export { BackgroundColorProvider };
