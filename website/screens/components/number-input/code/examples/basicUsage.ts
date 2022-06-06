import { DxcNumberInput, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcNumberInput label="Default" />
    </DxcInset>
  );
}`;

const scope = {
  DxcNumberInput,
  DxcInset,
};

export default { code, scope };
