import { DxcCheckbox, DxcInset, DxcButton, DxcFlex } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const checkboxRef = useRef();

  const handleSubmit = () => {
    const checkbox = checkboxRef.current.getElementsByTagName("input")[0];
    console.log(checkbox.checked ? checkbox.value : "");
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">    
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcCheckbox
          label="Of legal age"
          defaultChecked
          value="ofLegalAge"
          ref={checkboxRef}
        />
        <DxcButton
          label="Submit"
          type="submit"
          onClick={handleSubmit}
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  DxcButton,
  DxcFlex,
  useRef,
};

export default { code, scope };
