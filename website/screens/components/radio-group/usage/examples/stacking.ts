import {
  DxcRadioGroup,
  DxcInset,
  DxcRow,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "gree" },
  ];

  return (
    <DxcInset space="2rem">
      <DxcRow gutter="xxxlarge" justify="center">
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
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcRadioGroup,
  DxcInset,
  DxcRow,
};

export default { code, scope };
