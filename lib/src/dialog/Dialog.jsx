import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import colors from "../common/variables.js";

import PropTypes from "prop-types";

const DxcDialog = ({ isCloseVisible = false, onCloseClick, children, overlay = true, onBackgroundClick }) => {

  const handleClose = () => {
    if (typeof onCloseClick === "function") {
      onCloseClick();
    }
  };

  const handleOverlayClick = () => {
    if (typeof onBackgroundClick === "function") {
      onBackgroundClick();
    }
  };

  return (
    <DialogContainer open={true} onClose={handleOverlayClick} overlay={overlay}>
      {isCloseVisible && (
        <CloseIconContainer onClick={handleClose}>
          <CloseIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </CloseIcon>
        </CloseIconContainer>
      )}
      <Children>{children}</Children>
    </DialogContainer>
  );
};

const DialogContainer = styled(Dialog)`
  overflow: unset;

  .MuiBackdrop-root {
    background-color: ${props => (props.overlay === true ? colors.black + "B3" : "transparent")};
  }
  .MuiDialog-paperWidthSm {
    max-width: 80%;
    min-width: 800px;
    box-shadow: 0px 1px 3px ${colors.black}33;
    padding: 40px 60px 30px 40px;
  }
`;

const Children = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.lightGrey};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.darkGrey};
    border-radius: 3px;
  }

  & * {
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.lightGrey};
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.darkGrey};
      border-radius: 3px;
    }
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CloseIcon = styled.svg`
  cursor: pointer;
  width: 34px;
  height: 34px;
`;

DxcDialog.propTypes = {
  theme: PropTypes.oneOf(["light", "dark", ""]),
  isVisible: PropTypes.bool,
  isCloseVisible: PropTypes.bool,
  onClose: PropTypes.func,
  overlay: PropTypes.bool
};

export default DxcDialog;
