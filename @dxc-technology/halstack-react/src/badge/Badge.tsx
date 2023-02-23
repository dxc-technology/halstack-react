import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import BadgePropsType from "./types";

const DxcBadge = ({ notificationText, disabled }: BadgePropsType): JSX.Element => {
  const colorsTheme = useTheme();
  return (
    <ThemeProvider theme={colorsTheme["tabs"]}>
      <StyledDxcBadge notificationText={notificationText} disabled={disabled}>
        <span>{notificationText}</span>
      </StyledDxcBadge>
    </ThemeProvider>
  );
};

const StyledDxcBadge = styled.div<BadgePropsType>`
  background-color: ${(props) =>
    props.disabled ? props.theme.disabledBadgeBackgroundColor : props.theme.badgeBackgroundColor};
  font-family: ${(props) => props.theme.badgeFontFamily};
  font-size: ${(props) => props.theme.badgeFontSize};
  font-style: ${(props) => props.theme.badgeFontStyle};
  font-weight: ${(props) => props.theme.badgeFontWeight};
  color: ${(props) => props.theme.badgeFontColor};
  letter-spacing: ${(props) => props.theme.badgeLetterSpacing};
  width: ${(props) =>
    props.notificationText === true ? props.theme.badgeWidth : props.theme.badgeWidthWithNotificationNumber};
  height: ${(props) =>
    props.notificationText === true ? props.theme.badgeHeight : props.theme.badgeHeightWithNotificationNumber};
  border-radius: ${(props) =>
    props.notificationText === true ? props.theme.badgeRadius : props.theme.badgeRadiusWithNotificationNumber};
  display: flex;
  padding-bottom: 1px;
  padding-right: 1px;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  line-height: 1;
  align-content: center;
  flex-direction: row;
  justify-content: center;
`;

export default DxcBadge;
