/* eslint-disable prefer-template */
import React, { useMemo } from "react";
import Color from "color";
import rgbHex from "rgb-hex";
import styled from "styled-components";

import { componentTokens } from "./common/variables.js";

const ThemeContext = React.createContext();

const setLightness = (hexColor, newLightness) => {
  try {
    if (hexColor) {
      const color = Color(hexColor);
      const hslColor = color.hsl();
      const lightnessColor = hslColor.color[2];
      return hslColor.lightness(lightnessColor + newLightness).hex();
    }
  } catch (e) {
    return null;
  }
};

const setOpacity = (hexColor, newOpacity) => {
  try {
    if (hexColor) {
      const color = Color(hexColor);
      return "#" + rgbHex(color.color[0], color.color[1], color.color[2], newOpacity);
    }
  } catch (e) {
    return null;
  }
};

const parseAdvancedTheme = (advancedTheme) => {
  const allTokensCopy = JSON.parse(JSON.stringify(componentTokens));
  Object.keys(allTokensCopy).map(function (component) {
    if (advancedTheme[component]) {
      Object.keys(advancedTheme[component]).map(function (objectKey) {
        if (advancedTheme[component][objectKey]) {
          allTokensCopy[component][objectKey] = advancedTheme[component][objectKey];
        }
      });
    }
  });
  return allTokensCopy;
};

