import { DxcFooter, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcFooter></DxcFooter>
    </DxcInset>
  );
}`;

const scope = {
  DxcFooter,
  DxcInset,
};

export default { code, scope };
