/* eslint-disable no-else-return */
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import BackgroundColorContext from "../BackgroundColorContext.js";

const DxcButton = ({
  label = "",
  mode = "primary",
  disabled = false,
  iconPosition = "before",
  type = "button",
  iconSrc = "",
  icon,
  onClick = "",
  margin,
  size,
  tabIndex = 0,
}) => {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);
  return (
    <ThemeProvider theme={colorsTheme.button}>
      <DxCButton
        type={type}
        margin={margin}
        mode={mode !== "primary" && mode !== "secondary" && mode !== "text" ? "primary" : mode}
        disabled={disabled}
        iconPosition={iconPosition}
        size={size}
        backgroundType={backgroundType}
      >
        <Button
          disabled={disabled}
          type={type}
          disableRipple
          aria-disabled={disabled ? true : false}
          tabIndex={disabled ? -1 : tabIndex}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          <LabelContainer>{label}</LabelContainer>
          {icon ? (
            <IconContainer label={label} iconPosition={iconPosition}>
              {typeof icon === "object" ? icon : React.createElement(icon)}
            </IconContainer>
          ) : (
            iconSrc && <ButtonIcon label={label} iconPosition={iconPosition} src={iconSrc} />
          )}
        </Button>
      </DxCButton>
    </ThemeProvider>
  );
};

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

const LabelContainer = styled.span`
  line-height: ${(props) => props.theme.labelFontLineHeight};
  font-size: ${(props) => props.theme.fontSize};
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: ${(props) => props.theme.labelTextTranform};
`;

const IconContainer = styled.div`
  max-height: 20px;
  max-width: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const ButtonIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  margin-left: ${(props) => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
`;

