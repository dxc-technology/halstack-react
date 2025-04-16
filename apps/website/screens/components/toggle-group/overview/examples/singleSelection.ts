import { DxcInset, DxcToggleGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    {
      value: 1,
      label: "Not started",
    },
    {
      value: 2,
      label: "In progress",
    },
    {
      value: 3,
      label: "Ready to review",
    },
    {
      value: 4,
      label: "Completed",
    },
    {
      value: 5,
      label: "Awaiting approval",
    },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcToggleGroup
        defaultValue={1}
        options={options}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcToggleGroup,
};

export default { code, scope };
