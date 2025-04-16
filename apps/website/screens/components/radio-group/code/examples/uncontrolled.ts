import { DxcRadioGroup, DxcInset, DxcFlex, DxcButton } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const radioGroupRef = useRef();

  const handleSubmit = () => {
    const radioGroup =
      radioGroupRef.current.getElementsByTagName("input")[0];
    console.log(radioGroup.value);
  };

  const options = [
    { label: "Orange", value: "orange" },
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcRadioGroup
          label="Fruit"
          defaultValue="apple"
          options={options}
          ref={radioGroupRef}
        />
        <DxcButton label="Submit" type="submit" onClick={handleSubmit} />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcRadioGroup,
  DxcInset,
  DxcFlex,
  DxcButton,
  useRef,
};

export default { code, scope };
