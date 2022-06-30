import {
  DxcSelect,
  DxcButton,
  DxcStack,
  DxcInset,
} from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const selectRef = useRef();
  const handleSubmit = () => {
    const select = selectRef.current.getElementsByTagName("input")[0];
    console.log(select.value);
  };
  const options = [
    { label: "Madrid", value: "madrid" },
    { label: "Melbourne", value: "melbourne" },
    { label: "London", value: "london" },
    { label: "Roma", value: "roma" },
  ];

  return (
    <DxcInset space="2rem">
      <DxcStack gutter="large" align="start">
        <DxcSelect
          label="Select your favorite city"
          placeholder="Choose a city"
          defaultValue="madrid"
          options={options}
          ref={selectRef}
        />
        <DxcButton onClick={handleSubmit} label="Submit" />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcStack,
  DxcInset,
  DxcButton,
  useRef,
};

export default { code, scope };
