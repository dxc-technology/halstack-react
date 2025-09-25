import { DxcProgressBar, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => (
  <DxcInset space="var(--spacing-padding-xl)">
    <DxcProgressBar label="Loading" />
  </DxcInset>
);`;

const scope = {
  DxcProgressBar,
  DxcInset,
};

export default { code, scope };
