import { DxcNewTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <DxcNewTextarea
      label="Pattern"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewTextarea,
  useState,
};

export default { code, scope };
