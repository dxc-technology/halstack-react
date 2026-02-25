import { DxcSpinner, DxcFlex } from "@dxc-technology/halstack-react";

const SpinnerPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-padding-xxl)">
      <DxcSpinner label="Processing..." mode="large" />
      <DxcSpinner label="Loading..." showValue value={50} />
    </DxcFlex>
  );
};

export default SpinnerPreview;
