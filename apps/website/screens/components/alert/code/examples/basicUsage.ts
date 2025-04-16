import { DxcAlert, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcAlert
        title="Information"
        message={{ text: "Your document has been auto-saved." }}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
};

export default { code, scope };
