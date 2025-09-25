import { DxcInset, DxcPasswordInput, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcPasswordInput label="Password" ref={inputRef} clearable />
      <DxcInset top="var(--spacing-padding-m)">
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
