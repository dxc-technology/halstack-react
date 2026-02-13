import { DxcSelect, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const SelectPreview = () => {
  const options = [
    {
      value: "1",
      label: "3G Mobile",
      icon: "3g_mobiledata",
    },
    {
      value: "2",
      label: "Ebay",
      icon: "settings_backup_restore",
    },
  ];
  const optionsNoIcons = [
    {
      value: "1",
      label: "Amazon",
    },
    {
      value: "2",
      label: "Ebay",
    },
  ];

  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Select" />
      <DxcFlex gap="var(--spacing-padding-xl)">
        <DxcSelect label="Choose an option" options={options} />
        <DxcSelect options={optionsNoIcons} multiple label="Multiple Select" />
        <DxcSelect label="Choose an option - Error" options={options} error="Invalid selection." />
      </DxcFlex>
    </DxcFlex>
  );
};

export default SelectPreview;
