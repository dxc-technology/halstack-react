import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import HalstackContext from "../HalstackContext";
import ChipPropsType from "./types";

const calculateWidth = (margin: ChipPropsType["margin"]) =>
  `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;

const Chip = styled.div<{ margin: ChipPropsType["margin"]; disabled: ChipPropsType["disabled"] }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  min-height: var(--height-xl);
  max-width: ${(props) => calculateWidth(props.margin)};
  background-color: var(--color-bg-neutral-light);
  border-radius: var(--border-radius-xl);

  padding: var(--spacing-padding-none) var(--spacing-padding-m);
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
  font-size: var(--typography-label-l);
  font-family: var(--typography-font-family);
  font-weight: var(--typography-label-regular);
  font-style: var(--font-style-normal);
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const IconContainer = styled.div<{
  disabled: ChipPropsType["disabled"];
  interactive: boolean;
}>`
  display: flex;
  border-radius: var(--border-radius-xs);
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  ${({ interactive }) => interactive && "cursor: pointer;"}

  ${(props) =>
    props.interactive &&
    `
      &:hover, &:active{
        background-color: var(--color-bg-alpha-light);
      }
      &:focus,
      &:focus-visible {
        outline: var(--border-width-m, 2px) solid var(--border-color-secondary-medium);
      }
    `}

  font-size: var(--height-s);
  svg {
    width: 24px;
    height: var(--height-s);
  }
`;

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
  const colorsTheme = useContext(HalstackContext);

  return (
    <ThemeProvider theme={colorsTheme.chip}>
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

export default DxcChip;
