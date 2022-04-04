import { DxcTextarea, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("textarea")[0];
    console.log(input.value);
  };

  return (
    <>
      <DxcTextarea 
        label="Uncontrolled"         
        helperText="The 'defaultValue' prop only works with uncontrolled text inputs"
        defaultValue="Example text"
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
  DxcTextarea,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };
