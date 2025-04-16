import { DxcRadioGroup, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const onChange = (value) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };

  const options = [
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Non-binary", value: "non-binary" },
    { label: "Other", value: "other" },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcRadioGroup
        label="Gender"
        options={options}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcRadioGroup,
  DxcInset,
  useState,
};

export default { code, scope };
