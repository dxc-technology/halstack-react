import { DxcHeader, DxcButton } from "@dxc-technology/halstack-react";

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
    <DxcHeader
      content={
        <DxcHeader.Dropdown
          options={options}
          onSelectOption={selectOption}
          label="Default Dropdown"
        />
      }
    ></DxcHeader>
  );
}`;

const scope = {
  DxcHeader,
};

export default { code, scope };
