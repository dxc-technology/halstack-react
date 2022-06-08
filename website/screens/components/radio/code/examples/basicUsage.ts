import { DxcRadio, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcRadio label="Default" />
    </DxcInset>
  );
}`;

const scope = {
  DxcRadio,
  DxcInset,
};

export default { code, scope };
