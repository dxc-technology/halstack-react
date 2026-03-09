import { DxcFlex, DxcTextInput } from "@dxc-technology/halstack-react";
const TextInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcTextInput
        label="Email address"
        placeholder="example@email.com"
        helperText="We'll use this email to contact you."
      />
      <DxcTextInput
        label="Username"
        placeholder="Enter your username"
        helperText="Must be between 4 and 20 characters."
        error="Username is already taken."
      />
    </DxcFlex>
  );
};

export default TextInputPreview;
