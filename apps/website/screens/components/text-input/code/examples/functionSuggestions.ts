import { DxcTextInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra"];
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };

  const callbackFunc = (newValue) => {
    const result = new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          newValue
            ? countries.filter((option) =>
                option.toUpperCase().includes(newValue.toUpperCase())
              )
            : countries
        );
      }, 1500)
    );
    return result;
  };
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTextInput
        label="Enter your country"
        value={value}
        onChange={onChange}
        suggestions={callbackFunc}
        onBlur={onBlur}
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
