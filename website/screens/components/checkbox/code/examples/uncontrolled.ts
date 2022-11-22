import {
  DxcCheckbox,
  DxcInset,
  DxcButton,
} from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const inputRef = useRef();

  const handleSubmit = () => {
    const input = inputRef.current;
    console.log(input);
  };

  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcCheckbox
        label="Of legal age"
        defaultChecked
        onChange={onChange}
        ref={inputRef}
      />
      <DxcButton
        label="Submit"
        onClick={handleSubmit}
        margin={{ left: "medium", right: "medium", bottom: "medium" }}
      ></DxcButton>
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcButton,
  useRef,
};

export default { code, scope };
