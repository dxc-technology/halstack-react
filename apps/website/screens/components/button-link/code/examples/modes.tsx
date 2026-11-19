import { DxcButtonLink, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-l)">
        <DxcButtonLink href="#" label="Primary" />
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
