import React, { useState } from "react";
import { DxcAlert, DxcButton } from "@repo/ui";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Alert = () => {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };

  return (
    <PreviewContainer>
      <Mode text="Information Alert">
        <DxcAlert type="info" mode="inline" inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.
        </DxcAlert>
      </Mode>
      <Mode text="Success Alert">
        <DxcAlert type="confirm" mode="inline" inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </Mode>
      <Mode text="Warning Alert">
        <DxcAlert type="warning" mode="inline" inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </Mode>
      <Mode text="Error Alert">
        <DxcAlert type="error" mode="inline" inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
      </Mode>
      <Mode text="Modal Alert">
        <DxcButton label="Overlay Alert" onClick={handleVisibility} />
        {isVisible && (
          <DxcAlert
            type="info"
            mode="modal"
            onClose={handleVisibility}
            inlineText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        )}
      </Mode>
    </PreviewContainer>
  );
};

export default Alert;
