import { DxcToggleGroup } from "@dxc-technology/halstack-react";

const ToggleGroupPreview = () => {
  const optionsWithIcons = [
    {
      value: 1,
      label: "Light Mode",
      icon: "wb_sunny",
    },
    {
      value: 2,
      label: "Dark Mode",
      icon: "nights_stay",
    },
  ];

  return <DxcToggleGroup options={optionsWithIcons} defaultValue={1} />;
};

export default ToggleGroupPreview;
