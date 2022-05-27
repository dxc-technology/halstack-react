import {
  DxcCheckbox,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
    return (
        <DxcInset space="large">
          <DxcStack gutter="large">
            <div style={{ display: "flex" }}>
                <DxcCheckbox
                    label="Default"
                    margin="medium"
                />
                <DxcCheckbox
                    label="Label"
                    optional
                    margin="medium"
                />
                <DxcCheckbox
                    label="Disabled"
                    disabled
                    margin="medium"
                />
            </div>
          </DxcStack>
        </DxcInset>
    );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcStack,
};

export default { code, scope };
