import { DxcContainer, DxcTypography } from "@dxc-technology/halstack-react";
import { Tokens } from "../../types";
import { useMemo } from "react";

const ReviewTokensList = ({ generatedTokens }: { generatedTokens: Tokens }) => {
  const themeJson = useMemo(() => JSON.stringify(generatedTokens, null, 2), [generatedTokens]);
  return (
    <DxcContainer height="100%" overflow="auto" borderRadius="var(--border-radius-m)">
      <DxcTypography as="pre" fontSize="var(--typography-body-xs)" whiteSpace="pre">
        {themeJson}
      </DxcTypography>
    </DxcContainer>
  );
};

export default ReviewTokensList;
