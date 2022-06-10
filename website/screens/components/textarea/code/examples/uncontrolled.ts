import {
  DxcTextarea,
  DxcInset,
  DxcStack,
  DxcButton,
} from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("textarea")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="large">
      <DxcStack gutter="large" align="start">
        <DxcTextarea label="Uncontrolled" ref={inputRef} />
        <DxcButton label="Submit" onClick={handleSubmit}></DxcButton>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextarea,
  DxcInset,
  DxcStack,
  useRef,
  DxcButton,
};

export default { code, scope };
