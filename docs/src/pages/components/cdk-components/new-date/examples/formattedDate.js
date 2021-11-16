import { DxcNewDate } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
  };

  return (
    <DxcNewDate
      label="Controlled"
      format="MM/dd/yyyy"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      margin="medium"
      clearable
    />
  );
}`;

const scope = {
  DxcNewDate,
  useState,
};

export default { code, scope };
