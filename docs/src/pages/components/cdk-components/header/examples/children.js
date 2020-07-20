import { DxcHeader, DxcButton } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
    <DxcHeader
      underlined={false}
      margin="medium"
      padding={{right:"medium"}}
      content={<DxcButton label={"Custom Button"} />}
      responsiveContent={(closeHandler) => <DxcButton label={"Custom Button"} onClick={closeHandler} />}
    />
  );
}`;

const scope = {
  DxcHeader,
  DxcButton,
};

export default { code, scope };
