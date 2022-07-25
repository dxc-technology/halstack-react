import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import BackgroundColorContext from "../BackgroundColorContext";
import ButtonPropsType from "./types";

const sizes = {
  small: "42px",
  medium: "120px",
  large: "240px",
  fillParent: "100%",
  fitContent: "unset",
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
      <ButtonContainer margin={margin} size={size} backgroundType={backgroundType}>
        <Button
          type={type}
          mode={mode !== "primary" && mode !== "secondary" && mode !== "text" ? "primary" : mode}
          disabled={disabled}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : tabIndex}
          backgroundType={backgroundType}
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
      </ButtonContainer>
    </ThemeProvider>
  );
};

type Space = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type Margin = {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
};
type ButtonContainerPropsType = {
  margin?: Space | Margin;
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  backgroundType?: "dark" | "light";
};

const ButtonContainer = styled.div<ButtonContainerPropsType>`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: inline-block;
  width: ${(props) => calculateWidth(props.margin, props.size)};
`;

type ButtonProps = {
  mode?: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large" | "fillParent" | "fitContent";
  backgroundType?: "dark" | "light";
};

const Button = styled.button<ButtonProps>`
  padding-left: ${(props) => props.theme.paddingLeft};
  padding-right: ${(props) => props.theme.paddingRight};
  padding-top: ${(props) => props.theme.paddingTop};
  padding-bottom: ${(props) => props.theme.paddingBottom};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px transparent;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  letter-spacing: ${(props) => props.theme.labelLetterSpacing};
  min-width: ${(props) => (props.size === "small" && "calc(100% - 22px)") || "unset"};
  width: 100%;
  height: 40px;
  cursor: pointer;
  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor};
  }

  ${(props) => {
    const { mode, backgroundType } = props;
    if (mode === "primary") {
      return `
        border-radius: ${props.theme.primaryBorderRadius};
        border-width:  ${props.theme.primaryBorderThickness};
        border-style:  ${props.theme.primaryBorderStyle};
        font-family:   ${props.theme.primaryFontFamily};
        font-size:     ${props.theme.primaryFontSize};
        font-weight:   ${props.theme.primaryFontWeight};
        background-color: ${
          backgroundType === "dark" ? props.theme.primaryBackgroundColorOnDark : props.theme.primaryBackgroundColor
        };
        color: ${
          backgroundType && backgroundType === "dark"
            ? props.theme.primaryFontColorOnDark
            : props.theme.primaryFontColor
        };
        &:hover {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.primaryHoverBackgroundColorOnDark
              : props.theme.primaryHoverBackgroundColor
          };
        }
        &:active {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.primaryActiveBackgroundColorOnDark
              : props.theme.primaryActiveBackgroundColor
          };
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:disabled { 
          cursor: not-allowed;
          background-color: ${
            backgroundType === "dark"
              ? props.theme.primaryDisabledBackgroundColorOnDark
              : props.theme.primaryDisabledBackgroundColor
          };
          color: ${
            backgroundType === "dark"
              ? props.theme.primaryDisabledFontColorOnDark
              : props.theme.primaryDisabledFontColor
          };
        }
      `;
    } else if (mode === "secondary") {
      return `
        border-radius: ${props.theme.secondaryBorderRadius};
        border-width:  ${props.theme.secondaryBorderThickness};
        border-style:  ${props.theme.secondaryBorderStyle};
        font-family:   ${props.theme.secondaryFontFamily};
        font-size:     ${props.theme.secondaryFontSize};
        font-weight:   ${props.theme.secondaryFontWeight};
        background-color: ${
          backgroundType === "dark" ? props.theme.secondaryBackgroundColorOnDark : props.theme.secondaryBackgroundColor
        };
        color: ${backgroundType === "dark" ? props.theme.secondaryFontColorOnDark : props.theme.secondaryFontColor};
        border-color: ${
          backgroundType === "dark" ? props.theme.secondaryBorderColorOnDark : props.theme.secondaryBorderColor
        };
        &:hover {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryHoverBackgroundColorOnDark
              : props.theme.secondaryHoverBackgroundColor
          };
          color: ${
            backgroundType === "dark" ? props.theme.secondaryHoverFontColorOnDark : props.theme.secondaryHoverFontColor
          };
        }
        &:active {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryActiveBackgroundColorOnDark
              : props.theme.secondaryActiveBackgroundColor
          };
          color: ${
            backgroundType === "dark" ? props.theme.secondaryHoverFontColorOnDark : props.theme.secondaryHoverFontColor
          };
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:disabled {
          cursor: not-allowed;
          background-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryDisabledBackgroundColorOnDark
              : props.theme.secondaryDisabledBackgroundColor
          };
          color: ${
            backgroundType === "dark"
              ? props.theme.secondaryDisabledFontColorOnDark
              : props.theme.secondaryDisabledFontColor
          };
          border-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryDisabledBorderColorOnDark
              : props.theme.secondaryDisabledBorderColor
          };
          }
        `;
    } else if (mode === "text") {
      return `
        border-radius: ${props.theme.textBorderRadius};
        border-width:  ${props.theme.textBorderThickness};
        border-style:  ${props.theme.textBorderStyle};
        font-family:   ${props.theme.textFontFamily};
        font-size:     ${props.theme.textFontSize};
        font-weight:   ${props.theme.textFontWeight};
        background-color: ${
          backgroundType === "dark" ? props.theme.textBackgroundColorOnDark : props.theme.textBackgroundColor
        };
        color: ${backgroundType === "dark" ? props.theme.textFontColorOnDark : props.theme.textFontColor} !important;
        &:hover {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.textHoverBackgroundColorOnDark
              : props.theme.textHoverBackgroundColor
          };
        }
        &:active {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.textActiveBackgroundColorOnDark
              : props.theme.textActiveBackgroundColor
          };
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:disabled {
          cursor:not-allowed;
          color: ${
            backgroundType === "dark" ? props.theme.textDisabledFontColorOnDark : props.theme.textDisabledFontColor
          };
          background-color: ${
            backgroundType === "dark"
              ? props.theme.textDisabledBackgroundColorOnDark
              : props.theme.textDisabledBackgroundColor
          };
        }
      `;
    }
  }}
`;

const LabelContainer = styled.span<ButtonPropsType>`
  line-height: ${(props) => props.theme.labelFontLineHeight};
  font-size: ${(props) => props.theme.fontSize};
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: none;
  white-space: nowrap;
  margin-right: ${(props) => (!props.icon || props.iconPosition === "before" ? "8px" : "0px")};
  margin-left: ${(props) => (!props.icon || props.iconPosition === "after" ? "8px" : "0px")};
`;

const IconContainer = styled.div<ButtonPropsType>`
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

const ButtonIcon = styled.img``;

export default DxcButton;
