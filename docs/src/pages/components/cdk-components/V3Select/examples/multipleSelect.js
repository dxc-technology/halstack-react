import { V3DxcSelect } from "@dxc-technology/halstack-react";
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
    <V3DxcSelect
      options={optionsWithoutIcon}
      onChange={onChange}
      label="Multiple select"
      multiple={true}
      value={value}
      margin="medium"
    ></V3DxcSelect>
  );
}`;

const scope = {
  V3DxcSelect,
  useState
};

export default { code, scope };
