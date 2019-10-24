/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import colors from "../common/variables.js";
import closeIcon from "../../.storybook/public/close.svg";
import errorIcon from "../../.storybook/public/error.svg";
import infoIcon from "../../.storybook/public/info.svg";
import successIcon from "../../.storybook/public/success.svg";
import warningIcon from "../../.storybook/public/warning.svg";

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
    <div>
      <AlertContainer
        style={{ position: "static" }}
        mode={mode}
        type={type}
        inlineText={inlineText}
        open={isVisible}
        onClose={handleClose}
      >
        <DialogInfo>
          <DialogIcon type={type} />
          <DialogInfoText>
            <DialogType type={type}>{getTypeText(type)}</DialogType>
            {inlineText && "-"}
            <DialogText>{inlineText}</DialogText>
            {onClose && <CloseDialogIcon onClick={onClose} />}
          </DialogInfoText>
        </DialogInfo>
        {children && <DialogContent>{children}</DialogContent>}
      </AlertContainer>
    </div>
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
    min-width: ${props => (props.children !== null && "348px") || "590px"};
    max-width: ${props => (props.children !== null && "590") || "810"};
    height: ${props => (props.children === null && "48px") || ""};
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
`;

const DialogType = styled.div`
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: bold;
  margin-top: 2px;
  flex-grow: 1;
`;

const DialogText = styled.div`
  margin-left: 10px;
  margin-top: 2px;
  margin-right: 10px;
  flex-grow: 1;
`;

const DialogIcon = styled.div`
  width: 41px;
  height: 21px;
  margin-left: 12px;
  background: ${props =>
    (props.type === "info" && `url('${infoIcon}') no-repeat padding-box`) ||
    ((props.type === "confirm" && `url('${successIcon}') no-repeat padding-box`) ||
      ((props.type === "warning" && `url('${warningIcon}') no-repeat padding-box`) ||
        (props.type === "error" && `url('${errorIcon}') no-repeat padding-box`)))};
  margin-top: 14px;
  margin-bottom: 14px;
`;

const DialogInfoText = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${props => (props.children !== null ? "12px" : "10px")};
  margin-top: ${props => (props.children !== null ? "14px" : "16px")};
  margin-bottom: 16px;
  margin-right: ${props => (props.children !== null ? "12px" : "16px")};
  overflow: hidden;
`;

const CloseDialogIcon = styled.div`
  margin-top: -1px;
  width: 26px;
  height: 18px;
  background: url("${closeIcon}") no-repeat padding-box;
  cursor: pointer;
`;

export default DxcAlert;
