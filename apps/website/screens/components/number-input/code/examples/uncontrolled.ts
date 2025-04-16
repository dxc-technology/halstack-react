import { DxcNumberInput, DxcButton, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const inputRef = useRef();
  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="flex-start">
        <DxcNumberInput
          label="Enter your age"
          ref={inputRef}
          defaultValue={10}
        />
        <DxcButton onClick={handleSubmit} label="Submit"></DxcButton>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcNumberInput,
  DxcButton,
  DxcInset,
  DxcFlex,
  useState,
  useRef,
};

export default { code, scope };
