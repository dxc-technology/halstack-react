import { DxcDropdown } from "@dxc-technology/halstack-react";
import { useState } from "react";

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
    <DxcDropdown
      options={options}
      onSelectOption={selectOption}
      label="Select platform"
      margin="medium"
    ></DxcDropdown>
  );
}`;

const scope = {
  DxcDropdown,
  useState,
};

export default { code, scope };
