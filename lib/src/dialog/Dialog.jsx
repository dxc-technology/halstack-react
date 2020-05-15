import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import { colors, spaces } from "../common/variables.js";

const DxcDialog = ({ isCloseVisible = true, onCloseClick, children, overlay = true, onBackgroundClick, padding }) => {
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
    <DialogContainer
      open={true}
      isCloseVisible={isCloseVisible}
      onClose={handleOverlayClick}
      overlay={overlay}
      padding={padding}
    >
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
    background-color: ${(props) => (props.overlay === true ? colors.black + "B3" : "transparent")};
  }
  .MuiDialog-paperWidthSm {
    max-width: 80%;
    min-width: 800px;
    min-height: ${(props) => (props.isCloseVisible ? "72px" : "")};
    box-shadow: 0px 1px 3px ${colors.black}33;
    padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
    padding-top: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
    padding-right: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
    padding-bottom: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
    padding-left: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
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
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  isVisible: PropTypes.bool,
  isCloseVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onCloseClick: PropTypes.func,
  onBackgroundClick: PropTypes.func,
  overlay: PropTypes.bool,
};

export default DxcDialog;
