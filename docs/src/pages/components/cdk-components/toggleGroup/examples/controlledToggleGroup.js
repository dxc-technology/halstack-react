import { DxcToggleGroup } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(1);
  const onChange = (newValue) => {
    if(newValue !== 2) {
      changeValue(newValue);
    }
  };
  const options = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];

  return (
    <DxcToggleGroup
      options={options}
      onChange={onChange}
      value={value}
      margin="medium"
    ></DxcToggleGroup>
  );
}`;

const scope = {
  DxcToggleGroup,
  useState
};

export default { code, scope };
