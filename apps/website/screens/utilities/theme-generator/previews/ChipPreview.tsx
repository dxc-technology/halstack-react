import { DxcChip, DxcFlex } from "@dxc-technology/halstack-react";
const ChipPreview = () => {
  return (
    <DxcFlex gap="1rem" wrap="wrap">
      <DxcChip label="Default Chip" />
      <DxcChip label="Chip with prefix icon" prefix="settings" />
      <DxcChip label="Chip with prefix Avatar" prefix={{ color: "primary" }} />
      <DxcChip
        label="Chip with prefix and action"
        prefix="settings"
        action={{ icon: "filled_check_circle", onClick: () => console.log("action clicked") }}
      />
      <DxcChip label="Disabled Chip" disabled />
    </DxcFlex>
  );
};

export default ChipPreview;
