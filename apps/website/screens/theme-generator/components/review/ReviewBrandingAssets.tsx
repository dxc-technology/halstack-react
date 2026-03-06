import { DxcContainer, DxcFlex, DxcGrid, DxcImage, DxcTypography } from "@dxc-technology/halstack-react";
import { Logos } from "screens/theme-generator/types";

const BrandingAsset = ({ label, logo }: { label: string; logo: string }) => {
  return (
    <DxcContainer width="250px" height="100%">
      <DxcFlex direction="column" gap="var(--spacing-gap-xs)" fullHeight>
        <DxcTypography fontWeight="var(--typography-label-semibold)">{label}</DxcTypography>
        <DxcContainer
          width="100%"
          maxHeight="calc(100% - 28px)"
          height="100%"
          background={{ color: "var(--color-bg-neutral-light)" }}
          borderRadius="var(--border-radius-m)"
        >
          {logo && (
            <DxcFlex alignItems="center" justifyContent="center" fullHeight>
              <DxcImage width="100%" height="100%" objectFit="contain" src={logo} alt={label} />
            </DxcFlex>
          )}
        </DxcContainer>
      </DxcFlex>
    </DxcContainer>
  );
};

const ReviewBrandingAssets = ({ logos }: { logos: Logos }) => {
  return (
    <DxcGrid templateColumns={["repeat(4, 1fr)"]} templateRows={["156px"]} gap="var(--spacing-gap-m)">
      <BrandingAsset label="Main Logo" logo={logos.mainLogo[0]?.preview || ""} />
      <BrandingAsset label="Footer logo" logo={logos.footerLogo[0]?.preview || ""} />
      <BrandingAsset label="Reduced footer logo" logo={logos.footerReducedLogo[0]?.preview || ""} />
      <BrandingAsset label="Favicon" logo={logos.favicon[0]?.preview || ""} />
    </DxcGrid>
  );
};

export default ReviewBrandingAssets;
