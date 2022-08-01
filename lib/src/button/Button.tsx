import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import BackgroundColorContext from "../BackgroundColorContext";
import ButtonPropsType, { Space, Margin, SVG } from "./types";

const sizes = {
  small: "42px",
  medium: "120px",
  large: "240px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

const DxcButton = ({
  label = "",
  mode = "primary",
  disabled = false,
  iconPosition = "before",
  type = "button",
  icon,
  onClick = () => {},
  margin,
  size = "fitContent",
  tabIndex = 0,
}: ButtonPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  const labelComponent = (
    <LabelContainer icon={icon} iconPosition={iconPosition}>
      {label}
    </LabelContainer>
  );

  return (
    <ThemeProvider theme={colorsTheme.button}>
      <Button
        type={type}
        mode={mode !== "primary" && mode !== "secondary" && mode !== "text" ? "primary" : mode}
        disabled={disabled}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : tabIndex}
        backgroundType={backgroundType}
        size={size}
        margin={margin}
        onClick={() => {
          onClick();
        }}
      >
        {label && iconPosition === "after" && labelComponent}
        {icon && (
          <IconContainer label={label} iconPosition={iconPosition}>
            {typeof icon === "string" ? <ButtonIcon src={icon} /> : icon}
          </IconContainer>
        )}
        {label && iconPosition === "before" && labelComponent}
      </Button>
    </ThemeProvider>
  );
};

type ButtonProps = {
  mode: "primary" | "secondary" | "text";
  margin?: Space | Margin;
  size: "small" | "medium" | "large" | "fillParent" | "fitContent";
  backgroundType: "dark" | "light";
};

