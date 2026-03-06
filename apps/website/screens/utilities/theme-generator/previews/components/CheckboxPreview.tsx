import { DxcCheckbox, DxcFlex } from "@dxc-technology/halstack-react";

const CheckboxPreview = () => {
  return (
    <DxcFlex direction="row" gap="1rem">
      <DxcCheckbox label="Label" />
      <DxcCheckbox label="Label" checked={true} />
      <DxcCheckbox label="Disabled" disabled checked={true} />
    </DxcFlex>
  );
};

export default CheckboxPreview;
