import { DxcChip, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="0.5rem" justifyContent="center">
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
