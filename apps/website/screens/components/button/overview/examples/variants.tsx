import { DxcButton, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="center">
        <DxcButton mode="primary" label="Primary" />
        <DxcButton mode="secondary" label="Secondary" />
        <DxcButton mode="tertiary" label="Tertiary" />
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
