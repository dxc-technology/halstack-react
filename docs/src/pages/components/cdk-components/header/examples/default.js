import { DxcHeader, DxcDropdown, DxcSwitch } from "@diaas/dxc-react-cdk";

const code = `() => {
  return <DxcHeader margin="medium" padding="medium"/>
}`;

const scope = {
  DxcHeader,
  DxcDropdown,
  DxcSwitch
};

export default { code, scope };
