import { DxcContainer, DxcFileInput, DxcFlex, DxcGrid, DxcTypography } from "@dxc-technology/halstack-react";
import { type CssColor } from "@adobe/leonardo-contrast-colors";
import { FileData } from "../../../../../packages/lib/src/file-input/types";
import DxcIcon from "../../../../../packages/lib/src/icon/Icon";
import { ColorCard } from "../components/ColorCard";

interface BrandingDetailsProps {
  colors: {
    primary: CssColor;
    secondary: CssColor;
    tertiary: CssColor;
    neutral: CssColor;
    info: CssColor;
    success: CssColor;
    error: CssColor;
    warning: CssColor;
  };
  onColorsChange: (colors: {
    primary: CssColor;
    secondary: CssColor;
    tertiary: CssColor;
    neutral: CssColor;
    info: CssColor;
    success: CssColor;
    error: CssColor;
    warning: CssColor;
  }) => void;
  logos: {
    mainLogo: FileData[];
    footerLogo: FileData[];
    footerReducedLogo: FileData[];
    favicon: FileData[];
  };
  onLogosChange: (logos: {
    mainLogo: FileData[];
    footerLogo: FileData[];
    footerReducedLogo: FileData[];
    favicon: FileData[];
  }) => void;
}

export const BrandingDetails = ({ colors, onColorsChange, logos, onLogosChange }: BrandingDetailsProps) => {
  const handleColorChange = (colorType: keyof typeof colors) => (newColor: string) => {
    onColorsChange({
      ...colors,
      [colorType]: newColor,
    });
  };

  const updateLogoValue = (logoType: keyof typeof logos, files: FileData[]) => {
    onLogosChange({
      ...logos,
      [logoType]: files,
    });
  };
  return (
    <DxcContainer
      boxSizing="border-box"
      width="100%"
      maxWidth="1112px"
      padding="var(--spacing-padding-m)"
      borderRadius="var(--border-radius-l)"
      background={{ color: "var(--color-bg-neutral-lightest)" }}
      boxShadow="var(--shadow-100)"
    >
      <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-xl)">
        <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-m)" alignSelf="stretch">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)" alignSelf="stretch">
            <DxcTypography
              as="div"
              color="var(--color-fg-primary-strong)"
              fontSize="var(--typography-body-xxl)"
              lineHeight="var(--height-xxs)"
            >
              <DxcIcon icon="filled_palette" />
            </DxcTypography>
            <DxcTypography
              as="h3"
              fontSize="var(--typography-title-l)"
              fontWeight="var(--typography-title-bold)"
              lineHeight="normal"
            >
              Core colors
            </DxcTypography>
          </DxcFlex>
          <DxcGrid
            templateColumns={["repeat(auto-fit, 261px)"]}
            gap="var(--spacing-gap-m)"
            autoFlow="row"
            placeSelf="stretch"
          >
            <ColorCard
              label="Primary"
              helperText="Main brand actions"
              color={colors.primary}
              onChange={handleColorChange("primary")}
            />
            <ColorCard
              label="Secondary"
              helperText="Supporting interactions"
              color={colors.secondary}
              onChange={handleColorChange("secondary")}
            />

            <ColorCard
              label="Tertiary"
              helperText="Accents and highlights"
              color={colors.tertiary}
              onChange={handleColorChange("tertiary")}
            />

            <ColorCard
              label="Neutral"
              helperText="Backgrounds and text"
              color={colors.neutral}
              onChange={handleColorChange("neutral")}
            />
          </DxcGrid>
        </DxcFlex>

        <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-m)" alignSelf="stretch">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)" alignSelf="stretch">
            <DxcTypography
              as="div"
              color="var(--color-fg-primary-strong)"
              fontSize="var(--typography-body-xxl)"
              lineHeight="var(--height-xxs)"
            >
              <DxcIcon icon="filled_info" />
            </DxcTypography>
            <DxcTypography
              as="h3"
              fontSize="var(--typography-title-l)"
              fontWeight="var(--typography-title-bold)"
              lineHeight="normal"
            >
              Semantic colors
            </DxcTypography>
          </DxcFlex>
          <DxcGrid
            templateColumns={["repeat(auto-fit, 261px)"]}
            gap="var(--spacing-gap-m)"
            autoFlow="row"
            placeSelf="stretch"
          >
            <ColorCard
              label="Info"
              helperText="Informational feedback"
              color={colors.info}
              onChange={handleColorChange("info")}
            />
            <ColorCard
              label="Success"
              helperText="Positive outcomes"
              color={colors.success}
              onChange={handleColorChange("success")}
            />

            <ColorCard
              label="Error"
              helperText="Errors and failures"
              color={colors.error}
              onChange={handleColorChange("error")}
            />

            <ColorCard
              label="Warning"
              helperText="Alerts and cautions"
              color={colors.warning}
              onChange={handleColorChange("warning")}
            />
          </DxcGrid>
        </DxcFlex>

        <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-m)" alignSelf="stretch">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)" alignSelf="stretch">
            <DxcTypography
              as="div"
              color="var(--color-fg-primary-strong)"
              fontSize="var(--typography-body-xxl)"
              lineHeight="var(--height-xxs)"
            >
              <DxcIcon icon="filled_branding_watermark" />
            </DxcTypography>
            <DxcTypography
              as="h3"
              fontSize="var(--typography-title-l)"
              fontWeight="var(--typography-title-bold)"
              lineHeight="normal"
            >
              Branding details
            </DxcTypography>
          </DxcFlex>
          <DxcGrid
            templateColumns={["repeat(auto-fit, 261px)"]}
            gap="var(--spacing-gap-m)"
            autoFlow="row"
            placeSelf="stretch"
          >
            <DxcFileInput
              size="fillParent"
              label="Main logo"
              helperText="Primary brand logo across the application"
              mode="filedrop"
              accept="image/*"
              showPreview
              multiple={false}
              callbackFile={(files) => updateLogoValue("mainLogo", files)}
              value={logos.mainLogo}
            />
            <DxcFileInput
              size="fillParent"
              label="Footer logo default"
              helperText="For the default variant of our footer"
              mode="filedrop"
              accept="image/*"
              showPreview
              multiple={false}
              callbackFile={(files) => updateLogoValue("footerLogo", files)}
              value={logos.footerLogo}
            />
            <DxcFileInput
              size="fillParent"
              label="Footer logo reduced"
              helperText="For cluttered interfaces with reduced footer"
              mode="filedrop"
              accept="image/*"
              showPreview
              multiple={false}
              callbackFile={(files) => updateLogoValue("footerReducedLogo", files)}
              value={logos.footerReducedLogo}
            />
            <DxcFileInput
              size="fillParent"
              label="Favicon"
              helperText="For browser tabs and bookmarks"
              mode="filedrop"
              accept="image/*"
              showPreview
              multiple={false}
              callbackFile={(files) => updateLogoValue("favicon", files)}
              value={logos.favicon}
            />
          </DxcGrid>
        </DxcFlex>
      </DxcFlex>
    </DxcContainer>
  );
};
