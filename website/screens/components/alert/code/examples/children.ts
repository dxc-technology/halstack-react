import { DxcAlert, DxcInset, DxcStack } from "@dxc-technology/halstack-react";

const code = `() => {
    return (
        <DxcInset space="large">
            <DxcStack gutter="large">
                <DxcAlert
                    type="confirm"
                    mode="inline"
                    size="medium"
                    inlineText="Inline text."
                >
                    <div>
                    Custom content.
                    </div>
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