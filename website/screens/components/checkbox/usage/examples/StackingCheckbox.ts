import {
  DxcCheckbox,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
      return (
          <DxcInset space="large">
            <DxcStack gutter="large">
                <div style={{ display: "flex", gap:"100px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap:"8px" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.875rem" }}>Vertical</label>
                        <div style={{ display: "flex", flexDirection: "column", gap:"8px" }}>
                            <DxcCheckbox
                                label="Option"
                                labelPosition="after"
                            />
                            <DxcCheckbox
                                label="Option"
                                labelPosition="after"
                            />
                            <DxcCheckbox
                                label="Option"
                                labelPosition="after"
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap:"8px" }}>
                        <label style={{ fontWeight: "600", fontSize: "0.875rem" }}>Horizontal</label>
                        <div style={{ display: "flex", gap:"32px" }}>
                            <DxcCheckbox
                                label="Option"
                                labelPosition="after"
                            />
                            <DxcCheckbox
                                label="Option"
                                labelPosition="after"
                            />
                            <DxcCheckbox
                                label="Option"
                                labelPosition="after"
                            />
                        </div>
                    </div>
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
