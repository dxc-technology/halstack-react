import { DxcSlider } from "@diaas/dxc-react-cdk";

const code = `() => {
  const onChange = () => {};
  const onDragEnd = () => {};

  return (
    <div
      style={{ background: "#000000", width: "100%", display: "inline-block" }}
    >
      <DxcSlider
        minValue={0}
        maxValue={100}
        showLimitsValues={true}
        name="input"
        theme="dark"
        step={1}
        onChange={onChange}
        onDragEnd={onDragEnd}
      />
    </div>
  );
}`;

const scope = {
  DxcSlider
};

export default { code, scope };
