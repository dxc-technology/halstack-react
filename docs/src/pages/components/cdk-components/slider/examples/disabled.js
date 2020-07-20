import { DxcSlider } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onChange = () => {};

  return (
    <DxcSlider
      minValue={0}
      maxValue={100}
      showLimitsValues={true}
      name="input"
      onChange={onChange}
      disabled={true}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSlider
};

export default { code, scope };
