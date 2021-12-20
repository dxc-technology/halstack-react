import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";
import { BackgroundColorProvider } from "../BackgroundColorContext.js";

const alertIcons = {
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  warning: (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        fill="currentColor"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
};

const DxcAlert = ({
  type = "info",
  mode = "inline",
  inlineText = "",
  onClose,
  children,
  margin,
  size = "fitContent",
  tabIndex,
}) => {
  const colorsTheme = useTheme();

  const getTypeText = () =>
    type === "info" ? "information" : type === "confirm" ? "success" : type === "warning" ? "warning" : "error";

  return (
    <ThemeProvider theme={colorsTheme.alert}>
      <AlertModal mode={mode}>
        {mode === "modal" && <OverlayContainer mode={mode} onClick={onClose}></OverlayContainer>}
        <AlertContainer mode={mode} type={type} margin={margin} size={size}>
          <AlertInfo>
            <AlertIcon type={type}>
              {(type === "info" && alertIcons.info) ||
                (type === "confirm" && alertIcons.success) ||
                (type === "warning" && alertIcons.warning) ||
                (type === "error" && alertIcons.error)}
            </AlertIcon>
            <AlertText>
              <AlertTitle type={type}>{getTypeText(type)}</AlertTitle>
              {inlineText && inlineText !== "" && "-"}
              <AlertInlineText>{inlineText}</AlertInlineText>
            </AlertText>
            {onClose && (
              <AlertCloseAction onClick={onClose} tabIndex={tabIndex}>
                {alertIcons.close}
              </AlertCloseAction>
            )}
          </AlertInfo>
          {children && (
            <AlertContent>
              <BackgroundColorProvider
                color={
                  (type === "info" && colorsTheme.alert.infoBackgroundColor) ||
                  (type === "confirm" && colorsTheme.alert.successBackgroundColor) ||
                  (type === "warning" && colorsTheme.alert.warningBackgroundColor) ||
                  (type === "error" && colorsTheme.alert.errorBackgroundColor)
                }
              >
                {children}
              </BackgroundColorProvider>
            </AlertContent>
          )}
        </AlertContainer>
      </AlertModal>
    </ThemeProvider>
  );
};

const sizes = {
  small: "280px",
  medium: "480px",
  large: "820px",
  fillParent: "100%",
  fitContent: "auto",
};

const calculateWidth = (margin, size) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const AlertModal = styled.div`
  font-size: ${(props) => props.theme.fontSizeBase};
  width: ${(props) => (props.mode === "modal" ? "100%" : "")};
  height: ${(props) => (props.mode === "modal" ? "100%" : "")};
  justify-content: ${(props) => (props.mode === "modal" ? "center" : "")};
  align-items: ${(props) => (props.mode === "modal" ? "center" : "")};
  top: ${(props) => (props.mode === "modal" ? "0" : "")};
  left: ${(props) => (props.mode === "modal" ? "0" : "")};
  position: ${(props) => (props.mode === "modal" ? "fixed" : "")};
  display: ${(props) => (props.mode === "modal" ? "flex" : "")};
  z-index: ${(props) => (props.mode === "modal" ? "1200" : "")};
`;

const OverlayContainer = styled.div`
  background-color: ${(props) => (props.mode === "modal" ? `${props.theme.overlayColor}` : "transparent")};
  position: ${(props) => (props.mode === "modal" ? "fixed" : "")};
  top: ${(props) => (props.mode === "modal" ? "0" : "")};
  bottom: ${(props) => (props.mode === "modal" ? "0" : "")};
  left: ${(props) => (props.mode === "modal" ? "0" : "")};
  right: ${(props) => (props.mode === "modal" ? "0" : "")};
`;

const AlertContainer = styled.div`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: ${(props) => (props.size === "fitContent" ? "inline-block" : "block")};
  overflow: hidden;
  box-sizing: border-box;

  background-color: ${(props) =>
    (props.type === "info" && props.theme.infoBackgroundColor) ||
    (props.type === "confirm" && props.theme.successBackgroundColor) ||
    (props.type === "warning" && props.theme.warningBackgroundColor) ||
    (props.type === "error" && props.theme.errorBackgroundColor)};

  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) =>
    (props.type === "info" && props.theme.infoBorderColor) ||
    (props.type === "confirm" && props.theme.successBorderColor) ||
    (props.type === "warning" && props.theme.warningBorderColor) ||
    (props.type === "error" && props.theme.errorBorderColor)};

  padding-left: 12px;
  padding-right: 12px;
  justify-content: ${(props) => (props.mode === "modal" ? "center" : "")};
  align-items: ${(props) => (props.mode === "modal" ? "center" : "")};
  max-width: ${(props) => props.size !== "fillParent" && calculateWidth(props.margin, "fillParent")};
  width: ${(props) => props.size !== "fillParent" && calculateWidth(props.margin, props.size)};
  z-index: ${(props) => (props.mode === "modal" ? "1300" : "")};
`;

const AlertInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(48px - calc(${(props) => props.theme.borderThickness} * 2));
  align-items: center;
  width: 100%;
`;

const AlertTitle = styled.div`
  margin-right: 8px;
  padding-right: ${(props) => props.theme.titlePaddingRight};
  padding-left: ${(props) => props.theme.titlePaddingLeft};
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: ${(props) => props.theme.titleFontSize};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  color: ${(props) => props.theme.titleFontColor};
  text-transform: ${(props) => props.theme.titleTextTransform};
`;

const AlertInlineText = styled.div`
  margin-left: 8px;
  padding-right: ${(props) => props.theme.inlineTextPaddingRight};
  padding-left: ${(props) => props.theme.inlineTextPaddingLeft};
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${(props) => props.theme.inlineTextFontFamily};
  font-size: ${(props) => props.theme.inlineTextFontSize};
  font-style: ${(props) => props.theme.inlineTextFontStyle};
  font-weight: ${(props) => props.theme.inlineTextFontWeight};
  color: ${(props) => props.theme.inlineTextFontColor};
`;

const AlertIcon = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-right: 12px;
  padding-right: ${(props) => props.theme.iconPaddingRight};
  padding-left: ${(props) => props.theme.iconPaddingLeft};

  color: ${(props) =>
    (props.type === "info" && props.theme.infoIconColor) ||
    (props.type === "confirm" && props.theme.successIconColor) ||
    (props.type === "warning" && props.theme.warningIconColor) ||
    (props.type === "error" && props.theme.errorIconColor)};

  svg {
    width: ${(props) => props.theme.iconSize};
    height: ${(props) => props.theme.iconSize};
  }
`;

const AlertText = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
`;

const AlertContent = styled.div`
  flex: 1 1 auto;
  padding: ${(props) =>
    `${props.theme.contentPaddingTop} ${props.theme.contentPaddingRight} ${props.theme.contentPaddingBottom} ${props.theme.contentPaddingLeft}`};
  overflow-y: auto;
`;

const AlertCloseAction = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  border: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0 0 0 2px transparent;
  padding: 3px;
  margin-left: 12px;
  background-color: transparent;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverActionBackgroundColor};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.focusActionBorderColor};
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.focusActionBorderColor};
  }
  &:active {
    background-color: ${(props) => props.theme.activeActionBackgroundColor};
  }
`;

DxcAlert.propTypes = {
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  type: PropTypes.oneOf(["info", "confirm", "warning", "error"]),
  mode: PropTypes.oneOf(["inline", "modal"]),
  inlineText: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.element,
  size: PropTypes.oneOf([...Object.keys(sizes)]),
  tabIndex: PropTypes.number,
};

export default DxcAlert;
