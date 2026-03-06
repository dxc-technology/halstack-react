import { DxcFlex, DxcNumberInput } from "@dxc-technology/halstack-react";

const NumberInputPreview = () => {
  return (
    <DxcFlex gap="2rem">
      <DxcNumberInput label="Enter a number" placeholder="0" />
      <DxcNumberInput label="Enter a number" placeholder="0" error="Error message" />
    </DxcFlex>
  );
};

export default NumberInputPreview;
