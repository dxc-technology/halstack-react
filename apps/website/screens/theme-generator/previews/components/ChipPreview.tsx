import { DxcChip, DxcFlex } from "@dxc-technology/halstack-react";

// TODO: It gets mixed with the background color
const ChipPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)" wrap="wrap">
      <DxcChip label="Task Completed" />
      <DxcChip label="High Priority" prefixIcon="priority_high" />
      <DxcChip label="Archived" disabled />
    </DxcFlex>
  );
};

export default ChipPreview;
