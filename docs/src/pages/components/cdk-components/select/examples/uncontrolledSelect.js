import { DxcSelect, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];
  const selectRef = useRef();
  const handleSubmit = () => {
    const select = selectRef.current.getElementsByTagName("input")[0];
    console.log(select.value);
  };

  return <>
    <DxcSelect
      label="Label"
      placeholder="Choose an option"
      options={options}
      margin="medium"
      ref={selectRef}
    />
    <DxcButton
      onClick={handleSubmit}
      label="Submit"
      margin={{ left: "medium", right: "medium", bottom: "medium" }}
    ></DxcButton>
  </>;
}`;

const scope = {
  DxcSelect,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };
