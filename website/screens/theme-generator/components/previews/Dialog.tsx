import React, { useState } from "react";
import {
  DxcDialog,
  DxcButton,
  DxcHeading,
  DxcTextInput,
  DxcFlex,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import ExamplesContainer from "./ExamplesContainer";

const errorIcon = (
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

  return (
    <ExamplesContainer>
      <Mode text="Default">
        <DxcButton label="Delete" onClick={handleClickDefaultDialog} />
        {isDefaultDialogVisible && (
          <DxcDialog onCloseClick={handleClickDefaultDialog}>
            <DxcFlex alignContent="center" gap="1rem">
              <DxcFlex wrap="wrap" alignContent="center">
                {errorIcon}
              </DxcFlex>
              <DxcHeading level={5} text="Delete document" />
            </DxcFlex>
            <DxcParagraph>
              Are you sure you want to delete the 3 selected documents?
            </DxcParagraph>
            <DxcFlex alignItems="flex-end" gap="1rem">
              <DxcButton
                label="Cancel"
                onClick={handleClickDefaultDialog}
                mode="text"
              />
              <DxcButton label="Delete" onClick={handleClickDefaultDialog} />
            </DxcFlex>
          </DxcDialog>
        )}
      </Mode>
      <Mode text="Modal">
        <DxcButton
          label="See account information"
          onClick={handleClickBackground}
        />
        {isModalDialogVisible && (
          <DxcDialog padding="medium" onBackgroundClick={handleClickBackground}>
            <DxcFlex direction="column" gap="1rem">
              <DxcHeading level={4} text="Account information" />
              <DxcHeading level={5} text="Client" />
              <DxcTextInput label="Name" />
              <DxcTextInput label="Surname" />
              <DxcTextInput label="Address" />
            </DxcFlex>
            <DxcFlex alignItems="flex-end">
              <DxcButton
                label="Cancel"
                onClick={handleClickBackground}
                mode="text"
              />
              <DxcButton label="Add client" onClick={handleClickBackground} />
            </DxcFlex>
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
            <DxcParagraph>An example of Dialog without darker background (overlay).</DxcParagraph>
          </DxcDialog>
        )}
      </Mode>
    </ExamplesContainer>
  );
};

export default Dialog;
