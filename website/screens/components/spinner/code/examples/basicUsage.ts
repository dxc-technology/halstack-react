import { DxcSpinner, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcSpinner />
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
};

export default { code, scope };
