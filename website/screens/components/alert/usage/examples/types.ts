import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcStack gutter="large">
        <DxcAlert
          type="info"
          size="fillParent"
          inlineText="Inline text."
        />
        <DxcAlert
          type="confirm"
          size="fillParent"
          inlineText="Inline text."
        />
        <DxcAlert
          type="warning"
          size="fillParent"
          inlineText="Inline text."
        />
        <DxcAlert
          type="error"
          size="fillParent"
          inlineText="Inline text."
        />
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
