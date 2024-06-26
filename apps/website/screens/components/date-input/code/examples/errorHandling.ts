import { DxcDateInput, DxcInset } from "@repo/ui";
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
    <DxcInset space="2rem">
      <DxcDateInput
        label="Start date"
        helperText="Please enter the start date."
        format="MM/dd/yyyy"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error == undefined ? "" : error}
        clearable
        placeholder
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
  useState,
};

export default { code, scope };
