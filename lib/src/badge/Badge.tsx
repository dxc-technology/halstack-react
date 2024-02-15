import React from "react";
import styled from "styled-components";
import BadgePropsType from "./types";
import DxcFlex from "../flex/Flex";
import CoreTokens from "../common/coreTokens";

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
    padding: {
      contextual: `${CoreTokens.spacing_4} ${CoreTokens.spacing_8}`,
      notification: `${CoreTokens.spacing_0} ${CoreTokens.spacing_8}`,
    },
  },
};

const Label = ({ label, notificationLimit, size }) => {
  return (
    <LabelContainer size={size}>
      {typeof label === "number" ? (label > notificationLimit ? "+" + notificationLimit : label) : label}
    </LabelContainer>
  );
};

const DxcBadge = ({
  label,
  title,
  mode = "contextual",
  color = "grey",
  icon,
  notificationLimit = 99,
  size = "medium",
}: BadgePropsType): JSX.Element => {
  return (
    <BadgeContainer label={label} mode={mode} color={color} size={size} title={title} aria-label={title}>
      {(mode === "contextual" && (
        <DxcFlex gap="0.125rem" alignItems="center">
          {icon && <IconContainer>{typeof icon === "string" ? <img src={icon} alt={title} /> : icon}</IconContainer>}
          <Label label={label} notificationLimit={notificationLimit} size={size} />
        </DxcFlex>
      )) || <Label label={label} notificationLimit={notificationLimit} size={size} />}
    </BadgeContainer>
  );
};

const getColor = (mode, color) => {
  return mode === "contextual" ? contextualColorMap[color].text : CoreTokens.color_white;
};

const getBackgroundColor = (mode, color) => {
  return mode === "contextual" ? contextualColorMap[color].background : CoreTokens.color_red_700;
};

const getPadding = (mode, size) => {
  return mode === "contextual" ? sizeMap[size].padding.contextual : sizeMap[size].padding.notification;
};

const BadgeContainer = styled.div<{
  label: BadgePropsType["label"];
  mode: BadgePropsType["mode"];
  color: BadgePropsType["color"];
  size: BadgePropsType["size"];
}>`
  display: flex;
  color: ${(props) => getColor(props.mode, props.color)};
  background-color: ${(props) => getBackgroundColor(props.mode, props.color)};
  border-radius: ${(props) => sizeMap[props.size].borderRadius};
  width: ${(props) => (!props.label && props.mode === "notification" ? sizeMap[props.size].width : "fit-content")};
  min-width: ${(props) => props.mode === "notification" && sizeMap[props.size].minWidth};
  height: ${(props) => sizeMap[props.size].height};
  padding: ${(props) => (props.label ? getPadding(props.mode, props.size) : "")};
  align-items: center;
  justify-content: center;
  box-sizing: ${(props) => props.mode === "notification" && "border-box"};
`;

const IconContainer = styled.div`
  display: flex;
  img,
  svg {
    height: 24px;
    width: 24px;
  }
`;

const LabelContainer = styled.span<{ size: BadgePropsType["size"] }>`
  font-family: ${CoreTokens.type_sans};
  font-size: ${(props) => sizeMap[props.size].fontSize};
  font-weight: ${CoreTokens.type_semibold};
`;

export default DxcBadge;
