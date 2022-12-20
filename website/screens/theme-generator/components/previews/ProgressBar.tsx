import React, { useState } from "react";
import styled from "styled-components";
import { DxcButton, DxcProgressBar } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const ProgressBar = () => {
  const [isVisible, changeIsVisible] = useState(false);
  const showModal = () => {
    changeIsVisible(true);
    fetchData().then(() => {
      changeIsVisible(false);
    });
  };
  const fetchData = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  return (
    <PreviewContainer>
      <Mode text="Undeterminate default">
        <Container>
          <DxcProgressBar
            label="Loading"
            helperText="Helper text"
            overlay={false}
          />
        </Container>
      </Mode>
      <Mode text="Determinate default">
        <Container>
          <DxcProgressBar
            label="Loading"
            helperText="Helper text"
            overlay={false}
            showValue
            value={45}
          />
        </Container>
      </Mode>
      <Mode text="With overlay">
        <DxcButton
          label="Show Progress Bar for 3 seconds"
          onClick={showModal}
        />
        {isVisible && (
          <DxcProgressBar
            label="Loading"
            helperText="Helper text"
            overlay={true}
          />
        )}
      </Mode>
    </PreviewContainer>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default ProgressBar;
