import { DxcNewTextarea, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("textarea")[0];
    console.log(input.value);
  };

  return (
    <>
      <DxcNewTextarea label="Uncontrolled" ref={inputRef} margin="medium" />
      <DxcButton
        onClick={handleSubmit}
        label="Submit"
        margin={{ left: "medium", right: "medium", bottom: "medium" }}
      ></DxcButton>
    </>
  );
}`;

const scope = {
  DxcNewTextarea,
  DxcButton,
  useState,
  useRef,
};

export default { code, scope };
