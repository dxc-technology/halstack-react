import { DxcBox, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcBox shadowDepth={1}>
        <DxcInset space="2rem">Personal information</DxcInset>
      </DxcBox>
    </DxcInset>
  );
}`;

const scope = {
  DxcBox,
  DxcInset,
};

export default { code, scope };
