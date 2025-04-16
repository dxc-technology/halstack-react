import { DxcDateInput, DxcInset, DxcButton, DxcFlex } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const inputRef = useRef();
  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("input")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" justifyContent="flex-start">
        <DxcDateInput
          label="Start date"
          helperText="Please enter the start date."
          placeholder
          defaultValue="10-08-1998"
          clearable
          ref={inputRef}
        />
        <DxcButton label="Submit" onClick={handleSubmit} size={{width: "medium"}} />
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
