import { DxcTextarea, DxcInset, DxcFlex, DxcButton } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current.getElementsByTagName("textarea")[0];
    console.log(input.value);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="flex-start">
        <DxcTextarea
          label="Comments"
          defaultValue="My personal documents are attached."
          ref={inputRef}
        />
        <DxcButton label="Submit" onClick={handleSubmit}></DxcButton>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcTextarea,
  DxcInset,
  DxcFlex,
  useRef,
  DxcButton,
};

export default { code, scope };
