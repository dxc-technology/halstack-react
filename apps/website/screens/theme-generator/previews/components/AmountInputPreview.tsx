import { DxcFlex, DxcAmountInput } from "@dxc-technology/halstack-react";
const AmountInputPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)">
      <DxcAmountInput label="Amount" helperText="Select the amount." />
      <DxcAmountInput label="Amount paid" helperText="Select the amount." error="Incorrect amount" />
    </DxcFlex>
  );
};

export default AmountInputPreview;
