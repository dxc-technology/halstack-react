import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js";
import closeIcon from "./close.svg";
import errorIcon from "./error.svg";
import infoIcon from "./info.svg";
import successIcon from "./success.svg";
import warningIcon from "./warning.svg";

const DxcAlert = ({ type = "info", mode = "inline", inlineText = "", onClose, children }) => {
  const getTypeText = () => {
    return type === "info" ? "information" : type === "confirm" ? "success" : type === "warning" ? "warning" : "error";
  };

  return (
    <OverlayContainer mode={mode}>
      <AlertContainer mode={mode} type={type} onClose={onClose}>
        <AlertInfo>
          <AlertIcon
            src={
              (type === "info" && infoIcon) ||
              (type === "confirm" && successIcon) ||
              (type === "warning" && warningIcon) ||
              (type === "error" && errorIcon)
            }
          />
          <AlertInfoText>
            <AlertType type={type}>{getTypeText(type)}</AlertType>
            {inlineText && inlineText !== "" && "-"}
            <AlertText>{inlineText}</AlertText>
            {onClose && <CloseAlertIcon src={closeIcon} onClick={onClose} />}
          </AlertInfoText>
        </AlertInfo>
        {children && <AlertContent>{children}</AlertContent>}
      </AlertContainer>
    </OverlayContainer>
  );
};

DxcAlert.propTypes = {
  type: PropTypes.oneOf(["info", "confirm", "warning", "error"]),
  mode: PropTypes.oneOf(["inline", "modal"]),
  inlineText: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.string
};

const OverlayContainer = styled.div`
  background-color: ${props => (props.mode === "modal" ? `${colors.black}B3` : `${colors.white}`)};
  display: ${props => (props.mode === "modal" ? "flex" : "")};
  justify-content: ${props => (props.mode === "modal" ? "center" : "")};
  align-items: ${props => (props.mode === "modal" ? "center" : "")};
  top: ${props => (props.mode === "modal" ? 0 : "")};
  bottom: ${props => (props.mode === "modal" ? 0 : "")};
  right: ${props => (props.mode === "modal" ? 0 : "")};
  left: ${props => (props.mode === "modal" ? 0 : "")};
  width: ${props => (props.mode === "modal" ? "100%" : "")};
  height: ${props => (props.mode === "modal" ? "100%" : "")};
  position: ${props => (props.mode === "modal" ? "fixed" : "")};
`;

const AlertContainer = styled.div`
  margin: 15px;
  font-size: 12px;
  overflow: hidden;
  box-shadow: 0px 3px 6px #00000012;
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  justify-content: ${props => (props.mode === "modal" ? "center" : "")};
  align-items: ${props => (props.mode === "modal" ? "center" : "")};
  min-width: ${props =>
    (props.children && props.children.filter(child => child === undefined).length === 0 && "348px") || "590px"};
  max-width: ${props =>
    (props.children && props.children.filter(child => child === undefined).length === 0 && "590px") || "810px"};
  min-height: ${props =>
    (props.children && props.children.filter(child => child === undefined).length === 0 && "92px") || "48px"};
  background-color: ${props =>
    (props.type === "info" && colors.lightBlue) ||
    (props.type === "confirm" && colors.lightGreen) ||
    (props.type === "warning" && colors.lightYellow) ||
    (props.type === "error" && colors.lightPink)};
`;

const AlertInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
`;

const AlertType = styled.div`
  text-transform: uppercase;
  padding-right: 10px;
  font-weight: bold;
`;

const AlertText = styled.div`
  padding-left: 10px;
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
`;

const AlertContent = styled.div`
  flex: 1 1 auto;
  padding: 8px 12px 20px 46px;
  overflow-y: auto;
`;

const CloseAlertIcon = styled.img`
  cursor: pointer;
`;

export default DxcAlert;
