import { DxcBox, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="5rem">
        <DxcBox shadowDepth={0}>
          <DxcInset space="2rem">No shadow</DxcInset>
        </DxcBox>
        <DxcBox shadowDepth={1}>
          <DxcInset space="2rem">Shadow default</DxcInset>
        </DxcBox>
        <DxcBox shadowDepth={2}>
          <DxcInset space="2rem">Shadow high</DxcInset>
        </DxcBox>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcBox,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
