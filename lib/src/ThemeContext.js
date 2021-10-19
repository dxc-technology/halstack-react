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
  accordionTokens.assistiveTextFontColor = theme?.accordion?.fontColor ?? accordionTokens.assistiveTextFontColor;
  accordionTokens.titleLabelFontColor = theme?.accordion?.fontColor ?? accordionTokens.titleLabelFontColor;
  accordionTokens.arrowColor = theme?.accordion?.accentColor ?? accordionTokens.arrowColor;
  accordionTokens.iconColor = theme?.accordion?.accentColor ?? accordionTokens.iconColor;
  accordionTokens.focusBorderColor = theme?.accordion?.accentColor ?? accordionTokens.focusBorderColor;
  accordionTokens.hoverBackgroundColor =
    setOpacity(theme?.accordion?.accentColor, 0.16) ?? accordionTokens.hoverBackgroundColor;
  accordionTokens.disabledAssistiveTextFontColor =
    setOpacity(theme?.accordion?.fontColor, 0.34) ?? accordionTokens.disabledAssistiveTextFontColor;
  accordionTokens.disabledTitleLabelFontColor =
    setOpacity(theme?.accordion?.fontColor, 0.34) ?? accordionTokens.disabledTitleLabelFontColor;
  accordionTokens.disabledArrowColor =
    setOpacity(theme?.accordion?.accentColor, 0.34) ?? accordionTokens.disabledArrowColor;
  accordionTokens.disabledIconColor =
    setOpacity(theme?.accordion?.accentColor, 0.34) ?? accordionTokens.disabledIconColor;

  const buttonTokens = componentTokensCopy.button;
  buttonTokens.primaryFontColor = theme?.button?.primaryFontColor ?? buttonTokens.primaryFontColor;
  buttonTokens.primaryActiveBackgroundColor = theme?.button?.baseColor ?? buttonTokens.primaryActiveBackgroundColor;
  buttonTokens.secondaryFontColor = setLightness(theme?.button?.baseColor, 18) ?? buttonTokens.secondaryFontColor;
  buttonTokens.secondaryActiveBackgroundColor = theme?.button?.baseColor ?? buttonTokens.secondaryActiveBackgroundColor;
  buttonTokens.secondaryBorderColor = setLightness(theme?.button?.baseColor, 18) ?? buttonTokens.secondaryBorderColor;
  buttonTokens.secondaryHoverFontColor = theme?.button?.secondaryHoverFontColor ?? buttonTokens.secondaryHoverFontColor;
  buttonTokens.textFontColor = setLightness(theme?.button?.baseColor, 18) ?? buttonTokens.textFontColor;
  buttonTokens.primaryBackgroundColor =
    setLightness(theme?.button?.baseColor, 18) ?? buttonTokens.primaryBackgroundColor;
  buttonTokens.primaryHoverBackgroundColor =
    setLightness(theme?.button?.baseColor, 10) ?? buttonTokens.primaryHoverBackgroundColor;
  buttonTokens.secondaryHoverBackgroundColor =
    setLightness(theme?.button?.baseColor, 18) ?? buttonTokens.secondaryHoverBackgroundColor;
  buttonTokens.textHoverBackgroundColor =
    setLightness(theme?.button?.baseColor, 75) ?? buttonTokens.textHoverBackgroundColor;
  buttonTokens.textActiveBackgroundColor =
    setLightness(theme?.button?.baseColor, 70) ?? buttonTokens.textHoverBackgroundColor;

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
  dropdownTokens.hoverButtonBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.34) ?? dropdownTokens.hoverButtonBackgroundColor;
  dropdownTokens.activeButtonBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.7) ?? dropdownTokens.activeButtonBackgroundColor;
  dropdownTokens.hoverOptionBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.34) ?? dropdownTokens.hoverOptionBackgroundColor;
  dropdownTokens.activeOptionBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.7) ?? dropdownTokens.activeOptionBackgroundColor;

  const footerTokens = componentTokensCopy.footer;
  footerTokens.backgroundColor = theme?.footer?.baseColor ?? footerTokens.backgroundColor;
  footerTokens.bottomLinksFontColor = theme?.footer?.fontColor ?? footerTokens.bottomLinksFontColor;
  footerTokens.copyrightFontColor = theme?.footer?.fontColor ?? footerTokens.copyrightFontColor;
  footerTokens.socialLinksColor = theme?.footer?.fontColor ?? footerTokens.socialLinksColor;
  footerTokens.bottomLinksDividerColor = theme?.footer?.accentColor ?? footerTokens.bottomLinksDividerColor;
  footerTokens.logo = theme?.footer?.logo ?? footerTokens.logo;

  const headerTokens = componentTokensCopy.header;
  headerTokens.backgroundColor = theme?.header?.baseColor ?? headerTokens.backgroundColor;
  headerTokens.underlinedColor = theme?.header?.accentColor ?? headerTokens.underlinedColor;
  headerTokens.menuBackgroundColor = theme?.header?.menuBaseColor ?? headerTokens.menuBackgroundColor;
  headerTokens.hamburguerFontColor = theme?.header?.fontColor ?? headerTokens.hamburguerFontColor;
  headerTokens.hamburguerIconColor = theme?.header?.hamburguerColor ?? headerTokens.hamburguerIconColor;
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
  selectTokens.hoverOptionBackgroundColor =
    setOpacity(theme?.select?.baseColor, 0.34) ?? selectTokens.hoverOptionBackgroundColor;

  const sideNavTokens = componentTokensCopy.sidenav;
  sideNavTokens.backgroundColor = theme?.sidenav?.baseColor ?? sideNavTokens.backgroundColor;
  sideNavTokens.arrowContainerColor =
    setOpacity(theme?.sidenav?.arrowBaseColor, 0.8) ?? sideNavTokens.arrowContainerColor;
  sideNavTokens.arrowColor = theme?.sidenav?.arrowAccentColor ?? sideNavTokens.arrowColor;

  const sliderTokens = componentTokensCopy.slider;
  sliderTokens.thumbBackgroundColor = theme?.slider?.baseColor ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.tickBackgroundColor = theme?.slider?.baseColor ?? sliderTokens.tickBackgroundColor;
  sliderTokens.trackLineColor = theme?.slider?.baseColor ?? sliderTokens.trackLineColor;
  sliderTokens.totalLineColor = setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.totalLineColor;
  sliderTokens.disabledThumbBackgroundColor =
    setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.disabledThumbBackgroundColor;
  sliderTokens.disabledTickBackgroundColor =
    setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.disabledTickBackgroundColor;
  sliderTokens.disabledTrackLineColor =
    setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.disabledTrackLineColor;

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
  toggleGroupTokens.selectedBackgroundColor =
    theme?.toggleGroup?.selectedBaseColor ?? toggleGroupTokens.selectedBackgroundColor;
  toggleGroupTokens.selectedHoverBackgroundColor =
    theme?.toggleGroup?.selectedHoverBaseColor ?? toggleGroupTokens.selectedHoverBackgroundColor;
  toggleGroupTokens.selectedActiveBackgroundColor =
    theme?.toggleGroup?.selectedActiveBaseColor ?? toggleGroupTokens.selectedActiveBackgroundColor;
  toggleGroupTokens.selectedFontColor = theme?.toggleGroup?.selectedFontColor ?? toggleGroupTokens.selectedFontColor;
  toggleGroupTokens.selectedDisabledBackgroundColor =
    setOpacity(theme?.toggleGroup?.selectedBaseColor, 0.34) ?? toggleGroupTokens.selectedDisabledBackgroundColor;
  toggleGroupTokens.selectedDisabledFontColor =
    setOpacity(theme?.toggleGroup?.selectedFontColor, 0.34) ?? toggleGroupTokens.selectedDisabledFontColor;
  toggleGroupTokens.unselectedBackgroundColor =
    theme?.toggleGroup?.unselectedBaseColor ?? toggleGroupTokens.unselectedBackgroundColor;
  toggleGroupTokens.unselectedHoverBackgroundColor =
    theme?.toggleGroup?.unselectedHoverBaseColor ?? toggleGroupTokens.unselectedHoverBackgroundColor;
  toggleGroupTokens.unselectedActiveBackgroundColor =
    theme?.toggleGroup?.unselectedActiveBaseColor ?? toggleGroupTokens.unselectedActiveBackgroundColor;
  toggleGroupTokens.unselectedFontColor =
    theme?.toggleGroup?.unselectedFontColor ?? toggleGroupTokens.unselectedFontColor;
  toggleGroupTokens.unselectedDisabledBackgroundColor =
    setOpacity(theme?.toggleGroup?.unselectedBaseColor, 0.34) ?? toggleGroupTokens.unselectedDisabledBackgroundColor;
  toggleGroupTokens.unselectedDisabledFontColor =
    setOpacity(theme?.toggleGroup?.unselectedFontColor, 0.34) ?? toggleGroupTokens.unselectedDisabledFontColor;

  const wizardTokens = componentTokensCopy.wizard;
  wizardTokens.stepContainerSelectedBackgroundColor =
    theme?.wizard?.baseColor ?? wizardTokens.stepContainerSelectedBackgroundColor;
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
