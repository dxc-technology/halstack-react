import { DxcRadioGroup } from "@dxc-technology/halstack-react";
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
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
  ];

  return (
    <div style={{ margin: "36px" }}>
      <DxcRadioGroup
        label="Controlled"
        options={options}
        value={value}
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
