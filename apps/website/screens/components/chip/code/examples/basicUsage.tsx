import { DxcChip, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-m)" alignItems="center">
        <DxcChip label="Small" size="small" />
        <DxcChip label="Medium" />
        <DxcChip label="Large" size="large" />
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
