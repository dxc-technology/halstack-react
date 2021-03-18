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

  const buttonTokens = componentTokens.button;
  buttonTokens.primaryBackgroundColor = theme?.button?.color ?? buttonTokens.primaryBackgroundColor;
  buttonTokens.secondaryOutlinedColor = theme?.button?.color ?? buttonTokens.secondaryOutlinedColor;
  buttonTokens.primaryHoverBackgroundColor = theme?.button?.hoverColor ?? buttonTokens.primaryHoverBackgroundColor;
  buttonTokens.hoverOutlinedColor = theme?.button?.hoverColor ?? buttonTokens.hoverOutlinedColor;
  buttonTokens.textHoverBackgroundColor = theme?.button?.hoverColor ?? buttonTokens.textHoverBackgroundColor;
  buttonTokens.primaryFontColor = theme?.button?.primaryFontColor ?? buttonTokens.primaryFontColor;
  buttonTokens.primaryHoverFontColor = theme?.button?.primaryHoverFontColor ?? buttonTokens.primaryHoverFontColor;
  buttonTokens.secondaryFontColor = theme?.button?.secondaryFontColor ?? buttonTokens.secondaryFontColor;
  buttonTokens.secondaryHoverFontColor = theme?.button?.secondaryHoverFontColor ?? buttonTokens.secondaryHoverFontColor;
  buttonTokens.textFontColor = theme?.button?.textFontColor ?? buttonTokens.textFontColor;
  buttonTokens.textHoverFontColor = theme?.button?.textHoverFontColor ?? buttonTokens.textHoverFontColor;
  buttonTokens.disabledPrimaryBackgroundColor =
    addOpacity(theme?.button?.color, 0.34) ?? buttonTokens.disabledPrimaryBackgroundColor;
  buttonTokens.disabledSecondaryOutlinedColor =
    addOpacity(theme?.button?.color, 0.34) ?? buttonTokens.disabledSecondaryOutlinedColor;
  buttonTokens.disabledPrimaryFontColor =
    addOpacity(theme?.button?.primaryFontColor, 0.34) ?? buttonTokens.disabledPrimaryFontColor;
  buttonTokens.disabledSecondaryFontColor =
    addOpacity(theme?.button?.secondaryFontColor, 0.34) ?? buttonTokens.disabledSecondaryFontColor;
  buttonTokens.disabledTextFontColor =
    addOpacity(theme?.button?.textFontColor, 0.34) ?? buttonTokens.disabledTextFontColor;

  const checkboxTokens = componentTokens.checkbox;
  checkboxTokens.backgroundColorChecked = theme?.checkbox?.color ?? checkboxTokens.backgroundColorChecked;
  checkboxTokens.borderColor = theme?.checkbox?.color ?? checkboxTokens.borderColor;
  checkboxTokens.checkColor = theme?.checkbox?.checkColor ?? checkboxTokens.checkColor;
  checkboxTokens.disabledBackgroundColorChecked =
    addOpacity(theme?.checkbox?.color, 0.34) ?? checkboxTokens.disabledBackgroundColorChecked;
  checkboxTokens.disabledBorderColor = addOpacity(theme?.checkbox?.color, 0.34) ?? checkboxTokens.disabledBorderColor;
  checkboxTokens.disabledCheckColor =
    addOpacity(theme?.checkbox?.checkColor, 0.34) ?? checkboxTokens.disabledCheckColor;

  const chipTokens = componentTokens.chip;
  chipTokens.backgroundColor = theme?.chip?.backgroundColor ?? chipTokens.backgroundColor;
  chipTokens.disabledBackgroundColor =
    addOpacity(theme?.chip?.backgroundColor, 0.34) ?? chipTokens.disabledBackgroundColor;
  chipTokens.outlinedColor = theme?.chip?.outlinedColor ?? chipTokens.outlinedColor;
  chipTokens.fontColor = theme?.chip?.fontColor ?? chipTokens.fontColor;
  chipTokens.disabledFontColor = addOpacity(theme?.chip?.fontColor, 0.34) ?? chipTokens.disabledFontColor;

  const dateTokens = componentTokens.date;
  dateTokens.pickerSelectedDateBackgroundColor =
    theme?.date?.pickerSelectedDateBackgroundColor ?? dateTokens.pickerSelectedDateBackgroundColor;
  dateTokens.pickerSelectedDateColor = theme?.date?.pickerSelectedDateColor ?? dateTokens.pickerSelectedDateColor;
  dateTokens.pickerHoverDateBackgroundColor =
    addOpacity(theme?.date?.pickerSelectedDateBackgroundColor, 0.34) ?? dateTokens.pickerHoverDateBackgroundColor;

  const dropdownTokens = componentTokens.dropdown;
  dropdownTokens.backgroundColor = theme?.dropdown?.backgroundColor ?? dropdownTokens.backgroundColor;
  dropdownTokens.fontColor = theme?.dropdown?.fontColor ?? dropdownTokens.fontColor;
  dropdownTokens.hoverBackgroundColor =
    addOpacity(theme?.dropdown?.backgroundColor, 0.8) ?? dropdownTokens.hoverBackgroundColor;
  dropdownTokens.hoverBackgroundOption =
    addOpacity(theme?.dropdown?.backgroundColor, 0.34) ?? dropdownTokens.hoverBackgroundOption;

  const footerTokens = componentTokens.footer;
  footerTokens.backgroundColor = theme?.footer?.backgroundColor ?? footerTokens.backgroundColor;
  footerTokens.fontColor = theme?.footer?.fontColor ?? footerTokens.fontColor;
  footerTokens.lineColor = theme?.footer?.lineColor ?? footerTokens.lineColor;
  footerTokens.logo = theme?.footer?.logo ?? footerTokens.logo;

  const headerTokens = componentTokens.header;
  headerTokens.backgroundColor = theme?.header?.backgroundColor ?? headerTokens.backgroundColor;
  headerTokens.underlinedColor = theme?.header?.underlinedColor ?? headerTokens.underlinedColor;
  headerTokens.fontColor = theme?.header?.fontColor ?? headerTokens.fontColor;
  headerTokens.backgroundColorMenu = theme?.header?.backgroundColorMenu ?? headerTokens.backgroundColorMenu;
  headerTokens.hamburguerColor = theme?.header?.hamburguerColor ?? headerTokens.hamburguerColor;
  headerTokens.hoverHamburguerColor =
    addOpacity(theme?.header?.hamburguerColor, 0.16) ?? headerTokens.hoverHamburguerColor;
  headerTokens.logo = theme?.header?.logo ?? headerTokens.logo;
  headerTokens.logoResponsive = theme?.header?.logoResponsive ?? headerTokens.logoResponsive;

  const inputTokens = componentTokens.inputText;
  inputTokens.selectedOptionBackgroundColor =
    addOpacity(theme?.inputText?.selectedOptionBackgroundColor, 0.34) ?? inputTokens.selectedOptionBackgroundColor;

  const paginatorTokens = componentTokens.paginator;
  paginatorTokens.paginatorBackgroundColor =
    theme?.paginator?.paginatorBackgroundColor ?? paginatorTokens.paginatorBackgroundColor;
  paginatorTokens.paginatorFontColor = theme?.paginator?.paginatorFontColor ?? paginatorTokens.paginatorFontColor;

  const progressBarTokens = componentTokens.progressBar;
  progressBarTokens.trackLine = theme?.progressBar?.trackLine ?? progressBarTokens.trackLine;
  progressBarTokens.totalLine = addOpacity(theme?.progressBar?.totalLine, 0.34) ?? progressBarTokens.totalLine;

  const radioTokens = componentTokens.radio;
  radioTokens.color = theme?.radio?.color ?? radioTokens.color;
  radioTokens.fontColor = theme?.radio?.fontColor ?? radioTokens.fontColor;
  radioTokens.focusColor = theme?.radio?.focusColor ?? radioTokens.focusColor;
  radioTokens.disabledColor = addOpacity(theme?.radio?.color, 0.34) ?? radioTokens.disabledColor;
  radioTokens.disabledFontColor = addOpacity(theme?.radio?.fontColor, 0.34) ?? radioTokens.disabledFontColor;

  const selectTokens = componentTokens.select;
  selectTokens.selectedOptionBackgroundColor =
    theme?.select?.selectedOptionBackgroundColor ?? selectTokens.selectedOptionBackgroundColor;
  selectTokens.hoveredOptionBackgroundColor =
    addOpacity(theme?.select?.selectedOptionBackgroundColor, 0.34) ?? selectTokens.hoveredOptionBackgroundColor;
  selectTokens.disabledColor = addOpacity(theme?.select?.color, 0.34) ?? selectTokens.disabledColor;

  const sideNavTokens = componentTokens.sidenav;
  sideNavTokens.backgroundColor = theme?.sidenav?.backgroundColor ?? sideNavTokens.backgroundColor;
  sideNavTokens.arrowContainerColor =
    addOpacity(theme?.sideNav?.arrowContainerColor, 0.8) ?? sideNavTokens.arrowContainerColor;
  sideNavTokens.arrowColor = theme?.sidenav?.arrowColor ?? sideNavTokens.arrowColor;

  const sliderTokens = componentTokens.slider;
  sliderTokens.thumbBackgroundColor = theme?.slider?.color ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.dotsBackgroundColor = theme?.slider?.color ?? sliderTokens.dotsBackgroundColor;
  sliderTokens.trackLine = theme?.slider?.color ?? sliderTokens.trackLine;
  sliderTokens.totalLine = addOpacity(theme?.slider?.color, 0.34) ?? sliderTokens.totalLine;
  sliderTokens.disabledThumbBackgroundColor =
    addOpacity(theme?.slider?.color, 0.34) ?? sliderTokens.disabledThumbBackgroundColor;
  sliderTokens.disabledDotsBackgroundColor =
    addOpacity(theme?.slider?.color, 0.34) ?? sliderTokens.disabledDotsBackgroundColor;
  sliderTokens.disabledTrackLine = addOpacity(theme?.slider?.color, 0.34) ?? sliderTokens.disabledTrackLine;

  const spinnerTokens = componentTokens.spinner;
  spinnerTokens.trackCircleColor = theme?.spinner?.trackCircleColor ?? spinnerTokens.trackCircleColor;
  spinnerTokens.totalCircleColor = theme?.spinner?.totalCircleColor ?? spinnerTokens.totalCircleColor;

  const switchTokens = componentTokens.switch;
  switchTokens.checkedTrackBackgroundColor =
    theme?.switch?.checkedTrackBackgroundColor ?? switchTokens.checkedTrackBackgroundColor;
  switchTokens.disabledCheckedTrackBackgroundColor =
    addOpacity(theme?.switch?.checkedTrackBackgroundColor, 0.34) ?? switchTokens.disabledCheckedTrackBackgroundColor;

  const tableTokens = componentTokens.table;
  tableTokens.headerBackgroundColor = theme?.table?.headerBackgroundColor ?? tableTokens.headerBackgroundColor;
  tableTokens.headerFontColor = theme?.table?.headerFontColor ?? tableTokens.headerFontColor;

  const tabsTokens = componentTokens.tabs;
  tabsTokens.selectedFontColor = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.selectedIconColor = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.selectedUnderlineColor = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.focusOutline = theme?.tabs?.selectedFontColor ?? tabsTokens.selectedFontColor;
  tabsTokens.hoverBackgroundColor = addLightness(theme?.tabs?.selectedFontColor, 58) ?? tabsTokens.hoverBackgroundColor;
  tabsTokens.pressedBackgroundColor =
    addLightness(theme?.tabs?.selectedFontColor, 53) ?? tabsTokens.pressedBackgroundColor;

  const toggleGroupTokens = componentTokens.toggleGroup;
  toggleGroupTokens.unselectedBackgroundColor =
    theme?.toggleGroup?.unselectedBackgroundColor ?? toggleGroupTokens.unselectedBackgroundColor;
  toggleGroupTokens.unselectedBackgroundHoverColor =
    theme?.toggleGroup?.unselectedBackgroundHoverColor ?? toggleGroupTokens.unselectedBackgroundHoverColor;
  toggleGroupTokens.unselectedFontColor =
    theme?.toggleGroup?.unselectedFontColor ?? toggleGroupTokens.unselectedFontColor;
  toggleGroupTokens.unselectedHoverFontColor =
    theme?.toggleGroup?.unselectedHoverFontColor ?? toggleGroupTokens.unselectedHoverFontColor;
  toggleGroupTokens.selectedBackgroundColor =
    theme?.toggleGroup?.selectedBackgroundColor ?? toggleGroupTokens.selectedBackgroundColor;
  toggleGroupTokens.selectedBackgroundHoverColor =
    theme?.toggleGroup?.selectedBackgroundHoverColor ?? toggleGroupTokens.selectedBackgroundHoverColor;
  toggleGroupTokens.selectedFontColor = theme?.toggleGroup?.selectedFontColor ?? toggleGroupTokens.selectedFontColor;
  toggleGroupTokens.selectedHoverFontColor =
    theme?.toggleGroup?.selectedHoverFontColor ?? toggleGroupTokens.selectedHoverFontColor;
  toggleGroupTokens.disabledSelectedBackgroundColor =
    addOpacity(theme?.toggleGroup?.selectedBackgroundColor, 0.34) ?? toggleGroupTokens.disabledSelectedBackgroundColor;
  toggleGroupTokens.disabledUnselectedBackgroundColor =
    addOpacity(theme?.toggleGroup?.unselectedBackgroundColor, 0.34) ??
    toggleGroupTokens.disabledUnselectedBackgroundColor;
  toggleGroupTokens.disabledUnselectedFontColor =
    addOpacity(theme?.toggleGroup?.unselectedFontColor, 0.34) ?? toggleGroupTokens.disabledUnselectedFontColor;
  toggleGroupTokens.disabledSelectedFontColor =
    addOpacity(theme?.toggleGroup?.selectedFontColor, 0.34) ?? toggleGroupTokens.disabledSelectedFontColor;

  const wizardTokens = componentTokens.wizard;
  wizardTokens.selectedBackgroundColor = theme?.wizard?.selectedBackgroundColor ?? wizardTokens.selectedBackgroundColor;
  wizardTokens.selectedFont = theme?.wizard?.selectedFont ?? wizardTokens.selectedFont;

  return componentTokens;
};

const ThemeProvider = ({ theme, children }) => {
  const parsedTheme = useMemo(() => parseTheme(theme), [theme]);
  return <ThemeContext.Provider value={parsedTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
export { ThemeProvider };
