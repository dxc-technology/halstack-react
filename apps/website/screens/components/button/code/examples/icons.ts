import { DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="var(--spacing-gap-l)">
        <DxcButton icon="volunteer_activism" label="Donate" />
        <DxcButton icon="filled_volunteer_activism" mode="secondary" title="Donate" />
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
