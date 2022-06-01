import {
  DxcNumberInput,
  DxcButton,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="large">
      <DxcStack gutter="large" align="start">
        <DxcNumberInput
          label="Uncontrolled"
          defaultValue="1"
          ref={inputRef}
        />
        <DxcButton onClick={handleSubmit} label="Submit"></DxcButton>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcNumberInput,
  DxcButton,
  DxcInset,
  DxcStack,
  useState,
  useRef,
};

export default { code, scope };
