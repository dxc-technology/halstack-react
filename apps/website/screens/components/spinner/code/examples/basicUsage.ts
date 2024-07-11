import { DxcSpinner, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcSpinner />
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
};

export default { code, scope };
