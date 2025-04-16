import { DxcCheckbox, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex justifyContent="center" gap="var(--spacing-gap-xxl)">
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
