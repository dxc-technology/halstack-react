type TranslatedLabelsContextTypes = {
  formFields: {
    optionalLabel: string;
    requiredSelectionErrorMessage: string;
    requiredValueErrorMessage: string;
    formatRequestedErrorMessage: string;
    lengthErrorMessage: (minLength: number, maxLength: number) => string;
    logoAlternativeText: string;
  };
  applicationLayout: {
    visibilityToggleTitle: string;
  };
  alert: {
    infoTitleText: string;
    successTitleText: string;
    warningTitleText: string;
    errorTitleText: string;
  };
  dateInput: {
    invalidDateErrorMessage: string;
  };
  dialog: {
    closeIconAriaLabel: string;
  };
  fileInput: {
    fileSizeGreaterThanErrorMessage: string;
    fileSizeLessThanErrorMessage: string;
    multipleButtonLabelDefault: string;
    singleButtonLabelDefault: string;
    dropAreaButtonLabelDefault: string;
    multipleDropAreaLabelDefault: string;
    singleDropAreaLabelDefault: string;
    deleteFileActionTitle: string;
  };
  footer: {
    copyrightText: (year: number) => string;
  };
  header: {
    closeIcon: string;
    hamburguerTitle: string;
  };
  numberInput: {
    valueGreaterThanOrEqualToErrorMessage: (minLength: number) => string;
    valueLessThanOrEqualToErrorMessage: (maxLength: number) => string;
    decrementValueTitle: string;
    incrementValueTitle: string;
  };
  paginator: {
    itemsPerPageText: string;
    minToMaxOfText: (minNumberOfItems: number, maxNumberOfItems: number, totalItems: number) => string;
    goToPageText: string;
    pageOfText: (pageNumber: number, totalPagesNumber: number) => string;
  };
  passwordInput: {
    inputShowPasswordTitle: string;
    inputHidePasswordTitle: string;
  };
  quickNav: {
    contentTitle: string;
  };
  radioGroup: {
    optionalItemLabelDefault: string;
  };
  select: {
    noMatchesErrorMessage: string;
    actionClearSelectionTitle: string;
    actionClearSearchTitle: string;
  };
  tabs: {
    scrollLeft: string;
    scrollRight: string;
  };
  textInput: {
    clearFieldActionTitle: string;
    searchingMessage: string;
    fetchingDataErrorMessage: string;
  };
  calendar: {
    daysShort: string[];
    months: string[];
    previousMonthTitle: string;
    nextMonthTitle: string;
  };
};

export default TranslatedLabelsContextTypes;
