import { DxcSpinner, DxcInset, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const SpinnerPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Spinner" />
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex gap="var(--spacing-padding-xxl)">
          <DxcSpinner label="Processing..." mode="large" />
          <DxcSpinner label="Loading..." showValue value={50} />
        </DxcFlex>
      </DxcInset>
    </DxcFlex>
  );
};

export default SpinnerPreview;
