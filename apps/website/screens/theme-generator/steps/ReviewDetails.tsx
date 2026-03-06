import { DxcButton, DxcFlex, DxcGrid, DxcTypography, useToast } from "@dxc-technology/halstack-react";
import { Logos, Tokens } from "../types";
import ReviewTokensGrid from "../components/review/ReviewTokensGrid";
import ReviewTokensList from "../components/review/ReviewTokensList";
import ReviewBrandingAssets from "../components/review/ReviewBrandingAssets";
import { copyToClipboard } from "../utils";
import { useMemo } from "react";
import ReviewSectionContainer from "../components/review/ReviewSectionContainer";

const ReviewDetails = ({ generatedTokens, logos }: { generatedTokens: Tokens; logos: Logos }) => {
  const toast = useToast();

  const themeJson = useMemo(() => {
    const themeObject = {
      tokens: generatedTokens,
      logos: {
        mainLogo: "",
        footerLogo: "",
        footerReducedLogo: "",
        favicon: "",
      },
    };
    return JSON.stringify(themeObject, null, 2);
  }, [generatedTokens]);

  const handleCopy = () => {
    copyToClipboard(themeJson)
      .then(() => {
        toast.success({ message: "Copied to clipboard" });
      })
      .catch(() => {
        toast.warning({ message: "Failed to copy to clipboard" });
      });
  };

  return (
    <>
      <ReviewSectionContainer
        title={
          <DxcFlex justifyContent="space-between" alignItems="center">
            <DxcTypography fontSize="var(--typography-title-l)" fontWeight="var(--typography-title-bold)">
              Color palette & theme
            </DxcTypography>
            <DxcButton mode="secondary" icon="content_copy" size={{ height: "medium" }} onClick={handleCopy} />
          </DxcFlex>
        }
      >
        <DxcGrid templateColumns={["2fr", "1fr"]} templateRows={["368px"]} gap="var(--spacing-gap-m)">
          <DxcFlex justifyContent="center">
            <ReviewTokensGrid generatedTokens={generatedTokens} />
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
    </>
  );
};

export default ReviewDetails;
