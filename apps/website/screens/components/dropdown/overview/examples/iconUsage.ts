import { DxcDropdown, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {

  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Option 1",
    },
    {
      value: 2,
      label: "Option 2",
    },
    {
      value: 3,
      label: "Option 3",
    },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex justifyContent="center">
        <DxcDropdown
          icon="filled_home"
          options={options}
          onSelectOption={selectOption}
        ></DxcDropdown>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcDropdown,
  DxcFlex,
  DxcInset,
};

export default { code, scope };
