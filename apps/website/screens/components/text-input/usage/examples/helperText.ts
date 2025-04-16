import { DxcTextInput, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex justifyContent="center">
        <DxcTextInput
          label="Enabled"
          helperText="Helper Text"
          placeholder="Placeholder"
          clearable
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
