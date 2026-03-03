import { DxcContainer, DxcFileInput, DxcFlex, DxcGrid, DxcTypography } from "@dxc-technology/halstack-react";
import { type CssColor } from "@adobe/leonardo-contrast-colors";
import { FileData } from "../../../../../packages/lib/src/file-input/types";
import DxcIcon from "../../../../../packages/lib/src/icon/Icon";
import { ColorCard } from "../components/ColorCard";

const coreColors = [
  { id: "primary" as const, label: "Primary", helperText: "Main brand actions" },
  { id: "secondary" as const, label: "Secondary", helperText: "Supporting interactions" },
  { id: "tertiary" as const, label: "Tertiary", helperText: "Accents and highlights" },
  { id: "neutral" as const, label: "Neutral", helperText: "Backgrounds and text" },
];

const sematicColors = [
  { id: "info" as const, label: "Info", helperText: "Informational feedback" },
  { id: "success" as const, label: "Success", helperText: "Positive outcomes" },
  { id: "error" as const, label: "Error", helperText: "Errors and failures" },
  { id: "warning" as const, label: "Warning", helperText: "Alerts and cautions" },
];

const brandingDetails = [
  { id: "mainLogo" as const, label: "Main logo", helperText: "Primary brand logo across the application" },
  { id: "footerLogo" as const, label: "Default footer logo", helperText: "Default variant of the footer" },
  {
    id: "footerReducedLogo" as const,
    label: "Reduced footer logo",
    helperText: "For cluttered interfaces with reduced footer",
  },
  { id: "favicon" as const, label: "Favicon", helperText: "For browser tabs and bookmarks" },
];

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
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
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
          <DxcGrid templateColumns={["repeat(auto-fit, 261px)"]} gap="var(--spacing-gap-m)" placeSelf="stretch">
            {coreColors.map(({ id, label, helperText }) => (
              <ColorCard
                key={id}
                label={label}
                helperText={helperText}
                color={colors[id]}
                onChange={handleColorChange(id)}
              />
            ))}
          </DxcGrid>
        </DxcFlex>

        <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-m)" alignSelf="stretch">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
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
          <DxcGrid templateColumns={["repeat(auto-fit, 261px)"]} gap="var(--spacing-gap-m)" placeSelf="stretch">
            {sematicColors.map(({ id, label, helperText }) => (
              <ColorCard
                key={id}
                label={label}
                helperText={helperText}
                color={colors[id]}
                onChange={handleColorChange(id)}
              />
            ))}
          </DxcGrid>
        </DxcFlex>

        <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-m)" alignSelf="stretch">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
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
          <DxcGrid templateColumns={["repeat(auto-fit, 261px)"]} gap="var(--spacing-gap-m)" placeSelf="stretch">
            {brandingDetails.map(({ id, label, helperText }) => (
              <DxcFileInput
                key={id}
                size="fillParent"
                label={label}
                helperText={helperText}
                buttonLabel="Select file"
                mode="filedrop"
                accept="image/*"
                showPreview
                multiple={false}
                callbackFile={(files) => updateLogoValue(id, files)}
                value={logos[id]}
              />
            ))}
          </DxcGrid>
        </DxcFlex>
      </DxcFlex>
    </DxcContainer>
  );
};
