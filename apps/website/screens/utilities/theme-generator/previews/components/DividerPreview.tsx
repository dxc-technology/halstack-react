import { DxcDivider, DxcFlex, DxcTypography } from "@dxc-technology/halstack-react";

const DividerPreview = () => {
  return (
    <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
      <DxcTypography>Content above</DxcTypography>
      <DxcDivider />
      <DxcTypography>Content below</DxcTypography>
    </DxcFlex>
  );
};

export default DividerPreview;
