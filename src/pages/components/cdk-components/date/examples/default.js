import { DxcDate } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onChange = () => {};

  return (
    <div>
      <DxcDate>
      </DxcDate>
    </div>
  );
}`;

const scope = {
  DxcDate
};

export default { code, scope };
