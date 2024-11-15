import { DxcAlert, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [messages, setMessages] = useState([
    {
      text:
        "Your document as been auto-saved. You can continue working without worry, as all changes are being saved automatically.",
      onClose: () => handleAlertClose(0),
    },
    {
      text: "Your document as been auto-saved. You can continue working without worry, as all changes are being saved automatically.",
      onClose: () => handleAlertClose(1),
    },
    {
      text:
        "Your document as been auto-saved. You can continue working without worry, as all changes are being saved automatically.",
      onClose: () => handleAlertClose(0),
    },
    {
      text:
        "Your document as been auto-saved. You can continue working without worry, as all changes are being saved automatically.",
      onClose: () => handleAlertClose(0),
    },
  ]);

  const handleAlertClose = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.filter((_, i) => i !== index);
      return updatedMessages;
    });
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1.5rem">
        <DxcAlert title="Auto-saved document" message={messages}
          primaryAction={{ label: "Continue", onClick: () => {} }}
          secondaryAction={{ label: "Back", onClick: () => {} }}
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
  DxcFlex,
  useState,
};

export default { code, scope };
