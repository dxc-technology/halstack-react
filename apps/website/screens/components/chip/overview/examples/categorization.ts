import { DxcChip, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-s)" justifyContent="center">
        <DxcChip label="GPDR Compliant" suffixIcon="open_in_new" onClickSuffix={() => {}} />
        <DxcChip label="ISO 27001 Certified" suffixIcon="open_in_new" onClickSuffix={() => {}} />
        <DxcChip label="HIPAA Pending" suffixIcon="open_in_new" onClickSuffix={() => {}} />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
