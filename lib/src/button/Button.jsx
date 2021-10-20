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
        icon={icon}
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
          {label && (
            <LabelContainer icon={icon} iconPosition={iconPosition}>
              {label}
            </LabelContainer>
          )}
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
  text-transform: none;
  margin-right: ${(props) => (!props.icon || props.iconPosition === "before" ? "8px" : "0px")};
  margin-left: ${(props) => (!props.icon || props.iconPosition === "after" ? "8px" : "0px")};
`;

const IconContainer = styled.div`
  max-height: 24px;
  max-width: 24px;
  margin-left: ${(props) =>
    !props.label ? "0px" : (props.iconPosition === "after" && props.label !== "" && "8px") || "8px"};
  margin-right: ${(props) =>
    !props.label ? "0px" : (props.iconPosition === "before" && props.label !== "" && "8px") || "8px"};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const ButtonIcon = styled.img`
  max-height: 24px;
  max-width: 24px;
  margin-left: ${(props) => (props.iconPosition === "after" && props.label !== "" && "10px") || "0px"};
  margin-right: ${(props) => (props.iconPosition === "before" && props.label !== "" && "10px") || "0px"};
`;

const DxCButton = styled.div`
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
  box-shadow: 0 0 0 2px transparent;

  .MuiButtonBase-root {
    padding-left: ${(props) => props.theme.paddingLeft};
    padding-right: ${(props) => props.theme.paddingRight};
    padding-top: ${(props) => props.theme.paddingTop};
    padding-bottom: ${(props) => props.theme.paddingBottom};

    .MuiButton-label {
      display: flex;
      flex-direction: ${(props) => (props.iconPosition === "after" && "row") || "row-reverse"};
      align-items: center;
    }
    letter-spacing: ${(props) => props.theme.labelLetterSpacing};

    box-shadow: none;
    font-size: ${(props) => props.theme.fontSize};
    font-weight: ${(props) => props.theme.fontWeight};
    min-width: ${(props) => (props.size === "small" && "calc(100% - 22px)") || "unset"};

    width: 100%;
    height: 40px;
    font-family: ${(props) => props.theme.fontFamily};
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
        } !important;
        &:hover{
          background-color: ${
            backgroundType === "dark"
              ? props.theme.primaryHoverBackgroundColorOnDark
              : props.theme.primaryHoverBackgroundColor
          };
        }
        &:focus {
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:active {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.primaryActiveBackgroundColorOnDark
              : props.theme.primaryActiveBackgroundColor
          } !important;
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:disabled{ 
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
          }!important; 
        }
        .MuiButton-label {
          z-index: 5
        }
      `;
      } else if (mode === "secondary") {
        return `
        border-radius: ${props.theme.secondaryBorderRadius};
        border-width:${props.theme.secondaryBorderThickness};
        border-style:${props.theme.secondaryBorderStyle};
        font-family:   ${props.theme.secondaryFontFamily};
        font-size:     ${props.theme.secondaryFontSize};
        font-weight:   ${props.theme.secondaryFontWeight};
        background-color: ${
          backgroundType === "dark" ? props.theme.secondaryBackgroundColorOnDark : props.theme.secondaryBackgroundColor
        };
        color: ${
          backgroundType === "dark" ? props.theme.secondaryFontColorOnDark : props.theme.secondaryFontColor
        } !important;
        border-color: ${
          backgroundType === "dark" ? props.theme.secondaryBorderColorOnDark : props.theme.secondaryBorderColor
        };
        &:hover{
          background-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryHoverBackgroundColorOnDark
              : props.theme.secondaryHoverBackgroundColor
          };
          color: ${
            backgroundType === "dark" ? props.theme.secondaryHoverFontColorOnDark : props.theme.secondaryHoverFontColor
          } !important;
        }
        &:focus{
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:active {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryActiveBackgroundColorOnDark
              : props.theme.secondaryActiveBackgroundColor
          } !important;
          color: ${
            backgroundType === "dark" ? props.theme.secondaryHoverFontColorOnDark : props.theme.secondaryHoverFontColor
          } !important;
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:disabled{
          cursor: not-allowed;
          background-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryDisabledBackgroundColorOnDark
              : props.theme.secondaryDisabledBackgroundColor
          } !important;
          color: ${
            backgroundType === "dark"
              ? props.theme.secondaryDisabledFontColorOnDark
              : props.theme.secondaryDisabledFontColor
          } !important;
          border-color: ${
            backgroundType === "dark"
              ? props.theme.secondaryDisabledBorderColorOnDark
              : props.theme.secondaryDisabledBorderColor
          };
          }
          .MuiButton-label {
              z-index: 5
          }
        `;
      } else if (mode === "text") {
        return `
        border-radius: ${props.theme.textBorderRadius};
        border-width:${props.theme.textBorderThickness};
        border-style:${props.theme.textBorderStyle};
        font-family:   ${props.theme.textFontFamily};
        font-size:     ${props.theme.textFontSize};
        font-weight:   ${props.theme.textFontWeight};
        background-color: ${
          backgroundType === "dark" ? props.theme.textBackgroundColorOnDark : props.theme.textBackgroundColor
        };
        color: ${backgroundType === "dark" ? props.theme.textFontColorOnDark : props.theme.textFontColor} !important;
        &:hover{
          background-color: ${
            backgroundType === "dark"
              ? props.theme.textHoverBackgroundColorOnDark
              : props.theme.textHoverBackgroundColor
          };
        }
        &:focus {
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:active {
          background-color: ${
            backgroundType === "dark"
              ? props.theme.textActiveBackgroundColorOnDark
              : props.theme.textActiveBackgroundColor
          } !important;
          border-color: transparent;
          box-shadow: 0 0 0 2px ${
            backgroundType === "dark" ? props.theme.focusBorderColorOnDark : props.theme.focusBorderColor
          };
        }
        &:disabled{
          cursor:not-allowed;
          color: ${
            backgroundType === "dark" ? props.theme.textDisabledFontColorOnDark : props.theme.textDisabledFontColor
          } !important;
          background-color: ${
            backgroundType === "dark"
              ? props.theme.textDisabledBackgroundColorOnDark
              : props.theme.textDisabledBackgroundColor
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
