import { DxcFlex, DxcNumberInput } from "@dxc-technology/halstack-react";

const NumberInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcNumberInput
        label="Quantity"
        placeholder="Enter a number"
        helperText="Specify the number of items you want to order."
      />
      <DxcNumberInput
        label="Quantity"
        placeholder="Enter a number"
        helperText="Specify the number of items you want to order."
        error="Value must be greater than 0."
      />
    </DxcFlex>
  );
};

export default NumberInputPreview;
