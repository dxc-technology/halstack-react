import { createContext, ReactNode, useMemo } from "react";
import Color from "color";
import {
  AdvancedTheme,
  OpinionatedTheme,
  TranslatedLabels,
  componentTokens,
  defaultTranslatedComponentLabels,
} from "./common/variables";

/**
 * This type is used to allow partial themes and labels objects to be passed to the HalstackProvider.
 * This is an extension of the already existing Partial type, which only allows one level of partiality.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: Partial<T[P]>;
};

const HalstackContext = createContext<AdvancedTheme>(componentTokens);
const HalstackLanguageContext = createContext<TranslatedLabels>(defaultTranslatedComponentLabels);

const addLightness = (newLightness: number, hexColor?: string) => {
  try {
    if (hexColor) {
      const color = Color(hexColor);
      const hslColor = color.hsl();
      const lightnessColor = hslColor.lightness();
      return hslColor.lightness(lightnessColor + newLightness).hex();
    }
    return null;
  } catch (e) {
    return null;
  }
};

const subLightness = (newLightness: number, hexColor?: string) => {
  try {
    if (hexColor) {
      const color = Color(hexColor);
      const hslColor = color.hsl();
      const lightnessColor = hslColor.lightness();
      return hslColor.lightness(lightnessColor - newLightness).hex();
    }
    return null;
  } catch (e) {
    return null;
  }
};

const parseTheme = (theme: DeepPartial<OpinionatedTheme>): AdvancedTheme => {
  const componentTokensCopy: AdvancedTheme = JSON.parse(JSON.stringify(componentTokens));

  const accordionTokens = componentTokensCopy.accordion;
  accordionTokens.assistiveTextFontColor =
    theme.accordion?.assistiveTextFontColor ?? accordionTokens.assistiveTextFontColor;
  accordionTokens.subLabelFontColor = theme.accordion?.subLabelFontColor ?? accordionTokens.subLabelFontColor;
  accordionTokens.titleLabelFontColor = theme.accordion?.titleFontColor ?? accordionTokens.titleLabelFontColor;
  accordionTokens.arrowColor = theme.accordion?.accentColor ?? accordionTokens.arrowColor;
  accordionTokens.iconColor = theme.accordion?.accentColor ?? accordionTokens.iconColor;
  accordionTokens.hoverBackgroundColor =
    addLightness(57, theme.accordion?.accentColor) ?? accordionTokens.hoverBackgroundColor;

  const buttonTokens = componentTokensCopy.button;
  buttonTokens.primaryDefaultFontColor = theme.button?.primaryFontColor ?? buttonTokens.primaryDefaultFontColor;
  buttonTokens.primaryDefaultBackgroundColor = theme.button?.baseColor ?? buttonTokens.primaryDefaultBackgroundColor;
  buttonTokens.secondaryDefaultFontColor = theme.button?.baseColor ?? buttonTokens.secondaryDefaultFontColor;
  buttonTokens.secondaryHoverDefaultFontColor =
    theme.button?.secondaryHoverFontColor ?? buttonTokens.secondaryHoverDefaultFontColor;
  buttonTokens.secondaryDefaultBorderColor = theme.button?.baseColor ?? buttonTokens.secondaryDefaultBorderColor;
  buttonTokens.secondaryHoverDefaultBackgroundColor =
    theme.button?.baseColor ?? buttonTokens.secondaryHoverDefaultBackgroundColor;
  buttonTokens.tertiaryDefaultFontColor = theme.button?.baseColor ?? buttonTokens.tertiaryDefaultFontColor;
  buttonTokens.primaryHoverDefaultBackgroundColor =
    subLightness(8, theme.button?.baseColor) ?? buttonTokens.primaryHoverDefaultBackgroundColor;
  buttonTokens.primaryActiveDefaultBackgroundColor =
    subLightness(18, theme.button?.baseColor) ?? buttonTokens.primaryActiveDefaultBackgroundColor;
  buttonTokens.secondaryActiveDefaultBackgroundColor =
    subLightness(18, theme.button?.baseColor) ?? buttonTokens.secondaryActiveDefaultBackgroundColor;
  buttonTokens.tertiaryHoverDefaultBackgroundColor =
    addLightness(57, theme.button?.baseColor) ?? buttonTokens.tertiaryHoverDefaultBackgroundColor;
  buttonTokens.tertiaryActiveDefaultBackgroundColor =
    addLightness(52, theme.button?.baseColor) ?? buttonTokens.tertiaryActiveDefaultBackgroundColor;
  buttonTokens.primaryDisabledDefaultBackgroundColor =
    addLightness(42, theme.button?.baseColor) ?? buttonTokens.primaryDisabledDefaultBackgroundColor;
  buttonTokens.primaryDisabledDefaultFontColor =
    addLightness(42, theme.button?.primaryFontColor) ?? buttonTokens.primaryDisabledDefaultFontColor;
  buttonTokens.secondaryDisabledDefaultBorderColor =
    addLightness(42, theme.button?.baseColor) ?? buttonTokens.secondaryDisabledDefaultBorderColor;
  buttonTokens.secondaryDisabledDefaultFontColor =
    addLightness(42, theme.button?.baseColor) ?? buttonTokens.secondaryDisabledDefaultFontColor;
  buttonTokens.tertiaryDisabledDefaultFontColor =
    addLightness(42, theme.button?.baseColor) ?? buttonTokens.tertiaryDisabledDefaultFontColor;

  const checkboxTokens = componentTokensCopy.checkbox;
  checkboxTokens.backgroundColorChecked = theme.checkbox?.baseColor ?? checkboxTokens.backgroundColorChecked;
  checkboxTokens.borderColor = theme.checkbox?.baseColor ?? checkboxTokens.borderColor;
  checkboxTokens.checkColor = theme.checkbox?.checkColor ?? checkboxTokens.checkColor;
  checkboxTokens.fontColor = theme.checkbox?.fontColor ?? checkboxTokens.fontColor;
  checkboxTokens.hoverBackgroundColorChecked =
    subLightness(15, theme.checkbox?.baseColor) ?? checkboxTokens.hoverBackgroundColorChecked;
  checkboxTokens.hoverBorderColor = subLightness(15, theme.checkbox?.baseColor) ?? checkboxTokens.hoverBorderColor;

  const chipTokens = componentTokensCopy.chip;
  chipTokens.backgroundColor = theme.chip?.baseColor ?? chipTokens.backgroundColor;
  chipTokens.fontColor = theme.chip?.fontColor ?? chipTokens.fontColor;
  chipTokens.iconColor = theme.chip?.iconColor ?? chipTokens.iconColor;
  chipTokens.hoverIconColor = subLightness(10, theme.chip?.iconColor) ?? chipTokens.hoverIconColor;
  chipTokens.activeIconColor = subLightness(30, theme.chip?.iconColor) ?? chipTokens.activeIconColor;

  const contextualMenuTokens = componentTokensCopy.contextualMenu;
  contextualMenuTokens.selectedMenuItemBackgroundColor =
    theme.contextualMenu?.accentColor ?? contextualMenuTokens.selectedMenuItemBackgroundColor;
  contextualMenuTokens.hoverSelectedMenuItemBackgroundColor =
    subLightness(5, theme.contextualMenu?.accentColor) ?? contextualMenuTokens.hoverSelectedMenuItemBackgroundColor;
  contextualMenuTokens.activeSelectedMenuItemBackgroundColor =
    subLightness(5, theme.contextualMenu?.accentColor) ?? contextualMenuTokens.activeSelectedMenuItemBackgroundColor;
  contextualMenuTokens.backgroundColor = theme.contextualMenu?.baseColor ?? contextualMenuTokens.backgroundColor;
  contextualMenuTokens.hoverMenuItemBackgroundColor =
    subLightness(5, theme.contextualMenu?.baseColor) ?? contextualMenuTokens.hoverMenuItemBackgroundColor;
  contextualMenuTokens.activeMenuItemBackgroundColor =
    subLightness(5, theme.contextualMenu?.baseColor) ?? contextualMenuTokens.activeMenuItemBackgroundColor;
  contextualMenuTokens.menuItemFontColor = theme.contextualMenu?.fontColor ?? contextualMenuTokens.menuItemFontColor;
  contextualMenuTokens.sectionTitleFontColor =
    theme.contextualMenu?.fontColor ?? contextualMenuTokens.sectionTitleFontColor;
  contextualMenuTokens.iconColor = theme.contextualMenu?.iconColor ?? contextualMenuTokens.iconColor;

  const dataGridTokens = componentTokensCopy.dataGrid;
  dataGridTokens.headerBackgroundColor = theme.dataGrid?.baseColor ?? dataGridTokens.headerBackgroundColor;
  dataGridTokens.headerFontColor = theme.dataGrid?.headerFontColor ?? dataGridTokens.headerFontColor;
  dataGridTokens.dataFontColor = theme.dataGrid?.cellFontColor ?? dataGridTokens.dataFontColor;
  dataGridTokens.headerCheckboxCheckColor = theme.dataGrid?.baseColor ?? dataGridTokens.headerCheckboxCheckColor;
  dataGridTokens.actionIconColor = theme.dataGrid?.baseColor ?? dataGridTokens.actionIconColor;
  dataGridTokens.hoverActionIconColor = theme.dataGrid?.baseColor ?? dataGridTokens.hoverActionIconColor;
  dataGridTokens.focusActionIconColor = theme.dataGrid?.baseColor ?? dataGridTokens.focusActionIconColor;
  dataGridTokens.activeActionIconColor = theme.dataGrid?.baseColor ?? dataGridTokens.activeActionIconColor;

  const dateTokens = componentTokensCopy.dateInput;
  dateTokens.pickerSelectedBackgroundColor = theme.dateInput?.baseColor ?? dateTokens.pickerSelectedBackgroundColor;
  dateTokens.pickerSelectedFontColor = theme.dateInput?.selectedFontColor ?? dateTokens.pickerSelectedFontColor;
  dateTokens.pickerActiveBackgroundColor =
    subLightness(8, theme.dateInput?.baseColor) ?? dateTokens.pickerActiveBackgroundColor;
  dateTokens.pickerActiveFontColor = theme.dateInput?.selectedFontColor ?? dateTokens.pickerActiveFontColor;
  dateTokens.pickerCurrentYearFontColor = theme.dateInput?.baseColor ?? dateTokens.pickerCurrentYearFontColor;
  dateTokens.pickerHeaderActiveBackgroundColor =
    subLightness(8, theme.dateInput?.baseColor) ?? dateTokens.pickerHeaderActiveBackgroundColor;
  dateTokens.pickerHeaderActiveFontColor = theme.dateInput?.selectedFontColor ?? dateTokens.pickerHeaderActiveFontColor;
  dateTokens.pickerHoverBackgroundColor =
    addLightness(52, theme.dateInput?.baseColor) ?? dateTokens.pickerHoverBackgroundColor;
  dateTokens.pickerCurrentDateBorderColor =
    addLightness(42, theme.dateInput?.baseColor) ?? dateTokens.pickerCurrentDateBorderColor;
  dateTokens.pickerHeaderHoverBackgroundColor =
    addLightness(52, theme.dateInput?.baseColor) ?? dateTokens.pickerHeaderHoverBackgroundColor;

  const dialogTokens = componentTokensCopy.dialog;
  dialogTokens.backgroundColor = theme.dialog?.baseColor ?? dialogTokens.backgroundColor;
  dialogTokens.closeIconColor = theme.dialog?.closeIconColor ?? dialogTokens.closeIconColor;
  dialogTokens.overlayColor = theme.dialog?.overlayColor ?? dialogTokens.overlayColor;

  const dropdownTokens = componentTokensCopy.dropdown;
  dropdownTokens.buttonBackgroundColor = theme.dropdown?.baseColor ?? dropdownTokens.buttonBackgroundColor;
  dropdownTokens.buttonFontColor = theme.dropdown?.fontColor ?? dropdownTokens.buttonFontColor;
  dropdownTokens.buttonIconColor = theme.dropdown?.fontColor ?? dropdownTokens.caretIconColor;
  dropdownTokens.caretIconColor = theme.dropdown?.fontColor ?? dropdownTokens.caretIconColor;
  dropdownTokens.optionFontColor = theme.dropdown?.optionFontColor ?? dropdownTokens.optionFontColor;
  dropdownTokens.optionIconColor = theme.dropdown?.optionFontColor ?? dropdownTokens.optionIconColor;
  dropdownTokens.hoverButtonBackgroundColor =
    subLightness(5, theme.dropdown?.baseColor) ?? dropdownTokens.hoverButtonBackgroundColor;
  dropdownTokens.activeButtonBackgroundColor =
    subLightness(12, theme.dropdown?.baseColor) ?? dropdownTokens.activeButtonBackgroundColor;
  dropdownTokens.hoverOptionBackgroundColor =
    subLightness(5, theme.dropdown?.baseColor) ?? dropdownTokens.hoverOptionBackgroundColor;
  dropdownTokens.activeOptionBackgroundColor =
    subLightness(20, theme.dropdown?.baseColor) ?? dropdownTokens.activeOptionBackgroundColor;

  const fileInputTokens = componentTokensCopy.fileInput;
  fileInputTokens.labelFontColor = theme.fileInput?.fontColor ?? fileInputTokens.labelFontColor;
  fileInputTokens.helperTextFontColor = theme.fileInput?.fontColor ?? fileInputTokens.helperTextFontColor;
  fileInputTokens.dropLabelFontColor = theme.fileInput?.fontColor ?? fileInputTokens.dropLabelFontColor;
  fileInputTokens.fileNameFontColor = theme.fileInput?.fontColor ?? fileInputTokens.fileNameFontColor;

  const footerTokens = componentTokensCopy.footer;
  footerTokens.backgroundColor = theme.footer?.baseColor ?? footerTokens.backgroundColor;
  footerTokens.bottomLinksFontColor = theme.footer?.fontColor ?? footerTokens.bottomLinksFontColor;
  footerTokens.copyrightFontColor = theme.footer?.fontColor ?? footerTokens.copyrightFontColor;
  footerTokens.socialLinksColor = theme.footer?.fontColor ?? footerTokens.socialLinksColor;
  footerTokens.bottomLinksDividerColor = theme.footer?.accentColor ?? footerTokens.bottomLinksDividerColor;
  footerTokens.logo = theme.footer?.logo ?? footerTokens.logo;

  const headerTokens = componentTokensCopy.header;
  headerTokens.backgroundColor = theme.header?.baseColor ?? headerTokens.backgroundColor;
  headerTokens.underlinedColor = theme.header?.accentColor ?? headerTokens.underlinedColor;
  headerTokens.menuBackgroundColor = theme.header?.menuBaseColor ?? headerTokens.menuBackgroundColor;
  headerTokens.hamburgerFontColor = theme.header?.fontColor ?? headerTokens.hamburgerFontColor;
  headerTokens.hamburgerIconColor = theme.header?.hamburgerColor ?? headerTokens.hamburgerIconColor;
  headerTokens.hamburgerHoverColor = addLightness(90, theme.header?.hamburgerColor) ?? headerTokens.hamburgerHoverColor;
  headerTokens.logo = theme.header?.logo ?? headerTokens.logo;
  headerTokens.logoResponsive = theme.header?.logoResponsive ?? headerTokens.logoResponsive;
  headerTokens.contentColor = theme.header?.contentColor ?? headerTokens.contentColor;
  headerTokens.overlayColor = theme.header?.overlayColor ?? headerTokens.overlayColor;

  const linkTokens = componentTokensCopy.link;
  linkTokens.visitedFontColor = theme.link?.baseColor ?? linkTokens.visitedFontColor;
  linkTokens.visitedUnderlineColor = theme.link?.baseColor ?? linkTokens.visitedUnderlineColor;

  const navTabsTokens = componentTokensCopy.navTabs;
  navTabsTokens.selectedFontColor = theme.navTabs?.baseColor ?? navTabsTokens.selectedFontColor;
  navTabsTokens.unselectedFontColor = theme.navTabs?.baseColor ?? navTabsTokens.selectedFontColor;
  navTabsTokens.selectedIconColor = theme.navTabs?.baseColor ?? navTabsTokens.selectedIconColor;
  navTabsTokens.unselectedIconColor = theme.navTabs?.baseColor ?? navTabsTokens.selectedIconColor;
  navTabsTokens.selectedUnderlineColor = theme.navTabs?.accentColor ?? navTabsTokens.selectedUnderlineColor;
  navTabsTokens.hoverBackgroundColor = addLightness(55, theme.navTabs?.baseColor) ?? navTabsTokens.hoverBackgroundColor;
  navTabsTokens.pressedBackgroundColor =
    addLightness(50, theme.navTabs?.baseColor) ?? navTabsTokens.pressedBackgroundColor;

  const paginatorTokens = componentTokensCopy.paginator;
  paginatorTokens.backgroundColor = theme.paginator?.baseColor ?? paginatorTokens.backgroundColor;
  paginatorTokens.fontColor = theme.paginator?.fontColor ?? paginatorTokens.fontColor;

  const progressBarTokens = componentTokensCopy.progressBar;
  progressBarTokens.trackLineColor = theme.progressBar?.accentColor ?? progressBarTokens.trackLineColor;
  progressBarTokens.totalLineColor = theme.progressBar?.baseColor ?? progressBarTokens.totalLineColor;
  progressBarTokens.labelFontColor = theme.progressBar?.fontColor ?? progressBarTokens.labelFontColor;
  progressBarTokens.valueFontColor = theme.progressBar?.fontColor ?? progressBarTokens.valueFontColor;
  progressBarTokens.helperTextFontColor = theme.progressBar?.fontColor ?? progressBarTokens.helperTextFontColor;
  progressBarTokens.overlayColor = theme.progressBar?.overlayColor ?? progressBarTokens.overlayColor;
  progressBarTokens.overlayFontColor = theme.progressBar?.overlayFontColor ?? progressBarTokens.overlayFontColor;

  const quickNavTokens = componentTokensCopy.quickNav;
  quickNavTokens.fontColor = theme.quickNav?.fontColor ?? quickNavTokens.fontColor;
  quickNavTokens.hoverFontColor = theme.quickNav?.accentColor ?? quickNavTokens.hoverFontColor;

  const radioGroupTokens = componentTokensCopy.radioGroup;
  radioGroupTokens.radioInputColor = theme.radioGroup?.baseColor ?? radioGroupTokens.radioInputColor;
  radioGroupTokens.labelFontColor = theme.radioGroup?.fontColor ?? radioGroupTokens.labelFontColor;
  radioGroupTokens.helperTextFontColor = theme.radioGroup?.fontColor ?? radioGroupTokens.helperTextFontColor;
  radioGroupTokens.radioInputLabelFontColor = theme.radioGroup?.fontColor ?? radioGroupTokens.radioInputLabelFontColor;
  radioGroupTokens.hoverRadioInputColor =
    subLightness(10, theme.radioGroup?.baseColor) ?? radioGroupTokens.radioInputColor;
  radioGroupTokens.activeRadioInputColor =
    subLightness(25, theme.radioGroup?.baseColor) ?? radioGroupTokens.radioInputColor;

  const selectTokens = componentTokensCopy.select;
  selectTokens.selectedListOptionBackgroundColor =
    theme.select?.selectedOptionBackgroundColor ?? selectTokens.selectedListOptionBackgroundColor;
  selectTokens.valueFontColor = theme.select?.fontColor ?? selectTokens.valueFontColor;
  selectTokens.labelFontColor = theme.select?.fontColor ?? selectTokens.labelFontColor;
  selectTokens.helperTextFontColor = theme.select?.fontColor ?? selectTokens.helperTextFontColor;
  selectTokens.listOptionFontColor = theme.select?.optionFontColor ?? selectTokens.listOptionFontColor;
  selectTokens.listOptionIconColor = theme.select?.optionFontColor ?? selectTokens.listOptionIconColor;
  selectTokens.placeholderFontColor = addLightness(30, theme.select?.fontColor) ?? selectTokens.placeholderFontColor;
  selectTokens.collapseIndicatorColor = theme.select?.fontColor ?? selectTokens.collapseIndicatorColor;
  selectTokens.hoverInputBorderColor = theme.select?.hoverBorderColor ?? selectTokens.hoverInputBorderColor;
  selectTokens.selectedHoverListOptionBackgroundColor =
    subLightness(5, theme.select?.selectedOptionBackgroundColor) ?? selectTokens.selectedHoverListOptionBackgroundColor;
  selectTokens.selectedActiveListOptionBackgroundColor =
    subLightness(15, theme.select?.selectedOptionBackgroundColor) ??
    selectTokens.selectedActiveListOptionBackgroundColor;

  const sideNavTokens = componentTokensCopy.sidenav;
  sideNavTokens.backgroundColor = theme.sidenav?.baseColor ?? sideNavTokens.backgroundColor;

  const sliderTokens = componentTokensCopy.slider;
  sliderTokens.labelFontColor = theme.slider?.fontColor ?? sliderTokens.labelFontColor;
  sliderTokens.helperTextFontColor = theme.slider?.fontColor ?? sliderTokens.helperTextFontColor;
  sliderTokens.limitValuesFontColor = theme.slider?.fontColor ?? sliderTokens.limitValuesFontColor;
  sliderTokens.thumbBackgroundColor = theme.slider?.baseColor ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.focusThumbBackgroundColor = theme.slider?.baseColor ?? sliderTokens.focusThumbBackgroundColor;
  sliderTokens.tickBackgroundColor = theme.slider?.baseColor ?? sliderTokens.tickBackgroundColor;
  sliderTokens.trackLineColor = theme.slider?.baseColor ?? sliderTokens.trackLineColor;
  sliderTokens.totalLineColor = theme.slider?.totalLineColor ?? sliderTokens.totalLineColor;
  sliderTokens.hoverThumbBackgroundColor =
    subLightness(15, theme.slider?.baseColor) ?? sliderTokens.thumbBackgroundColor;
  sliderTokens.activeThumbBackgroundColor =
    subLightness(15, theme.slider?.baseColor) ?? sliderTokens.thumbBackgroundColor;

  const spinnerTokens = componentTokensCopy.spinner;
  spinnerTokens.trackCircleColor = theme.spinner?.accentColor ?? spinnerTokens.trackCircleColor;
  spinnerTokens.totalCircleColor = theme.spinner?.baseColor ?? spinnerTokens.totalCircleColor;
  spinnerTokens.trackCircleColorOverlay = theme.spinner?.overlayColor ?? spinnerTokens.trackCircleColorOverlay;
  spinnerTokens.labelFontColor = theme.spinner?.fontColor ?? spinnerTokens.labelFontColor;
  spinnerTokens.progressValueFontColor = theme.spinner?.fontColor ?? spinnerTokens.progressValueFontColor;
  spinnerTokens.overlayLabelFontColor = theme.spinner?.overlayFontColor ?? spinnerTokens.overlayLabelFontColor;
  spinnerTokens.overlayProgressValueFontColor =
    theme.spinner?.overlayFontColor ?? spinnerTokens.overlayProgressValueFontColor;

  const switchTokens = componentTokensCopy.switch;
  switchTokens.checkedTrackBackgroundColor = theme.switch?.checkedBaseColor ?? switchTokens.checkedTrackBackgroundColor;
  switchTokens.labelFontColor = theme.switch?.fontColor ?? switchTokens.labelFontColor;
  switchTokens.disabledCheckedTrackBackgroundColor =
    addLightness(57, theme.switch?.checkedBaseColor) ?? switchTokens.disabledCheckedTrackBackgroundColor;

  const tableTokens = componentTokensCopy.table;
  tableTokens.headerBackgroundColor = theme.table?.baseColor ?? tableTokens.headerBackgroundColor;
  tableTokens.headerFontColor = theme.table?.headerFontColor ?? tableTokens.headerFontColor;
  tableTokens.dataFontColor = theme.table?.cellFontColor ?? tableTokens.dataFontColor;
  tableTokens.sortIconColor = theme.table?.headerFontColor ?? tableTokens.sortIconColor;
  tableTokens.actionIconColor = theme.table?.baseColor ?? tableTokens.actionIconColor;
  tableTokens.hoverActionIconColor = theme.table?.baseColor ?? tableTokens.hoverActionIconColor;
  tableTokens.focusActionIconColor = theme.table?.baseColor ?? tableTokens.focusActionIconColor;
  tableTokens.activeActionIconColor = theme.table?.baseColor ?? tableTokens.activeActionIconColor;

  const tabsTokens = componentTokensCopy.tabs;
  tabsTokens.selectedFontColor = theme.tabs?.baseColor ?? tabsTokens.selectedFontColor;
  tabsTokens.selectedIconColor = theme.tabs?.baseColor ?? tabsTokens.selectedIconColor;
  tabsTokens.selectedUnderlineColor = theme.tabs?.baseColor ?? tabsTokens.selectedUnderlineColor;
  tabsTokens.focusOutline = theme.tabs?.baseColor ?? tabsTokens.focusOutline;
  tabsTokens.hoverBackgroundColor = addLightness(57, theme.tabs?.baseColor) ?? tabsTokens.hoverBackgroundColor;
  tabsTokens.pressedBackgroundColor = addLightness(52, theme.tabs?.baseColor) ?? tabsTokens.pressedBackgroundColor;

  const tagTokens = componentTokensCopy.tag;
  tagTokens.fontColor = theme.tag?.fontColor ?? tagTokens.fontColor;
  tagTokens.iconColor = theme.tag?.iconColor ?? tagTokens.iconColor;

  const textInputTokens = componentTokensCopy.textInput;
  textInputTokens.labelFontColor = theme.textInput?.fontColor ?? textInputTokens.labelFontColor;
  textInputTokens.helperTextFontColor = theme.textInput?.fontColor ?? textInputTokens.helperTextFontColor;
  textInputTokens.valueFontColor = theme.textInput?.fontColor ?? textInputTokens.valueFontColor;
  textInputTokens.actionIconColor = theme.textInput?.fontColor ?? textInputTokens.actionIconColor;
  textInputTokens.hoverActionIconColor = theme.textInput?.fontColor ?? textInputTokens.hoverActionIconColor;
  textInputTokens.focusActionIconColor = theme.textInput?.fontColor ?? textInputTokens.focusActionIconColor;
  textInputTokens.activeActionIconColor = theme.textInput?.fontColor ?? textInputTokens.activeActionIconColor;
  textInputTokens.hoverBorderColor = theme.textInput?.hoverBorderColor ?? textInputTokens.hoverBorderColor;
  textInputTokens.suffixColor = addLightness(40, theme.textInput?.fontColor) ?? textInputTokens.suffixColor;
  textInputTokens.prefixColor = addLightness(40, theme.textInput?.fontColor) ?? textInputTokens.prefixColor;
  textInputTokens.placeholderFontColor =
    addLightness(30, theme.textInput?.fontColor) ?? textInputTokens.placeholderFontColor;

  const textareaTokens = componentTokensCopy.textarea;
  textareaTokens.labelFontColor = theme.textarea?.fontColor ?? textareaTokens.labelFontColor;
  textareaTokens.helperTextFontColor = theme.textarea?.fontColor ?? textareaTokens.helperTextFontColor;
  textareaTokens.valueFontColor = theme.textarea?.fontColor ?? textareaTokens.valueFontColor;
  textareaTokens.hoverBorderColor = theme.textarea?.hoverBorderColor ?? textareaTokens.hoverBorderColor;
  textareaTokens.placeholderFontColor =
    addLightness(30, theme.textarea?.fontColor) ?? textareaTokens.placeholderFontColor;

  const toggleGroupTokens = componentTokensCopy.toggleGroup;
  toggleGroupTokens.selectedBackgroundColor =
    theme.toggleGroup?.selectedBaseColor ?? toggleGroupTokens.selectedBackgroundColor;
  toggleGroupTokens.selectedFontColor = theme.toggleGroup?.selectedFontColor ?? toggleGroupTokens.selectedFontColor;
  toggleGroupTokens.unselectedBackgroundColor =
    theme.toggleGroup?.unselectedBaseColor ?? toggleGroupTokens.unselectedBackgroundColor;
  toggleGroupTokens.unselectedActiveBackgroundColor =
    theme.toggleGroup?.selectedBaseColor ?? toggleGroupTokens.unselectedActiveBackgroundColor;
  toggleGroupTokens.unselectedFontColor =
    theme.toggleGroup?.unselectedFontColor ?? toggleGroupTokens.unselectedFontColor;
  toggleGroupTokens.selectedHoverBackgroundColor =
    subLightness(8, theme.toggleGroup?.selectedBaseColor) ?? toggleGroupTokens.selectedHoverBackgroundColor;
  toggleGroupTokens.selectedActiveBackgroundColor =
    subLightness(18, theme.toggleGroup?.selectedBaseColor) ?? toggleGroupTokens.selectedActiveBackgroundColor;
  toggleGroupTokens.selectedDisabledBackgroundColor =
    addLightness(57, theme.toggleGroup?.selectedBaseColor) ?? toggleGroupTokens.selectedDisabledBackgroundColor;
  toggleGroupTokens.selectedDisabledFontColor =
    addLightness(42, theme.toggleGroup?.selectedBaseColor) ?? toggleGroupTokens.selectedDisabledFontColor;
  toggleGroupTokens.unselectedHoverBackgroundColor =
    subLightness(10, theme.toggleGroup?.unselectedBaseColor) ?? toggleGroupTokens.unselectedHoverBackgroundColor;

  const wizardTokens = componentTokensCopy.wizard;
  wizardTokens.selectedStepBackgroundColor = theme.wizard?.baseColor ?? wizardTokens.selectedStepBackgroundColor;
  wizardTokens.selectedStepFontColor = theme.wizard?.selectedStepFontColor ?? wizardTokens.selectedStepFontColor;
  wizardTokens.selectedStepBorderColor = theme.wizard?.baseColor ?? wizardTokens.selectedStepBorderColor;
  wizardTokens.visitedLabelFontColor = theme.wizard?.fontColor ?? wizardTokens.visitedLabelFontColor;
  wizardTokens.selectedLabelFontColor = theme.wizard?.fontColor ?? wizardTokens.selectedLabelFontColor;
  wizardTokens.visitedHelperTextFontColor = theme.wizard?.fontColor ?? wizardTokens.visitedHelperTextFontColor;
  wizardTokens.selectedHelperTextFontColor = theme.wizard?.fontColor ?? wizardTokens.selectedHelperTextFontColor;
  wizardTokens.unvisitedStepBorderColor =
    addLightness(40, theme.wizard?.fontColor) ?? wizardTokens.unvisitedStepBorderColor;
  wizardTokens.unvisitedStepFontColor =
    addLightness(40, theme.wizard?.fontColor) ?? wizardTokens.unvisitedStepFontColor;
  wizardTokens.unvisitedLabelFontColor =
    addLightness(40, theme.wizard?.fontColor) ?? wizardTokens.unvisitedLabelFontColor;
  wizardTokens.unvisitedHelperTextFontColor =
    addLightness(40, theme.wizard?.fontColor) ?? wizardTokens.unvisitedHelperTextFontColor;

  return componentTokensCopy;
};

const parseAdvancedTheme = (advancedTheme: DeepPartial<AdvancedTheme>): AdvancedTheme => {
  const allTokensCopy: AdvancedTheme = JSON.parse(JSON.stringify(componentTokens));

  (Object.keys(allTokensCopy) as (keyof AdvancedTheme)[]).forEach((component) => {
    const componentTheme = advancedTheme[component];
    if (componentTheme != null) {
      (Object.keys(componentTheme) as (keyof typeof componentTheme)[]).forEach((objectKey) => {
        if (componentTheme[objectKey]) {
          allTokensCopy[component][objectKey] = componentTheme[objectKey];
        }
      });
    }
  });
  return allTokensCopy;
};

const parseLabels = (labels: DeepPartial<TranslatedLabels>): TranslatedLabels => {
  const parsedLabels = defaultTranslatedComponentLabels;
  (Object.keys(labels) as (keyof TranslatedLabels)[]).forEach((component) => {
    if (parsedLabels[component]) {
      const componentLabels = labels[component];
      if (componentLabels != null) {
        (Object.keys(parsedLabels[component]) as (keyof typeof componentLabels)[]).forEach((label) => {
          if (componentLabels[label]) {
            parsedLabels[component][label] = componentLabels[label];
          }
        });
      }
    }
  });
  return parsedLabels;
};

type HalstackProviderPropsType = {
  theme?: DeepPartial<OpinionatedTheme>;
  advancedTheme?: DeepPartial<AdvancedTheme>;
  labels?: DeepPartial<TranslatedLabels>;
  children: ReactNode;
};
const HalstackProvider = ({ theme, advancedTheme, labels, children }: HalstackProviderPropsType): JSX.Element => {
  const parsedTheme = useMemo(
    () => (theme ? parseTheme(theme) : advancedTheme ? parseAdvancedTheme(advancedTheme) : null),
    [theme, advancedTheme]
  );
  const parsedLabels = useMemo(() => (labels ? parseLabels(labels) : null), [labels]);

  return (
    <>
      {parsedTheme ? (
        <HalstackContext.Provider value={parsedTheme}>
          {parsedLabels ? (
            <HalstackLanguageContext.Provider value={parsedLabels}>{children}</HalstackLanguageContext.Provider>
          ) : (
            children
          )}
        </HalstackContext.Provider>
      ) : parsedLabels ? (
        <HalstackLanguageContext.Provider value={parsedLabels}>{children}</HalstackLanguageContext.Provider>
      ) : (
        children
      )}
    </>
  );
};

export { HalstackContext as default, HalstackProvider, HalstackLanguageContext };
