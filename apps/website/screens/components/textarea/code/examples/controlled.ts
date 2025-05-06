import { DxcTextarea, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <DxcInset space="2rem">
      <DxcTextarea
        label="Comments"
        placeholder="Write your general thoughts and comments here."
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextarea,
  DxcInset,
  useState,
};

export default { code, scope };
