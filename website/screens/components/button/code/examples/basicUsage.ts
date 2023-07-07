import { DxcButton, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcButton label="Submit" />
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
};

export default { code, scope };
