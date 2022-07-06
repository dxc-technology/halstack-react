import {
  DxcTextInput,
  DxcButton,
  DxcStack,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { useRef, useState } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="2rem">
      <DxcStack gutter="2rem" alignX="start">
        <DxcTextInput
          label="Enter your surname"
          defaultValue="Harris"
          ref={inputRef}
        />
        <DxcButton label="Submit" onClick={handleSubmit}></DxcButton>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcButton,
  DxcInset,
  DxcStack,
  useRef,
  useState,
};

export default { code, scope };
