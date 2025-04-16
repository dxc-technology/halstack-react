import { DxcSelect, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
  };

  const options = [
    { label: "Madrid", value: "madrid" },
    { label: "Melbourne", value: "melbourne" },
    { label: "London", value: "london" },
    { label: "Roma", value: "roma" },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcSelect
        label="Select your favorite city"
        placeholder="Choose a city"
        options={options}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
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
