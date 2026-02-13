import { DxcButton, DxcFlex } from "@dxc-technology/halstack-react";
const ButtonPreview = () => {
  return (
    <DxcFlex gap="1rem" wrap="wrap">
      <DxcButton label="Primary Button" />
      <DxcButton label="Secondary Button" mode="secondary" />
      <DxcButton label="Text Button" mode="tertiary" />
      <DxcButton label="Disabled Button" disabled />
    </DxcFlex>
  );
};

export default ButtonPreview;
