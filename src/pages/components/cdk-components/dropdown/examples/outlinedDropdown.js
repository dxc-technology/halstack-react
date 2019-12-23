import { DxcDropdown } from "@diaas/dxc-react-cdk";
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
      label="Outlined Dropdown"
      mode={"outlined"}
    ></DxcDropdown>
  );
}`;

const scope = {
  DxcDropdown,
  useState
};

export default { code, scope };
