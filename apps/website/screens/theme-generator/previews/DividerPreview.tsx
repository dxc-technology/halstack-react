import { DxcDivider, DxcFlex, DxcTypography } from "@dxc-technology/halstack-react";

const DividerPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcTypography>Content above</DxcTypography>
      <DxcDivider />
      <DxcTypography>Content below</DxcTypography>
    </DxcFlex>
  );
};

export default DividerPreview;
