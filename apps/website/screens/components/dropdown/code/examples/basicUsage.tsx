import { DxcDropdown, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Android",
    },
    {
      value: 2,
      label: "Windows",
    },
    {
      value: 3,
      label: "IOS",
    },
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcDropdown
        label="Select platform"
        options={options}
        onSelectOption={selectOption}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcDropdown,
  DxcInset,
};

export default { code, scope };
