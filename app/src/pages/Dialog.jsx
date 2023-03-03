import React, { useState } from "react";
import {
  DxcDialog,
  DxcButton,
  DxcTextInput,
  DxcFlex,
  DxcHeading,
  DxcParagraph,
  DxcAlert,
  DxcTextarea,
} from "@dxc-technology/halstack-react";

function App() {
  const [isDialog1Visible, setIsDialog1Visible] = useState(false);
  const [isDialog2Visible, setIsDialog2Visible] = useState(false);
  const [isDialog3Visible, setIsDialog3Visible] = useState(false);
  const [isVisible, changeIsVisible] = useState(true);
  const [isDisabled, changeIsDisabled] = useState(false);
  const handleDisabled = () => {
    changeIsDisabled((isDisabled) => !isDisabled);
  };

  const handleVisibility = () => {
    changeIsVisible((isVisible) => !isVisible);
  };
  const onClickDialog1 = () => {
    setIsDialog1Visible(!isDialog1Visible);
    changeIsVisible(true);
  };
  const onClickDialog3 = () => {
    setIsDialog2Visible(!isDialog2Visible);
    changeIsVisible(true);
  };
  const onClickDialog4 = () => {
    setIsDialog3Visible(!isDialog3Visible);
    changeIsVisible(true);
  };

  return (
    <DxcFlex gap="1.5rem">
      <DxcButton label="Example" onClick={onClickDialog1} />
      {isDialog1Visible && (
        <DxcDialog onCloseClick={onClickDialog1}>
          <DxcFlex direction="column" gap="2rem">
            <DxcHeading level={4} text="User form" />
            <DxcFlex direction="column" gap="1rem">
              {isVisible && (
                <DxcAlert
                  type="warning"
                  inlineText="To be valid, you need to fill every field."
                  size="fillParent"
                  onClose={handleVisibility}
                />
              )}
              <DxcTextInput label="Name" size="fillParent" disabled={isDisabled} />
              <DxcTextarea label="Description" size="fillParent" disabled={isDisabled} />
            </DxcFlex>
            <DxcFlex justifyContent="flex-end" gap="0.5rem">
              <DxcButton label="Disable fields" mode="text" onClick={handleDisabled} />
              <DxcButton label="Cancel" mode="secondary" onClick={onClickDialog1} />
              <DxcButton
                label="Save"
                onClick={() => {
                  onClickDialog1();
                  onClickDialog3();
                }}
              />
            </DxcFlex>
          </DxcFlex>
        </DxcDialog>
      )}
      {isDialog2Visible && (
        <DxcDialog onCloseClick={onClickDialog3}>
          <DxcFlex direction="column" gap="1.5rem">
            <DxcHeading level={4} text="Example title" />
            <DxcParagraph>Are you sure?</DxcParagraph>
            <DxcFlex justifyContent="flex-end" gap="0.5rem">
              <DxcButton
                label="No"
                mode="text"
                onClick={() => {
                  onClickDialog1();
                  onClickDialog3();
                }}
              />
              <DxcButton
                label="Yes"
                onClick={() => {
                  onClickDialog3();
                  onClickDialog4();
                }}
              />
            </DxcFlex>
          </DxcFlex>
        </DxcDialog>
      )}
      {isDialog3Visible && (
        <DxcDialog
          onCloseClick={onClickDialog4}
          onBackgroundClick={onClickDialog4}
        >
          <DxcParagraph>Task completed.</DxcParagraph>
        </DxcDialog>
      )}
    </DxcFlex>
  );
}

export default App;
