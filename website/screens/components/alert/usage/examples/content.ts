import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcAlert
          type="confirm"
          size="fillParent"
          mode="inline"
          size="medium"
          inlineText="Your data has been correctly saved."
        >
          <DxcInset space="xxxsmall">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
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
