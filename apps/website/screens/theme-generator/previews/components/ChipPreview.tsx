import { DxcChip, DxcFlex } from "@dxc-technology/halstack-react";

// TODO: It gets mixed with the background color
const ChipPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)" wrap="wrap">
      <DxcChip prefix="palette" label="Art" selected={true} onClick={() => {}} />
      <DxcChip prefix="palette" label="Art" selected={false} onClick={() => {}} />
      <DxcChip mode="dismissible" label="Music" prefix="music_note" onClick={() => {}} />
    </DxcFlex>
  );
};

export default ChipPreview;
