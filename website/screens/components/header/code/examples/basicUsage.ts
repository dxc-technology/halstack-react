import { DxcHeader, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcHeader />
    </DxcInset>
  );
}`;

const scope = {
  DxcHeader,
  DxcInset,
};

export default { code, scope };
