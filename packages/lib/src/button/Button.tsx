import styled, { ThemeProvider } from "styled-components";
import { AdvancedTheme, spaces } from "../common/variables";
import getMargin from "../common/utils";
import useTheme from "../useTheme";
import ButtonPropsType from "./types";
import DxcIcon from "../icon/Icon";

const DxcButton = ({
  label = "",
  mode = "primary",
  disabled = false,
  iconPosition = "before",
  title,
  type = "button",
  icon,
  onClick = () => {},
  margin,
  size = "fitContent",
  tabIndex = 0,
}: ButtonPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.button}>
      <Button
        aria-label={title}
        disabled={disabled}
        onClick={() => {
          onClick();
        }}
        tabIndex={disabled ? -1 : tabIndex}
        title={title}
        type={type}
        $mode={mode !== "primary" && mode !== "secondary" && mode !== "text" ? "primary" : mode}
        hasLabel={!!label}
        hasIcon={!!icon}
        iconPosition={iconPosition}
        size={size}
        margin={margin}
      >
        {label && <LabelContainer>{label}</LabelContainer>}
        {icon && <IconContainer>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</IconContainer>}
      </Button>
    </ThemeProvider>
  );
};

const sizes = {
  small: "42px",
  medium: "120px",
  large: "240px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin: ButtonPropsType["margin"], size: ButtonPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const getButtonStyles = ($mode: ButtonPropsType["mode"], theme: AdvancedTheme["button"]) => `
  border-color: ${$mode === "secondary" ? theme.secondaryBorderColor : ""};
  border-radius: ${
    $mode === "primary"
      ? theme.primaryBorderRadius
      : $mode === "secondary"
        ? theme.secondaryBorderRadius
        : theme.textBorderRadius
  };
  border-width: ${
    $mode === "primary"
      ? theme.primaryBorderThickness
      : $mode === "secondary"
        ? theme.secondaryBorderThickness
        : theme.textBorderThickness
  };
  border-style: ${
    $mode === "primary"
      ? theme.primaryBorderStyle
      : $mode === "secondary"
        ? theme.secondaryBorderStyle
        : theme.textBorderStyle
  };
  font-family: ${
    $mode === "primary"
      ? theme.primaryFontFamily
      : $mode === "secondary"
        ? theme.secondaryFontFamily
        : theme.textFontFamily
  };
  font-size: ${
    $mode === "primary" ? theme.primaryFontSize : $mode === "secondary" ? theme.secondaryFontSize : theme.textFontSize
  };
  font-weight: ${
    $mode === "primary"
      ? theme.primaryFontWeight
      : $mode === "secondary"
        ? theme.secondaryFontWeight
        : theme.textFontWeight
  };
  background-color: ${
    $mode === "primary"
      ? theme.primaryBackgroundColor
      : $mode === "secondary"
        ? theme.secondaryBackgroundColor
        : theme.textBackgroundColor
  };
  color: ${
    $mode === "primary"
      ? theme.primaryFontColor
      : $mode === "secondary"
        ? theme.secondaryFontColor
        : theme.textFontColor
  };
  `;

const getButtonStates = (
  disabled: ButtonPropsType["disabled"],
  $mode: ButtonPropsType["mode"],
  theme: AdvancedTheme["button"]
) => `
  &:hover {
    background-color: ${
      $mode === "primary"
        ? theme.primaryHoverBackgroundColor
        : $mode === "secondary"
          ? theme.secondaryHoverBackgroundColor
          : theme.textHoverBackgroundColor
    };
    color: ${$mode === "secondary" ? theme.secondaryHoverFontColor : ""};
  }
  &:focus {
    border-color: ${$mode === "secondary" ? "transparent" : ""};
  }
  &:active {
    background-color: ${
      $mode === "primary"
        ? theme.primaryActiveBackgroundColor
        : $mode === "secondary"
          ? theme.secondaryActiveBackgroundColor
          : theme.textActiveBackgroundColor
    };
    color: ${$mode === "secondary" ? theme.secondaryHoverFontColor : ""};
    border-color: ${$mode === "secondary" ? "transparent" : ""};
    outline: none;
    box-shadow: ${!disabled ? `0 0 0 2px ${theme.focusBorderColor}` : ""};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${
      $mode === "primary"
        ? theme.primaryDisabledBackgroundColor
        : $mode === "secondary"
          ? theme.secondaryDisabledBackgroundColor
          : theme.textDisabledBackgroundColor
    };
    color: ${
      $mode === "primary"
        ? theme.primaryDisabledFontColor
        : $mode === "secondary"
          ? theme.secondaryDisabledFontColor
          : theme.textDisabledFontColor
    };
    border-color: ${$mode === "secondary" ? theme.secondaryDisabledBorderColor : ""};
  }
`;

const Button = styled.button<{
  hasIcon: boolean;
  hasLabel: boolean;
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
  width: ${(props) => calculateWidth(props.margin, props.size)};
  height: 40px;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  padding-top: ${(props) => props.theme.paddingTop};
  padding-bottom: ${(props) => props.theme.paddingBottom};
  padding-left: ${(props) =>
    props.hasIcon && !props.hasLabel ? props.theme.paddingLeft : `calc(${props.theme.paddingLeft} + 8px)`};
  padding-right: ${(props) =>
    props.hasIcon && !props.hasLabel ? props.theme.paddingRight : `calc(${props.theme.paddingRight} + 8px)`};
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

  ${(props) => getButtonStyles(props.$mode, props.theme)}
  ${(props) => getButtonStates(props.disabled, props.$mode, props.theme)}
`;

const LabelContainer = styled.span`
  line-height: ${(props) => props.theme.labelFontLineHeight};
  font-size: ${(props) => props.theme.fontSize};
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: none;
  white-space: nowrap;
`;

const IconContainer = styled.div`
  display: flex;
  font-size: 24px;

  svg {
    height: 24px;
    width: 24px;
  }
`;

export default DxcButton;
