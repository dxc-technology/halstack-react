import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState();
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
  };

  const options = [
    { label: "Madrid", value: "madrid" },
    { label: "Melbourne", value: "melbourne" },
    { label: "London", value: "london" },
    { label: "Roma", value: "roma" },
  ];

  return (
    <DxcInset space="2rem">
      <DxcSelect
        label="Select your favorite city"
        placeholder="Choose a city"
        options={options}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        error={error == undefined ? "" : error}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcInset,
  useState,
};

export default { code, scope };
