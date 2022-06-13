import {
  DxcProgressBar,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcProgressBar
          label="Determinate"
          helperText="Helper text"
          showValue
          value={45}
        />
        <DxcProgressBar
          label="Undeterminate"
          helperText="Helper text"
        />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcProgressBar,
  DxcInset,
  DxcStack,
};

export default { code, scope };
