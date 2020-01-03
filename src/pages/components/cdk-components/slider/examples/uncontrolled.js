import { DxcSlider } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onChange = newValue => {
    console.log(newValue);
  };

  return (
    <DxcSlider
      minValue={0}
      maxValue={100}
      showLimitsValues={true}
      name="input"
      step={1}
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSlider
};

export default { code, scope };
