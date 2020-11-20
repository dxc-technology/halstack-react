/* eslint-disable no-else-return */
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import "../common/OpenSans.css";
import { spaces, defaultTheme, theme } from "../common/variables.js";
import { getMargin, getCustomTheme } from "../common/utils.js";
import ThemeContext from "../ThemeContext.js";
import { useMemo } from "react";

const DxcButton = ({
  label = "",
  mode = "primary",
  disabled = false,
  iconPosition = "before",
  iconSrc = "",
  onClick = "",
  margin,
  size,
}) => {
  const customTheme = useContext(ThemeContext);
  const colorsTheme = useMemo(() => getCustomTheme(theme, getCustomTheme(defaultTheme, customTheme)), [customTheme]);

  return (
    <ThemeProvider theme={colorsTheme.button}>
      <DxCButton margin={margin} mode={mode} disabled={disabled} iconPosition={iconPosition} size={size}>
        <Button
          disabled={disabled}
          disableRipple
          aria-disabled={disabled ? true : false}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          <LabelContainer>{label}</LabelContainer>
          {iconSrc && <ButtonIcon label={label} iconPosition={iconPosition} src={iconSrc} />}
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
  line-height: 18px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ButtonIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
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

  .MuiButtonBase-root {
    .MuiButton-label {
      display: flex;
      flex-direction: ${(props) => (props.iconPosition === "after" && "row") || "row-reverse"};
      align-items: center;
    }
    letter-spacing: 1px;
    box-shadow: none;
    font-size: 14px;
    font-weight: 500;
    min-width: ${(props) => (props.size === "small" && "calc(100% - 22px)") || "unset"};
    border-radius: 4px;
    width: 100%;
    min-height: 43px;
    line-height: 1;
    font-family: "Open Sans", sans-serif;
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
      const { mode } = props;
      if (mode === "primary") {
        return `
          background-color: ${props.theme.color};
          color: ${props.theme.primaryFontColor};
          padding: ${(props.size === "small" && "11px") || "12px 30px"};
          &:hover{
            background-color: ${props.theme.hoverColor};
            color: ${props.theme.primaryHoverFontColor}; 
          }
          &:active {
            background-color: ${props.theme.hoverColor}${props.theme.primaryActiveOpacity} !important;
            color: ${props.theme.primaryHoverFontColor} !important;
          }
          &:focus {
            background-color: ${props.theme.hoverColor};
            color: ${props.theme.primaryHoverFontColor}; 
          }
          &:disabled{ 
            background-color: ${props.theme.color};
            opacity: ${props.theme.disabledOpacity};
            color: ${props.theme.primaryFontColor};
            cursor:not-allowed;
          }
          .MuiButton-label {
            z-index: 5
          }
        `;
      } else if (mode === "secondary") {
        return `
            background-color: ${props.theme.secondaryBackgroundColor};
            padding: ${(props.size === "small" && "9px") || "10px 28px"};
            color: ${props.theme.secondaryFontColor};
            border: 2px solid;
            border-color: ${props.theme.color};
            &:hover{
              border-color: ${props.theme.hoverColor};
              background-color: ${props.theme.hoverColor}${props.theme.secondaryHoverOpacity};
              color: ${props.theme.secondaryHoverFontColor}; 
            }
            &:active {
              background-color: ${props.theme.hoverColor}${props.theme.secondaryActiveOpacity} !important;
              color: ${props.theme.secondaryHoverFontColor} !important;
            }
            &:focus {
              background-color: ${props.theme.secondaryBackgroundColor};
              color: ${props.theme.secondaryHoverFontColor}; 
            }
            &:disabled{
              background-color: ${props.theme.secondaryBackgroundColor};
              border-color: ${props.theme.color};
              color: ${props.theme.secondaryFontColor};
              cursor:not-allowed;
              opacity: ${props.theme.disabledOpacity};
            }
            .MuiButton-label {
              z-index: 5
            }

          `;
      } else if (mode === "text") {
        return `
            background-color: ${props.theme.textBackgroundColor};
            color: ${props.theme.textFontColor};
            padding: ${(props.size === "small" && "11px") || "12px 30px"};
            &:hover{
              background-color: ${props.theme.hoverColor};
              color: ${props.theme.textHoverFontColor};
            }
            &:active {
              background-color: ${props.theme.hoverColor}${props.theme.textActiveOpacity} !important;
              color: ${props.theme.textHoverFontColor} !important;
            }
            &:focus {
              background-color: ${props.theme.hoverColor};
              color: ${props.theme.textHoverFontColor}; 
            }
            &:disabled{
              background-color: ${props.theme.textBackgroundColor};
              opacity: ${props.theme.disabledOpacity};
              color: ${props.theme.textFontColor};
              cursor:not-allowed;
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
  theme: PropTypes.oneOf(["dark", "light"]),
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onClick: PropTypes.func,
  iconSrc: PropTypes.string,
};

export default DxcButton;
