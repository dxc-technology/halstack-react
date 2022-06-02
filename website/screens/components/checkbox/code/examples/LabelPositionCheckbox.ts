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
                        label="Label before"
                        margin="medium"
                    />
                    <DxcCheckbox
                        label="Label after"
                        labelPosition="after"
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
