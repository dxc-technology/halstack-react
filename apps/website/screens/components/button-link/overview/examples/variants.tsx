import { DxcButtonLink, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="center">
        <DxcButtonLink href="#" mode="primary" label="Primary" />
        <DxcButtonLink href="#" mode="secondary" label="Secondary" />
        <DxcButtonLink href="#" mode="tertiary" label="Tertiary" />
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
