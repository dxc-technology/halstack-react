import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import "../common/OpenSans.css";
import colors from "../common/variables.js";
import closeIcon from "./close.svg";
import errorIcon from "./error.svg";
import infoIcon from "./info.svg";
import successIcon from "./success.svg";
import warningIcon from "./warning.svg";

const DxcAlert = ({ type = "info", mode = "inline", isVisible = false, inlineText = "", onClose, children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!isVisible);
    isVisible = open;
  };

  const getTypeText = () => {
    return type === "info" ? "information" : type === "confirm" ? "success" : type === "warning" ? "warning" : "error";
  };

  return (
    <AlertContainer
      style={{ position: "static" }}
      mode={mode}
      type={type}
      inlineText={inlineText}
      open={isVisible}
      onClose={handleClose}
    >
      <DialogInfo>
        <DialogIcon
          src={
            (type === "info" && infoIcon) ||
            (type === "confirm" && successIcon) ||
            (type === "warning" && warningIcon) ||
            (type === "error" && errorIcon)
          }
        />
        <DialogInfoText>
          <DialogType type={type}>{getTypeText(type)}</DialogType>
          {inlineText && inlineText !== "" && "-"}
          <DialogText>{inlineText}</DialogText>
          {onClose && <CloseDialogIcon src={closeIcon} onClick={onClose} />}
        </DialogInfoText>
      </DialogInfo>
      {children && <DialogContent>{children}</DialogContent>}
    </AlertContainer>
  );
};

DxcAlert.propTypes = {
  type: PropTypes.oneOf(["info", "confirm", "warning", "error"]),
  mode: PropTypes.oneOf(["inline", "modal"]),
  isVisible: PropTypes.bool,
  inlineText: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.string
};

const AlertContainer = styled(Dialog)`
  font-family: "Open Sans", sans-serif;
  .MuiDialog-container {
    display: ${props => (props.mode === "modal" ? "flex" : "block")};
    justify-content: ${props => (props.mode === "modal" ? "center" : "")};
    height: ${props => (props.mode === "modal" ? "100vh" : "")};
    align-items: ${props => (props.mode === "modal" ? "center" : "")};
    background-color: ${props => (props.mode === "modal" ? `${colors.black}B3` : `${colors.white}`)};
  }

  .MuiBackdrop-root {
    background-color: ${props => (props.mode === "modal" ? "" : `${colors.white}`)};
  }

  .MuiPaper-root {
    font-size: 12px;
    min-width: ${props =>
      (props.children && props.children.filter(child => child === undefined).length === 0 && "348px") || "590px"};
    max-width: ${props =>
      (props.children && props.children.filter(child => child === undefined).length === 0 && "590px") || "810px"};
    min-height: ${props =>
      (props.children && props.children.filter(child => child === undefined).length === 0 && "92px") || "48px"};
    overflow: hidden;
    box-shadow: 0px 3px 6px #00000012;
    border-radius: 4px;
    background-color: ${props =>
      (props.type === "info" && colors.lightBlue) ||
      (props.type === "confirm" && colors.lightGreen) ||
      (props.type === "warning" && colors.lightYellow) ||
      (props.type === "error" && colors.lightPink)};
  }

  .MuiDialogContent-root {
    padding-bottom: 20px;
    margin-left: 53px;
    margin-right: 12px;
    padding-left: 0px;
  }

  .MuiDialog-container {
    background-color: ${props => (props.mode === "modal" ? "transparent" : `${colors.white}`)};
  }
`;

const DialogInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
`;

const DialogType = styled.div`
  text-transform: uppercase;
  padding-right: 10px;
  font-weight: bold;
`;

const DialogText = styled.div`
  padding-left: 10px;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DialogIcon = styled.img`
  padding-left: 12px;
`;

const DialogInfoText = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
  flex-grow: 1;
`;

const CloseDialogIcon = styled.img`
  cursor: pointer;
`;

export default DxcAlert;
