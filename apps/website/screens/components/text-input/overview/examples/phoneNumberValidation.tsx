import { DxcTextInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const onChange = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onChange: invalid phone number");
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onBlur: invalid phone number");
  };

  const validPhoneNumber = new RegExp("^\\\\+[1-9]\\\\d{6,14}$");

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTextInput
        label="Enter your phone number"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={errorMessage}
        helperText="Format: +[country code][phone number] (e.g., +1234567890)"
        pattern={validPhoneNumber}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  useState,
};

export default { code, scope };
