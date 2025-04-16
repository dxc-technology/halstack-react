import { DxcAlert, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const messagesSuccess = [
    { text: "Your document has been saved successfully." },
    { text: "Second text." }
  ];
  const messagesInformation = [
    { text: "Your document has been auto-saved." },
    { text: "Second text." }
  ];
  const messagesWarning = [
    { text: "You have unsaved changes in your document." },
    { text: "Second text." }
  ];
  const messagesError = [
    { text: "We encountered an issue while saving your file." },
    { text: "Second text." }
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcAlert
          message={messagesSuccess}
          mode={"banner"}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          semantic="success"
          title="Success"
        />
        <DxcAlert
          message={messagesInformation}
          mode={"banner"}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          semantic="info"
          title="Information"
        />
        <DxcAlert
          message={messagesWarning}
          mode={"banner"}
          primaryAction={{ label: "Primary action", onClick: () => {} }}
          secondaryAction={{ label: "Secondary action", onClick: () => {} }}
          semantic="warning"
          title="Warning"
        />
        <DxcAlert
          message={messagesError}
          mode={"banner"}
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
