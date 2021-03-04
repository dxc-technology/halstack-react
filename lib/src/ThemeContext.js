import React, { useMemo } from "react";
import Color from "color";
import { componentTokens } from "./common/variables.js";

const ThemeContext = React.createContext();

const addLightness = (hexColor, increaseLightness) => {
  const color = Color(hexColor);
  const hslColor = color.hsl();
  const lightnessColor = hslColor.color[2];
  return hslColor.lightness(lightnessColor + increaseLightness).hex();
};

const parseTheme = (theme) => {
  if (theme) {
    if (theme.tabs) {
      componentTokens.tabs.selectedFontColor = theme.tabs.selectedFontColor;
      componentTokens.tabs.selectedIconColor = theme.tabs.selectedFontColor;
      componentTokens.tabs.selectedUnderlineColor = theme.tabs.selectedFontColor;
      componentTokens.tabs.focusOutline = theme.tabs.selectedFontColor;
      componentTokens.tabs.hoverBackgroundColor = addLightness(componentTokens.tabs.selectedFontColor, 58);
      componentTokens.tabs.pressedBackgroundColor = addLightness(componentTokens.tabs.selectedFontColor, 53);
    }
    return componentTokens;
  }
  return componentTokens;
};

const ThemeProvider = ({ theme, children }) => {
  const parsedTheme = useMemo(() => parseTheme(theme), [theme]);

  return <ThemeContext.Provider value={parsedTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
export { ThemeProvider };
