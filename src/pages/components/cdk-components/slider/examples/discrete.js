import { DxcSlider } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onChange = () => {};
  const onDragEnd = () => {};

  return (
    <DxcSlider
      minValue={0}
      maxValue={50}
      showLimitsValues={true}
      name="input"
      step={5}
      marks={true}
      onChange={onChange}
      onDragEnd={onDragEnd}
    />
  );
}`;

const scope = {
  DxcSlider
};

export default { code, scope };
