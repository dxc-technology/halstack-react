import { DxcButtonLink, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-l)">
        <DxcButtonLink href="#" label="Search" />
        <DxcButtonLink href="#" semantic="error" label="Cancel" />
        <DxcButtonLink href="#" semantic="warning" label="Report" />
        <DxcButtonLink href="#" semantic="success" label="Confirm" />
        <DxcButtonLink href="#" semantic="info" label="Details" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcButtonLink,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
