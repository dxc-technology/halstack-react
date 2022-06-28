import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcStack gutter="large" align="center">
        <DxcAlert
          type="confirm"
          size="fillParent"
          mode="inline"
          size="medium"
          inlineText="Inline text."
        >
          <DxcInset space="0.125rem">Custom content.</DxcInset>
        </DxcAlert>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
  DxcStack,
};

export default { code, scope };
