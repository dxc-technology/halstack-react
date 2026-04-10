import { DxcFlex, DxcPasswordInput } from "@dxc-technology/halstack-react";

const PasswordInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcPasswordInput label="Password" helperText="Use at least 8 characters with a mix of letters and numbers." />
      <DxcPasswordInput
        label="Password"
        helperText="Use at least 8 characters with a mix of letters and numbers."
        error="Password must contain at least one number."
      />
    </DxcFlex>
  );
};

export default PasswordInputPreview;
