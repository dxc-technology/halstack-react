export const colors = {
  black: "#000000",
  lightBlack: "#212121",
  mediumBlack: "#000000B3",
  white: "#FFFFFF",
  darkWhite: "#EEEEEE",
  yellow: "#FFED00",
  darkGrey: "#666666",
  mediumGrey: "#00000033",
  lightGrey: "#D9D9D9",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  blue: "#005FCC",
  lighterGrey: "#F8F8F8",
  red: "#D0011B",
  purple: "#8800F6",
  darkBlue: "#006BF6",
  inherit: "inherit",
};

export const defaultTheme = {
  accordion: {
    arrowColor: colors.darkGrey,
  },
  button: {
    color: colors.yellow,
    hoverColor: colors.black,

    primaryFontColor: colors.black,
    primaryHoverFontColor: colors.yellow,

    secondaryFontColor: colors.black,
    secondaryHoverFontColor: colors.black,

    textFontColor: colors.black,
    textHoverFontColor: colors.white,
  },
  checkbox: {
    color: colors.yellow,
    checkColor: colors.black,
  },
  chip: {
    backgroundcolor: colors.darkWhite,
    outlinedColor: "",
    fontColor: colors.black,
  },
  date: {
    pickerSelectedDateBackgroundColor: colors.black,
    pickerSelectedDateColor: colors.yellow,
  },
  dropdown: {
    backgroundColor: colors.white,
    fontColor: colors.black,
  },
  footer: {
    backgroundColor: colors.black,
    fontColor: colors.white,
    lineColor: colors.yellow,
  },
  header: {
    backgroundColor: colors.black,
    underlinedColor: colors.black,
    textColor: colors.white,
    backgroundColorMenu: colors.lightGrey,
    textColorMenu: colors.black,
    hamburguerColor: colors.white,
  },
  inputText: {
    selectedOptionBackgroundColor: colors.lightGrey,
  },
  paginator: {
    paginatorBackgroundColor: colors.darkWhite,
    paginatorFontColor: colors.black,
  },
  progressBar: {
    trackLine: colors.yellow,
    totalLine: colors.black,
  },
  radio: {
    color: colors.black,
  },
  select: {
    selectedOptionBackgroundColor: colors.lightGrey,
  },
  sidenav: {
    backgroundColor: colors.lighterGrey,
    arrowContainerColor: colors.lightGrey,
    arrowColor: colors.black,
  },
  slider: {
    color: colors.black,
  },
  spinner: {
    trackLine: colors.yellow,
    totalCircle: colors.white,
  },
  switch: {
    checkedTrackBackgroundColor: colors.darkGrey,
  },
  table: {
    headerBackgroundColor: colors.black,
    headerTextColor: colors.white,
  },
  tabs: {
    selectedBackgroundColor: colors.white,
    selectedUnderlinedColor: colors.black,
    selectedColor: colors.black,
  },
  wizard: {
    selectedBackgroundColor: colors.yellow,
    selectedBackgroundFont: colors.black,
  },
};

