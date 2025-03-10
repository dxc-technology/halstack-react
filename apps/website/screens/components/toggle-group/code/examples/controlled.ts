import { DxcToggleGroup, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(1);
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const options = [
    {
      value: 1,
      label: "Web",
    },
    {
      value: 2,
      label: "Android",
    },
    {
      value: 3,
      label: "iOS",
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcToggleGroup
        onChange={onChange}
        options={options}
        value={value}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcToggleGroup,
  DxcInset,
  useState,
};

export default { code, scope };
