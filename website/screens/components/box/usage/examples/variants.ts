import { DxcBox, DxcInset, DxcRow } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcRow gutter="xxxlarge">
        <DxcBox shadowDepth={0} padding="medium">
          No shadow
        </DxcBox>
        <DxcBox shadowDepth={1} padding="medium">
          Shadow default
        </DxcBox>
        <DxcBox shadowDepth={2} padding="medium">
          Shadow high
        </DxcBox>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcBox,
  DxcInset,
  DxcRow,
};

export default { code, scope };
