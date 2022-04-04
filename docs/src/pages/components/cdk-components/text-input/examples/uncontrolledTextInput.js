import { DxcTextInput, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <>
      <DxcTextInput
        label="Uncontrolled"
        helperText="The 'defaultValue' prop only works with uncontrolled text inputs"
        defaultValue="Example text"
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
  DxcTextInput,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };
