import { DxcDropdown } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const selectOption = () => {
    console.log("selected");
  };

  const optionsWithoutIcon = [
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
      options={optionsWithoutIcon}
      onSelectOption={selectOption}
      label="Outlined dropdown"
      mode={"outlined"}
    ></DxcDropdown>
  );
}`;

const scope = {
  DxcDropdown,
  useState
};

export default { code, scope };
