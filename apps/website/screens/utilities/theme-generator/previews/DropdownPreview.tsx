import { DxcDropdown } from "@dxc-technology/halstack-react";

const DropdownPreview = () => {
  const iconOptions = [
    {
      value: "1",
      label: "Android",
      icon: "filled_phone_android",
    },
    {
      value: "2",
      label: "Windows",
      icon: "desktop_windows",
    },
    {
      value: "3",
      label: "IOS",
      icon: "filled_phone_iphone",
    },
  ];

  return <DxcDropdown options={iconOptions} onSelectOption={() => {}} icon="download" label="Dropdown with icons" />;
};

export default DropdownPreview;
