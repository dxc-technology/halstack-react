import { DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="1.5rem">
        <DxcButton label="Search" />
        <DxcButton semantic="error" label="Cancel" />
        <DxcButton semantic="warning" label="Report" />
        <DxcButton semantic="success" label="Confirm" />
        <DxcButton semantic="info" label="Details" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
