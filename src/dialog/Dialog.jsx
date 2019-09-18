import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import colors from "../common/variables.js";

import PropTypes from "prop-types";

const DxcDialog = ({
  theme = "light",
  isVisible = false,
  isCloseVisible = false,
  onClose,
  children,
  overlay = false
}) => {
  const [open, setOpen] = React.useState(isVisible);
  const handleChange = () => {
    setOpen(!open);
    isVisible = open;
  };
  return (
    <DialogContainer
      open={isVisible}
      theme={theme}
      onChange={handleChange}
      overlay={overlay}
    >
      {isCloseVisible && (
        <CloseIconContainer>
          <CloseIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={onClose}>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </CloseIcon>
        </CloseIconContainer>
      )}
      <div>{children}</div>
    </DialogContainer>
  );
};

const DialogContainer = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: ${props => (props.overlay === true ? colors.black + "B3" : "transparent")};
  }
  .MuiDialog-paperWidthSm {
    max-width: 80%;
    min-width: 800px;
    box-shadow: 0px 1px 3px ${colors.black}33;
    padding: 40px 40px 30px 40px;
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseIcon = styled.svg`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 24px;
  right: 24px;
`;

DxcDialog.propTypes = {
  theme: PropTypes.oneOf(["light", "dark", ""]),
  isVisible: PropTypes.bool,
  isCloseVisible: PropTypes.bool,
  onClose: PropTypes.func,
  overlay: PropTypes.bool
};

export default DxcDialog;
