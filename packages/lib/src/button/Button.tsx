import styled from "@emotion/styled";
import { spaces } from "../common/variables";
import ButtonPropsType, { Mode, Semantic, Size } from "./types";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";
import { calculateWidth, getButtonStyles, getHeight } from "./utils";

const Button = styled.button<{
  iconOnly: boolean;
  iconPosition: ButtonPropsType["iconPosition"];
  margin: ButtonPropsType["margin"];
  semantic: Semantic;
  size: Size;
  $mode: Mode;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ iconPosition }) => (iconPosition === "after" ? "row" : "row-reverse")};
  gap: ${({ size }) =>
    size.height === "medium" || size.height === "small" ? "var(--spacing-gap-xs)" : "var(--spacing-gap-s)"};
  height: ${({ size }) => getHeight(size.height)};
  width: ${(props) => calculateWidth(props.margin, props.size)};
  cursor: pointer;

  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};

  ${({ size, iconOnly }) => {
    switch (size.height) {
      case "small":
        return `padding: var(--spacing-padding-none) var(${iconOnly ? "--spacing-padding-xxs" : "--spacing-padding-xs"});`;
      case "medium":
        return "padding: var(--spacing-padding-none) var(--spacing-padding-xs)";
      case "large":
        return `padding: var(--spacing-padding-none) var(${iconOnly ? "--spacing-padding-xs" : "--spacing-padding-m"});`;
      default:
        return `padding: var(--spacing-padding-none) var(${iconOnly ? "--spacing-padding-xs" : "--spacing-padding-m"});`;
    }
  }};

  ${(props) => getButtonStyles(props.$mode, props.semantic, props.size)};
`;

const LabelContainer = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: none;
  white-space: nowrap;
`;

const IconContainer = styled.div<{
  size: Size;
}>`
  display: flex;
  font-size: ${({ size }) =>
    size.height === "medium" || size.height === "small" ? "var(--height-xxs)" : "var(--height-s)"};
  svg {
    height: ${({ size }) =>
      size.height === "medium" || size.height === "small" ? "var(--height-xxs)" : "var(--height-s)"};
    width: ${({ size }) => (size.height === "medium" || size.height === "small" ? "16" : "24")}px;
  }
`;

const DxcButton = ({
  disabled,
  icon,
  iconPosition = "before",
  label,
  margin,
  mode = "primary",
  onClick,
  semantic = "default",
  size = { height: "large", width: "fitContent" },
  tabIndex = 0,
  title,
  type = "button",
}: ButtonPropsType): JSX.Element => (
  <TooltipWrapper condition={!disabled} label={title}>
    <Button
      aria-label={title}
      disabled={disabled}
      iconOnly={!!icon && !label}
      iconPosition={iconPosition}
      margin={margin}
      onClick={onClick}
      semantic={semantic}
      size={size}
      tabIndex={disabled ? -1 : tabIndex}
      type={type}
      $mode={mode}
    >
      {label && <LabelContainer>{label}</LabelContainer>}
      {icon && <IconContainer size={size}>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</IconContainer>}
    </Button>
  </TooltipWrapper>
);

export default DxcButton;
