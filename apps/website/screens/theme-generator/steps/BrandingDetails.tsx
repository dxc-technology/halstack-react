import {
  DxcContainer,
  DxcFileInput,
  DxcFlex,
  DxcGrid,
  DxcHeading,
  DxcTypography,
} from "@dxc-technology/halstack-react";
import { ColorCard } from "../components/ColorCard";
import { type CssColor } from "@adobe/leonardo-contrast-colors";
import { FileData } from "../../../../../packages/lib/src/file-input/types";
import DxcIcon from "../../../../../packages/lib/src/icon/Icon";

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
            <DxcHeading level={4} text="Core colors" />
          </DxcFlex>
          <DxcGrid
            templateColumns={["repeat(auto-fit, minmax(min(260px, 100%), 1fr))"]}
            gap="var(--spacing-gap-ml)"
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
              helperText="Accents and highlight"
              color={colors.tertiary}
              onChange={handleColorChange("tertiary")}
            />

            <ColorCard
              label="Neutral"
              helperText="Background and text"
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
            <DxcHeading level={4} text="Semantic colors" />
          </DxcFlex>
          <DxcGrid
            templateColumns={["repeat(auto-fit, minmax(min(260px, 100%), 1fr))"]}
            gap="var(--spacing-gap-ml)"
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
            <DxcHeading level={4} text="Branding details" />
          </DxcFlex>
          <DxcGrid
            templateColumns={["repeat(auto-fit, minmax(min(260px, 100%), 1fr))"]}
            gap="var(--spacing-gap-ml)"
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
