import {
  DxcNumberInput,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcNumberInput label="Default" />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcNumberInput,
  DxcInset,
  DxcStack,
};

export default { code, scope };
