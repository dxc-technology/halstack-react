import { DxcRadioGroup, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
    const options = [
        { label: "Red", value: "red" },
        { label: "Blue", value: "blue" },
        { label: "Green", value: "gree" },
      ];

  return (
    <DxcInset space="large">
      <DxcRadioGroup label="Color" options={options} />
    </DxcInset>
  );
}`;

const scope = {
  DxcRadioGroup,
  DxcInset,
};

export default { code, scope };
