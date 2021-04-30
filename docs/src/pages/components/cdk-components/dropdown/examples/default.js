import { DxcDropdown } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const selectOption = (value) => {
    console.log(value);
  };
  const options = [
    {
      value: 1,
      label: "Amazon"
    },
    {
      value: 2,
      label: "Ebay"
    },
    {
      value: 3,
      label: "Apple"
    }
  ];

  return (
    <DxcDropdown
      options={options}
      onSelectOption={selectOption}
      label="Default Dropdown"
      margin="medium"
    ></DxcDropdown>
  );
}`;

const scope = {
  DxcDropdown,
  useState
};

export default { code, scope };
