import { DxcButtonLink, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-l)">
        <DxcButtonLink href="#" icon="volunteer_activism" label="Donate" />
        <DxcButtonLink href="#" icon="filled_volunteer_activism" mode="secondary" title="Donate" />
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
