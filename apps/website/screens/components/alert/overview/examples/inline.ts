import { DxcAlert, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const messagesSuccess = [
    { text: "You can continue editing your document or navigate to other sections. If yo need to do further changes, feel free to do so at any time. Remember your changes are saved automatically." },
    { text: "Second text" }
  ];
  const messagesInformation = [
    { text: "Your document has been auto-saved. You can continue working without worry, as all changes are being saved automatically. This feature ensure that your progress is preserved even if your forget to save manually. Feel free to review the auto-save settings in your account preferences." },
    { text: "Second text" }
  ];
  const messagesWarning = [
    { text: "You have unsaved changes in your document. If you navigate away from this page, you will lose any changes you have made. Please save your work to avoid losing any progress. Consider reviewing your changes before saving." }, 
    { text: "Second text" }
  ];
  const messagesError = [
    { text: "We encountered an issue while saving your file. You have unsaved changes in your document. If you navigate away from this page, you will lose any changes you have made. Please save your work to avoid losing any progress. Consider reviewing your changes before saving." },
    { text: "Second text" }
  ];

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcAlert
          message={messagesSuccess}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          semantic="success"
          title="Success"
        />
        <DxcAlert
          message={messagesInformation}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          semantic="info"
          title="Information"
        />
        <DxcAlert
          message={messagesWarning}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          semantic="warning"
          title="Warning"
        />
        <DxcAlert
          message={messagesError}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          semantic="error"
          title="Error"
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