const parseTheme = (theme) => {
  const componentTokensCopy = JSON.parse(JSON.stringify(componentTokens));
  const accordionTokens = componentTokensCopy.accordion;
  accordionTokens.fontColorBase = theme?.accordion?.fontColor ?? accordionTokens.fontColorBase;
  accordionTokens.arrowColor = theme?.accordion?.accentColor ?? accordionTokens.arrowColor;
  accordionTokens.hoverBackgroundColor =
    setLightness(theme?.accordion?.accentColor, 53) ?? accordionTokens.hoverBackgroundColor;
  accordionTokens.disabledFontColor =
    setLightness(theme?.accordion?.fontColor, 35) ?? accordionTokens.disabledFontColor;
  accordionTokens.headerFocusBorderColor = theme?.accordion?.accentColor ?? accordionTokens.headerFocusBorderColor;

  const buttonTokens = componentTokensCopy.button;
  buttonTokens.primaryBackgroundColor = theme?.button?.baseColor ?? buttonTokens.primaryBackgroundColor;
  buttonTokens.secondaryOutlinedColor = theme?.button?.baseColor ?? buttonTokens.secondaryOutlinedColor;
  buttonTokens.primaryHoverBackgroundColor = theme?.button?.hoverBaseColor ?? buttonTokens.primaryHoverBackgroundColor;
  buttonTokens.secondaryHoverOutlinedColor = theme?.button?.hoverBaseColor ?? buttonTokens.secondaryHoverOutlinedColor;
  buttonTokens.textHoverBackgroundColor = theme?.button?.hoverBaseColor ?? buttonTokens.textHoverBackgroundColor;
  buttonTokens.primaryFontColor = theme?.button?.primaryFontColor ?? buttonTokens.primaryFontColor;
  buttonTokens.primaryHoverFontColor = theme?.button?.primaryHoverFontColor ?? buttonTokens.primaryHoverFontColor;
  buttonTokens.secondaryFontColor = theme?.button?.secondaryFontColor ?? buttonTokens.secondaryFontColor;
  buttonTokens.secondaryHoverFontColor = theme?.button?.secondaryHoverFontColor ?? buttonTokens.secondaryHoverFontColor;
  buttonTokens.textFontColor = theme?.button?.textFontColor ?? buttonTokens.textFontColor;
  buttonTokens.textHoverFontColor = theme?.button?.textHoverFontColor ?? buttonTokens.textHoverFontColor;
  buttonTokens.disabledPrimaryBackgroundColor =
    setOpacity(theme?.button?.baseColor, 0.34) ?? buttonTokens.disabledPrimaryBackgroundColor;
  buttonTokens.disabledSecondaryOutlinedColor =
    setOpacity(theme?.button?.baseColor, 0.34) ?? buttonTokens.disabledSecondaryOutlinedColor;
  buttonTokens.disabledPrimaryFontColor =
    setOpacity(theme?.button?.primaryFontColor, 0.34) ?? buttonTokens.disabledPrimaryFontColor;
  buttonTokens.disabledSecondaryFontColor =
    setOpacity(theme?.button?.secondaryFontColor, 0.34) ?? buttonTokens.disabledSecondaryFontColor;
  buttonTokens.disabledTextFontColor =
    setOpacity(theme?.button?.textFontColor, 0.34) ?? buttonTokens.disabledTextFontColor;

  const checkboxTokens = componentTokensCopy.checkbox;
  checkboxTokens.backgroundColorChecked = theme?.checkbox?.baseColor ?? checkboxTokens.backgroundColorChecked;
  checkboxTokens.borderColor = theme?.checkbox?.baseColor ?? checkboxTokens.borderColor;
  checkboxTokens.checkColor = theme?.checkbox?.checkColor ?? checkboxTokens.checkColor;
  checkboxTokens.disabledBackgroundColorChecked =
    setOpacity(theme?.checkbox?.baseColor, 0.34) ?? checkboxTokens.disabledBackgroundColorChecked;
  checkboxTokens.disabledBorderColor =
    setOpacity(theme?.checkbox?.baseColor, 0.34) ?? checkboxTokens.disabledBorderColor;
  checkboxTokens.disabledCheckColor =
    setOpacity(theme?.checkbox?.checkColor, 0.34) ?? checkboxTokens.disabledCheckColor;

  const chipTokens = componentTokensCopy.chip;
  chipTokens.backgroundColor = theme?.chip?.baseColor ?? chipTokens.backgroundColor;
  chipTokens.disabledBackgroundColor = setOpacity(theme?.chip?.baseColor, 0.34) ?? chipTokens.disabledBackgroundColor;
  chipTokens.borderColor = theme?.chip?.accentColor ?? chipTokens.borderolor;
  chipTokens.fontColor = theme?.chip?.fontColor ?? chipTokens.fontColor;
  chipTokens.disabledFontColor = setOpacity(theme?.chip?.fontColor, 0.34) ?? chipTokens.disabledFontColor;

  const dateTokens = componentTokensCopy.date;
  dateTokens.pickerSelectedDateBackgroundColor = theme?.date?.baseColor ?? dateTokens.pickerSelectedDateBackgroundColor;
  dateTokens.pickerSelectedDateColor = theme?.date?.accentColor ?? dateTokens.pickerSelectedDateColor;
  dateTokens.pickerHoverDateBackgroundColor =
    setOpacity(theme?.date?.baseColor, 0.34) ?? dateTokens.pickerHoverDateBackgroundColor;

  const dropdownTokens = componentTokensCopy.dropdown;
  dropdownTokens.buttonBackgroundColor = theme?.dropdown?.baseColor ?? dropdownTokens.buttonBackgroundColor;
  dropdownTokens.buttonFontColor = theme?.dropdown?.fontColor ?? dropdownTokens.buttonFontColor;
  dropdownTokens.buttonHoverBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.8) ?? dropdownTokens.buttonHoverBackgroundColor;
  dropdownTokens.optionsListHoverBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.34) ?? dropdownTokens.optionsListHoverBackgroundColor;

  const footerTokens = componentTokensCopy.footer;
  footerTokens.backgroundColor = theme?.footer?.baseColor ?? footerTokens.backgroundColor;
  footerTokens.fontColorBase = theme?.footer?.fontColor ?? footerTokens.fontColorBase;
  footerTokens.bottomLinksDividerColor = theme?.footer?.accentColor ?? footerTokens.bottomLinksDividerColor;
  footerTokens.logo = theme?.footer?.logo ?? footerTokens.logo;

  const headerTokens = componentTokensCopy.header;
  headerTokens.backgroundColor = theme?.header?.baseColor ?? headerTokens.backgroundColor;
  headerTokens.underlinedColor = theme?.header?.accentColor ?? headerTokens.underlinedColor;
  headerTokens.fontColorBase = theme?.header?.fontColor ?? headerTokens.fontColorBase;
  headerTokens.menuBackgroundColor = theme?.header?.menuBaseColor ?? headerTokens.menuBackgroundColor;
  headerTokens.hamburguerColor = theme?.header?.hamburguerColor ?? headerTokens.hamburguerColor;
  headerTokens.hamburguerHoverColor =
    setOpacity(theme?.header?.hamburguerColor, 0.16) ?? headerTokens.hamburguerHoverColor;
  headerTokens.logo = theme?.header?.logo ?? headerTokens.logo;
  headerTokens.logoResponsive = theme?.header?.logoResponsive ?? headerTokens.logoResponsive;

  const inputTokens = componentTokensCopy.inputText;
  inputTokens.selectedOptionBackgroundColor =
    setOpacity(theme?.inputText?.selectedBaseColor, 0.34) ?? inputTokens.selectedOptionBackgroundColor;

  const paginatorTokens = componentTokensCopy.paginator;
  paginatorTokens.backgroundColor = theme?.paginator?.baseColor ?? paginatorTokens.backgroundColor;
  paginatorTokens.fontColor = theme?.paginator?.fontColor ?? paginatorTokens.fontColor;

  const progressBarTokens = componentTokensCopy.progressBar;
  progressBarTokens.trackLineColor = theme?.progressBar?.accentColor ?? progressBarTokens.trackLineColor;
  progressBarTokens.totalLineColor = theme?.progressBar?.baseColor ?? progressBarTokens.totalLineColor;

  const radioTokens = componentTokensCopy.radio;
  radioTokens.color = theme?.radio?.baseColor ?? radioTokens.color;
  radioTokens.disabledColor = setOpacity(theme?.radio?.baseColor, 0.34) ?? radioTokens.disabledColor;

  const selectTokens = componentTokensCopy.select;
  selectTokens.selectedOptionBackgroundColor = theme?.select?.baseColor ?? selectTokens.selectedOptionBackgroundColor;
  selectTokens.hoveredOptionBackgroundColor =
    setOpacity(theme?.select?.baseColor, 0.34) ?? selectTokens.hoveredOptionBackgroundColor;
  selectTokens.disabledColor = setOpacity(theme?.select?.color, 0.34) ?? selectTokens.disabledColor;

  const sideNavTokens = componentTokensCopy.sidenav;
  sideNavTokens.backgroundColor = theme?.sidenav?.baseColor ?? sideNavTokens.backgroundColor;
  sideNavTokens.arrowContainerColor =
    setOpacity(theme?.sidenav?.arrowBaseColor, 0.8) ?? sideNavTokens.arrowContainerColor;
  sideNavTokens.arrowColor = theme?.sidenav?.arrowAccentColor ?? sideNavTokens.arrowColor;

  const sliderTokens = componentTokensCopy.slider;
  sliderTokens.thumbBackgroundColor = theme?.slider?.baseColor ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.dotsBackgroundColor = theme?.slider?.baseColor ?? sliderTokens.dotsBackgroundColor;
  sliderTokens.trackLineColor = theme?.slider?.baseColor ?? sliderTokens.trackLineColor;
  sliderTokens.totalLineColor = setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.totalLineColor;
  sliderTokens.disabledThumbBackgroundColor =
    setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.disabledThumbBackgroundColor;
  sliderTokens.disabledDotsBackgroundColor =
    setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.disabledDotsBackgroundColor;
  sliderTokens.disabledTrackLineColor = setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.disabledTrackLineColor;

  const spinnerTokens = componentTokensCopy.spinner;
  spinnerTokens.trackCircleColor = theme?.spinner?.accentColor ?? spinnerTokens.trackCircleColor;
  spinnerTokens.totalCircleColor = theme?.spinner?.baseColor ?? spinnerTokens.totalCircleColor;

  const switchTokens = componentTokensCopy.switch;
  switchTokens.checkedTrackBackgroundColor =
    theme?.switch?.checkedBaseColor ?? switchTokens.checkedTrackBackgroundColor;
  switchTokens.disabledCheckedTrackBackgroundColor =
    setOpacity(theme?.switch?.checkedBaseColor, 0.34) ?? switchTokens.disabledCheckedTrackBackgroundColor;

  const tableTokens = componentTokensCopy.table;
  tableTokens.headerBackgroundColor = theme?.table?.baseColor ?? tableTokens.headerBackgroundColor;
  tableTokens.headerFontColor = theme?.table?.fontColor ?? tableTokens.headerFontColor;

  const tabsTokens = componentTokensCopy.tabs;
  tabsTokens.selectedFontColor = theme?.tabs?.baseColor ?? tabsTokens.selectedFontColor;
  tabsTokens.selectedIconColor = theme?.tabs?.baseColor ?? tabsTokens.selectedIconColor;
  tabsTokens.selectedUnderlineColor = theme?.tabs?.baseColor ?? tabsTokens.selectedUnderlineColor;
  tabsTokens.focusOutline = theme?.tabs?.baseColor ?? tabsTokens.focusOutline;
  tabsTokens.hoverBackgroundColor = setLightness(theme?.tabs?.baseColor, 58) ?? tabsTokens.hoverBackgroundColor;
  tabsTokens.pressedBackgroundColor = setLightness(theme?.tabs?.baseColor, 53) ?? tabsTokens.pressedBackgroundColor;

  const toggleGroupTokens = componentTokensCopy.toggleGroup;
  toggleGroupTokens.unselectedBackgroundColor =
    theme?.toggleGroup?.unselectedBaseColor ?? toggleGroupTokens.unselectedBackgroundColor;
  toggleGroupTokens.unselectedBackgroundHoverColor =
    theme?.toggleGroup?.unselectedHoverBaseColor ?? toggleGroupTokens.unselectedBackgroundHoverColor;
  toggleGroupTokens.unselectedFontColor =
    theme?.toggleGroup?.unselectedFontColor ?? toggleGroupTokens.unselectedFontColor;
  toggleGroupTokens.unselectedHoverFontColor =
    theme?.toggleGroup?.unselectedHoverFontColor ?? toggleGroupTokens.unselectedHoverFontColor;
  toggleGroupTokens.selectedBackgroundColor =
    theme?.toggleGroup?.selectedBaseColor ?? toggleGroupTokens.selectedBackgroundColor;
  toggleGroupTokens.selectedBackgroundHoverColor =
    theme?.toggleGroup?.selectedHoverBaseColor ?? toggleGroupTokens.selectedBackgroundHoverColor;
  toggleGroupTokens.selectedFontColor = theme?.toggleGroup?.selectedFontColor ?? toggleGroupTokens.selectedFontColor;
  toggleGroupTokens.selectedHoverFontColor =
    theme?.toggleGroup?.selectedHoverFontColor ?? toggleGroupTokens.selectedHoverFontColor;
  toggleGroupTokens.disabledSelectedBackgroundColor =
    setOpacity(theme?.toggleGroup?.selectedBaseColor, 0.34) ?? toggleGroupTokens.disabledSelectedBackgroundColor;
  toggleGroupTokens.disabledUnselectedBackgroundColor =
    setOpacity(theme?.toggleGroup?.unselectedBaseColor, 0.34) ?? toggleGroupTokens.disabledUnselectedBackgroundColor;
  toggleGroupTokens.disabledUnselectedFontColor =
    setOpacity(theme?.toggleGroup?.unselectedFontColor, 0.34) ?? toggleGroupTokens.disabledUnselectedFontColor;
  toggleGroupTokens.disabledSelectedFontColor =
    setOpacity(theme?.toggleGroup?.selectedFontColor, 0.34) ?? toggleGroupTokens.disabledSelectedFontColor;

  const wizardTokens = componentTokensCopy.wizard;
  wizardTokens.stepContainerSelectedBackgroundColor = theme?.wizard?.baseColor ?? wizardTokens.stepContainerSelectedBackgroundColor;
  wizardTokens.stepContainerSelectedFontColor = theme?.wizard?.fontColor ?? wizardTokens.stepContainerSelectedFontColor;

  return componentTokensCopy;
};

const ThemeProvider = ({ theme, advancedTheme, children }) => {
  const parsedTheme = useMemo(
    () => (theme && parseTheme(theme)) || (advancedTheme && parseAdvancedTheme(advancedTheme)),
    [theme, advancedTheme]
  );
  return (
    <Halstack>
      <ThemeContext.Provider value={parsedTheme}>{children}</ThemeContext.Provider>
    </Halstack>
  );
};

const Halstack = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
`;

export default ThemeContext;
export { ThemeProvider };
