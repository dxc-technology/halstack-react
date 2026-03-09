import { DxcContainer, DxcFlex, DxcGrid, DxcImage, DxcParagraph, DxcTypography } from "@dxc-technology/halstack-react";
import { useMemo } from "react";
import { Logos } from "../../types";

const BrandingAsset = ({ label, logo }: { label: string; logo?: string }) => {
  return (
    <DxcContainer width="250px" height="100%">
      <DxcFlex direction="column" gap="var(--spacing-gap-xs)" fullHeight>
        <DxcTypography fontWeight="var(--typography-label-semibold)">{label}</DxcTypography>
        <DxcContainer
          width="100%"
          maxHeight="calc(100% - 28px)"
          height="130px"
          background={{ color: "var(--color-bg-neutral-light)" }}
          borderRadius="var(--border-radius-m)"
          padding="var(--spacing-padding-m)"
          boxSizing="border-box"
        >
          <DxcFlex alignItems="center" justifyContent="center" fullHeight>
            {logo ? (
              <DxcImage width="100%" height="100%" objectFit="contain" src={logo} alt={label} />
            ) : (
              <DxcParagraph>No asset selected.</DxcParagraph>
            )}
          </DxcFlex>
        </DxcContainer>
      </DxcFlex>
    </DxcContainer>
  );
};

const ReviewBrandingAssets = ({ logos }: { logos: Logos }) => {
  const brandingAssets = useMemo(() => {
    return [
      { label: "Main logo", logo: logos.mainLogo?.[0]?.preview },
      { label: "Footer logo", logo: logos.footerLogo?.[0]?.preview },
      { label: "Reduced footer logo", logo: logos.footerReducedLogo?.[0]?.preview },
      { label: "Favicon", logo: logos.favicon?.[0]?.preview },
    ];
  }, [logos]);

  return (
    <DxcGrid templateColumns={["repeat(4, 1fr)"]} templateRows={["1fr"]} gap="var(--spacing-gap-ml)">
      {brandingAssets.some((asset) => asset.logo) ? (
        brandingAssets.map((asset) => <BrandingAsset key={asset.label} label={asset.label} logo={asset.logo} />)
      ) : (
        <DxcParagraph>No branding assets uploaded.</DxcParagraph>
      )}
    </DxcGrid>
  );
};

export default ReviewBrandingAssets;
