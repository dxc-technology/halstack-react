import { DxcTextInput, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcTextInput
        label="Enabled"
        helperText="Helper Text"
        placeholder="Placeholder"
        clearable
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
};

export default { code, scope };
