import { DxcRadioGroup, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const RadioPreview = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Radio Button" />
      <DxcFlex gap="2rem">
        <DxcRadioGroup label="Select an option" options={options} />
        <DxcRadioGroup label="Error" options={options} error="Error message." />
      </DxcFlex>
    </DxcFlex>
  );
};

export default RadioPreview;
