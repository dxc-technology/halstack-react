import { DxcDateInput, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <>
      <DxcDateInput label="Uncontrolled" 
        helperText="The 'defaultValue' prop only works with uncontrolled date inputs"
        defaultValue="10-08-1998" 
        clearable 
        margin="medium" 
        ref={inputRef} 
      />
      <DxcButton
        label="Submit"
        onClick={handleSubmit}
        margin={{ left: "medium", right: "medium", bottom: "medium" }}
      ></DxcButton>
    </>
  );
}`;

const scope = {
  DxcDateInput,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };
