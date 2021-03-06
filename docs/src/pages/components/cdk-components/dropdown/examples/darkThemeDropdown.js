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
    <div style={{ background: "#000000" }}>
      <DxcDropdown
        options={options}
        theme="dark"
        label="Dark theme Dropdown"
        onSelectOption={selectOption}
        margin="medium"
      ></DxcDropdown>
    </div>
  );
}`;

const scope = {
  DxcDropdown,
  useState
};

export default { code, scope };
