import { DxcSelect } from "@dxc-technology/halstack-react";

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

  return <DxcSelect label="Choose an option" options={options} />;
};

export default SelectPreview;
