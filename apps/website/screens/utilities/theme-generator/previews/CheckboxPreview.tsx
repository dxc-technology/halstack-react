import { DxcCheckbox, DxcInset } from "@dxc-technology/halstack-react";
const CheckboxPreview = () => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcCheckbox label="Label" />
      <DxcCheckbox label="Label" checked={true} />
      <DxcCheckbox label="Disabled" disabled checked={true} />
    </DxcInset>
  );
};

export default CheckboxPreview;
