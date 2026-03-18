import { DxcFlex, DxcTextarea } from "@dxc-technology/halstack-react";
const TextareaPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcTextarea
        label="Project description"
        placeholder="Describe your project in detail..."
        rows={3}
        helperText="Provide key information about the project goals and scope."
      />
      <DxcTextarea
        label="Project description"
        placeholder="Describe your project in detail..."
        rows={3}
        helperText="Provide key information about the project goals and scope."
        error="Description cannot be empty."
      />
    </DxcFlex>
  );
};

export default TextareaPreview;
