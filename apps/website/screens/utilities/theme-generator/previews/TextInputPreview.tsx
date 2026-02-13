import { DxcTextInput, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";
const TextInputPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Text Input" />
      <DxcFlex gap="var(--spacing-padding-xxl)">
        <DxcTextInput
          label="Helper Text"
          placeholder="Input with helper"
          helperText="This is helper text to guide the user"
        />
        <DxcTextInput
          label="Invalid input"
          helperText="Example of helper text"
          placeholder="Placeholder"
          error="Error message."
          clearable
        />
      </DxcFlex>
    </DxcFlex>
  );
};

export default TextInputPreview;
