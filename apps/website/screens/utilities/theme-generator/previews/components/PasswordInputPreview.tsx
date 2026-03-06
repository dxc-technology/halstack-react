import { DxcFlex, DxcPasswordInput } from "@dxc-technology/halstack-react";

const PasswordInputPreview = () => {
  return (
    <DxcFlex gap="2rem">
      <DxcPasswordInput label="Password" />
      <DxcPasswordInput label="Password" error="Error message" />
    </DxcFlex>
  );
};

export default PasswordInputPreview;
