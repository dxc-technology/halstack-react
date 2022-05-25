import { DxcBox, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
        <DxcInset space="large">
          <DxcStack gutter="large">
            <DxcBox shadowDepth={0} padding="medium">
                Box Content
            </DxcBox>
            <DxcBox shadowDepth={1} padding="medium">
                Box Content
            </DxcBox>
            <DxcBox shadowDepth={2} padding="medium">
                Box Content
            </DxcBox>
          </DxcStack>
        </DxcInset>
    );
}`;

const scope = {
  DxcBox,
  DxcInset,
  DxcStack,
};

export default { code, scope };
