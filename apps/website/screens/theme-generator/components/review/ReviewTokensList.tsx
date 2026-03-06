import { DxcContainer, DxcTypography } from "@dxc-technology/halstack-react";

const ReviewTokensList = ({ themeJson }: { themeJson: string }) => {
  return (
    <DxcContainer height="100%" overflow="auto" borderRadius="var(--border-radius-m)">
      <DxcTypography as="pre" fontSize="var(--typography-body-xs)" whiteSpace="pre">
        {themeJson}
      </DxcTypography>
    </DxcContainer>
  );
};

export default ReviewTokensList;
