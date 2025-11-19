import { DxcRadioGroup, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  return (
    <DxcInset space="var(--spacing-padding-xl)">
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
