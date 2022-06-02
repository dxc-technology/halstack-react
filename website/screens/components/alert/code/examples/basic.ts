import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
        <DxcInset space="large">
          <DxcStack gutter="large">
            <DxcAlert
              type="info"
              size="fillParent"
              inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            />
            <DxcAlert
              type="confirm"
              size="fillParent"
              inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            />
            <DxcAlert
              type="warning"
              size="fillParent"
              inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            />
            <DxcAlert
              type="error"
              size="fillParent"
              inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
            />
          </DxcStack>
        </DxcInset>
    );
}`;

const scope = {
    DxcAlert,
    DxcInset,
    DxcStack,
}

export default { code, scope };