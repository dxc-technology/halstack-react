// TODO: Decide what do we do with this file with our new tokens strategy.

export const spaces = {
  xxsmall: "0.25rem", //  spacing_4
  xsmall: "0.5rem", //  spacing_8
  small: "0.75rem", //  spacing_12
  medium: "1rem", //  spacing_16
  large: "1.5rem", //  spacing_24
  xlarge: "2rem", //  spacing_32
  xxlarge: "3rem", //  spacing_48
};

export const responsiveSizes = {
  xsmall: "20",
  small: "30",
  medium: "45",
  large: "66",
  xlarge: "90",
};

export const defaultTranslatedComponentLabels = {
  applicationLayout: {
    visibilityToggleTitle: "Toggle sidenav visibility",
  },
  alert: {
    previousMessageActionTitle: "Previous message",
    nextMessageActionTitle: "Next message",
    closeAlertActionTitle: "Close alert",
    closeMessageActionTitle: "Close message",
  },
  calendar: {
    daysShort: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    previousMonthTitle: "Previous month",
    nextMonthTitle: "Next month",
  },
  dateInput: {
    invalidDateErrorMessage: "Invalid date.",
  },
  dialog: {
    closeIconAriaLabel: "Close dialog",
  },
  fileInput: {
    fileSizeGreaterThanErrorMessage: "File size must be greater than min size.",
    fileSizeLessThanErrorMessage: "File size must be less than max size.",
    multipleButtonLabelDefault: "Select files",
    singleButtonLabelDefault: "Select file",
    dropAreaButtonLabelDefault: "Select",
    multipleDropAreaLabelDefault: "or drop files",
    singleDropAreaLabelDefault: "or drop a file",
    deleteFileActionTitle: "Remove file",
  },
  footer: {
    copyrightText: (year: number) => `© DXC Technology ${year}. All rights reserved.`,
  },
  formFields: {
    optionalLabel: "(Optional)",
    requiredSelectionErrorMessage: "This field is required. Please, choose an option.",
    requiredValueErrorMessage: "This field is required. Please, enter a value.",
    formatRequestedErrorMessage: "Please match the format requested.",
    lengthErrorMessage: (minLength?: number, maxLength?: number) => `Min length ${minLength}, max length ${maxLength}.`,
    logoAlternativeText: "Logo",
  },
  header: {
    closeIcon: "Close menu",
    hamburgerTitle: "Menu",
  },
  numberInput: {
    valueGreaterThanOrEqualToErrorMessage: (value: number) => `Value must be greater than or equal to ${value}.`,
    valueLessThanOrEqualToErrorMessage: (value: number) => `Value must be less than or equal to ${value}.`,
    decrementValueTitle: "Decrement value",
    incrementValueTitle: "Increment value",
  },
  paginator: {
    itemsPerPageText: "Items per page: ",
    minToMaxOfText: (minNumberOfItems: number, maxNumberOfItems: number, totalItems: number) =>
      `${minNumberOfItems} to ${maxNumberOfItems} of ${totalItems}`,
    goToPageText: "Go to page:",
    pageOfText: (pageNumber: number, totalPagesNumber: number) => `Page: ${pageNumber} of ${totalPagesNumber}`,
    firstResultsTitle: "First results",
    previousResultsTitle: "Previous results",
    nextResultsTitle: "Next results",
    lastResultsTitle: "Last results",
  },
  passwordInput: {
    inputShowPasswordTitle: "Show password",
    inputHidePasswordTitle: "Hide password",
  },
  quickNav: {
    contentTitle: "Contents",
  },
  radioGroup: {
    optionalItemLabelDefault: "N/A",
  },
  searchBar: {
    clearFieldActionTitle: "Clear field",
    inputAriaLabel: "Search input",
    triggerTitle: "Search",
    cancelButtonLabel: "Cancel",
  },
  select: {
    actionClearSelectionTitle: "Clear selection",
    actionClearSearchTitle: "Clear search",
    noMatchesErrorMessage: "No matches found",
    selectAllLabel: "Select all",
  },
  tabs: {
    scrollLeft: "Scroll left",
    scrollRight: "Scroll right",
  },
  textInput: {
    clearFieldActionTitle: "Clear field",
    searchingMessage: "Searching...",
    fetchingDataErrorMessage: "Error fetching data",
  },
  toast: {
    clearToastActionTitle: "Clear toast",
  },
};

export type TranslatedLabels = typeof defaultTranslatedComponentLabels;
