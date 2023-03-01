import React, { useState } from "react";
import {
  DxcDialog,
  DxcButton,
  DxcTextInput,
  DxcFlex,
  DxcHeading,
  DxcParagraph,
  DxcSelect,
  DxcAlert,
  DxcCheckbox,
  DxcToggleGroup,
  DxcRadioGroup,
  DxcTag,
  DxcTextarea,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";

const options = [
  { label: "Spain", value: "spain" },
  { label: "France", value: "france" },
  { label: "Germany", value: "germany" },
  { label: "Italy", value: "italy" },
  { label: "Portugal", value: "portugal" },
  { label: "United Kingdom", value: "united-kingdom" },
  { label: "United States", value: "united-states" },
];

function App() {
  const [isDialog1Visible, setIsDialog1Visible] = useState(false);
  const [isDialog2Visible, setIsDialog2Visible] = useState(false);
  const [isDialog3Visible, setIsDialog3Visible] = useState(false);
  const [isVisible, changeIsVisible] = useState(false);
  const [myCurrentStep, setMyCurrentStep] = useState(2);
  const onStepClick = (i) => {
    setMyCurrentStep(i);
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
        <DxcDialog isCloseVisible={false} onCloseClick={onClickDialog1}>
          <DxcFlex direction="column" gap="1.5rem">
            <DxcHeading level={4} text="User form" />
            <DxcTextInput label="Name" />
            <DxcTextarea label="Description" />
            <DxcFlex justifyContent="flex-end" gap="0.5rem">
              <DxcButton label="Cancel" mode="text" onClick={onClickDialog1} />
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

const Input = styled.input`
  display: none;
  font-family: Open Sans;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #999999;
  border-radius: 2px;
  :focus {
    border-color: transparent;
    outline: 2px solid #0095ff;
  }
`;

export default App;
