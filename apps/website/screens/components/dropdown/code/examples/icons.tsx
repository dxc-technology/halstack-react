import { DxcDropdown, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Android",
      icon: "filled_phone_android",
    },
    {
      value: 2,
      label: "Windows",
      icon: "desktop_windows",
    },
    {
      value: 3,
      label: "IOS",
      icon: "filled_phone_iphone",
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
