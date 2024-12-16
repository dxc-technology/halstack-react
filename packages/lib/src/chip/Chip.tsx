import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import DxcIcon from "../icon/Icon";
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
    <ThemeProvider theme={colorsTheme?.chip}>
      <Chip disabled={disabled} margin={margin}>
        {prefixIcon && (
          <IconContainer
            role={typeof onClickPrefix === "function" ? "button" : undefined}
            aria-label={typeof onClickPrefix === "function" ? "Prefix Action" : undefined}
            disabled={disabled}
            interactive={typeof onClickPrefix === "function" && !disabled}
            tabIndex={typeof onClickPrefix === "function" && !disabled ? tabIndex : -1}
            onClick={() => onClickPrefix && !disabled && onClickPrefix()}
          >
            {typeof prefixIcon === "string" ? <DxcIcon icon={prefixIcon} /> : prefixIcon}
          </IconContainer>
        )}
        {label && <LabelContainer disabled={disabled}>{label}</LabelContainer>}
        {suffixIcon && (
          <IconContainer
            role={typeof onClickSuffix === "function" ? "button" : undefined}
            aria-label={typeof onClickSuffix === "function" ? "Suffix Action" : undefined}
            disabled={disabled}
            interactive={typeof onClickSuffix === "function" && !disabled}
            tabIndex={typeof onClickSuffix === "function" && !disabled ? tabIndex : -1}
            onClick={() => !disabled && onClickSuffix?.()}
          >
            {typeof suffixIcon === "string" ? <DxcIcon icon={suffixIcon} /> : suffixIcon}
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

const LabelContainer = styled.span<{ disabled: ChipPropsType["disabled"] }>`
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  color: ${(props) => (props.disabled ? props.theme.disabledFontColor : props.theme.fontColor)};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const IconContainer = styled.div<{
  disabled: ChipPropsType["disabled"];
  interactive: boolean;
}>`
  display: flex;
  border-radius: 0.25rem;
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};
  ${({ interactive }) => interactive && "cursor: pointer;"}

  ${(props) =>
    props.interactive &&
    `
      &:hover {
        color: ${props.theme.hoverIconColor};
      }
      &:focus,
      &:focus-visible {
        outline: ${props.theme.focusBorderThickness} ${props.theme.focusBorderStyle} ${props.theme.focusColor};
      }
      &:active {
        color: ${props.theme.activeIconColor};
      }
    `}

  font-size: ${(props) => props.theme.iconSize};
  svg {
    width: ${(props) => props.theme.iconSize};
    height: ${(props) => props.theme.iconSize};
  }
`;

export default DxcChip;
