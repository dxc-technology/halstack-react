import { DxcNewInputText, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <>
      <DxcNewInputText
        label="Uncontrolled"
        margin="medium"
        ref={inputRef}
        clearable
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
  DxcNewInputText,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };
