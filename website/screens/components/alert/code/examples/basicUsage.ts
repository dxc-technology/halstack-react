import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcAlert
        size="fillParent"
        inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcAlert,
  DxcInset,
  DxcStack,
};

export default { code, scope };
