import { DxcFlex, DxcTextInput } from "@dxc-technology/halstack-react";
const TextInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcTextInput label="Label" placeholder="Input" helperText="Helper Text" />
      <DxcTextInput label="Label" placeholder="Input" helperText="Helper Text" error="Error message" />
    </DxcFlex>
  );
};

export default TextInputPreview;
