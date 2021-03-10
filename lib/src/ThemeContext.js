/* eslint-disable prefer-template */
import React, { useMemo } from "react";
import Color from "color";
import rgbHex from "rgb-hex";

import { componentTokens } from "./common/variables.js";

const ThemeContext = React.createContext();

const addLightness = (hexColor, increaseLightness) => {
  if (hexColor) {
    const color = Color(hexColor);
    const hslColor = color.hsl();
    const lightnessColor = hslColor.color[2];
    return hslColor.lightness(lightnessColor + increaseLightness).hex();
  }
  return null;
};

const addOpacity = (hexColor, increaseOpacity) => {
  if (hexColor) {
    const color = Color(hexColor);
    return "#" + rgbHex(color.color[0], color.color[1], color.color[2], increaseOpacity);
  }
  return null;
};

const parseTheme = (theme) => {
  const accordionTokens = componentTokens.accordion;
  accordionTokens.fontColor = theme?.accordion?.fontColor ?? accordionTokens.fontColor;
  accordionTokens.arrowColor = theme?.accordion?.arrowColor ?? accordionTokens.arrowColor;
  accordionTokens.hoverBackgroundColor =
    addLightness(theme?.accordion?.arrowColor, 53) ?? accordionTokens.hoverBackgroundColor;
  accordionTokens.disabledFontColor =
    addLightness(theme?.accordion?.fontColor, 35) ?? accordionTokens.disabledFontColor;
  accordionTokens.focusOutline = theme?.accordion?.arrowColor ?? accordionTokens.arrowColor;

  const chipTokens = componentTokens.chip;
  chipTokens.backgroundColor = theme?.chip?.backgroundColor ?? chipTokens.backgroundColor;
  chipTokens.disabledBackgroundColor =
    addOpacity(theme?.chip?.backgroundColor, 0.34) ?? chipTokens.disabledBackgroundColor;
  chipTokens.outlinedColor = theme?.chip?.outlinedColor ?? chipTokens.outlinedColor;
  chipTokens.fontColor = theme?.chip?.fontColor ?? chipTokens.fontColor;
  chipTokens.disabledFontColor = addOpacity(theme?.chip?.fontColor, 0.34) ?? chipTokens.disabledFontColor;

  const tabsTokens = componentTokens.tabs;
  tabsTokens.selectedFontColor = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.selectedIconColor = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.selectedUnderlineColor = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.focusOutline = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.hoverBackgroundColor = addLightness(theme?.tabs?.selectedFontColor, 58) ?? tabsTokens.hoverBackgroundColor;
  tabsTokens.pressedBackgroundColor =
    addLightness(theme?.tabs?.selectedFontColor, 53) ?? tabsTokens.pressedBackgroundColor;

  const footerTokens = componentTokens.footer;
  footerTokens.backgroundColor = theme?.footer?.backgroundColor ?? footerTokens.backgroundColor;
  footerTokens.fontColor = theme?.footer?.fontColor ?? footerTokens.fontColor;
  footerTokens.lineColor = theme?.footer?.lineColor ?? footerTokens.lineColor;
  footerTokens.logo = theme?.footer?.logo ?? footerTokens.logo;

  return componentTokens;
};

const ThemeProvider = ({ theme, children }) => {
  const parsedTheme = useMemo(() => parseTheme(theme), [theme]);

  return <ThemeContext.Provider value={parsedTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
export { ThemeProvider };
