import { DxcNumberInput, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <>
      <DxcNumberInput 
        label="Uncontrolled"
        helperText="The 'defaultValue' prop only works with uncontrolled number inputs"
        defaultValue="1" 
        ref={inputRef} 
        margin="medium" 
      />
      <DxcButton
        onClick={handleSubmit}
        label="Submit"
        margin={{ left: "medium", right: "medium", bottom: "medium" }}
      ></DxcButton>
    </>
  );
}`;

const scope = {
  DxcNumberInput,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };
