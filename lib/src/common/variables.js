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
  lighterGrey: "#D9D9D980",
  darkRed: "#D0011B",
  lightRed: "#FF6161",
  lightBlue: "#CEE0F5",
  lightYellow: "#FCF2BD",
  lightPink: "#F9CFCF",
  lightGreen: "#DBF1C4",
  blue: "#005FCC"
};

export const defaultTheme = {
  button: {
    color: colors.yellow,
    hoverColor: colors.black,

    primaryFontColor: colors.black,
    primaryHoverBackgroundColor: colors.black,
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
  slider: {
    color: colors.black,
  },
};

export const theme = {
  button: {
    color: colors.yellow,
    hoverColor: colors.black,

    primaryDisabledOpacity: 0.34,
    primaryFontColor: colors.black,
    primaryHoverBackgroundColor: colors.black,
    primaryHoverFontColor: colors.yellow,

    secondaryDisabledOpacity: 0.34,
    secondaryBackgroundColor: "transparent",
    secondaryFontColor: colors.black,
    secondaryHoverFontColor: colors.black,

    textDisabledOpacity: 0.34,
    textBackgroundColor: "transparent",
    textFontColor: colors.black,
    textHoverFontColor: colors.lightGrey,
    focusColor: colors.blue,
  },
  checkbox: {
    color: colors.yellow,
    checkColor: colors.black,
    disabled: 0.34,
    disabledCheckColor: 0.34,
    fontColor: colors.black,
    focusColor: colors.blue
  },
  slider: {
    color: colors.black,
    totalLine: 0.34,
    disabledthumbBacgroundColor: 0.34,
    disableddotsBackgroundColor: 0.34,
    disabledTrackLine: 0.34,
    disabledtotalLine: 0.34,
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
