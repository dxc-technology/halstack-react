import { DxcDropdown, DxcRow, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Android"
    },
    {
      value: 2,
      label: "Windows"
    },
    {
      value: 3,
      label: "IOS"
    }
  ];

  return (
    <DxcInset space="large">
      <DxcRow justify="center">
        <DxcDropdown
        options={options}
        onSelectOption={selectOption}
        label="Select platform"
        ></DxcDropdown>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcDropdown,
  DxcInset,
  DxcRow,
};

export default { code, scope };
