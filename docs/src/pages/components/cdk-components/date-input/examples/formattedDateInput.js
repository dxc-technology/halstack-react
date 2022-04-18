import { DxcDateInput } from "@dxc-technology/halstack-react";
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

  return (
    <DxcDateInput
      label="Formatted"
      helperText="If the typed date doesn't match the defined format, an error will be displayed"
      format="MM/dd/yyyy"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error == undefined ? "" : error}
      clearable
      placeholder
      margin="medium"
      size="large"
    />
  );
}`;

const scope = {
  DxcDateInput,
  useState,
};

export default { code, scope };
