import { DxcToggleGroup } from "@dxc-technology/halstack-react";

const TogglePreview = () => {
  const optionsWithIcons = [
    {
      value: 1,
      label: "Facebook",
      icon: "filled_thumb_up",
    },
    {
      value: 2,
      label: "Linkedin",
      icon: "filled_work",
    },
  ];
  return <DxcToggleGroup options={optionsWithIcons} />;
};

export default TogglePreview;
