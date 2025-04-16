import { DxcChip, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcChip label="Experimental" />
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
};

export default { code, scope };
