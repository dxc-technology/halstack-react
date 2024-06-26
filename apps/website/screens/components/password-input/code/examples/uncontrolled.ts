import { DxcInset, DxcPasswordInput, DxcButton } from "@repo/ui";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="2rem">
      <DxcPasswordInput label="Password" ref={inputRef} clearable />
      <DxcInset top="1rem">
        <DxcButton onClick={handleSubmit} label="Submit" />
      </DxcInset>
    </DxcInset>
  );
}`;

const scope = {
  useState,
  useRef,
  DxcPasswordInput,
  DxcButton,
  DxcInset,
};

export default { code, scope };
