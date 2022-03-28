import { DxcRadioGroup } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const onChange = (value) => {
    setValue(value);
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
  };

  const options = [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "36px" }}>
      <DxcRadioGroup
        label="Controlled"
        options={options}
        value={value}
        error={error == null ? "" : error}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}`;

const scope = {
  DxcRadioGroup,
  useState,
};

export default { code, scope };
