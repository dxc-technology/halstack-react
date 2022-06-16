import {
  DxcSwitch,
  DxcInset,
  DxcRow,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcRow justify="center" gutter="xlarge">
        <DxcStack>
          <label style={{ fontWeight: 600 }}>Before</label>
          <DxcSwitch label="Show all" />
        </DxcStack>
        <DxcStack>
          <label style={{ fontWeight: 600 }}>After</label>
          <DxcSwitch label="Off" labelPosition="after" />
        </DxcStack>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  DxcRow,
  DxcStack,
};

export default { code, scope };
