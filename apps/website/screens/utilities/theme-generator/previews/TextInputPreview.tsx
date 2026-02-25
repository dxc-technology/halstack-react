import { DxcTextInput } from "@dxc-technology/halstack-react";
const TextInputPreview = () => {
  return (
    <DxcTextInput
      label="Helper Text"
      placeholder="Input with helper"
      helperText="This is helper text to guide the user"
    />
  );
};

export default TextInputPreview;
