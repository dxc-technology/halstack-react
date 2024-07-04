import { DxcAlert, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcAlert inlineText="Please read the documents carefully before the submission of the data." />
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
};

export default { code, scope };