const Button = styled.button<ButtonProps>`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: inline-flex;
  width: ${(props) => calculateWidth(props.margin, props.size)};
  height: 40px;
  padding-left: ${(props) => props.theme.paddingLeft};
  padding-right: ${(props) => props.theme.paddingRight};
  padding-top: ${(props) => props.theme.paddingTop};
  padding-bottom: ${(props) => props.theme.paddingBottom};
  align-items: center;
  justify-content: center;
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
  ${(props) => {
    const { mode, backgroundType, disabled } = props;
    return `
        border-radius: ${
          props.mode === "primary"
            ? props.theme.primaryBorderRadius
            : props.mode === "secondary"
            ? props.theme.secondaryBorderRadius
            : props.theme.textBorderRadius
        };
        border-width: ${
          props.mode === "primary"
            ? props.theme.primaryBorderThickness
            : props.mode === "secondary"
            ? props.theme.secondaryBorderThickness
            : props.theme.textBorderThickness
        };
        border-style: ${
          mode === "primary"
            ? props.theme.primaryBorderStyle
            : mode === "secondary"
            ? props.theme.secondaryBorderStyle
            : props.theme.textBorderStyle
        };
        font-family: ${
          mode === "primary"
            ? props.theme.primaryFontFamily
            : mode === "secondary"
            ? props.theme.secondaryFontFamily
            : props.theme.textFontFamily
        };
        font-size: ${
          mode === "primary"
            ? props.theme.primaryFontSize
            : mode === "secondary"
            ? props.theme.secondaryFontSize
            : props.theme.textFontSize
        };
        font-weight: ${
          mode === "primary"
            ? props.theme.primaryFontWeight
            : mode === "secondary"
            ? props.theme.secondaryFontWeight
            : props.theme.textFontWeight
        };
        background-color: ${
          mode === "primary"
            ? backgroundType === "dark"
              ? props.theme.primaryBackgroundColorOnDark
              : props.theme.primaryBackgroundColor
            : mode === "secondary"
            ? backgroundType === "dark"
              ? props.theme.secondaryBackgroundColorOnDark
              : props.theme.secondaryBackgroundColor
            : backgroundType === "dark"
            ? props.theme.textBackgroundColorOnDark
            : props.theme.textBackgroundColor
        };
        color: ${
          mode === "primary"
            ? backgroundType === "dark"
              ? props.theme.primaryFontColorOnDark
              : props.theme.primaryFontColor
            : mode === "secondary"
            ? backgroundType === "dark"
              ? props.theme.secondaryFontColorOnDark
              : props.theme.secondaryFontColor
            : backgroundType === "dark"
            ? props.theme.textFontColorOnDark
            : props.theme.textFontColor
        };
        border-color: ${
          mode === "secondary"
            ? backgroundType === "dark"
              ? props.theme.secondaryBorderColorOnDark
              : props.theme.secondaryBorderColor
            : ""
        };
        &:hover {
          background-color: ${
            mode === "primary"
              ? backgroundType === "dark"
                ? props.theme.primaryHoverBackgroundColorOnDark
                : props.theme.primaryHoverBackgroundColor
              : mode === "secondary"
              ? backgroundType === "dark"
                ? props.theme.secondaryHoverBackgroundColorOnDark
                : props.theme.secondaryHoverBackgroundColor
              : backgroundType === "dark"
              ? props.theme.textHoverBackgroundColorOnDark
              : props.theme.textHoverBackgroundColor
          };
          color: ${
            mode === "secondary"
              ? backgroundType === "dark"
                ? props.theme.secondaryHoverFontColorOnDark
                : props.theme.secondaryHoverFontColor
              : ""
          };
        }
        &:focus {
          border-color: ${mode === "secondary" ? "transparent" : ""};
        }
        &:active {
          background-color: ${
            mode === "primary"
              ? backgroundType === "dark"
                ? props.theme.primaryActiveBackgroundColorOnDark
                : props.theme.primaryActiveBackgroundColor
              : mode === "secondary"
              ? backgroundType === "dark"
                ? props.theme.secondaryActiveBackgroundColorOnDark
                : props.theme.secondaryActiveBackgroundColor
              : backgroundType === "dark"
              ? props.theme.textActiveBackgroundColorOnDark
              : props.theme.textActiveBackgroundColor
          };
          color: ${
            mode === "secondary"
              ? backgroundType === "dark"
                ? props.theme.secondaryHoverFontColorOnDark
                : props.theme.secondaryHoverFontColor
              : ""
          };
          border-color: ${mode === "secondary" ? "transparent" : ""};
          outline: none;
          box-shadow: ${
            !disabled
              ? `0 0 0 2px ${
                  backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
                }`
              : ""
          };
        }
        &:disabled {
          cursor: not-allowed;
          background-color: ${
            mode === "primary"
              ? backgroundType === "dark"
                ? props.theme.primaryDisabledBackgroundColorOnDark
                : props.theme.primaryDisabledBackgroundColor
              : mode === "secondary"
              ? backgroundType === "dark"
                ? props.theme.secondaryDisabledBackgroundColorOnDark
                : props.theme.secondaryDisabledBackgroundColor
              : backgroundType === "dark"
              ? props.theme.textDisabledBackgroundColorOnDark
              : props.theme.textDisabledBackgroundColor
          };
          color: ${
            mode === "primary"
              ? backgroundType === "dark"
                ? props.theme.primaryDisabledFontColorOnDark
                : props.theme.primaryDisabledFontColor
              : mode === "secondary"
              ? backgroundType === "dark"
                ? props.theme.secondaryDisabledFontColorOnDark
                : props.theme.secondaryDisabledFontColor
              : backgroundType === "dark"
              ? props.theme.textDisabledFontColorOnDark
              : props.theme.textDisabledFontColor
          };
          border-color: ${
            mode === "secondary"
              ? backgroundType === "dark"
                ? props.theme.secondaryDisabledBorderColorOnDark
                : props.theme.secondaryDisabledBorderColor
              : ""
          };
        }
      `;
  }}
`;

type LabelPropsType = {
  iconPosition: "before" | "after";
  icon?: string | SVG;
};

const LabelContainer = styled.span<LabelPropsType>`
  line-height: ${(props) => props.theme.labelFontLineHeight};
  font-size: ${(props) => props.theme.fontSize};
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: none;
  white-space: nowrap;
  margin-right: ${(props) => (!props.icon || props.iconPosition === "before" ? "8px" : "0px")};
  margin-left: ${(props) => (!props.icon || props.iconPosition === "after" ? "8px" : "0px")};
`;

type IconPropsType = {
  label?: string;
  iconPosition: "before" | "after";
};

const IconContainer = styled.div<IconPropsType>`
  max-height: 24px;
  max-width: 24px;
  margin-left: ${(props) =>
    !props.label ? "0px" : (props.iconPosition === "after" && props.label !== "" && "8px") || "8px"};
  margin-right: ${(props) =>
    !props.label ? "0px" : (props.iconPosition === "before" && props.label !== "" && "8px") || "8px"};
  overflow: hidden;
  display: flex;
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const ButtonIcon = styled.img`
  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default DxcButton;
