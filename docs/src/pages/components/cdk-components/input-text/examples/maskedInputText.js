import { DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return (
    <DxcInputText
      label="Input label"
      assistiveText={"assistive text"}
      onChange={onChange}
      margin="medium"
      isMasked={true}
    />
  );
}`;

const scope = {
  DxcInputText,
  useState,
};

export default { code, scope };
