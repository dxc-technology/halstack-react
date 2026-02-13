import { DxcDropdown, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const DropdownPreview = () => {
  const options = [
    {
      value: "1",
      label: "Amazon",
    },
    {
      value: "2",
      label: "Ebay",
    },
    {
      value: "3",
      label: "Apple",
    },
  ];

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

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-padding-xl)">
        <DxcDropdown options={options} onSelectOption={() => {}} label="Default Dropdown" />
        <DxcDropdown options={iconOptions} onSelectOption={() => {}} icon="download" label="Dropdown with icons" />
      </DxcFlex>
    </DxcInset>
  );
};

export default DropdownPreview;
