import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcSpinner,
  DxcButton,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Spinner = () => {
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
    <SpinnerContainer>
      <Mode text="Undeterminate default">
        <DxcSpinner label="Loading..." margin="small" />
      </Mode>
      <Mode text="Determinate default">
        <DxcSpinner label="Loading..." showValue value={50} margin="small" />
      </Mode>
      <Mode text="Small">
        <DxcSpinner margin="small" mode="small" />
      </Mode>
      <Mode text="With overlay">
        <DxcButton
          theme="light"
          label="Show Spinner for 3 seconds"
          onClick={showModal}
          margin={{ top: "small", bottom: "xlarge" }}
        />
        {isVisible && <DxcSpinner label="Loading..." mode="overlay" />}
      </Mode>
      {/* <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Undeterminate default">
          <DxcSpinner label="Loading..." margin="small" />
        </Mode>
        <Mode mode="dark" text="Determinate default">
          <DxcSpinner label="Loading..." showValue value={50} margin="small" />
        </Mode>
        <Mode mode="dark" text="Small">
          <DxcSpinner margin="small" mode="small" />
        </Mode>
      </BackgroundColorProvider> */}
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div``;

export default Spinner;
