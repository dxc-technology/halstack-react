import { DxcAlert, DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [loadDialog, setLoadDialog] = useState(0);

  const messagesSuccess = [
    { text: "Your document has been saved successfully.", onClose : () => {setLoadDialog(0)} },
    { text: "You can continue editing your document or navigate to other sections.", onClose : () => {setLoadDialog(0)} }
  ];
  const messagesInformation = [
    { text: "Your document has been auto-saved.", onClose : () => {setLoadDialog(0)} },
    { text: "You can continue working without worry, as all changes are being saved automatically. This feature ensure that your progress is preserved even if your forget to save manually. Feel free to review the auto-save settings in your account preferences.", onClose : () => {setLoadDialog(0)} }
  ];
  const messagesWarning = [
    { text: "You have unsaved changes in your document.", onClose : () => {setLoadDialog(0)} }, 
    { text: "If you navigate away from this page, you will lose any changes you have made. Please save your work to avoid losing any progress. Consider reviewing your changes before saving.", onClose : () => {setLoadDialog(0)} }
  ];
  const messagesError = [
    { text: "We encountered an issue while saving your file.", onClose : () => {setLoadDialog(0)} },
    { text: "You have unsaved changes in your document. If you navigate away from this page, you will lose any changes you have made. Please save your work to avoid losing any progress. Consider reviewing your changes before saving.", onClose : () => {setLoadDialog(0)} }
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-l)">
        <DxcButton label="Success dialog" onClick={() => setLoadDialog(1)} />
        <DxcButton label="Info dialog" onClick={() => setLoadDialog(2)} />
        <DxcButton label="Warning dialog" onClick={() => setLoadDialog(3)} />
        <DxcButton label="Error dialog" onClick={() => setLoadDialog(4)} />
      </DxcFlex>
      {loadDialog !== 0 && (
        <DxcFlex direction="column" gap="var(--spacing-gap-l)">
          {loadDialog === 1 && (
            <DxcAlert
              message={messagesSuccess}
              mode={"modal"}
              primaryAction={{ label: "Primary action", onClick: () => {} }}
              secondaryAction={{ label: "Secondary action", onClick: () => {} }}
              semantic="success"
              title="Success"
            />
          )}
          {loadDialog === 2 && (
            <DxcAlert
              message={messagesInformation}
              mode={"modal"}
              primaryAction={{ label: "Primary action", onClick: () => {} }}
              secondaryAction={{ label: "Secondary action", onClick: () => {} }}
              semantic="info"
              title="Information"
            />
          )}
          {loadDialog === 3 && (
            <DxcAlert
              message={messagesWarning}
              mode={"modal"}
              primaryAction={{ label: "Primary action", onClick: () => {} }}
              secondaryAction={{ label: "Secondary action", onClick: () => {} }}
              semantic="warning"
              title="Warning"
            />
          )}
          {loadDialog === 4 && (
            <DxcAlert
              message={messagesError}
              mode={"modal"}
              primaryAction={{ label: "Primary action", onClick: () => {} }}
              secondaryAction={{ label: "Secondary action", onClick: () => {} }}
              semantic="error"
              title="Error"
            />
          )}
        </DxcFlex>
      )}
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
  DxcFlex,
  DxcButton,
  useState,
};

export default { code, scope };
