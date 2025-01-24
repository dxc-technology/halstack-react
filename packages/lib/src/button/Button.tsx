import styled from "styled-components";
import { spaces } from "../common/variables";
import ButtonPropsType, { Mode, Semantic, Size } from "./types";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
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
  gap: ${({ size }) => (size.height === "large" ? "var(--spacing-gap-s)" : "var(--spacing-gap-xs)")};
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
        return `padding: var(--spacing-padding-none) ${iconOnly ? "var(--spacing-padding-xxs)" : "var(--spacing-padding-xs)"};`;
      case "medium":
        return "padding: var(--spacing-padding-none) var(--spacing-padding-xs)";
      case "large":
        return `padding: var(--spacing-padding-none) ${iconOnly ? "var(--spacing-padding-xs)" : "var(--spacing-padding-m)"};`;
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
  font-size: ${({ size }) => (size?.height === "large" ? "24" : "16")}px;
  svg {
    height: ${({ size }) => (size?.height === "large" ? "24" : "16")}px;
    width: ${({ size }) => (size?.height === "large" ? "24" : "16")}px;
  }
`;

const DxcButton = ({
  label,
  mode = "primary",
  semantic = "default",
  disabled,
  iconPosition = "before",
  title,
  type = "button",
  icon,
  onClick,
  margin,
  size = { height: "large", width: "fitContent" },
  tabIndex = 0,
}: ButtonPropsType): JSX.Element => (
  <Tooltip label={title}>
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
  </Tooltip>
);

export default DxcButton;
