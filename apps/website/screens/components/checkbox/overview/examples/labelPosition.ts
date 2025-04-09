import { DxcCheckbox, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center" gap="var(--spacing-gap-xl)">
        <DxcCheckbox defaultChecked label="Check all" />
        <DxcCheckbox label="Check all" labelPosition="after" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
