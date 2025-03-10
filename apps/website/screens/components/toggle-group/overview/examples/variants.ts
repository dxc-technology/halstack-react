import { DxcToggleGroup, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";

const code = `() => {
  const options1 = [
    {
      value: 1,
      label: "Option 01",
    },
    {
      value: 2,
      label: "Option 02",
    },
  ];

  const options2 = [
    {
      value: 1,
      label: "Option 01",
    },
    {
      value: 2,
      label: "Option 02",
    },
    {
      value: 3,
      label: "Option 02",
    },
  ];

  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem">
        <DxcToggleGroup
          defaultValue={1}
          options={options1}
        />
        <DxcToggleGroup
          options={options2}
          defaultValue={[1, 2]}
          multiple
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcToggleGroup,
  DxcInset,
  DxcFlex,
};

export default { code, scope };
