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
      label: "Facebook",
    },
    {
      value: 2,
      label: "X",
    },
    {
      value: 3,
      label: "Linkedin",
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcToggleGroup
        label="Choose a social network"
        options={options}
        onChange={onChange}
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
