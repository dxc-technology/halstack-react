import { DxcHeader, DxcDropdown, DxcSwitch } from "@dxc-technology/halstack-react";

const code = `() => {
  return <DxcHeader margin="medium" padding="medium"/>
}`;

const scope = {
  DxcHeader,
  DxcDropdown,
  DxcSwitch
};

export default { code, scope };
