import { DxcTextInput, DxcInset, DxcRow } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcRow justify="center">
        <DxcTextInput
          label="Enabled"
          helperText="Helper Text"
          placeholder="Placeholder"
          clearable
        />
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  DxcRow,
};

export default { code, scope };
