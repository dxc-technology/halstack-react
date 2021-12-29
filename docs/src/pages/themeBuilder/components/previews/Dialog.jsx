import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcDialog,
  DxcButton,
  DxcHeading,
  DxcInputText,
} from "@dxc-technology/halstack-react";
import Mode from "../Mode";

const Dialog = () => {
  const [isDefaultDialogVisible, setDefaultDialogVisible] = useState(false);
  const [isModalDialogVisible, setModalDialogVisible] = useState(false);
  const [isNoOverlayDialogVisible, setNoOverlayDialogVisible] = useState(false);

  const handleClickDefaultDialog = () => {
    setDefaultDialogVisible(!isDefaultDialogVisible);
  };
  const handleClickBackground = () => {
    setModalDialogVisible(!isModalDialogVisible);
  };
  const handleClickNoOverlay = () => {
    setNoOverlayDialogVisible(!isNoOverlayDialogVisible);
  };

  const ErrorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="red"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );

  return (
    <DialogContainer>
      <Mode text="Default">
        <DxcButton
          label="Delete"
          onClick={handleClickDefaultDialog}
          margin={{ top: "xsmall" }}
        ></DxcButton>
        {isDefaultDialogVisible && (
          <DxcDialog onCloseClick={handleClickDefaultDialog}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "center",
                  marginRight: "10px",
                }}
              >
                <ErrorIcon />
              </span>
              <DxcHeading level={5} text="Delete document" />
            </div>
            <p>Are you sure you want to delete the 3 selected documents?</p>
            <p style={{ textAlign: "right" }}>
              <DxcButton
                label="Cancel"
                onClick={handleClickDefaultDialog}
                mode="text"
                margin={{ top: "medium", right: "xxsmall" }}
              ></DxcButton>
              <DxcButton
                label="Delete"
                onClick={handleClickDefaultDialog}
              ></DxcButton>
            </p>
          </DxcDialog>
        )}
      </Mode>
      <Mode text="Modal">
        <DxcButton
          label="See account information"
          onClick={handleClickBackground}
          margin={{ top: "xsmall" }}
        ></DxcButton>
        {isModalDialogVisible && (
          <DxcDialog padding="medium" onBackgroundClick={handleClickBackground}>
            <DxcHeading level={4} text="Account information" />
            <DxcHeading level={5} text="Client" margin={{ top: "xsmall" }} />
            <p>
              <DxcInputText label="Name" />
            </p>
            <p>
              <DxcInputText label="Surname" />
            </p>
            <p>
              <DxcInputText label="Address" />
            </p>
            <p style={{ textAlign: "right" }}>
              <DxcButton
                label="Cancel"
                onClick={handleClickBackground}
                mode="text"
                margin={{ top: "medium", right: "xxsmall" }}
              ></DxcButton>
              <DxcButton
                label="Add client"
                onClick={handleClickBackground}
              ></DxcButton>
            </p>
          </DxcDialog>
        )}
      </Mode>
      <Mode text="With close button">
        <DxcButton
          label="Open Dialog"
          onClick={handleClickNoOverlay}
          margin={{ top: "xsmall" }}
        ></DxcButton>
        {isNoOverlayDialogVisible && (
          <DxcDialog
            padding="medium"
            onBackgroundClick={handleClickNoOverlay}
            onCloseClick={handleClickNoOverlay}
            overlay={false}
          >
            <p>An example of Dialog without darker background (overlay).</p>
          </DxcDialog>
        )}
      </Mode>
    </DialogContainer>
  );
};

const DialogContainer = styled.div``;

export default Dialog;
