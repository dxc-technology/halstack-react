import { DxcDateInput, DxcStack, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    return(
        <DxcInset space="large">
            <DxcStack gutter="small">
                <DxcDateInput
                label="Default"
                placeholder="Placeholder"
                />
                <DxcDateInput
                label="Error"
                placeholder="Placeholder"
                error="Error message"
                />
                <DxcDateInput
                label="Disabled"
                placeholder="Placeholder"
                disabled
                />
            </DxcStack>
        </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcStack,
  DxcInset,
};

export default { code, scope };
