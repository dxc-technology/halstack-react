import { DxcToggleGroup, DxcFlex, DxcInset, DxcHeading } from "@dxc-technology/halstack-react";

const TogglePreview = () => {
  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ];
  const optionsWithIcons = [
    {
      value: 1,
      label: "Facebook",
      icon: "filled_thumb_up",
    },
    {
      value: 2,
      label: "Linkedin",
      icon: "filled_work",
    },
  ];
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Toggle" />
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex direction="column" gap="1rem">
          <DxcToggleGroup options={options} />
          <DxcToggleGroup options={optionsWithIcons} />
        </DxcFlex>
      </DxcInset>
    </DxcFlex>
  );
};

export default TogglePreview;
