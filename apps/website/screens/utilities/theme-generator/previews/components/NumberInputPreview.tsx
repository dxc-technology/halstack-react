import { DxcFlex, DxcNumberInput } from "@dxc-technology/halstack-react";

const NumberInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcNumberInput label="Enter a number" placeholder="0" />
      <DxcNumberInput label="Enter a number" placeholder="0" error="Error message" />
    </DxcFlex>
  );
};

export default NumberInputPreview;
