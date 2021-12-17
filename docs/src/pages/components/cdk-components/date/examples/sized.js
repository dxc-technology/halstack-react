import { V3DxcDate } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("01/01/2001");
  const onChange = ({ stringValue, dateValue }) => {
    changeValue(stringValue);
  };

  return (
    <V3DxcDate
    label="Input label"
    value={value}
    assistiveText="assistive text"
    onChange={onChange}
    margin="xxsmall"
    size="medium"
    placeholder
    format="MM-dd-yyyy"
  />

  );
}`;
const scope = {
  V3DxcDate,
  useState,
};

export default { code, scope };