export const theme = {
  accordion: {
    backgroundColor: colors.white,
    fontColor: colors.darkGrey,
    hoverFontColor: colors.black,
    arrowColor: colors.darkGrey,
    hoverBackgroundColor: "57",
    disabled: "57",
  },
  button: {
    color: colors.yellow,
    hoverColor: colors.black,

    primaryDisabledOpacity: 0.34,
    primaryFontColor: colors.black,
    primaryHoverFontColor: colors.yellow,

    secondaryDisabledOpacity: 0.34,
    secondaryBackgroundColor: colors.transparent,
    secondaryFontColor: colors.black,
    secondaryHoverFontColor: colors.black,

    textDisabledOpacity: 0.34,
    textBackgroundColor: colors.transparent,
    textFontColor: colors.black,
    textHoverFontColor: colors.lightGrey,
    focusColor: colors.blue,
  },
  box: {
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: colors.white,
  },
  checkbox: {
    color: colors.yellow,
    checkColor: colors.black,
    disabled: 0.34,
    disabledCheckColor: 0.34,
    fontColor: colors.black,
    focusColor: colors.blue,
  },
  chip: {
    backgroundcolor: colors.darkWhite,
    outlinedColor: "",
    fontColor: colors.black,
    disabled: 0.34,
  },
  date: {
    pickerSelectedDateBackgroundColor: colors.black,
    pickerSelectedDateColor: colors.yellow,
    pickerBackgroundColor: colors.white,
    pickerTextColor: colors.black,
    pickerActualDate: colors.lightGrey,
    pickerHoverDateBackgroundColor: "57",
    pickerHoverDateTextColor: colors.black,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
    focusColor: colors.blue,
  },
  dialog: {
    overlayColor: colors.black,
    overlayOpacity: "CC",
    separator: colors.lightGrey,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  dropdown: {
    backgroundColor: colors.white,
    fontColor: colors.black,

    dropdownBackgroundColor: colors.white,
    dropdownFontColor: colors.black,
    hoverBackgroundOption: "57",
    hoverBackgroundColor: "CC",
    disabled: 0.34,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
  },
  footer: {
    backgroundColor: colors.black,
    fontColor: colors.white,
    lineColor: colors.yellow,
  },
  header: {
    backgroundColor: colors.black,
    underlinedColor: colors.black,
    textColor: colors.white,
    backgroundColorMenu: colors.lightGrey,
    textColorMenu: colors.black,
    hamburguerColor: colors.white,
    hoverHamburguerColor: colors.darkGrey,
    overlayColor: colors.black,
    overlayOpacity: "B3",
  },
  inputText: {
    fontColor: colors.black,
    placeholderColor: colors.lightGrey,
    disabled: 0.34,
    error: colors.red,
    selectedOptionBackgroundColor: colors.lightGrey,
    hoverOptionBakcgroundColor: "57",
    hoverOptionColor: colors.black,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
  },
  link: {
    textColor: colors.blue,
    visitedtextColor: colors.purple,
    underlinedBackgroundColor: colors.blue,
    visitedUnderlinedBackgroundColor: colors.purple,
    disabledColor: colors.lightGrey,
    disabledUnderlinedBackgroundColor: colors.lightGrey,
    hoverTextColor: colors.darkBlue,
  },
  paginator: {
    paginatorBackgroundColor: colors.darkWhite,
    paginatorFontColor: colors.black,
  },
  progressBar: {
    trackLine: colors.yellow,
    totalLine: colors.black,
    text: colors.black,
    totalLineOpacity: "57",
  },
  radio: {
    color: colors.black,
    disabled: 0.34,
    fontColor: colors.inherit,
    focusColor: colors.blue,
  },
  select: {
    selectedOptionBackgroundColor: colors.lightGrey,
    color: colors.black,
    hoverOptionBackgroundColor: "57",
    error: colors.darkRed,
    scrollBarThumbColor: colors.darkGrey,
    scrollBarTrackColor: colors.lightGrey,
  },
  sidenav: {
    backgroundColor: colors.lighterGrey,
    arrowContainerColor: colors.lightGrey,
    arrowContainerOpacity: "CC",
    arrowColor: colors.black,
  },
  slider: {
    color: colors.black,
    totalLine: 0.34,
    disabledthumbBackgroundColor: 0.34,
    disableddotsBackgroundColor: 0.34,
    disabledTrackLine: 0.34,
    disabledtotalLine: 0.34,
  },
  spinner: {
    trackLine: colors.yellow,
    totalCircle: colors.white,
    text: colors.black,
    totalCircleOpacity: "57",
  },
  switch: {
    checkedTrackBackgroundColor: colors.darkGrey,
    checkedThumbBackgroundColor: colors.white,
    uncheckedThumbBackgroundColor: colors.white,
    uncheckedTrackBackgroundColor: colors.lightGrey,
    disabled: 0.34,
    fontColor: colors.black,
    focusColor: colors.blue,
  },
  table: {
    headerBackgroundColor: colors.black,
    headerFontColor: colors.white,
    separatorColor: colors.darkGrey,
    bodyBackgroundColor: colors.white,
    bodyFontColor: colors.black,
  },
  tabs: {
    selectedBackgroundColor: colors.white,
    selectedUnderlinedColor: colors.black,
    selectedColor: colors.black,
    backgroundColor: "57",
    underlinedColor: colors.lightGrey,
    textColor: colors.black,
    disabled: 0.34,
    focusColor: colors.blue,
  },
  tag: {
    backgroundColor: colors.white,
  },
  wizard: {
    selectedBackgroundColor: colors.yellow,
    selectedBackgroundFont: colors.black,
    borderColor: colors.black,
    fontColor: colors.black,
    lineColor: colors.lightGrey,
    disabledBackground: colors.darkWhite,
    disabledFont: colors.darkGrey,
  },
};

export const spaces = {
  xxsmall: "6px",
  xsmall: "16px",
  small: "24px",
  medium: "36px",
  large: "48px",
  xlarge: "64px",
  xxlarge: "100px",
};

export const responsiveSizes = {
  mobileSmall: "320",
  mobileMedium: "375",
  mobileLarge: "425",
  tablet: "768",
  laptop: "1024",
  desktop: "1440",
};

export const typeface = {
  body: {
    fontSize: "16px",
    letterSpacing: "0.5",
    textTransform: "initial",
  },
  altBody: {
    fontSize: "14px",
    letterSpacing: "0.25",
    textTransform: "initial",
  },
  subtitle: {
    fontSize: "16px",
    letterSpacing: "0.15",
    textTransform: "initial",
  },
  altSubtitle: {
    fontSize: "14px",
    letterSpacing: "0.1",
    textTransform: "initial",
  },
  caption: {
    fontSize: "12px",
    letterSpacing: "0.4",
    textTransform: "initial",
  },
  overline: {
    fontSize: "12px",
    letterSpacing: "2",
    textTransform: "uppercase",
  },
};
