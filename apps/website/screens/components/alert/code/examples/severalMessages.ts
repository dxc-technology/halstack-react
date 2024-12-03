import { DxcAlert, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const messages = [
    { text: "Your document as been auto-saved." },
    { text: "You can continue working without worrying, as all changes are automatically saved." },
    { text: "You can also go back to the previous version of the document." },
  ];

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1.5rem">
        <DxcAlert
          title="Auto-saved document"
          message={messages}
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
};

export default { code, scope };
