import { DxcSpinner, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcSpinner label="Loading..." />
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
};

export default { code, scope };
