import { DxcButton, DxcFlex, DxcGrid, DxcTypography } from "@dxc-technology/halstack-react";
import { Logos, Tokens } from "../types";
import ReviewTokensGrid from "../components/review/ReviewTokensGrid";
import ReviewTokensList from "../components/review/ReviewTokensList";
import ReviewBrandingAssets from "../components/review/ReviewBrandingAssets";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import ReviewSectionContainer from "../components/review/ReviewSectionContainer";

const ReviewDetails = ({ tokens, logos, themeJson }: { tokens: Tokens; logos: Logos; themeJson: string }) => {
  const handleCopy = useCopyToClipboard();

  return (
    <div id="fourth-step">
      <DxcFlex direction="column" alignItems="center" gap="var(--spacing-gap-xl)" fullHeight>
        <ReviewSectionContainer
          title={
            <DxcFlex justifyContent="space-between" alignItems="center">
              <DxcTypography fontSize="var(--typography-title-l)" fontWeight="var(--typography-title-bold)">
                Color palette & theme
              </DxcTypography>
              <div id="fifth-step">
                <DxcButton
                  mode="secondary"
                  icon="content_copy"
                  size={{ height: "medium" }}
                  onClick={() => handleCopy(themeJson)}
                />
              </div>
            </DxcFlex>
          }
        >
          <DxcGrid templateColumns={["2fr", "1fr"]} templateRows={["368px"]} gap="var(--spacing-gap-m)">
            <DxcFlex justifyContent="center">
              <ReviewTokensGrid tokens={tokens} />
            </DxcFlex>
            <ReviewTokensList themeJson={themeJson} />
          </DxcGrid>
        </ReviewSectionContainer>
        <ReviewSectionContainer
          title={
            <DxcTypography fontSize="var(--typography-title-l)" fontWeight="var(--typography-title-bold)">
              Branding assets
            </DxcTypography>
          }
        >
          <ReviewBrandingAssets logos={logos} />
        </ReviewSectionContainer>
      </DxcFlex>
    </div>
  );
};

export default ReviewDetails;
