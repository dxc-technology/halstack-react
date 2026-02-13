import { DxcNumberInput, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const NumberInputPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Number Input" />
      <DxcFlex gap="2rem">
        <DxcNumberInput label="Enter a number" placeholder="0" />
        <DxcNumberInput label="Enter a number - Error" error="Invalid number." />
      </DxcFlex>
    </DxcFlex>
  );
};

export default NumberInputPreview;
