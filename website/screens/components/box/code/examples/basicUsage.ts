import { DxcBox, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcBox shadowDepth={1}>
        <DxcInset space="small">Box Content</DxcInset>
      </DxcBox>
    </DxcInset>
  );
}`;

const scope = {
  DxcBox,
  DxcInset,
  DxcStack,
};

export default { code, scope };
