import { V3DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(1);
  const onChange = (newValue) => {
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
      label="Controlled Select"
      value={value}
      margin="medium"
      assistiveText="assistive text"
    ></V3DxcSelect>
  );
}`;

const scope = {
  V3DxcSelect,
  useState
};

export default { code, scope };
