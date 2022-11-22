import {
  DxcSwitch,
  DxcInset,
  DxcFlex,
  DxcButton,
} from "@dxc-technology/halstack-react";
import { useRef } from "react";

const code = `() => {
  const switchRef = useRef();

  const handleSubmit = () => {
    const switchEl = switchRef.current.getElementsByTagName("input")[0];
    console.log(switchEl.value);
  };

  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcSwitch
          label="Bluetooth"
          defaultChecked={true}
          onChange={onChange}
          ref={switchRef}
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
