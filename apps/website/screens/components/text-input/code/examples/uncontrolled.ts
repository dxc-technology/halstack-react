import { DxcTextInput, DxcButton, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";
import { useRef, useState } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem" alignItems="flex-start">
        <DxcTextInput
          label="Enter your surname"
          defaultValue="Harris"
          ref={inputRef}
        />
        <DxcButton label="Submit" onClick={handleSubmit}></DxcButton>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcButton,
  DxcInset,
  DxcFlex,
  useRef,
  useState,
};

export default { code, scope };
