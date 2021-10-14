import { DxcToggleGroup } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState([]);
  const onChange = (newValue) => {
    changeValue(newValue);
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
      value={value}
      onChange={onChange}
      margin="medium"
      multiple
    ></DxcToggleGroup>
  );
}`;

const scope = {
  DxcToggleGroup,
  useState,
};

export default { code, scope };
