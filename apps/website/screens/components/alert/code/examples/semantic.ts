import { DxcAlert, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="1.5rem">
        <DxcAlert title="Auto-saved document" message={{ text: "Your document as been auto-saved. You can continue working without worry, as all changes are being saved automatically." }} />
        <DxcAlert title="Read carefully" semantic="warning" message={{ text: "Please read the documents carefully before the submission of the data." }} />
        <DxcAlert title="Save failed" semantic="error" message={{ text: "You have unsaved changes in your document. If you navigate away from this page, you will lose any changes you have made." }} />
        <DxcAlert title="Saved successfully" semantic="success" message={{ text: "Your document has been saved successfully." }} />
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
