import { DxcDropdown } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const selectOption = () => {
    console.log("selected");
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
    <div style={{ background: "#000000" }}>
      <DxcDropdown
        options={options}
        theme="dark"
        label="Dark Theme Dropdown"
        onSelectOption={selectOption}
      ></DxcDropdown>
    </div>
  );
}`;

const scope = {
  DxcDropdown,
  useState
};

export default { code, scope };
