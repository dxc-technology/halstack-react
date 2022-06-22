import { DxcHeader, DxcInset, DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Amazon",
    },
    {
      value: 2,
      label: "Ebay",
    },
    {
      value: 3,
      label: "Apple",
    },
  ];

  return (
    <DxcInset space="large">
      <DxcHeader
        content={
          <DxcHeader.Dropdown
            options={options}
            onSelectOption={selectOption}
            label="Store"
          />
        }
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcHeader,
  DxcInset,
  DxcButton,
};

export default { code, scope };
