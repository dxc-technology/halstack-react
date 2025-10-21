import styled from "@emotion/styled";
import { getMargin } from "../common/utils";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import ChipPropsType from "./types";
import ActionIcon from "../action-icon/ActionIcon";

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
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const IconContainer = styled.div<{
  disabled: ChipPropsType["disabled"];
}>`
  display: flex;
  border-radius: var(--border-radius-xs);
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
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
}: ChipPropsType) => (
  <Chip disabled={disabled} margin={margin}>
    {prefixIcon &&
      (typeof onClickPrefix === "function" ? (
        <ActionIcon
          disabled={disabled}
          icon={prefixIcon}
          onClick={onClickPrefix}
          tabIndex={tabIndex}
          title={!disabled ? "Prefix Action" : undefined}
        />
      ) : (
        <IconContainer disabled={disabled}>
          {typeof prefixIcon === "string" ? <DxcIcon icon={prefixIcon} /> : prefixIcon}
        </IconContainer>
      ))}
    {label && <LabelContainer disabled={disabled}>{label}</LabelContainer>}
    {suffixIcon &&
      (typeof onClickSuffix === "function" ? (
        <ActionIcon
          disabled={disabled}
          icon={suffixIcon}
          onClick={onClickSuffix}
          tabIndex={tabIndex}
          title={!disabled ? "Suffix Action" : undefined}
        />
      ) : (
        <IconContainer disabled={disabled}>
          {typeof suffixIcon === "string" ? <DxcIcon icon={suffixIcon} /> : suffixIcon}
        </IconContainer>
      ))}
  </Chip>
);

export default DxcChip;
