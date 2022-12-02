import React, { useState } from "react";
import styled from "styled-components";
import { DxcAlert, DxcButton } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Alert = () => {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };
  return (
    <AlertContainer>
      <Mode text="Information Alert">
        <DxcAlert
          type="info"
          mode="inline"
          inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          margin={{ top: "xsmall" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex.
        </DxcAlert>
      </Mode>
      <Mode text="Success Alert">
        <DxcAlert
          type="confirm"
          mode="inline"
          inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          margin={{ top: "xsmall" }}
        />
      </Mode>
      <Mode text="Warning Alert">
        <DxcAlert
          type="warning"
          mode="inline"
          inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          margin={{ top: "xsmall" }}
        />
      </Mode>
      <Mode text="Error Alert">
        <DxcAlert
          type="error"
          mode="inline"
          inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          margin={{ top: "xsmall" }}
        />
      </Mode>
      <Mode text="Modal Alert">
        <DxcButton
          theme="light"
          label="Overlay Alert"
          onClick={handleVisibility}
          margin={{ top: "xsmall" }}
        />
        {isVisible && (
          <DxcAlert
            type="info"
            mode="modal"
            onClose={handleVisibility}
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            margin={{ top: "xsmall" }}
          ></DxcAlert>
        )}
      </Mode>
    </AlertContainer>
  );
};

const AlertContainer = styled.div``;

export default Alert;
