import { DxcChip } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <div>
      <DxcChip label="Default Chip" margin="small" />
    </div>
  );
}`;

const scope = {
  DxcChip,
};

export default { code, scope };
