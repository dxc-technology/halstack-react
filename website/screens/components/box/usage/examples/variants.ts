import { DxcBox, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="5rem">
        <DxcBox shadowDepth={0} padding="medium">
          No shadow
        </DxcBox>
        <DxcBox shadowDepth={1} padding="medium">
          Shadow default
        </DxcBox>
        <DxcBox shadowDepth={2} padding="medium">
          Shadow high
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
