import { DxcHeader, DxcDropdown, DxcSwitch } from "@diaas/dxc-react-cdk";

const code = `() => {
  return <DxcHeader theme="light" underlined={true} />
}`;

const scope = {
  DxcHeader,
  DxcDropdown,
  DxcSwitch
};

export default { code, scope };
