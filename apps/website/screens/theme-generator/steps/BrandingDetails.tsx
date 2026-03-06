import { DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";
import { FileData } from "../../../../../packages/lib/src/file-input/types";
import { Colors, Logos } from "../types";
import BrandingLogoGrid from "../components/branding/BrandingLogoGrid";
import { brandingIcon, infoIcon, paletteIcon } from "./icons";
import BrandingColorGrid from "../components/branding/BrandingColorGrid";

const coreColors = {
  id: "core",
  title: "Core colors",
  icon: paletteIcon,
  fields: [
    { id: "primary" as const, label: "Primary", helperText: "Main brand actions" },
    { id: "secondary" as const, label: "Secondary", helperText: "Supporting interactions" },
    { id: "tertiary" as const, label: "Tertiary", helperText: "Accents and highlights" },
    { id: "neutral" as const, label: "Neutral", helperText: "Backgrounds and text" },
  ],
};

const semanticColors = {
  id: "semantic",
  title: "Semantic colors",
  icon: infoIcon,
  fields: [
    { id: "info" as const, label: "Info", helperText: "Informational feedback" },
    { id: "success" as const, label: "Success", helperText: "Positive outcomes" },
    { id: "error" as const, label: "Error", helperText: "Errors and failures" },
    { id: "warning" as const, label: "Warning", helperText: "Alerts and cautions" },
  ],
};

const brandingDetails = {
  id: "logos",
  title: "Branding details",
  icon: brandingIcon,
  fields: [
    { id: "mainLogo" as const, label: "Main logo", helperText: "Primary brand logo across the application" },
    { id: "footerLogo" as const, label: "Default footer logo", helperText: "Default variant of the footer" },
    {
      id: "footerReducedLogo" as const,
      label: "Reduced footer logo",
      helperText: "For cluttered interfaces with reduced footer",
    },
    { id: "favicon" as const, label: "Favicon", helperText: "For browser tabs and bookmarks" },
  ],
};

export const BrandingDetails = ({
  colors,
  onColorsChange,
  logos,
  onLogosChange,
}: {
  colors: Colors;
  onColorsChange: (colors: Colors) => void;
  logos: Logos;
  onLogosChange: (logos: Logos) => void;
}) => {
  const handleColorChange = (colorType: string) => (newColor: string) => {
    onColorsChange({
      ...colors,
      [colorType]: newColor,
    });
  };

  const updateLogoValue = (logoType: string, files: FileData[]) => {
    onLogosChange({
      ...logos,
      [logoType]: files,
    });
  };
  return (
    <DxcContainer
      boxSizing="border-box"
      width="1112px"
      padding="var(--spacing-padding-m)"
      borderRadius="var(--border-radius-l)"
      background={{ color: "var(--color-bg-neutral-lightest)" }}
      boxShadow="var(--shadow-100)"
    >
      <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-xl)">
        <BrandingColorGrid colors={colors} section={coreColors} onColorChange={handleColorChange} />

        <BrandingColorGrid colors={colors} section={semanticColors} onColorChange={handleColorChange} />

        <BrandingLogoGrid logos={logos} section={brandingDetails} onLogoChange={updateLogoValue} />
      </DxcFlex>
    </DxcContainer>
  );
};
