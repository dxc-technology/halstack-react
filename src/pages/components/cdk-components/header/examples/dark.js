import { DxcHeader, DxcDropdown, DxcSwitch } from "@diaas/dxc-react-cdk";

const code = `() => {
  return <DxcHeader theme="dark" />
}`;

const scope = {
  DxcHeader,
  DxcDropdown,
  DxcSwitch
};

export default { code, scope };
