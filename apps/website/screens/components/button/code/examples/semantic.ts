import { DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex gap="var(--spacing-gap-l)">
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
