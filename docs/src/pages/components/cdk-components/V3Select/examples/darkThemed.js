import { V3DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(1);
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
    <div style={{ background: "#000000" }}>
      <V3DxcSelect
        options={optionsWithoutIcon}
        onChange={onChange}
        label="Basic select"
        value={value}
        theme={"dark"}
        margin="medium"
      ></V3DxcSelect>
    </div>
  );
}`;

const scope = {
  V3DxcSelect,
  useState
};

export default { code, scope };
