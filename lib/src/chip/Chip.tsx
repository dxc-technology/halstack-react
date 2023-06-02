import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import useTheme from "../useTheme";
import ChipPropsType from "./types";

const DxcChip = ({
  label,
  suffixIcon,
  prefixIcon,
  onClickSuffix,
  onClickPrefix,
  disabled,
  margin,
  tabIndex = 0,
}: ChipPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.chip}>
      <Chip disabled={disabled} margin={margin}>
        {prefixIcon && (
          <IconContainer
            disabled={disabled}
            prefixIcon
            label={label}
            tabIndex={typeof onClickPrefix === "function" && !disabled ? tabIndex : -1}
            onClick={() => onClickPrefix && !disabled && onClickPrefix()}
            interactuable={typeof onClickPrefix === "function" && !disabled}
          >
            {typeof prefixIcon === "string" ? <img src={prefixIcon} /> : prefixIcon}
          </IconContainer>
        )}
        {label && <ChipTextContainer disabled={disabled}>{label}</ChipTextContainer>}
        {suffixIcon && (
          <IconContainer
            disabled={disabled}
            suffixIcon
            label={label}
            tabIndex={typeof onClickSuffix === "function" && !disabled ? tabIndex : -1}
            onClick={() => !disabled && onClickSuffix?.()}
            interactuable={typeof onClickSuffix === "function" && !disabled}
          >
            {typeof suffixIcon === "string" ? <img src={suffixIcon} /> : suffixIcon}
          </IconContainer>
        )}
      </Chip>
    </ThemeProvider>
  );
};

const calculateWidth = (margin: ChipPropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const Chip = styled.div<{ margin: ChipPropsType["margin"]; disabled: ChipPropsType["disabled"] }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.iconSpacing};
  min-height: 40px;
  max-width: ${(props) => calculateWidth(props.margin)};
  background-color: ${(props) =>
    (props.disabled && props.theme.disabledBackgroundColor) || props.theme.backgroundColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => props.theme.borderColor};

  padding-top: ${(props) => props.theme.contentPaddingTop};
  padding-bottom: ${(props) => props.theme.contentPaddingBottom};
  padding-left: ${(props) => props.theme.contentPaddingLeft};
  padding-right: ${(props) => props.theme.contentPaddingRight};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

const ChipTextContainer = styled.span<{ disabled: ChipPropsType["disabled"] }>`
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  color: ${(props) => (props.disabled ? props.theme.disabledFontColor : props.theme.fontColor)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const IconContainer = styled.div<{
  prefixIcon?: ChipPropsType["prefixIcon"];
  label: ChipPropsType["label"];
  suffixIcon?: ChipPropsType["suffixIcon"];
  disabled: ChipPropsType["disabled"];
  interactuable: boolean;
}>`
  display: flex;
  border-radius: 0.25rem;
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};

  ${({ disabled, interactuable }) => {
    if (disabled) return "cursor: not-allowed;";
    else if (interactuable) return "cursor: pointer;";
    else return "cursor: default;";
  }}

  ${(props) =>
    !props.disabled &&
    `
      &:hover {
        color: ${props.theme.hoverIconColor};
      }
      &:focus,
      &:focus-visible {
        outline: ${props.theme.focusBorderThickness} solid ${props.theme.focusColor};
      }
      &:active {
        color: ${props.theme.activeIconColor};
      }
    `}

  img,
  svg {
    width: ${(props) => props.theme.iconSize};
    height: ${(props) => props.theme.iconSize};
  }
`;

export default DxcChip;
