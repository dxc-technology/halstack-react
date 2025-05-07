import { DxcProgressBar, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
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
