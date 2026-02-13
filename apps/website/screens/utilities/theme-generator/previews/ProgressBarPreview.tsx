import { DxcProgressBar, DxcFlex, DxcInset, DxcContainer, DxcHeading } from "@dxc-technology/halstack-react";

const ProgressBarPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Progress Bar" />
      <DxcContainer width="60%">
        <DxcInset space="var(--spacing-padding-xl)">
          <DxcFlex direction="column" gap="1rem">
            <DxcFlex direction="column" gap="1rem">
              <DxcProgressBar label="Loading..." value={65} showValue />
              <DxcProgressBar label="Indeterminate" />
            </DxcFlex>
          </DxcFlex>
        </DxcInset>
      </DxcContainer>
    </DxcFlex>
  );
};

export default ProgressBarPreview;
