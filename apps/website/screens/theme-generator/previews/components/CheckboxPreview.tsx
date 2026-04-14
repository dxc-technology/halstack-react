import { DxcCheckbox, DxcFlex } from "@dxc-technology/halstack-react";

const CheckboxPreview = () => {
  return (
    <DxcFlex direction="row" gap="var(--spacing-gap-ml)">
      <DxcCheckbox label="Accept terms and conditions" />
      <DxcCheckbox label="Subscribe to newsletter" checked />
      <DxcCheckbox label="Email notifications (disabled)" disabled checked />
    </DxcFlex>
  );
};

export default CheckboxPreview;
