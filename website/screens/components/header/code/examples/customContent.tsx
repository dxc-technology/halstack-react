import { DxcHeader, DxcInset, DxcButton } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="large">
      <DxcHeader
        content={<DxcButton label={"Logout"} />}
        responsiveContent={(closeHandler) => <DxcButton label={"Logout"} onClick={closeHandler} />}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcHeader,
  DxcInset,
  DxcButton,
};

export default { code, scope };
