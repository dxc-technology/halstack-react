import React, { useState } from "react";
import {
  DxcDialog,
  DxcButton,
  DxcHeading,
  DxcTextInput,
  DxcFlex,
  DxcParagraph,
  DxcInset,
} from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

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
    <PreviewContainer>
      <Mode text="Default">
        <DxcButton label="Delete" onClick={handleClickDefaultDialog} />
        {isDefaultDialogVisible && (
          <DxcDialog onCloseClick={handleClickDefaultDialog}>
            <DxcFlex direction="column" gap="4rem">
              <DxcFlex direction="column" gap="1rem">
                <DxcFlex alignContent="center" gap="1rem">
                  <DxcFlex wrap="wrap" alignContent="center">
                    {errorIcon}
                  </DxcFlex>
                  <DxcHeading level={5} text="Delete document" />
                </DxcFlex>
                <DxcParagraph>
                  Are you sure you want to delete the 3 selected documents?
                </DxcParagraph>
              </DxcFlex>
              <DxcFlex justifyContent="flex-end" gap="1rem">
                <DxcButton
                  label="Cancel"
                  onClick={handleClickDefaultDialog}
                  mode="text"
                />
                <DxcButton label="Delete" onClick={handleClickDefaultDialog} />
              </DxcFlex>
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
          <DxcDialog onBackgroundClick={handleClickBackground}>
            <DxcFlex direction="column" gap="4rem">
              <DxcFlex direction="column" gap="1.5rem">
                <DxcHeading level={4} text="Account information" />
                <DxcTextInput label="Name" />
                <DxcTextInput label="Last name" />
                <DxcTextInput label="Address" size="fillParent" />
              </DxcFlex>
              <DxcFlex justifyContent="center" gap="1rem">
                <DxcButton
                  label="Cancel"
                  onClick={handleClickBackground}
                  mode="text"
                />
                <DxcButton label="Add client" onClick={handleClickBackground} />
              </DxcFlex>
            </DxcFlex>
          </DxcDialog>
        )}
      </Mode>
      <Mode text="With close button">
        <DxcButton label="Open Dialog" onClick={handleClickNoOverlay} />
        {isNoOverlayDialogVisible && (
          <DxcDialog
            onBackgroundClick={handleClickNoOverlay}
            onCloseClick={handleClickNoOverlay}
            overlay={false}
          >
            <DxcParagraph>
              An example of Dialog without overlay (darker background).
            </DxcParagraph>
          </DxcDialog>
        )}
      </Mode>
    </PreviewContainer>
  );
};

export default Dialog;
