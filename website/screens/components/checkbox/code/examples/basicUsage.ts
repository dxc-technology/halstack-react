import {
  DxcCheckbox,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcCheckbox label="Default" />
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcStack,
};

export default { code, scope };
