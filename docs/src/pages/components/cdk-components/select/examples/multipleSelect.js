import { DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState([]);
  const onChange = newValue => {
    changeValue(newValue);
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
    <DxcSelect
      options={optionsWithoutIcon}
      onChange={onChange}
      label="Multiple select"
      multiple={true}
      value={value}
      margin="medium"
      padding="small"
    ></DxcSelect>
  );
}`;

const scope = {
  DxcSelect,
  useState
};

export default { code, scope };
