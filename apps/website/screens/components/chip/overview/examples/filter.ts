import { DxcChip, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="1rem">
      <DxcFlex gap="0.5rem" justifyContent="center">
        <DxcChip label="Admin" prefixIcon="filled_account_circle" suffixIcon="cancel" onClickSuffix={() => {}} />
        <DxcChip label="Security Analist" prefixIcon="filled_account_circle" suffixIcon="cancel" onClickSuffix={() => {}} />
        <DxcChip label="Auditor" prefixIcon="filled_account_circle" suffixIcon="cancel" onClickSuffix={() => {}} />
        <DxcChip label="Read-Only User" prefixIcon="filled_account_circle" suffixIcon="cancel" onClickSuffix={() => {}} />
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
