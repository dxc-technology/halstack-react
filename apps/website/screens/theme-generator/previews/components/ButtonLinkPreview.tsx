import { DxcButtonLink, DxcFlex } from "@dxc-technology/halstack-react";

const ButtonPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)" wrap="wrap">
      <DxcButtonLink href="#" label="Save Changes" />
      <DxcButtonLink href="#" label="Cancel" mode="secondary" />
      <DxcButtonLink href="#" label="Learn More" mode="tertiary" />
      <DxcButtonLink href="#" label="Submit (disabled)" disabled />
    </DxcFlex>
  );
};

export default ButtonPreview;
