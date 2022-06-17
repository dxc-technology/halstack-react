import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcStack gutter="large" align="center">
        <DxcAlert
          type="confirm"
          size="fillParent"
          mode="inline"
          size="medium"
          inlineText="Inline text."
        >
          <DxcInset space="xxxsmall">Custom content.</DxcInset>
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
