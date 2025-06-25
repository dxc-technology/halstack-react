import styled from "@emotion/styled";
import BadgePropsType from "./types";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";

const contextualColorMap = {
  grey: {
    background: "var(--color-bg-neutral-light)",
    text: "var(--color-fg-neutral-strongest)",
  },
  blue: {
    background: "var(--color-bg-secondary-lighter)",
    text: "var(--color-fg-secondary-stronger)",
  },
  green: {
    background: "var(--color-bg-success-lighter)",
    text: "var(--color-fg-success-stronger)",
  },
  orange: {
    background: "var(--color-bg-warning-lighter)",
    text: "var(--color-fg-warning-stronger)",
  },
  red: {
    background: "var(--color-bg-error-lighter)",
    text: "var(--color-fg-error-stronger)",
  },
  yellow: {
    background: "var(--color-bg-yellow-light)",
    text: "var(--color-fg-neutral-yellow-dark)",
  },
  purple: {
    background: "var(--color-bg-primary-lighter)",
    text: "var(--color-fg-primary-stronger)",
  },
};

const notificationColor = {
  background: "var(--color-bg-error-strong)",
  text: "var(--color-fg-neutral-bright)",
};

const sizeMap = {
  small: {
    height: "var(--height-xs)",
    minWidth: "20px",
    fontSize: "var(--typography-label-s)",
    borderRadius: "var(--border-radius-l)",
    iconSize: "var(--height-xxxs)",
    padding: {
      contextual: "var(--spacing-padding-xxs)",
      notification: "var(--spacing-padding-none)",
      notificationLabelled: "var(--spacing-padding-none) var(--spacing-padding-xxs)",
    },
  },
  medium: {
    height: "var(--height-s)",
    minWidth: "24px",
    fontSize: "var(--typography-label-m)",
    borderRadius: "var(--border-radius-l)",
    iconSize: "var(--height-xxs)",
    padding: {
      contextual: "var(--spacing-padding-xxs) var(--spacing-padding-xs)",
      notification: "var(--spacing-padding-none)",
      notificationLabelled: "var(--spacing-padding-none) var(--spacing-padding-xxs)",
    },
  },
  large: {
    height: "var(--height-m)",
    minWidth: "32px",
    fontSize: "var(--typography-label-xl)",
    borderRadius: "var(--border-radius-xl)",
    iconSize: "var(--height-s)",
    padding: {
      contextual: "var(--spacing-padding-xxs) var(--spacing-padding-xs)",
      notification: "var(--spacing-padding-none)",
      notificationLabelled: "var(--spacing-padding-none) var(--spacing-padding-xs)",
    },
  },
};

const getColor = (mode: BadgePropsType["mode"], color: BadgePropsType["color"]) =>
  mode === "contextual" && color ? contextualColorMap[color].text : notificationColor.text;

const getBackgroundColor = (mode: BadgePropsType["mode"], color: BadgePropsType["color"]) =>
  mode === "contextual" && color ? contextualColorMap[color].background : notificationColor.background;

const getPadding = (mode: BadgePropsType["mode"], size: BadgePropsType["size"], label: BadgePropsType["label"]) =>
  size &&
  (mode === "contextual"
    ? sizeMap[size].padding.contextual
    : label
      ? sizeMap[size].padding.notificationLabelled
      : sizeMap[size].padding.notification);

const BadgeContainer = styled.div<{
  label: BadgePropsType["label"];
  mode: BadgePropsType["mode"];
  color: BadgePropsType["color"];
  size: BadgePropsType["size"];
}>`
  box-sizing: border-box;
  border-radius: ${(props) => props.size && sizeMap[props.size].borderRadius};
  padding: ${(props) => (props.label ? getPadding(props.mode, props.size, props.label) : "")};
  width: ${(props) =>
    !props.label && props.mode === "notification" ? props.size && sizeMap[props.size].minWidth : "fit-content"};
  min-width: ${(props) => props.mode === "notification" && props.size && sizeMap[props.size].minWidth};
  height: ${(props) => props.size && sizeMap[props.size].height};
  display: flex;
  align-items: center;
  ${(props) => props.mode === "contextual" && "gap: var(--spacing-gap-xxs)"};
  justify-content: center;
  background-color: ${(props) => getBackgroundColor(props.mode, props.color)};
  color: ${(props) => getColor(props.mode, props.color)};
`;

const IconContainer = styled.div<{ size: BadgePropsType["size"] }>`
  display: flex;
  font-size: ${(props) => props.size && sizeMap[props.size].iconSize};

  svg {
    height: ${(props) => props.size && sizeMap[props.size].iconSize};
    width: ${(props) => props.size && sizeMap[props.size].iconSize};
  }
`;

const Label = styled.span<{ size: BadgePropsType["size"] }>`
  font-family: var(--typography-font-family);
  font-size: ${(props) => props.size && sizeMap[props.size].fontSize};
  font-style: normal;
  font-weight: var(--typography-label-semibold);
  white-space: nowrap;
  line-height: normal;
`;

const DxcBadge = ({
  label,
  title,
  mode = "contextual",
  color = "grey",
  icon,
  notificationLimit = 99,
  size = "medium",
}: BadgePropsType): JSX.Element => (
  <Tooltip label={title}>
    <BadgeContainer
      label={label}
      mode={mode}
      color={(mode === "contextual" && color) || undefined}
      size={size}
      aria-label={title}
    >
      {mode === "contextual" && icon && (
        <IconContainer size={size}>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</IconContainer>
      )}
      {label && (
        <Label size={size}>
          {typeof label === "number" ? (label > notificationLimit ? `+${notificationLimit}` : label) : label}
        </Label>
      )}
    </BadgeContainer>
  </Tooltip>
);

export default DxcBadge;
