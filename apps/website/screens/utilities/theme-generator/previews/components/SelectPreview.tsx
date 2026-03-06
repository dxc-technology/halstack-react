import { DxcSelect } from "@dxc-technology/halstack-react";

const SelectPreview = () => {
  const options = [
    {
      value: "1",
      label: "Option 1",
    },
    {
      value: "2",
      label: "Option 2",
    },
  ];

  return <DxcSelect label="Choose an option" options={options} defaultValue={"1"} />;
};

export default SelectPreview;
