import React, { useMemo } from "react";
import Color from "color";
import rgbHex from "rgb-hex";
import styled from "styled-components";
import { componentTokens, defaultTranslatedComponentLabels } from "./common/variables.js";

const HalstackContext = React.createContext<object | null>(null);
const HalstackLanguageContext = React.createContext<object | null>(null);

const addLightness = (hexColor, newLightness) => {
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

const subLightness = (hexColor, newLightness) => {
  try {
    if (hexColor) {
      const color = Color(hexColor);
      const hslColor = color.hsl();
      const lightnessColor = hslColor.color[2];
      return hslColor.lightness(lightnessColor - newLightness).hex();
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

  const buttonTokens = componentTokensCopy.button;
  buttonTokens.primaryFontColor = theme?.button?.primaryFontColor ?? buttonTokens.primaryFontColor;
  buttonTokens.primaryBackgroundColor = theme?.button?.baseColor ?? buttonTokens.primaryBackgroundColor;
  buttonTokens.secondaryFontColor = theme?.button?.baseColor ?? buttonTokens.secondaryFontColor;
  buttonTokens.secondaryHoverFontColor = theme?.button?.secondaryHoverFontColor ?? buttonTokens.secondaryHoverFontColor;
  buttonTokens.secondaryBorderColor = theme?.button?.baseColor ?? buttonTokens.secondaryBorderColor;
  buttonTokens.secondaryHoverBackgroundColor = theme?.button?.baseColor ?? buttonTokens.secondaryHoverBackgroundColor;
  buttonTokens.textFontColor = theme?.button?.baseColor ?? buttonTokens.textFontColor;
  buttonTokens.primaryHoverBackgroundColor =
    subLightness(theme?.button?.baseColor, 8) ?? buttonTokens.primaryHoverBackgroundColor;
  buttonTokens.primaryActiveBackgroundColor =
    subLightness(theme?.button?.baseColor, 18) ?? buttonTokens.primaryActiveBackgroundColor;
  buttonTokens.secondaryActiveBackgroundColor =
    subLightness(theme?.button?.baseColor, 18) ?? buttonTokens.secondaryActiveBackgroundColor;
  buttonTokens.textHoverBackgroundColor =
    addLightness(theme?.button?.baseColor, 57) ?? buttonTokens.textHoverBackgroundColor;
  buttonTokens.textActiveBackgroundColor =
    addLightness(theme?.button?.baseColor, 52) ?? buttonTokens.textActiveBackgroundColor;

  const checkboxTokens = componentTokensCopy.checkbox;
  checkboxTokens.backgroundColorChecked = theme?.checkbox?.baseColor ?? checkboxTokens.backgroundColorChecked;
  checkboxTokens.borderColor = theme?.checkbox?.baseColor ?? checkboxTokens.borderColor;
  checkboxTokens.checkColor = theme?.checkbox?.checkColor ?? checkboxTokens.checkColor;
  checkboxTokens.fontColor = theme?.checkbox?.fontColor ?? checkboxTokens.fontColor;
  checkboxTokens.hoverBackgroundColorChecked =
    subLightness(theme?.checkbox?.baseColor, 15) ?? checkboxTokens.hoverBackgroundColorChecked;
  checkboxTokens.hoverBorderColor = subLightness(theme?.checkbox?.baseColor, 15) ?? checkboxTokens.hoverBorderColor;

  const chipTokens = componentTokensCopy.chip;
  chipTokens.backgroundColor = theme?.chip?.baseColor ?? chipTokens.backgroundColor;
  chipTokens.fontColor = theme?.chip?.fontColor ?? chipTokens.fontColor;
  chipTokens.iconColor = theme?.chip?.fontColor ?? chipTokens.iconColor;

  const dateTokens = componentTokensCopy.dateInput;
  dateTokens.pickerSelectedDateBackgroundColor =
    theme?.dateInput?.selectedDateBackgroundColor ?? dateTokens.pickerSelectedDateBackgroundColor;
  dateTokens.pickerSelectedDateColor = theme?.dateInput?.selectedDateFontColor ?? dateTokens.pickerSelectedDateColor;
  dateTokens.pickerHoverDateBackgroundColor =
    setOpacity(theme?.dateInput?.selectedDateBackgroundColor, 0.34) ?? dateTokens.pickerHoverDateBackgroundColor;

  const dropdownTokens = componentTokensCopy.dropdown;
  dropdownTokens.buttonBackgroundColor = theme?.dropdown?.baseColor ?? dropdownTokens.buttonBackgroundColor;
  dropdownTokens.buttonFontColor = theme?.dropdown?.fontColor ?? dropdownTokens.buttonFontColor;
  dropdownTokens.optionFontColor = theme?.dropdown?.optionFontColor ?? dropdownTokens.optionFontColor;
  dropdownTokens.optionIconColor = theme?.dropdown?.optionFontColor ?? dropdownTokens.optionIconColor;
  dropdownTokens.hoverButtonBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.34) ?? dropdownTokens.hoverButtonBackgroundColor;
  dropdownTokens.activeButtonBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.7) ?? dropdownTokens.activeButtonBackgroundColor;
  dropdownTokens.hoverOptionBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.34) ?? dropdownTokens.hoverOptionBackgroundColor;
  dropdownTokens.activeOptionBackgroundColor =
    setOpacity(theme?.dropdown?.baseColor, 0.7) ?? dropdownTokens.activeOptionBackgroundColor;
  dropdownTokens.caretIconColor = theme?.dropdown?.fontColor ?? dropdownTokens.caretIconColor;
  dropdownTokens.buttonIconColor = theme?.dropdown?.fontColor ?? dropdownTokens.caretIconColor;

  const fileInputTokens = componentTokensCopy.fileInput;
  fileInputTokens.labelFontColor = theme?.fileInput?.fontColor ?? fileInputTokens.labelFontColor;
  fileInputTokens.helperTextFontColor = theme?.fileInput?.fontColor ?? fileInputTokens.helperTextFontColor;
  fileInputTokens.dropLabelFontColor = theme?.fileInput?.fontColor ?? fileInputTokens.dropLabelFontColor;
  fileInputTokens.fileNameFontColor = theme?.fileInput?.fontColor ?? fileInputTokens.fileNameFontColor;

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
  headerTokens.contentColor = theme?.header?.contentColor ?? headerTokens.contentColor;

  const paginatorTokens = componentTokensCopy.paginator;
  paginatorTokens.backgroundColor = theme?.paginator?.baseColor ?? paginatorTokens.backgroundColor;
  paginatorTokens.fontColor = theme?.paginator?.fontColor ?? paginatorTokens.fontColor;

  const progressBarTokens = componentTokensCopy.progressBar;
  progressBarTokens.trackLineColor = theme?.progressBar?.accentColor ?? progressBarTokens.trackLineColor;
  progressBarTokens.totalLineColor = theme?.progressBar?.baseColor ?? progressBarTokens.totalLineColor;
  progressBarTokens.labelFontColor = theme?.progressBar?.fontColor ?? progressBarTokens.labelFontColor;
  progressBarTokens.valueFontColor = theme?.progressBar?.fontColor ?? progressBarTokens.valueFontColor;
  progressBarTokens.helperTextFontColor = theme?.progressBar?.fontColor ?? progressBarTokens.helperTextFontColor;

  const quickNavTokens = componentTokensCopy.quickNav;
  quickNavTokens.fontColor = theme?.quickNav?.fontColor ?? quickNavTokens.fontColor;
  quickNavTokens.selectedFontColor = theme?.quickNav?.accentColor ?? quickNavTokens.selectedFontColor;
  quickNavTokens.hoverFontColor = setOpacity(theme?.quickNav?.accentColor, 0.7) ?? quickNavTokens.hoverFontColor;

  const radioGroupTokens = componentTokensCopy.radioGroup;
  radioGroupTokens.radioInputColor = theme?.radioGroup?.baseColor ?? radioGroupTokens.radioInputColor;
  radioGroupTokens.labelFontColor = theme?.radioGroup?.fontColor ?? radioGroupTokens.labelFontColor;
  radioGroupTokens.helperTextFontColor = theme?.radioGroup?.fontColor ?? radioGroupTokens.helperTextFontColor;
  radioGroupTokens.radioInputLabelFontColor = theme?.radioGroup?.fontColor ?? radioGroupTokens.radioInputLabelFontColor;

  const selectTokens = componentTokensCopy.select;
  selectTokens.selectedListOptionBackgroundColor =
    theme?.select?.selectedOptionBackgroundColor ?? selectTokens.selectedListOptionBackgroundColor;
  selectTokens.valueFontColor = theme?.select?.fontColor ?? selectTokens.valueFontColor;
  selectTokens.labelFontColor = theme?.select?.fontColor ?? selectTokens.labelFontColor;
  selectTokens.helperTextFontColor = theme?.select?.fontColor ?? selectTokens.helperTextFontColor;
  selectTokens.listOptionFontColor = theme?.select?.optionFontColor ?? selectTokens.optionFontColor;
  selectTokens.placeholderFontColor = setOpacity(theme?.select?.fontColor, 0.5) ?? selectTokens.placeholderFontColor;
  selectTokens.collapseIndicatorColor = theme?.select?.fontColor ?? selectTokens.collapseIndicatorColor;
  selectTokens.selectedHoverListOptionBackgroundColor =
    subLightness(theme?.select?.selectedOptionBackgroundColor, 5) ??
    selectTokens.selectedHoverListOptionBackgroundColor;
  selectTokens.selectedActiveListOptionBackgroundColor =
    subLightness(theme?.select?.selectedOptionBackgroundColor, 10) ??
    selectTokens.selectedActiveListOptionBackgroundColor;

  const sideNavTokens = componentTokensCopy.sidenav;
  sideNavTokens.backgroundColor = theme?.sidenav?.baseColor ?? sideNavTokens.backgroundColor;

  const sliderTokens = componentTokensCopy.slider;
  sliderTokens.labelFontColor = theme?.slider?.fontColor ?? sliderTokens.labelFontColor;
  sliderTokens.helperTextFontColor = theme?.slider?.fontColor ?? sliderTokens.helperTextFontColor;
  sliderTokens.limitValuesFontColor = theme?.slider?.fontColor ?? sliderTokens.limitValuesFontColor;
  sliderTokens.thumbBackgroundColor = theme?.slider?.baseColor ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.focusThumbBackgroundColor = theme?.slider?.baseColor ?? sliderTokens.focusThumbBackgroundColor;
  sliderTokens.tickBackgroundColor = theme?.slider?.baseColor ?? sliderTokens.tickBackgroundColor;
  sliderTokens.trackLineColor = theme?.slider?.baseColor ?? sliderTokens.trackLineColor;
  sliderTokens.hoverThumbBackgroundColor =
    subLightness(theme?.slider?.baseColor, 15) ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.activeThumbBackgroundColor =
    subLightness(theme?.slider?.baseColor, 15) ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.totalLineColor = setOpacity(theme?.slider?.baseColor, 0.34) ?? sliderTokens.totalLineColor;

  const spinnerTokens = componentTokensCopy.spinner;
  spinnerTokens.trackCircleColor = theme?.spinner?.accentColor ?? spinnerTokens.trackCircleColor;
  spinnerTokens.totalCircleColor = theme?.spinner?.baseColor ?? spinnerTokens.totalCircleColor;
  spinnerTokens.labelFontColor = theme?.spinner?.fontColor ?? spinnerTokens.labelFontColor;
  spinnerTokens.progressValueFontColor = theme?.spinner?.fontColor ?? spinnerTokens.progressValueFontColor;

  const switchTokens = componentTokensCopy.switch;
  switchTokens.checkedTrackBackgroundColor =
    theme?.switch?.checkedBaseColor ?? switchTokens.checkedTrackBackgroundColor;
  switchTokens.labelFontColor = theme?.switch?.fontColor ?? switchTokens.labelFontColor;
  switchTokens.disabledCheckedTrackBackgroundColor =
    setOpacity(theme?.switch?.checkedBaseColor, 0.34) ?? switchTokens.disabledCheckedTrackBackgroundColor;

  const tableTokens = componentTokensCopy.table;
  tableTokens.headerBackgroundColor = theme?.table?.baseColor ?? tableTokens.headerBackgroundColor;
  tableTokens.headerFontColor = theme?.table?.headerFontColor ?? tableTokens.headerFontColor;
  tableTokens.dataFontColor = theme?.table?.cellFontColor ?? tableTokens.dataFontColor;
  tableTokens.sortIconColor = theme?.table?.headerFontColor ?? tableTokens.sortIconColor;

  const tabsTokens = componentTokensCopy.tabs;
  tabsTokens.selectedFontColor = theme?.tabs?.baseColor ?? tabsTokens.selectedFontColor;
  tabsTokens.selectedIconColor = theme?.tabs?.baseColor ?? tabsTokens.selectedIconColor;
  tabsTokens.selectedUnderlineColor = theme?.tabs?.baseColor ?? tabsTokens.selectedUnderlineColor;
  tabsTokens.focusOutline = theme?.tabs?.baseColor ?? tabsTokens.focusOutline;
  tabsTokens.hoverBackgroundColor = addLightness(theme?.tabs?.baseColor, 58) ?? tabsTokens.hoverBackgroundColor;
  tabsTokens.pressedBackgroundColor = addLightness(theme?.tabs?.baseColor, 53) ?? tabsTokens.pressedBackgroundColor;

  const textInputTokens = componentTokensCopy.textInput;
  textInputTokens.labelFontColor = theme?.textInput?.fontColor ?? textInputTokens.labelFontColor;
  textInputTokens.helperTextFontColor = theme?.textInput?.fontColor ?? textInputTokens.helperTextFontColor;
  textInputTokens.valueFontColor = theme?.textInput?.fontColor ?? textInputTokens.valueFontColor;
  textInputTokens.actionIconColor = theme?.textInput?.fontColor ?? textInputTokens.actionIconColor;
  textInputTokens.hoverActionIconColor = theme?.textInput?.fontColor ?? textInputTokens.hoverActionIconColor;
  textInputTokens.focusActionIconColor = theme?.textInput?.fontColor ?? textInputTokens.focusActionIconColor;
  textInputTokens.activeActionIconColor = theme?.textInput?.fontColor ?? textInputTokens.activeActionIconColor;
  textInputTokens.suffixColor = setOpacity(theme?.textInput?.fontColor, 0.5) ?? textInputTokens.suffixColor;
  textInputTokens.prefixColor = setOpacity(theme?.textInput?.fontColor, 0.5) ?? textInputTokens.prefixColor;
  textInputTokens.placeholderFontColor =
    setOpacity(theme?.textInput?.fontColor, 0.5) ?? textInputTokens.placeholderFontColor;

  const toggleGroupTokens = componentTokensCopy.toggleGroup;
  toggleGroupTokens.selectedBackgroundColor =
    theme?.toggleGroup?.selectedBaseColor ?? buttonTokens.selectedBackgroundColor;
  toggleGroupTokens.selectedFontColor = theme?.toggleGroup?.selectedFontColor ?? toggleGroupTokens.selectedFontColor;
  toggleGroupTokens.unselectedBackgroundColor =
    theme?.toggleGroup?.unselectedBaseColor ?? toggleGroupTokens.unselectedBackgroundColor;
  toggleGroupTokens.unselectedActiveBackgroundColor =
    theme?.toggleGroup?.selectedBaseColor ?? toggleGroupTokens.unselectedActiveBackgroundColor;
  toggleGroupTokens.unselectedFontColor =
    theme?.toggleGroup?.unselectedFontColor ?? toggleGroupTokens.unselectedFontColor;
  toggleGroupTokens.selectedHoverBackgroundColor =
    subLightness(theme?.toggleGroup?.selectedBaseColor, 8) ?? buttonTokens.selectedHoverBackgroundColor;
  toggleGroupTokens.selectedActiveBackgroundColor =
    subLightness(theme?.toggleGroup?.selectedBaseColor, 18) ?? toggleGroupTokens.selectedActiveBackgroundColor;
  toggleGroupTokens.selectedDisabledBackgroundColor =
    addLightness(theme?.toggleGroup?.selectedBaseColor, 57) ?? toggleGroupTokens.selectedDisabledBackgroundColor;
  toggleGroupTokens.selectedDisabledFontColor =
    addLightness(theme?.toggleGroup?.selectedFontColor, 42) ?? toggleGroupTokens.selectedDisabledFontColor;
  toggleGroupTokens.unselectedHoverBackgroundColor =
    subLightness(theme?.toggleGroup?.unselectedBaseColor, 8) ?? toggleGroupTokens.unselectedHoverBackgroundColor;

  const wizardTokens = componentTokensCopy.wizard;
  wizardTokens.selectedStepBackgroundColor = theme?.wizard?.baseColor ?? wizardTokens.selectedStepBackgroundColor;
  wizardTokens.selectedStepFontColor = theme?.wizard?.fontColor ?? wizardTokens.selectedStepFontColor;
  wizardTokens.selectedStepBorderColor = theme?.wizard?.baseColor ?? wizardTokens.selectedStepBorderColor;
  wizardTokens.visitedLabelFontColor = theme?.wizard?.fontColor ?? wizardTokens.visitedLabelFontColor;
  wizardTokens.selectedLabelFontColor = theme?.wizard?.fontColor ?? wizardTokens.selectedLabelFontColor;
  wizardTokens.visitedHelperTextFontColor = theme?.wizard?.fontColor ?? wizardTokens.visitedHelperTextFontColor;
  wizardTokens.selectedHelperTextFontColor = theme?.wizard?.fontColor ?? wizardTokens.selectedHelperTextFontColor;
  wizardTokens.unvisitedStepBorderColor =
    setOpacity(theme?.wizard?.fontColor, 0.6) ?? wizardTokens.unvisitedStepBorderColor;
  wizardTokens.unvisitedStepFontColor =
    setOpacity(theme?.wizard?.fontColor, 0.6) ?? wizardTokens.unvisitedStepFontColor;
  wizardTokens.unvisitedLabelFontColor =
    setOpacity(theme?.wizard?.fontColor, 0.6) ?? wizardTokens.unvisitedLabelFontColor;
  wizardTokens.unvisitedHelperTextFontColor =
    setOpacity(theme?.wizard?.fontColor, 0.6) ?? wizardTokens.unvisitedHelperTextFontColor;

  return componentTokensCopy;
};

