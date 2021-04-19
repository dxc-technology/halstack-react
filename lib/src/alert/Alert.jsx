import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import { spaces } from "../common/variables.js";
import closeIcon from "./close.svg";
import errorIcon from "./error.svg";
import infoIcon from "./info.svg";
import successIcon from "./success.svg";
import warningIcon from "./warning.svg";
import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme.js";

const DxcAlert = ({
  type = "info",
  mode = "inline",
  inlineText = "",
  onClose,
  children,
  margin,
  size = "fitContent",
  tabIndex
}) => {
  const colorsTheme = useTheme();

  const getTypeText = () => {
    return type === "info" ? "information" : type === "confirm" ? "success" : type === "warning" ? "warning" : "error";
  };

  return (
    <ThemeProvider theme={colorsTheme.alert}>
      <AlertModal mode={mode}>
        {mode === "modal" && <OverlayContainer mode={mode} onClick={onClose}></OverlayContainer>}
        <AlertContainer mode={mode} type={type} margin={margin} size={size}>
          <AlertInfo>
            <AlertIcon
              src={
                (type === "info" && infoIcon) ||
                (type === "confirm" && successIcon) ||
                (type === "warning" && warningIcon) ||
                (type === "error" && errorIcon) ||
                errorIcon
              }
            />
            <AlertInfoText>
              <AlertType type={type}>{getTypeText(type)}</AlertType>
              {inlineText && inlineText !== "" && "-"}
              <AlertText>{inlineText}</AlertText>
              {onClose && (
                <CloseAlertIcon onClick={onClose} tabIndex={tabIndex}>
                  <CloseImg src={closeIcon} />
                </CloseAlertIcon>
              )}
            </AlertInfoText>
          </AlertInfo>
          {children && <AlertContent>{children}</AlertContent>}
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

const calculateWidth = (margin, size) => {
  if (size === "fillParent") {
    return `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
  }
  return sizes[size];
};

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
  tabIndex: PropTypes.number
};

const AlertModal = styled.div`
  width: ${(props) => (props.mode === "modal" ? "100%" : "")};
  height: ${(props) => (props.mode === "modal" ? "100%" : "")};
  justify-content: ${(props) => (props.mode === "modal" ? "center" : "")};
  align-items: ${(props) => (props.mode === "modal" ? "center" : "")};
  top: ${(props) => (props.mode === "modal" ? "0" : "")};
  left: ${(props) => (props.mode === "modal" ? "0" : "")};
  position: ${(props) => (props.mode === "modal" ? "fixed" : "")};
  display: ${(props) => (props.mode === "modal" ? "flex" : "")};
  z-index: 200;
`;

const OverlayContainer = styled.div`
  background-color: ${(props) => (props.mode === "modal" ? `${props.theme.overlayColor}` : "transparent")};
  opacity: ${(props) => props.mode === "modal" && "0.8"};
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
  display: ${(props) => (props.children && "inline-block") || "inline-flex"};
  font-size: 12px;
  overflow: hidden;
  box-shadow: 0px 3px 6px #00000012;
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  justify-content: ${(props) => (props.mode === "modal" ? "center" : "")};
  align-items: ${(props) => (props.mode === "modal" ? "center" : "")};
  max-width: ${(props) =>
    props.size === "fitContent"
      ? calculateWidth(props.margin, "fillParent")
      : calculateWidth(props.margin, props.size)};
  width: ${(props) => calculateWidth(props.margin, props.size)};
  min-height: ${(props) =>
    (props.children && props.children.filter((child) => child === undefined).length === 0 && "92px") || "48px"};
  background-color: ${(props) =>
    (props.type === "info" && props.theme.infoColor) ||
    (props.type === "confirm" && props.theme.confirmColor) ||
    (props.type === "warning" && props.theme.warningColor) ||
    (props.type === "error" && props.theme.errorColor) ||
    props.theme.lightPink};
  z-index: 300;
  cursor: default;
`;

const AlertInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
  width: 100%;
`;

const AlertType = styled.div`
  text-transform: uppercase;
  padding-right: 10px;
  font-weight: bold;
`;

const AlertText = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AlertIcon = styled.img`
  padding-left: 12px;
`;

const AlertInfoText = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
`;

const AlertContent = styled.div`
  flex: 1 1 auto;
  padding: 8px 12px 20px 46px;
  overflow-y: auto;
`;

const CloseAlertIcon = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  height: 20px;
  width: 20px;
  display: inline-flex;
`;

const CloseImg = styled.img``;

export default DxcAlert;
