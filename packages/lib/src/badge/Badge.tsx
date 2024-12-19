import styled from "styled-components";
import BadgePropsType from "./types";
import CoreTokens from "../common/coreTokens";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";

const contextualColorMap = {
  grey: {
    background: CoreTokens.color_grey_200,
    text: CoreTokens.color_grey_900,
  },
  blue: {
    background: CoreTokens.color_blue_200,
    text: CoreTokens.color_blue_900,
  },
  green: {
    background: CoreTokens.color_green_200,
    text: CoreTokens.color_green_900,
  },
  orange: {
    background: CoreTokens.color_orange_200,
    text: CoreTokens.color_orange_900,
  },
  red: {
    background: CoreTokens.color_red_200,
    text: CoreTokens.color_red_900,
  },
  yellow: {
    background: CoreTokens.color_yellow_200,
    text: CoreTokens.color_yellow_900,
  },
  purple: {
    background: CoreTokens.color_purple_200,
    text: CoreTokens.color_purple_900,
  },
};

const sizeMap = {
  small: {
    height: "20px",
    width: "20px",
    minWidth: "20px",
    fontSize: CoreTokens.type_scale_01,
    borderRadius: CoreTokens.spacing_12,
    iconSize: "14px",
    padding: {
      contextual: `${CoreTokens.spacing_4}`,
      notification: `${CoreTokens.spacing_0} ${CoreTokens.spacing_4}`,
    },
  },
  medium: {
    height: "24px",
    width: "24px",
    minWidth: "24px",
    fontSize: CoreTokens.type_scale_02,
    borderRadius: CoreTokens.spacing_12,
    iconSize: "16px",
    padding: {
      contextual: `${CoreTokens.spacing_4} ${CoreTokens.spacing_8}`,
      notification: `${CoreTokens.spacing_0} ${CoreTokens.spacing_4}`,
    },
  },
  large: {
    height: "32px",
    width: "32px",
    minWidth: "32px",
    fontSize: CoreTokens.type_scale_04,
    borderRadius: CoreTokens.spacing_24,
    iconSize: "24px",
    padding: {
      contextual: `${CoreTokens.spacing_4} ${CoreTokens.spacing_8}`,
      notification: `${CoreTokens.spacing_0} ${CoreTokens.spacing_8}`,
    },
  },
};

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

const getColor = (mode: BadgePropsType["mode"], color: BadgePropsType["color"]) =>
  mode === "contextual" && color ? contextualColorMap[color].text : CoreTokens.color_white;

const getBackgroundColor = (mode: BadgePropsType["mode"], color: BadgePropsType["color"]) =>
  mode === "contextual" && color ? contextualColorMap[color].background : CoreTokens.color_red_700;

const getPadding = (mode: BadgePropsType["mode"], size: BadgePropsType["size"]) =>
  size && (mode === "contextual" ? sizeMap[size].padding.contextual : sizeMap[size].padding.notification);

const BadgeContainer = styled.div<{
  label: BadgePropsType["label"];
  mode: BadgePropsType["mode"];
  color: BadgePropsType["color"];
  size: BadgePropsType["size"];
}>`
  box-sizing: border-box;
  border-radius: ${(props) => props.size && sizeMap[props.size].borderRadius};
  padding: ${(props) => (props.label ? getPadding(props.mode, props.size) : "")};
  width: ${(props) =>
    !props.label && props.mode === "notification" ? props.size && sizeMap[props.size].width : "fit-content"};
  min-width: ${(props) => props.mode === "notification" && props.size && sizeMap[props.size].minWidth};
  height: ${(props) => props.size && sizeMap[props.size].height};
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_2};
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
  font-family: ${CoreTokens.type_sans};
  font-size: ${(props) => props.size && sizeMap[props.size].fontSize};
  font-weight: ${CoreTokens.type_semibold};
  white-space: nowrap;
`;

export default DxcBadge;
