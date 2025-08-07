import { DxcSpinner, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="center">
        <DxcSpinner label="Loading..." mode="small" value={50} />
        <DxcSpinner label="Loading..." mode="small" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
