import { DxcSelect } from "@dxc-technology/halstack-react";

const SelectPreview = () => {
  const options = [
    { value: "basic", label: "Basic Plan" },
    { value: "pro", label: "Pro Plan" },
    { value: "enterprise", label: "Enterprise Plan" },
  ];

  return <DxcSelect label="Select your subscription plan" options={options} defaultValue="basic" />;
};
export default SelectPreview;
