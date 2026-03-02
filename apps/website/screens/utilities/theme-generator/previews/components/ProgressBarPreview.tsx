import { DxcProgressBar, DxcFlex } from "@dxc-technology/halstack-react";

const ProgressBarPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcProgressBar label="Loading..." value={65} showValue />
      <DxcProgressBar label="Indeterminate" />
    </DxcFlex>
  );
};

export default ProgressBarPreview;
