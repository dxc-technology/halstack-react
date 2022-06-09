import {
  DxcRadio,
  DxcInset,
  DxcStack,
  DxcRow,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcRow gutter="xxxlarge" justify="center">
        <DxcStack>
          <label style={{ fontWeight: "600", fontSize: "0.875rem" }}>
            Vertical
          </label>
          <DxcStack>
            <DxcRadio label="Option 01" labelPosition="after" />
            <DxcRadio label="Option 02" labelPosition="after" checked={true} />
            <DxcRadio label="Option 03" labelPosition="after" />
          </DxcStack>
        </DxcStack>
        <DxcStack>
          <label style={{ fontWeight: "600", fontSize: "0.875rem" }}>
            Horizontal
          </label>
          <DxcRow gutter="large">
            <DxcRadio label="Option 01" labelPosition="after" />
            <DxcRadio label="Option 02" labelPosition="after" checked={true} />
            <DxcRadio label="Option 03" labelPosition="after" />
          </DxcRow>
        </DxcStack>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcRadio,
  DxcInset,
  DxcStack,
  DxcRow,
};

export default { code, scope };
