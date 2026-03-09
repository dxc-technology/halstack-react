import { DxcFlex, DxcPasswordInput } from "@dxc-technology/halstack-react";

const PasswordInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcPasswordInput label="Password" />
      <DxcPasswordInput label="Password" error="Error message" />
    </DxcFlex>
  );
};

export default PasswordInputPreview;