const parseLabels = (labels) => {
  const parsedLabels = defaultTranslatedComponentLabels;
  Object.keys(labels).map((component) => {
    if (parsedLabels[component]) {
      Object.keys(parsedLabels[component]).map((label) => {
        if (labels[component][label]) {
          parsedLabels[component][label] = labels[component][label];
        }
      });
    }
  });
  return parsedLabels;
};
type HalstackProviderPropsType = {
  theme?: object;
  advancedTheme?: object;
  labels?: object;
  children: React.ReactNode;
};
const HalstackProvider = ({ theme, advancedTheme, labels, children }: HalstackProviderPropsType): JSX.Element => {
  const parsedTheme = useMemo(
    () => (theme && parseTheme(theme)) || (advancedTheme && parseAdvancedTheme(advancedTheme)),
    [theme, advancedTheme]
  );
  const parsedLabels = useMemo(() => (labels && parseLabels(labels)) || defaultTranslatedComponentLabels, [labels]);

  return (
    <Halstack>
      <HalstackContext.Provider value={parsedTheme}>
        <HalstackLanguageContext.Provider value={parsedLabels}>{children}</HalstackLanguageContext.Provider>
      </HalstackContext.Provider>
    </Halstack>
  );
};

const Halstack = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
`;

export default HalstackContext;
export { HalstackProvider, HalstackLanguageContext };
