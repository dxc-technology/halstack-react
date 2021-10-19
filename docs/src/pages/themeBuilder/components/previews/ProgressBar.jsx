import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcButton,
  DxcProgressBar,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const ProgressBar = () => {
  const [isVisible, changeIsVisible] = useState(false);
  const showModal = () => {
    changeIsVisible(true);
    fetchData().then(() => {
      changeIsVisible(false);
    });
  };
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  return (
    <ProgressBarContainer>
      <Mode text="Undeterminate default">
        <Container>
          <DxcProgressBar
            label="Loading"
            helperText="Helper text"
            overlay={false}
            margin={{ top: "xsmall", bottom: "xxsmall" }}
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
            margin={{ top: "xsmall", bottom: "xxsmall" }}
          />
        </Container>
      </Mode>
      <Mode text="With overlay">
        <DxcButton
          theme="light"
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

      <h4>Dark mode</h4>
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Undeterminate default">
          <Container>
            <DxcProgressBar
              label="Loading"
              helperText="Helper text"
              overlay={false}
              margin={{ top: "xsmall", bottom: "xxsmall" }}
            />
          </Container>
        </Mode>
        <Mode mode="dark" text="Determinate default">
          <Container>
            <DxcProgressBar
              label="Loading"
              helperText="Helper text"
              overlay={false}
              showValue
              value={45}
              margin={{ top: "xsmall", bottom: "xxsmall" }}
            />
          </Container>
        </Mode>
      </BackgroundColorProvider>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div``;

const Container = styled.div`
  width: 100%;
`;

export default ProgressBar;
