import { DxcSwitch, DxcInset, DxcFlex, DxcButton } from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const switchRef = useRef();

  const handleSubmit = () => {
    const switchEl = switchRef.current.getElementsByTagName("input")[0];
    console.log(switchEl.checked ? switchEl.value : "");
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcSwitch
          label="Bluetooth"
          defaultChecked
          ref={switchRef}
          value="Bluetooth"
        />
        <DxcButton label="Submit" type="submit" onClick={handleSubmit} />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  DxcFlex,
  useRef,
  DxcButton,
};

export default { code, scope };
