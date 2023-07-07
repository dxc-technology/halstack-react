import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import useTheme from "../useTheme";
import BackgroundColorContext, { BackgroundColors } from "../BackgroundColorContext";
import ButtonPropsType from "./types";

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
  const backgroundType = useContext(BackgroundColorContext);

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
        hasLabel={label ? true : false}
        hasIcon={icon ? true : false}
        iconPosition={iconPosition}
        backgroundType={backgroundType}
        size={size}
        margin={margin}
      >
        {label && <LabelContainer>{label}</LabelContainer>}
        {icon && <IconContainer>{typeof icon === "string" ? <img src={icon} /> : icon}</IconContainer>}
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

const getButtonStyles = (props) => {
  const { $mode, backgroundType, disabled } = props;
  return `
    border-radius: ${
      $mode === "primary"
        ? props.theme.primaryBorderRadius
        : $mode === "secondary"
        ? props.theme.secondaryBorderRadius
        : props.theme.textBorderRadius
    };
    border-width: ${
      $mode === "primary"
        ? props.theme.primaryBorderThickness
        : $mode === "secondary"
        ? props.theme.secondaryBorderThickness
        : props.theme.textBorderThickness
    };
    border-style: ${
      $mode === "primary"
        ? props.theme.primaryBorderStyle
        : $mode === "secondary"
        ? props.theme.secondaryBorderStyle
        : props.theme.textBorderStyle
    };
    font-family: ${
      $mode === "primary"
        ? props.theme.primaryFontFamily
        : $mode === "secondary"
        ? props.theme.secondaryFontFamily
        : props.theme.textFontFamily
    };
    font-size: ${
      $mode === "primary"
        ? props.theme.primaryFontSize
        : $mode === "secondary"
        ? props.theme.secondaryFontSize
        : props.theme.textFontSize
    };
    font-weight: ${
      $mode === "primary"
        ? props.theme.primaryFontWeight
        : $mode === "secondary"
        ? props.theme.secondaryFontWeight
        : props.theme.textFontWeight
    };
    background-color: ${
      $mode === "primary"
        ? backgroundType === "dark"
          ? props.theme.primaryBackgroundColorOnDark
          : props.theme.primaryBackgroundColor
        : $mode === "secondary"
        ? backgroundType === "dark"
          ? props.theme.secondaryBackgroundColorOnDark
          : props.theme.secondaryBackgroundColor
        : backgroundType === "dark"
        ? props.theme.textBackgroundColorOnDark
        : props.theme.textBackgroundColor
    };
    color: ${
      $mode === "primary"
        ? backgroundType === "dark"
          ? props.theme.primaryFontColorOnDark
          : props.theme.primaryFontColor
        : $mode === "secondary"
        ? backgroundType === "dark"
          ? props.theme.secondaryFontColorOnDark
          : props.theme.secondaryFontColor
        : backgroundType === "dark"
        ? props.theme.textFontColorOnDark
        : props.theme.textFontColor
    };
    border-color: ${
      $mode === "secondary"
        ? backgroundType === "dark"
          ? props.theme.secondaryBorderColorOnDark
          : props.theme.secondaryBorderColor
        : ""
    };
    &:hover {
      background-color: ${
        $mode === "primary"
          ? backgroundType === "dark"
            ? props.theme.primaryHoverBackgroundColorOnDark
            : props.theme.primaryHoverBackgroundColor
          : $mode === "secondary"
          ? backgroundType === "dark"
            ? props.theme.secondaryHoverBackgroundColorOnDark
            : props.theme.secondaryHoverBackgroundColor
          : backgroundType === "dark"
          ? props.theme.textHoverBackgroundColorOnDark
          : props.theme.textHoverBackgroundColor
      };
      color: ${
        $mode === "secondary"
          ? backgroundType === "dark"
            ? props.theme.secondaryHoverFontColorOnDark
            : props.theme.secondaryHoverFontColor
          : ""
      };
    }
    &:focus {
      border-color: ${$mode === "secondary" ? "transparent" : ""};
    }
    &:active {
      background-color: ${
        $mode === "primary"
          ? backgroundType === "dark"
            ? props.theme.primaryActiveBackgroundColorOnDark
            : props.theme.primaryActiveBackgroundColor
          : $mode === "secondary"
          ? backgroundType === "dark"
            ? props.theme.secondaryActiveBackgroundColorOnDark
            : props.theme.secondaryActiveBackgroundColor
          : backgroundType === "dark"
          ? props.theme.textActiveBackgroundColorOnDark
          : props.theme.textActiveBackgroundColor
      };
      color: ${
        $mode === "secondary"
          ? backgroundType === "dark"
            ? props.theme.secondaryHoverFontColorOnDark
            : props.theme.secondaryHoverFontColor
          : ""
      };
      border-color: ${$mode === "secondary" ? "transparent" : ""};
      outline: none;
      box-shadow: ${
        !disabled
          ? `0 0 0 2px ${backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor}`
          : ""
      };
    }
    &:disabled {
      cursor: not-allowed;
      background-color: ${
        $mode === "primary"
          ? backgroundType === "dark"
            ? props.theme.primaryDisabledBackgroundColorOnDark
            : props.theme.primaryDisabledBackgroundColor
          : $mode === "secondary"
          ? backgroundType === "dark"
            ? props.theme.secondaryDisabledBackgroundColorOnDark
            : props.theme.secondaryDisabledBackgroundColor
          : backgroundType === "dark"
          ? props.theme.textDisabledBackgroundColorOnDark
          : props.theme.textDisabledBackgroundColor
      };
      color: ${
        $mode === "primary"
          ? backgroundType === "dark"
            ? props.theme.primaryDisabledFontColorOnDark
            : props.theme.primaryDisabledFontColor
          : $mode === "secondary"
          ? backgroundType === "dark"
            ? props.theme.secondaryDisabledFontColorOnDark
            : props.theme.secondaryDisabledFontColor
          : backgroundType === "dark"
          ? props.theme.textDisabledFontColorOnDark
          : props.theme.textDisabledFontColor
      };
      border-color: ${
        $mode === "secondary"
          ? backgroundType === "dark"
            ? props.theme.secondaryDisabledBorderColorOnDark
            : props.theme.secondaryDisabledBorderColor
          : ""
      };
    }
  `;
};

const Button = styled.button<{
  hasIcon: boolean;
  hasLabel: boolean;
  iconPosition: ButtonPropsType["iconPosition"];
  $mode: ButtonPropsType["mode"];
  margin: ButtonPropsType["margin"];
  size: ButtonPropsType["size"];
  backgroundType: BackgroundColors;
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
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor};
  }

  ${(props) => getButtonStyles(props)}
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
  img,
  svg {
    height: 24px;
    width: 24px;
  }
`;

export default DxcButton;
