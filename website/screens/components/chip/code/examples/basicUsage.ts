import { DxcChip, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcChip label="Experimental" />
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
};

export default { code, scope };
