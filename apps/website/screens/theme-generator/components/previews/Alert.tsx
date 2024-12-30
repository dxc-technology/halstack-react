import { useState } from "react";
import { DxcAlert, DxcButton } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const messages = [
  { text: "Please read the documents carefully before the submission of the data.", onClose: () => {} },
  { text: "Your document has been saved successfuly.", onClose: () => {} },
  { text: "Your document as been auto-saved.", onClose: () => {} },
  { text: "You have unsaved changes in your document.", onClose: () => {} },
];

const Alert = () => {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };

  return (
    <PreviewContainer>
      <Mode text="Information Alert">
        <DxcAlert
          semantic="info"
          mode="inline"
          title="Info"
          message={messages}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        />
      </Mode>
      <Mode text="Success Alert">
        <DxcAlert
          semantic="success"
          mode="inline"
          title="Success"
          message={messages}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        />
      </Mode>
      <Mode text="Warning Alert">
        <DxcAlert
          semantic="warning"
          mode="inline"
          title="Warning"
          message={messages}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        />
      </Mode>
      <Mode text="Error Alert">
        <DxcAlert
          semantic="error"
          mode="inline"
          title="Error"
          message={messages}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
        />
      </Mode>
      <Mode text="Modal Alert">
        <DxcButton label="Overlay Alert" onClick={handleVisibility} />
        {isVisible && (
          <DxcAlert
            title="Modal"
            semantic="info"
            mode="modal"
            message={{
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              onClose: handleVisibility,
            }}
            primaryAction={{ label: "Primary action", onClick: () => {} }}
            secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          />
        )}
      </Mode>
    </PreviewContainer>
  );
};

export default Alert;
