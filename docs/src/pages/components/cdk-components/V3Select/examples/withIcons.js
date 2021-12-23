import { V3DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState();
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const iconSVG = () => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    );
  };
  const optionsWithIcons = [
    {
      value: 1,
      label: "First text",
      icon: iconSVG
    },
    {
      value: 2,
      label: "Second text",
      icon: iconSVG
    },
    {
      value: 3,
      label: "Third text",
      icon: iconSVG
    }
  ];

  return (
    <V3DxcSelect
      options={optionsWithIcons}
      onChange={onChange}
      label="Select with Icons"
      value={value}
      margin="medium"
    ></V3DxcSelect>
  );
}`;

const scope = {
  V3DxcSelect,
  useState,
};

export default { code, scope };
