import styled, { ThemeProvider } from "styled-components";
import { AdvancedTheme, spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import useTheme from "../useTheme";
import ButtonPropsType from "./types";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";

const DxcButton = ({
  label = "",
  mode = "primary",
  semantic = "default",
  disabled = false,
  iconPosition = "before",
  title,
  type = "button",
  icon,
  onClick = () => {},
  margin,
  size = { height: "large", width: "fitContent" },
  tabIndex = 0,
}: ButtonPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.button}>
      <Tooltip label={title}>
        <Button
          aria-label={title}
          disabled={disabled}
          onClick={() => {
            onClick();
          }}
          tabIndex={disabled ? -1 : tabIndex}
          type={type}
          $mode={mode}
          hasLabel={label ? true : false}
          hasIcon={icon ? true : false}
          iconPosition={iconPosition}
          size={size}
          margin={margin}
          semantic={semantic}
        >
          {label && <LabelContainer>{label}</LabelContainer>}
          {icon && (
            <IconContainer size={size}>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</IconContainer>
          )}
        </Button>
      </Tooltip>
    </ThemeProvider>
  );
};

const widths = {
  small: "42px",
  medium: "120px",
  large: "240px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin: ButtonPropsType["margin"], size: ButtonPropsType["size"]) =>
  size?.width === "fillParent"
    ? `calc(${widths[size?.width]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : widths[size?.width];

const getHeight = (height: ButtonPropsType["size"]["height"]) => {
  switch (height) {
    case "small":
      return 1.5;
    case "medium":
      return 2;
    case "large":
      return 2.5;
    default:
      return 2.5;
  }
};

const getButtonStyles = (
  $mode: ButtonPropsType["mode"],
  semantic: ButtonPropsType["semantic"],
  theme: AdvancedTheme["button"],
  size: ButtonPropsType["size"]
) => {
  let enabled = "";
  let hover = "";
  let active = "";
  let focus = "";
  let disabled = "";

  let commonPrimaryStyles = `
    font-weight: ${theme.primaryFontWeight};
    font-size: ${size?.height === "small" ? theme.primarySmallFontSize : size?.height === "medium" ? theme.primaryMediumFontSize : theme.primaryLargeFontSize};
    font-family: ${theme.primaryFontFamily};
    border-radius: ${theme.primaryBorderRadius};
    border-width ${theme.primaryBorderThickness};
    border-style: ${theme.primaryBorderStyle};`;

  let commonSecondaryStyles = `
    font-weight: ${theme.secondaryFontWeight};
    font-size: ${size?.height === "small" ? theme.secondarySmallFontSize : size?.height === "medium" ? theme.secondaryMediumFontSize : theme.secondaryLargeFontSize};
    font-family: ${theme.secondaryFontFamily};
    border-radius: ${theme.secondaryBorderRadius};
    border-width ${theme.secondaryBorderThickness};
    border-style: ${theme.secondaryBorderStyle};`;

  let commonTertiaryStyles = `
    font-weight: ${theme.tertiaryFontWeight};
    font-size: ${size?.height === "small" ? theme.tertiarySmallFontSize : size?.height === "medium" ? theme.tertiaryMediumFontSize : theme.tertiaryLargeFontSize};
    font-family: ${theme.tertiaryFontFamily};
    border-radius: ${theme.tertiaryBorderRadius};
    border-width ${theme.tertiaryBorderThickness};
    border-style: ${theme.tertiaryBorderStyle};`;

  switch ($mode) {
    case "primary":
      switch (semantic) {
        case "default":
          enabled = `background-color: ${theme.primaryDefaultBackgroundColor};
          color: ${theme.primaryDefaultFontColor};`;
          hover = `background-color: ${theme.primaryHoverDefaultBackgroundColor};`;
          active = `background-color: ${theme.primaryActiveDefaultBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.primaryDisabledDefaultBackgroundColor};
          color: ${theme.primaryDisabledDefaultFontColor};`;
          break;
        case "error":
          enabled = `background-color: ${theme.primaryErrorBackgroundColor};
          color: ${theme.primaryErrorFontColor};`;
          hover = `background-color: ${theme.primaryHoverErrorBackgroundColor};`;
          active = `background-color: ${theme.primaryActiveErrorBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.primaryDisabledErrorBackgroundColor};
          color: ${theme.primaryDisabledErrorFontColor};`;
          break;
        case "warning":
          enabled = `background-color: ${theme.primaryWarningBackgroundColor};
          color: ${theme.primaryWarningFontColor};`;
          hover = `background-color: ${theme.primaryHoverWarningBackgroundColor};`;
          active = `background-color: ${theme.primaryActiveWarningBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.primaryDisabledWarningBackgroundColor};
          color: ${theme.primaryDisabledWarningFontColor};`;
          break;
        case "success":
          enabled = `background-color: ${theme.primarySuccessBackgroundColor};
          color: ${theme.primarySuccessFontColor};`;
          hover = `background-color: ${theme.primaryHoverSuccessBackgroundColor};`;
          active = `background-color: ${theme.primaryActiveSuccessBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.primaryDisabledSuccessBackgroundColor};
          color: ${theme.primaryDisabledSuccessFontColor};`;
          break;
        case "info":
          enabled = `background-color: ${theme.primaryInfoBackgroundColor};
          color: ${theme.primaryInfoFontColor};`;
          hover = `background-color: ${theme.primaryHoverInfoBackgroundColor};`;
          active = `background-color: ${theme.primaryActiveInfoBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.primaryDisabledInfoBackgroundColor};
          color: ${theme.primaryDisabledInfoFontColor};`;
          break;
        default:
          enabled = `background-color: ${theme.primaryDefaultBackgroundColor};
          color: ${theme.primaryDefaultFontColor};`;
          break;
      }
      return `${commonPrimaryStyles}
        ${enabled}
        &:hover {
          ${hover}
        }
        &:active {
          ${active}
        }
        &:focus {
          ${focus}
        }
        &:disabled {
          ${disabled}
        }`;

    case "secondary":
      switch (semantic) {
        case "default":
          enabled = `background-color: ${theme.secondaryDefaultBackgroundColor};
          color: ${theme.secondaryDefaultFontColor};
          border-color ${theme.secondaryDefaultBorderColor};`;
          hover = `background-color: ${theme.secondaryHoverDefaultBackgroundColor};
          color: ${theme.secondaryHoverDefaultFontColor};`;
          active = `background-color: ${theme.secondaryActiveDefaultBackgroundColor};
          color: ${theme.secondaryHoverDefaultFontColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          focus = `border-color: transparent;`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.secondaryDisabledDefaultBackgroundColor};
          color: ${theme.secondaryDisabledDefaultFontColor};
          border-color: ${theme.secondaryDisabledDefaultBorderColor};`;
          break;
        case "error":
          enabled = `background-color: ${theme.secondaryErrorBackgroundColor};
          color: ${theme.secondaryErrorFontColor};
          border-color ${theme.secondaryErrorBorderColor};`;
          hover = `background-color: ${theme.secondaryHoverErrorBackgroundColor};
          color: ${theme.secondaryHoverErrorFontColor};`;
          active = `background-color: ${theme.secondaryActiveErrorBackgroundColor};
          color: ${theme.secondaryHoverErrorFontColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          focus = `border-color: transparent;`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.secondaryDisabledErrorBackgroundColor};
          color: ${theme.secondaryDisabledErrorFontColor};
          border-color: ${theme.secondaryDisabledErrorBorderColor};`;
          break;
        case "warning":
          enabled = `background-color: ${theme.secondaryWarningBackgroundColor};
          color: ${theme.secondaryWarningFontColor};
          border-color ${theme.secondaryWarningBorderColor};`;
          hover = `background-color: ${theme.secondaryHoverWarningBackgroundColor};
          color: ${theme.secondaryHoverWarningFontColor};`;
          active = `background-color: ${theme.secondaryActiveWarningBackgroundColor};
          color: ${theme.secondaryHoverWarningFontColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          focus = `border-color: transparent;`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.secondaryDisabledWarningBackgroundColor};
          color: ${theme.secondaryDisabledWarningFontColor};
          border-color: ${theme.secondaryDisabledWarningBorderColor};`;
          break;
        case "success":
          enabled = `background-color: ${theme.secondarySuccessBackgroundColor};
          color: ${theme.secondarySuccessFontColor};
          border-color ${theme.secondarySuccessBorderColor};`;
          hover = `background-color: ${theme.secondaryHoverSuccessBackgroundColor};
          color: ${theme.secondaryHoverSuccessFontColor};`;
          active = `background-color: ${theme.secondaryActiveSuccessBackgroundColor};
          color: ${theme.secondaryHoverSuccessFontColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          focus = `border-color: transparent;`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.secondaryDisabledSuccessBackgroundColor};
          color: ${theme.secondaryDisabledSuccessFontColor};
          border-color: ${theme.secondaryDisabledSuccessBorderColor};`;
          break;
        case "info":
          enabled = `background-color: ${theme.secondaryInfoBackgroundColor};
          color: ${theme.secondaryInfoFontColor};
          border-color ${theme.secondaryInfoBorderColor};`;
          hover = `background-color: ${theme.secondaryHoverInfoBackgroundColor};
          color: ${theme.secondaryHoverInfoFontColor};`;
          active = `background-color: ${theme.secondaryActiveInfoBackgroundColor};
          color: ${theme.secondaryHoverInfoFontColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          focus = `border-color: transparent;`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.secondaryDisabledInfoBackgroundColor};
          color: ${theme.secondaryDisabledInfoFontColor};
          border-color: ${theme.secondaryDisabledInfoBorderColor};`;
          break;
        default:
          enabled = `background-color: ${theme.secondaryDefaultBackgroundColor};
          color: ${theme.secondaryDefaultFontColor};
          border-color ${theme.secondaryDefaultBorderColor};`;
          break;
      }
      return `${commonSecondaryStyles}
        ${enabled}
        &:hover {
          ${hover}
        }
        &:active {
          ${active}
        }
        &:focus {
          ${focus}
        }
        &:disabled {
          ${disabled}
        }`;

    case "tertiary":
      switch (semantic) {
        case "default":
          enabled = `background-color: ${theme.tertiaryDefaultBackgroundColor};
            color: ${theme.tertiaryDefaultFontColor};`;
          hover = `background-color: ${theme.tertiaryHoverDefaultBackgroundColor};`;
          active = `background-color: ${theme.tertiaryActiveDefaultBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.tertiaryDisabledDefaultBackgroundColor};
          color: ${theme.tertiaryDisabledDefaultFontColor};`;
          break;
        case "error":
          enabled = `background-color: ${theme.tertiaryErrorBackgroundColor};
            color: ${theme.tertiaryErrorFontColor};`;
          hover = `background-color: ${theme.tertiaryHoverErrorBackgroundColor};`;
          active = `background-color: ${theme.tertiaryActiveErrorBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.tertiaryDisabledErrorBackgroundColor};
          color: ${theme.tertiaryDisabledErrorFontColor};`;
          break;
        case "warning":
          enabled = `background-color: ${theme.tertiaryWarningBackgroundColor};
            color: ${theme.tertiaryWarningFontColor};`;
          hover = `background-color: ${theme.tertiaryHoverWarningBackgroundColor};`;
          active = `background-color: ${theme.tertiaryActiveWarningBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.tertiaryDisabledWarningBackgroundColor};
          color: ${theme.tertiaryDisabledWarningFontColor};`;
          break;
        case "success":
          enabled = `background-color: ${theme.tertiarySuccessBackgroundColor};
            color: ${theme.tertiarySuccessFontColor};`;
          hover = `background-color: ${theme.tertiaryHoverSuccessBackgroundColor};`;
          active = `background-color: ${theme.tertiaryActiveSuccessBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.tertiaryDisabledSuccessBackgroundColor};
          color: ${theme.tertiaryDisabledSuccessFontColor};`;
          break;
        case "info":
          enabled = `background-color: ${theme.tertiaryInfoBackgroundColor};
            color: ${theme.tertiaryInfoFontColor};`;
          hover = `background-color: ${theme.tertiaryHoverInfoBackgroundColor};`;
          active = `background-color: ${theme.tertiaryActiveInfoBackgroundColor};
          border-color: transparent;
          outline: none;
          box-shadow: 0 0 0 2px ${theme.focusBorderColor};`;
          disabled = `cursor: not-allowed;
          background-color: ${theme.tertiaryDisabledInfoBackgroundColor};
          color: ${theme.tertiaryDisabledInfoFontColor};`;
          break;
        default:
          enabled = `background-color: ${theme.tertiaryDefaultBackgroundColor};
            color: ${theme.tertiaryDefaultFontColor};`;
          break;
      }
      return `${commonTertiaryStyles}
        ${enabled}
        &:hover {
          ${hover}
        }
        &:active {
          ${active}
        }
        &:focus {
          ${focus}
        }
        &:disabled {
          ${disabled}
        }`;
  }
};

const Button = styled.button<{
  hasIcon: boolean;
  hasLabel: boolean;
  semantic: ButtonPropsType["semantic"];
  disabled: ButtonPropsType["disabled"];
  iconPosition: ButtonPropsType["iconPosition"];
  $mode: ButtonPropsType["mode"];
  margin: ButtonPropsType["margin"];
  size: ButtonPropsType["size"];
}>`
  display: inline-flex;
  flex-direction: ${(props) => (props.iconPosition === "after" ? "row" : "row-reverse")};
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  height: ${(props) => getHeight(props.size?.height) + "rem"};
  width: ${(props) => calculateWidth(props.margin, props.size)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  padding-top: ${(props) =>
    props.hasIcon && !props.hasLabel
      ? props.size.height === "small"
        ? props.theme.paddingSmallOnlyIconTop
        : props.size.height === "medium"
          ? props.theme.paddingMediumOnlyIconTop
          : props.theme.paddingLargeOnlyIconTop
      : props.size.height === "small"
        ? props.theme.paddingSmallTop
        : props.size.height === "medium"
          ? props.theme.paddingMediumTop
          : props.theme.paddingLargeTop};
  padding-bottom: ${(props) =>
    props.hasIcon && !props.hasLabel
      ? props.size.height === "small"
        ? props.theme.paddingSmallOnlyIconBottom
        : props.size.height === "medium"
          ? props.theme.paddingMediumOnlyIconBottom
          : props.theme.paddingLargeOnlyIconBottom
      : props.size.height === "small"
        ? props.theme.paddingSmallBottom
        : props.size.height === "medium"
          ? props.theme.paddingMediumBottom
          : props.theme.paddingLargeBottom};
  padding-left: ${(props) =>
    props.hasIcon && !props.hasLabel
      ? props.size.height === "small"
        ? props.theme.paddingSmallOnlyIconLeft
        : props.size.height === "medium"
          ? props.theme.paddingMediumOnlyIconLeft
          : props.theme.paddingLargeOnlyIconLeft
      : props.size.height === "small"
        ? props.theme.paddingSmallLeft
        : props.size.height === "medium"
          ? props.theme.paddingMediumLeft
          : props.theme.paddingLargeLeft};
  padding-right: ${(props) =>
    props.hasIcon && !props.hasLabel
      ? props.size.height === "small"
        ? props.theme.paddingSmallOnlyIconRight
        : props.size.height === "medium"
          ? props.theme.paddingMediumOnlyIconRight
          : props.theme.paddingLargeOnlyIconRight
      : props.size.height === "small"
        ? props.theme.paddingSmallRight
        : props.size.height === "medium"
          ? props.theme.paddingMediumRight
          : props.theme.paddingLargeRight};

  box-shadow: 0 0 0 2px transparent;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  letter-spacing: ${(props) => props.theme.labelLetterSpacing};
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.focusBorderColor};
  }

  ${(props) => getButtonStyles(props.$mode, props.semantic, props.theme, props.size)};
`;

const LabelContainer = styled.span`
  line-height: ${(props) => props.theme.labelFontLineHeight};
  font-size: ${(props) => props.theme.fontSize};
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: none;
  white-space: nowrap;
`;

const IconContainer = styled.div<{
  size: ButtonPropsType["size"];
}>`
  display: flex;
  font-size: ${(props) => (props.size.height === "small" ? "16" : props.size.height === "medium" ? "16" : "24")}px;
  svg {
    height: ${(props) => (props.size.height === "small" ? "16" : props.size.height === "medium" ? "16" : "24")}px;
    width: ${(props) => (props.size.height === "small" ? "16" : props.size.height === "medium" ? "16" : "24")}px;
  }
`;

export default DxcButton;
