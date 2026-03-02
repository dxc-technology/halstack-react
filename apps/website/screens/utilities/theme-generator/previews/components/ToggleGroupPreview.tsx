import { DxcToggleGroup } from "@dxc-technology/halstack-react";

const ToggleGroupPreview = () => {
  const optionsWithIcons = [
    {
      value: 1,
      label: "Toggle option 1",
      icon: "filled_thumb_up",
    },
    {
      value: 2,
      label: "Toggle option 2",
      icon: "filled_thumb_down",
    },
  ];
  return <DxcToggleGroup options={optionsWithIcons} defaultValue={1} />;
};

export default ToggleGroupPreview;
