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

  const alertTokens = componentTokensCopy.alert;
  alertTokens.infoBackgroundColor = theme?.alert?.baseColor ?? alertTokens.infoBackgroundColor;
  alertTokens.infoIconColor = theme?.alert?.accentColor ?? alertTokens.infoIconColor;
  alertTokens.infoBorderColor = theme?.alert?.accentColor ?? alertTokens.infoBorderColor;
  alertTokens.overlayColor = theme?.alert?.overlayColor ?? alertTokens.overlayColor;

  const accordionTokens = componentTokensCopy.accordion;
  accordionTokens.assistiveTextFontColor =
    theme?.accordion?.assistiveTextFontColor ?? accordionTokens.assistiveTextFontColor;
  accordionTokens.titleLabelFontColor = theme?.accordion?.titleFontColor ?? accordionTokens.titleLabelFontColor;
  accordionTokens.arrowColor = theme?.accordion?.accentColor ?? accordionTokens.arrowColor;
  accordionTokens.iconColor = theme?.accordion?.accentColor ?? accordionTokens.iconColor;
  accordionTokens.hoverBackgroundColor =
    addLightness(theme?.accordion?.accentColor, 57) ?? accordionTokens.hoverBackgroundColor;

  const boxTokens = componentTokensCopy.box;
  boxTokens.backgroundColor = theme?.box?.baseColor ?? boxTokens.backgroundColor;

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
  chipTokens.iconColor = theme?.chip?.iconColor ?? chipTokens.iconColor;

  const dateTokens = componentTokensCopy.dateInput;
  dateTokens.pickerSelectedBackgroundColor = theme?.dateInput?.baseColor ?? dateTokens.pickerSelectedBackgroundColor;
  dateTokens.pickerSelectedFontColor = theme?.dateInput?.selectedFontColor ?? dateTokens.pickerSelectedFontColor;
  dateTokens.pickerActiveBackgroundColor =
    subLightness(theme?.dateInput?.baseColor, 8) ?? dateTokens.pickerActiveBackgroundColor;
  dateTokens.pickerActiveFontColor = theme?.dateInput?.selectedFontColor ?? dateTokens.pickerActiveFontColor;
  dateTokens.pickerCurrentYearFontColor = theme?.dateInput?.baseColor ?? dateTokens.pickerCurrentYearFontColor;
  dateTokens.pickerHeaderActiveBackgroundColor =
    subLightness(theme?.dateInput?.baseColor, 8) ?? dateTokens.pickerHeaderActiveBackgroundColor;
  dateTokens.pickerHeaderActiveFontColor =
    theme?.dateInput?.selectedFontColor ?? dateTokens.pickerHeaderActiveFontColor;
  dateTokens.pickerHoverBackgroundColor =
    addLightness(theme?.dateInput?.baseColor, 52) ?? dateTokens.pickerHoverBackgroundColor;
  dateTokens.pickerCurrentDateBorderColor =
    addLightness(theme?.dateInput?.baseColor, 42) ?? dateTokens.pickerCurrentDateBorderColor;
  dateTokens.pickerHeaderHoverBackgroundColor =
    addLightness(theme?.dateInput?.baseColor, 52) ?? dateTokens.pickerHeaderHoverBackgroundColor;

  const dialogTokens = componentTokensCopy.dialog;
  dialogTokens.backgroundColor = theme?.dialog?.baseColor ?? dialogTokens.backgroundColor;
  dialogTokens.closeIconColor = theme?.dialog?.closeIconColor ?? dialogTokens.closeIconColor;
  dialogTokens.overlayColor = theme?.dialog?.overlayColor ?? dialogTokens.overlayColor;

  const dropdownTokens = componentTokensCopy.dropdown;
  dropdownTokens.buttonBackgroundColor = theme?.dropdown?.baseColor ?? dropdownTokens.buttonBackgroundColor;
  dropdownTokens.buttonFontColor = theme?.dropdown?.fontColor ?? dropdownTokens.buttonFontColor;
  dropdownTokens.buttonIconColor = theme?.dropdown?.fontColor ?? dropdownTokens.caretIconColor;
  dropdownTokens.caretIconColor = theme?.dropdown?.fontColor ?? dropdownTokens.caretIconColor;
  dropdownTokens.optionFontColor = theme?.dropdown?.optionFontColor ?? dropdownTokens.optionFontColor;
  dropdownTokens.optionIconColor = theme?.dropdown?.optionFontColor ?? dropdownTokens.optionIconColor;
  dropdownTokens.hoverButtonBackgroundColor =
    subLightness(theme?.dropdown?.baseColor, 5) ?? dropdownTokens.hoverButtonBackgroundColor;
  dropdownTokens.activeButtonBackgroundColor =
    subLightness(theme?.dropdown?.baseColor, 12) ?? dropdownTokens.activeButtonBackgroundColor;
  dropdownTokens.hoverOptionBackgroundColor =
    subLightness(theme?.dropdown?.baseColor, 5) ?? dropdownTokens.hoverOptionBackgroundColor;
  dropdownTokens.activeOptionBackgroundColor =
    subLightness(theme?.dropdown?.baseColor, 20) ?? dropdownTokens.activeOptionBackgroundColor;

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
    addLightness(theme?.header?.hamburguerColor, 90) ?? headerTokens.hamburguerHoverColor;
  headerTokens.logo = theme?.header?.logo ?? headerTokens.logo;
  headerTokens.logoResponsive = theme?.header?.logoResponsive ?? headerTokens.logoResponsive;
  headerTokens.contentColor = theme?.header?.contentColor ?? headerTokens.contentColor;
  headerTokens.overlayColor = theme?.header?.overlayColor ?? headerTokens.overlayColor;

  const linkTokens = componentTokensCopy.link;
  linkTokens.visitedFontColor = theme?.link?.baseColor ?? linkTokens.visitedFontColor;
  linkTokens.visitedUnderlineColor = theme?.link?.baseColor ?? linkTokens.visitedUnderlineColor;

  const paginatorTokens = componentTokensCopy.paginator;
  paginatorTokens.backgroundColor = theme?.paginator?.baseColor ?? paginatorTokens.backgroundColor;
  paginatorTokens.fontColor = theme?.paginator?.fontColor ?? paginatorTokens.fontColor;

  const progressBarTokens = componentTokensCopy.progressBar;
  progressBarTokens.trackLineColor = theme?.progressBar?.accentColor ?? progressBarTokens.trackLineColor;
  progressBarTokens.totalLineColor = theme?.progressBar?.baseColor ?? progressBarTokens.totalLineColor;
  progressBarTokens.labelFontColor = theme?.progressBar?.fontColor ?? progressBarTokens.labelFontColor;
  progressBarTokens.valueFontColor = theme?.progressBar?.fontColor ?? progressBarTokens.valueFontColor;
  progressBarTokens.helperTextFontColor = theme?.progressBar?.fontColor ?? progressBarTokens.helperTextFontColor;
  progressBarTokens.overlayColor = theme?.progressBar?.overlayColor ?? progressBarTokens.overlayColor;
  progressBarTokens.overlayFontColor = theme?.progressBar?.overlayFontColor ?? progressBarTokens.overlayFontColor;

  const quickNavTokens = componentTokensCopy.quickNav;
  quickNavTokens.fontColor = theme?.quickNav?.fontColor ?? quickNavTokens.fontColor;
  quickNavTokens.hoverFontColor = theme?.quickNav?.accentColor ?? quickNavTokens.hoverFontColor;

  const radioGroupTokens = componentTokensCopy.radioGroup;
  radioGroupTokens.radioInputColor = theme?.radioGroup?.baseColor ?? radioGroupTokens.radioInputColor;
  radioGroupTokens.labelFontColor = theme?.radioGroup?.fontColor ?? radioGroupTokens.labelFontColor;
  radioGroupTokens.helperTextFontColor = theme?.radioGroup?.fontColor ?? radioGroupTokens.helperTextFontColor;
  radioGroupTokens.radioInputLabelFontColor = theme?.radioGroup?.fontColor ?? radioGroupTokens.radioInputLabelFontColor;
  radioGroupTokens.hoverRadioInputColor =
    subLightness(theme?.radioGroup?.baseColor, 10) ?? radioGroupTokens.radioInputColor;
  radioGroupTokens.activeRadioInputColor =
    subLightness(theme?.radioGroup?.baseColor, 25) ?? radioGroupTokens.radioInputColor;

  const selectTokens = componentTokensCopy.select;
  selectTokens.selectedListOptionBackgroundColor =
    theme?.select?.selectedOptionBackgroundColor ?? selectTokens.selectedListOptionBackgroundColor;
  selectTokens.valueFontColor = theme?.select?.fontColor ?? selectTokens.valueFontColor;
  selectTokens.labelFontColor = theme?.select?.fontColor ?? selectTokens.labelFontColor;
  selectTokens.helperTextFontColor = theme?.select?.fontColor ?? selectTokens.helperTextFontColor;
  selectTokens.listOptionFontColor = theme?.select?.optionFontColor ?? selectTokens.optionFontColor;
  selectTokens.placeholderFontColor = addLightness(theme?.select?.fontColor, 30) ?? selectTokens.placeholderFontColor;
  selectTokens.collapseIndicatorColor = theme?.select?.fontColor ?? selectTokens.collapseIndicatorColor;
  selectTokens.hoverInputBorderColor = theme?.select?.hoverBorderColor ?? selectTokens.hoverInputBorderColor;
  selectTokens.selectedHoverListOptionBackgroundColor =
    subLightness(theme?.select?.selectedOptionBackgroundColor, 5) ??
    selectTokens.selectedHoverListOptionBackgroundColor;
  selectTokens.selectedActiveListOptionBackgroundColor =
    subLightness(theme?.select?.selectedOptionBackgroundColor, 15) ??
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
  sliderTokens.totalLineColor = theme?.slider?.totalLineColor ?? sliderTokens.totalLineColor;
  sliderTokens.hoverThumbBackgroundColor =
    subLightness(theme?.slider?.baseColor, 15) ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.activeThumbBackgroundColor =
    subLightness(theme?.slider?.baseColor, 15) ?? sliderTokens.thumbBackgroundColor;

  const spinnerTokens = componentTokensCopy.spinner;
  spinnerTokens.trackCircleColor = theme?.spinner?.accentColor ?? spinnerTokens.trackCircleColor;
  spinnerTokens.totalCircleColor = theme?.spinner?.baseColor ?? spinnerTokens.totalCircleColor;
  spinnerTokens.trackCircleColorOverlay = theme?.spinner?.overlayColor ?? spinnerTokens.trackCircleColorOverlay;
  spinnerTokens.labelFontColor = theme?.spinner?.fontColor ?? spinnerTokens.labelFontColor;
  spinnerTokens.progressValueFontColor = theme?.spinner?.fontColor ?? spinnerTokens.progressValueFontColor;
  spinnerTokens.overlayLabelFontColor = theme?.spinner?.overlayFontColor ?? spinnerTokens.overlayLabelFontColor;
  spinnerTokens.overlayProgressValueFontColor =
    theme?.spinner?.overlayFontColor ?? spinnerTokens.overlayProgressValueFontColor;

  const switchTokens = componentTokensCopy.switch;
  switchTokens.checkedTrackBackgroundColor =
    theme?.switch?.checkedBaseColor ?? switchTokens.checkedTrackBackgroundColor;
  switchTokens.labelFontColor = theme?.switch?.fontColor ?? switchTokens.labelFontColor;
  switchTokens.disabledCheckedTrackBackgroundColor =
    addLightness(theme?.switch?.checkedBaseColor, 57) ?? switchTokens.disabledCheckedTrackBackgroundColor;

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
  tabsTokens.hoverBackgroundColor = addLightness(theme?.tabs?.baseColor, 57) ?? tabsTokens.hoverBackgroundColor;
  tabsTokens.pressedBackgroundColor = addLightness(theme?.tabs?.baseColor, 52) ?? tabsTokens.pressedBackgroundColor;

  const tagTokens = componentTokensCopy.tag;
  tagTokens.fontColor = theme?.tag?.fontColor ?? tagTokens.fontColor;
  tagTokens.iconColor = theme?.tag?.iconColor ?? tagTokens.iconColor;

  const textInputTokens = componentTokensCopy.textInput;
  textInputTokens.labelFontColor = theme?.textInput?.fontColor ?? textInputTokens.labelFontColor;
  textInputTokens.helperTextFontColor = theme?.textInput?.fontColor ?? textInputTokens.helperTextFontColor;
  textInputTokens.valueFontColor = theme?.textInput?.fontColor ?? textInputTokens.valueFontColor;
  textInputTokens.actionIconColor = theme?.textInput?.fontColor ?? textInputTokens.actionIconColor;
  textInputTokens.hoverActionIconColor = theme?.textInput?.fontColor ?? textInputTokens.hoverActionIconColor;
  textInputTokens.focusActionIconColor = theme?.textInput?.fontColor ?? textInputTokens.focusActionIconColor;
  textInputTokens.activeActionIconColor = theme?.textInput?.fontColor ?? textInputTokens.activeActionIconColor;
  textInputTokens.hoverBorderColor = theme?.textInput?.hoverBorderColor ?? textInputTokens.hoverBorderColor;
  textInputTokens.suffixColor = addLightness(theme?.textInput?.fontColor, 40) ?? textInputTokens.suffixColor;
  textInputTokens.prefixColor = addLightness(theme?.textInput?.fontColor, 40) ?? textInputTokens.prefixColor;
  textInputTokens.placeholderFontColor =
    addLightness(theme?.textInput?.fontColor, 30) ?? textInputTokens.placeholderFontColor;

  const textareaTokens = componentTokensCopy.textarea;
  textareaTokens.labelFontColor = theme?.textarea?.fontColor ?? textareaTokens.labelFontColor;
  textareaTokens.helperTextFontColor = theme?.textarea?.fontColor ?? textareaTokens.helperTextFontColor;
  textareaTokens.valueFontColor = theme?.textarea?.fontColor ?? textareaTokens.valueFontColor;
  textareaTokens.hoverBorderColor = theme?.textarea?.hoverBorderColor ?? textareaTokens.hoverBorderColor;
  textareaTokens.placeholderFontColor =
    addLightness(theme?.textarea?.fontColor, 30) ?? textareaTokens.placeholderFontColor;

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
    addLightness(theme?.toggleGroup?.selectedBaseColor, 42) ?? toggleGroupTokens.selectedDisabledFontColor;
  toggleGroupTokens.unselectedHoverBackgroundColor =
    subLightness(theme?.toggleGroup?.unselectedBaseColor, 10) ?? toggleGroupTokens.unselectedHoverBackgroundColor;

  const wizardTokens = componentTokensCopy.wizard;
  wizardTokens.selectedStepBackgroundColor = theme?.wizard?.baseColor ?? wizardTokens.selectedStepBackgroundColor;
  wizardTokens.selectedStepFontColor = theme?.wizard?.selectedStepFontColor ?? wizardTokens.selectedStepFontColor;
  wizardTokens.selectedStepBorderColor = theme?.wizard?.baseColor ?? wizardTokens.selectedStepBorderColor;
  wizardTokens.visitedLabelFontColor = theme?.wizard?.fontColor ?? wizardTokens.visitedLabelFontColor;
  wizardTokens.selectedLabelFontColor = theme?.wizard?.fontColor ?? wizardTokens.selectedLabelFontColor;
  wizardTokens.visitedHelperTextFontColor = theme?.wizard?.fontColor ?? wizardTokens.visitedHelperTextFontColor;
  wizardTokens.selectedHelperTextFontColor = theme?.wizard?.fontColor ?? wizardTokens.selectedHelperTextFontColor;
  wizardTokens.unvisitedStepBorderColor =
    addLightness(theme?.wizard?.fontColor, 40) ?? wizardTokens.unvisitedStepBorderColor;
  wizardTokens.unvisitedStepFontColor =
    addLightness(theme?.wizard?.fontColor, 40) ?? wizardTokens.unvisitedStepFontColor;
  wizardTokens.unvisitedLabelFontColor =
    addLightness(theme?.wizard?.fontColor, 40) ?? wizardTokens.unvisitedLabelFontColor;
  wizardTokens.unvisitedHelperTextFontColor =
    addLightness(theme?.wizard?.fontColor, 40) ?? wizardTokens.unvisitedHelperTextFontColor;

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
