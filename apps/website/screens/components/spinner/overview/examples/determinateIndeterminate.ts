import { DxcSpinner, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="center">
        <DxcSpinner label="Loading..." showValue value={50} />
        <DxcSpinner label="Loading..." />
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
