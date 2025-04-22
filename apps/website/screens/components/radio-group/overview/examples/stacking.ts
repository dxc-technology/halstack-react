import { DxcRadioGroup, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "gree" },
  ];

  return (
    <DxcInset space="2rem">
      <DxcFlex gap="5rem" justifyContent="center">
        <DxcRadioGroup
          label="Vertical"
          helperText="Helper Text"
          options={options}
        />
        <DxcRadioGroup
          label="Horizontal"
          helperText="Helper Text"
          options={options}
          stacking="row"
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcRadioGroup,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
