import {
  DxcDateInput,
  DxcInset,
  DxcButton,
  DxcStack,
} from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const inputRef = useRef();
  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="2rem">
      <DxcStack gutter="2rem" alignX="start">
        <DxcDateInput
          label="Start date"
          helperText="Please enter the start date."
          placeholder
          defaultValue="10-08-1998"
          clearable
          ref={inputRef}
        />
        <DxcButton label="Submit" onClick={handleSubmit}></DxcButton>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
  DxcStack,
  DxcButton,
  useRef,
};

export default { code, scope };
