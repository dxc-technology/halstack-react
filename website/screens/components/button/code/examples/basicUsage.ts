import { DxcButton, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcButton label="Button" />
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
};

export default { code, scope };
