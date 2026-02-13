import { DxcPasswordInput, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const PasswordInputPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Password Input" />
      <DxcFlex gap="2rem">
        <DxcPasswordInput label="Password" />
        <DxcPasswordInput label="Password" value="test" error="Password length must be at least 6 characters." />
      </DxcFlex>
    </DxcFlex>
  );
};

export default PasswordInputPreview;
