import { DxcDate } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [inputValue, changeInput] = useState("01-01-1995");
  const [isInvalid, changeIsInvalid] = useState(false);

  const onChange = ({ stringValue, dateValue }) => {
    changeInput(stringValue);
    changeIsInvalid(dateValue ? false : true);
  };
  const onBlur = (stringValue) => {
    changeInput(stringValue);
  };

  return (
    <DxcDate
          label="Input label"
          assistiveText="assistive text"
          value={inputValue}
          invalid={isInvalid}
          placeholder
          format="MM-dd-yyyy"
          onBlur={onBlur}
          onChange={onChange}
        />
  );
}`;

const scope = {
  DxcDate,
  useState,
};

export default { code, scope };
