import { DxcButton, DxcContainer, DxcFlex, DxcGrid, DxcTypography, useToast } from "@dxc-technology/halstack-react";
import { Logos, Tokens } from "../types";
import ReviewTokensGrid from "screens/theme-generator/components/review/ReviewTokensGrid";
import ReviewTokensList from "screens/theme-generator/components/review/ReviewTokensList";
import ReviewBrandingAssets from "../components/review/ReviewBrandingAssets";
import { copyToClipboard } from "../utils";

const ReviewDetails = ({ generatedTokens, logos }: { generatedTokens: Tokens; logos: Logos }) => {
  const toast = useToast();
  const handleCopy = (value: string) => {
    copyToClipboard(value)
      .then(() => {
        toast.success({ message: "Copied to clipboard" });
      })
      .catch(() => {
        toast.warning({ message: "Failed to copy to clipboard" });
      });
  };
  return (
    <>
      <DxcContainer
        boxSizing="border-box"
        width="100%"
        maxWidth="1112px"
        padding="var(--spacing-padding-ml)"
        borderRadius="var(--border-radius-m)"
        background={{ color: "var(--color-bg-neutral-lightest)" }}
        boxShadow="var(--shadow-100)"
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
          <DxcFlex justifyContent="space-between" alignItems="center">
            <DxcTypography fontSize="var(--typography-title-l)" fontWeight="var(--typography-title-bold)">
              Color palette & theme
            </DxcTypography>
            <DxcButton
              mode="secondary"
              icon="content_copy"
              size={{ height: "medium" }}
              onClick={() => handleCopy(JSON.stringify(generatedTokens))}
            />
          </DxcFlex>
          <DxcGrid templateColumns={["2fr", "1fr"]} templateRows={["368px"]} gap="var(--spacing-gap-m)">
            <DxcFlex justifyContent="center">
              <ReviewTokensGrid generatedTokens={generatedTokens} />
            </DxcFlex>
            <ReviewTokensList generatedTokens={generatedTokens} />
          </DxcGrid>
        </DxcFlex>
      </DxcContainer>
      <DxcContainer
        boxSizing="border-box"
        width="100%"
        maxWidth="1112px"
        padding="var(--spacing-padding-ml)"
        borderRadius="var(--border-radius-m)"
        background={{ color: "var(--color-bg-neutral-lightest)" }}
        boxShadow="var(--shadow-100)"
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
          <DxcTypography fontSize="var(--typography-title-l)" fontWeight="var(--typography-title-bold)">
            Branding Assets
          </DxcTypography>
          <ReviewBrandingAssets logos={logos} />
        </DxcFlex>
      </DxcContainer>
    </>
  );
};

export default ReviewDetails;
