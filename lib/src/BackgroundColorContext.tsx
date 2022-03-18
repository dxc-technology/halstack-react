import React, { useMemo } from "react";
import Color from "color";

type BackgroundColorContext = "dark" | "light";
const BackgroundColorContext = React.createContext<BackgroundColorContext | null>(null);

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

type BackgroundColorProviderPropsType = {
  color: string;
  children: React.ReactNode;
};

const BackgroundColorProvider = ({ color, children }: BackgroundColorProviderPropsType): JSX.Element => {
  const colorType = useMemo(() => getColorType(color), [color]);
  return <BackgroundColorContext.Provider value={colorType}>{children}</BackgroundColorContext.Provider>;
};

export default BackgroundColorContext;
export { BackgroundColorProvider };
