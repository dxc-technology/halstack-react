import { DxcButton, DxcFlex } from "@dxc-technology/halstack-react";

const ButtonPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)" wrap="wrap">
      <DxcButton label="Save Changes" />
      <DxcButton label="Cancel" mode="secondary" />
      <DxcButton label="Learn More" mode="tertiary" />
      <DxcButton label="Submit (disabled)" disabled />
    </DxcFlex>
  );
};

export default ButtonPreview;
