import { DxcBox } from "@diaas/dxc-react-cdk";

const code = `() => {
  return (
    <DxcBox margin="medium" padding="medium">
      Box Content
    </DxcBox>
  );
}`;

const scope = {
  DxcBox
};

export default { code, scope };
