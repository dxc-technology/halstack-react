import { DxcRadioGroup, DxcFlex } from "@dxc-technology/halstack-react";

const RadioPreview = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <DxcFlex gap="2rem">
      <DxcRadioGroup label="Select an option" options={options} />
      <DxcRadioGroup label="Error" options={options} error="Error message." />
    </DxcFlex>
  );
};

export default RadioPreview;
