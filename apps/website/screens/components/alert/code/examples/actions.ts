import { DxcAlert, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1.5rem">
        <DxcAlert title="Auto-saved document" message={{ messageText: "Your document as been auto-saved. You can continue working without worry, as all changes are being saved automatically." }}
        primaryAction={{ label: "Continue", onClick: () => {} }}
        secondaryAction={{ label: "Back", onClick: () => {} }}
      />
        <DxcAlert title="Read carefully" semantic="warning" message={{ messageText: "Please read the documents carefully before the submission of the data." }}
        primaryAction={{ label: "Continue", onClick: () => {} }}
        secondaryAction={{ label: "Back", onClick: () => {} }}
      />
        <DxcAlert title="Delete" semantic="error" message={{ messageText: "The file will be permanently deleted. Are you sure?." }}
        primaryAction={{ label: "Delete", onClick: () => {} }}
        secondaryAction={{ label: "Cancel", onClick: () => {} }}
      />
        <DxcAlert title="Saved successfully" semantic="success" message={{ messageText: "Your document has been saved successfuly." }}
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
