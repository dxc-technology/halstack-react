import { DxcHeader, DxcButton } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
    <DxcHeader
      underlined={false}
      margin="medium"
      padding={{right:"medium"}}
    >
      <DxcButton label={"Custom Button"} />
    </DxcHeader>
  );
}`;

const scope = {
  DxcHeader,
  DxcButton
};

export default { code, scope };
