import { DxcFlex, DxcInset, DxcToggleGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    {
      value: 1,
      icon: "wifi",
      label: "Wifi",
    },
    {
      value: 2,
      label: "Ethernet",
    },
    {
      value: 3,
      icon: "5g",
      label: "5G", 
    },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex gap="var(--spacing-gap-l)">
        <DxcToggleGroup
          defaultValue={2}
          options={options}
          orientation="vertical"
        />
        <DxcToggleGroup
          defaultValue={2}
          options={options}
          orientation="horizontal"
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcFlex,
  DxcInset,
  DxcToggleGroup,
};

export default { code, scope };
