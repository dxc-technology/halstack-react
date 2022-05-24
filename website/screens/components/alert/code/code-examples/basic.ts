import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
        <DxcInset space="large">
          <DxcStack gutter="large">
            <DxcAlert
              type="info"
              inlineText=" Lorem ipsum dolor sit amet. "
            />
            <DxcAlert
              type="confirm"
              inlineText=" Lorem ipsum dolor sit amet. "
            />
            <DxcAlert
              type="warning"
              inlineText=" Lorem ipsum dolor sit amet. "
            />
            <DxcAlert
              type="error"
              inlineText=" Lorem ipsum dolor sit amet. "
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