import { DxcProgressBar, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
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
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcProgressBar,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
