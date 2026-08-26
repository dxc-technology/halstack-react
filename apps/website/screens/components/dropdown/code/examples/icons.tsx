import { DxcDropdown, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Android",
      icon: "phone_android",
    },
    {
      value: 2,
      label: "IOS",
      icon: "phone_iphone",
      hasDivider: true,
    },
    {
      value: 3,
      label: "Windows",
      icon: "desktop_windows",
    },
    {
      value: 4,
      label: "Linux",
      icon: "laptop",
    },
    {
      value: 5,
      label: "macOS",
      icon: "laptop_mac",
      hasDivider: true,
    },
    {
      value: 6,
      label: "Other",
      icon: "devices_other",
    },
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcDropdown
        options={options}
        onSelectOption={selectOption}
        label="Select platform"
        icon="download"
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcDropdown,
  DxcInset,
};

export default { code, scope };
