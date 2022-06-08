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
    <DxcInset space="large">
      <DxcStack gutter="large" align="start">
        <DxcDateInput
          label="Uncontrolled"
          helperText="The 'defaultValue' prop only works with uncontrolled date inputs"
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
