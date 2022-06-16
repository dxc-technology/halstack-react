import { DxcTextarea, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcTextarea label="Description" size="fillParent" />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextarea,
  DxcInset,
};

export default { code, scope };
