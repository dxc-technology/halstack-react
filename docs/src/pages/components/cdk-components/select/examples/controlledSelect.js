import { DxcSelect } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
  };

  return (
    <DxcSelect
      label="Controlled"
      placeholder="Choose an option"
      options={options}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      error={error}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSelect,
  useState,
};

export default { code, scope };