const DxCButton = styled.div`
  font-size: ${(props) => props.theme.fontSizeBase};
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
  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};

  .MuiButtonBase-root {
    .MuiButton-label {
      display: flex;
      flex-direction: ${(props) => (props.iconPosition === "after" && "row") || "row-reverse"};
      align-items: center;
    }
    letter-spacing: ${(props) => props.theme.labelletterSpacing};
    
    box-shadow: none;
    font-size: ${(props) => props.theme.fontSize};
    font-weight: ${(props) => props.theme.fontWeight};
    min-width: ${(props) => (props.size === "small" && "calc(100% - 22px)") || "unset"};

    width: 100%;
    min-height: ${(props) => props.theme.minHeight};
    font-family: ${(props) => props.theme.fontFamily};
    &:focus {
      outline: ${(props) => props.theme.focusColor} auto 1px;
    }
    transition: color 0.16s ease-in-out, background-color 0.16s ease-in-out;
    transition: color 0.16s ease-in-out, border-color 0.16s ease-in-out;
    &:hover {
      transition: color 0.16s ease-in-out, background-color 0.16s ease-in-out;
      transition: color 0.16s ease-in-out, border-color 0.16s ease-in-out;
    }
    ${(props) => {
      const { mode, backgroundType } = props;
      if (mode === "primary") {
        return `
        border-radius: ${props.theme.primaryButtonBorderRadius};
        border-width:  ${props.theme.primaryButtonBorderThickness};
        border-style:  ${props.theme.primaryButtonBorderStyle};
        border-color:  ${
          backgroundType === "dark" ? props.theme.primaryButtonBorderColorOnDark : props.theme.primaryButtonBorderColor
        };
        font-family:   ${props.theme.primaryButtonFontFamily};
        font-size:     ${props.theme.primaryButtonFontSize};
        font-weight:   ${props.theme.primaryButtonFontWeight};

        background-color: ${
          backgroundType === "dark" ? props.theme.primaryBackgroundColorOnDark : props.theme.primaryBackgroundColor
        };
        color: ${
            backgroundType === "dark" ? props.theme.primaryFontColorOnDark : props.theme.primaryFontColor
          } !important;
        padding: ${(props.size === "small" && "11px") || "12px 30px"};
          &:hover{
            background-color: ${
              backgroundType === "dark"
                ? props.theme.primaryHoverBackgroundColorOnDark
                : props.theme.primaryHoverBackgroundColor
            };
            color: ${
              backgroundType === "dark" ? props.theme.primaryHoverFontColorOnDark : props.theme.primaryHoverFontColor
            } !important; 
          }
          &:active {
            background-color: ${
              backgroundType === "dark"
                ? props.theme.primaryActiveBackgroundColorOnDark
                : props.theme.primaryActiveBackgroundColor
            } !important;
           
          }
          &:focus {
            background-color: ${
              backgroundType === "dark" ? props.theme.primaryBackgroundColorOnDark : props.theme.primaryBackgroundColor
            };
            color: ${
              backgroundType === "dark" ? props.theme.primaryHoverFontColorOnDark : props.theme.primaryHoverFontColor
            } !important;
          }
          &:disabled{ 
            cursor: not-allowed;
            background-color: ${
              backgroundType === "dark"
                ? props.theme.disabledPrimaryBackgroundColorOnDark
                : props.theme.disabledPrimaryBackgroundColor
            };
            color: ${
              backgroundType === "dark"
                ? props.theme.disabledPrimaryFontColorOnDark
                : props.theme.disabledPrimaryFontColor
            }!important; 
          }
          .MuiButton-label {
            z-index: 5
          }
        `;
      } else if (mode === "secondary") {
        return `
        border-radius: ${props.theme.secondaryButtonBorderRadius};
        border-width:${props.theme.secondaryButtonBorderThickness};
        border-style:${props.theme.secondaryButtonBorderStyle};
        font-family:   ${props.theme.secondaryButtonFontFamily};
        font-size:     ${props.theme.secondaryButtonFontSize};
        font-weight:   ${props.theme.secondaryButtonFontWeight};
            background-color: ${
              backgroundType === "dark"
                ? props.theme.secondaryBackgroundColorOnDark
                : props.theme.secondaryBackgroundColor
            };
            padding: ${(props.size === "small" && "9px") || "10px 28px"};
            color: ${
              backgroundType === "dark" ? props.theme.secondaryFontColorOnDark : props.theme.secondaryFontColor
            } !important;
          
            border-color: ${
              backgroundType === "dark" ? props.theme.secondaryOutlinedColorOnDark : props.theme.secondaryOutlinedColor
            };
            &:hover{
              border-color: ${
                backgroundType === "dark"
                  ? props.theme.secondaryHoverOutlinedColorOnDark
                  : props.theme.secondaryHoverOutlinedColor
              };
              background-color: ${
                backgroundType === "dark"
                  ? props.theme.secondaryHoverBackgroundColorOnDark
                  : props.theme.secondaryHoverBackgroundColor
              };
              color: ${
                backgroundType === "dark"
                  ? props.theme.secondaryHoverFontColorOnDark
                  : props.theme.secondaryHoverFontColor
              } !important; 
            }
            &:active {
              background-color: ${
                backgroundType === "dark"
                  ? props.theme.secondaryActiveBackgroundColorOnDark
                  : props.theme.secondaryActiveBackgroundColor
              } !important;
              color: ${
                backgroundType === "dark"
                  ? props.theme.secondaryHoverFontColorOnDark
                  : props.theme.secondaryHoverFontColor
              } !important;
            }
            &:focus {
              background-color: ${
                backgroundType === "dark"
                  ? props.theme.secondaryBackgroundColorOnDark
                  : props.theme.secondaryBackgroundColor
              };
              color: ${
                backgroundType === "dark"
                  ? props.theme.secondaryHoverFontColorOnDark
                  : props.theme.secondaryHoverFontColor
              } !important; 
            }
            &:disabled{
              cursor: not-allowed;
              color: ${
                backgroundType === "dark"
                  ? props.theme.disabledSecondaryFontColorOnDark
                  : props.theme.disabledSecondaryFontColor
              } !important;
              border-color: ${
                backgroundType === "dark"
                  ? props.theme.disabledSecondaryOutlinedColorOnDark
                  : props.theme.disabledSecondaryOutlinedColor
              };
            }
            .MuiButton-label {
              z-index: 5
            }

          `;
      } else if (mode === "text") {
        return `
        border-radius: ${props.theme.textButtonBorderRadius};
        border-width:${props.theme.textButtonBorderThickness};
        border-style:${props.theme.textButtonBorderStyle};
        border-color:${
          backgroundType === "dark" ? props.theme.textButtonBorderColorOnDark : props.theme.textButtonBorderColor
        };
        font-family:   ${props.theme.textButtonFontFamily};
        font-size:     ${props.theme.textButtonFontSize};
        font-weight:   ${props.theme.textButtonFontWeight};
            background-color: ${
              backgroundType === "dark" ? props.theme.textBackgroundColorOnDark : props.theme.textBackgroundColor
            };
            color: ${
              backgroundType === "dark" ? props.theme.textFontColorOnDark : props.theme.textFontColor
            } !important;
            padding: ${(props.size === "small" && "11px") || "12px 30px"};
            &:hover{
              background-color: ${
                backgroundType === "dark"
                  ? props.theme.textHoverBackgroundColorOnDark
                  : props.theme.textHoverBackgroundColor
              };
              color: ${
                backgroundType === "dark" ? props.theme.textHoverFontColorOnDark : props.theme.textHoverFontColor
              } !important;
            }
            &:active {
              background-color: ${
                backgroundType === "dark"
                  ? props.theme.textActiveBackgroundColorOnDark
                  : props.theme.textActiveBackgroundColor
              } !important;
              color: ${
                backgroundType === "dark" ? props.theme.textHoverFontColorOnDark : props.theme.textHoverFontColor
              } !important;
            }
            &:focus {
              background-color: ${
                backgroundType === "dark" ? props.theme.textBackgroundColorOnDark : props.theme.textBackgroundColor
              };
              color: ${
                backgroundType === "dark" ? props.theme.textFontColorOnDark : props.theme.textFontColor
              } !important; 
            }
            &:disabled{
              cursor:not-allowed;
              color: ${
                backgroundType === "dark" ? props.theme.disabledTextFontColorOnDark : props.theme.disabledTextFontColor
              } !important;
              background-color: ${
                backgroundType === "dark" ? props.theme.disabledTextBackgroundColorOnDark : props.theme.disabledTextBackgroundColor
              };
  
            }
          `;
      }
    }}
  }
`;

DxcButton.propTypes = {
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  label: PropTypes.string,
  mode: PropTypes.oneOf(["primary", "secondary", "text"]),
  disabled: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onClick: PropTypes.func,
  iconSrc: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  tabIndex: PropTypes.number,
};
export default DxcButton;
