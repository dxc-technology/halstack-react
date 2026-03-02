import { DxcChip, DxcFlex } from "@dxc-technology/halstack-react";

// TODO: It gets mixed with the background color
const ChipPreview = () => {
  return (
    <DxcFlex gap="1rem" wrap="wrap">
      <DxcChip label="Default Chip" />
      <DxcChip label="Prefix" prefix={{ icon: "favorite", color: "primary" }} />
      <DxcChip label="Disabled Chip" disabled />
    </DxcFlex>
  );
};

export default ChipPreview;
