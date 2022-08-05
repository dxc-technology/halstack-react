import {
  DxcDateInput,
  DxcInset,
  DxcButton,
  DxcFlex,
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
      <DxcFlex direction="column" gap="2rem" justifyContent="flex-start">
        <DxcDateInput
          label="Start date"
          helperText="Please enter the start date."
          placeholder
          defaultValue="10-08-1998"
          clearable
          ref={inputRef}
        />
        <DxcButton label="Submit" onClick={handleSubmit} size="medium" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
  DxcFlex,
  DxcButton,
  useRef,
};

export default { code, scope };
