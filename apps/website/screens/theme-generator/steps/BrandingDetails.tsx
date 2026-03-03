import { DxcContainer, DxcFlex } from "@dxc-technology/halstack-react";
import BrandingInputGrid from "../components/BrandingInputGrid";
import { FileData } from "../../../../../packages/lib/src/file-input/types";
import { Colors, Logos } from "../ThemeGeneratorConfigPage";

interface BrandingDetailsProps {
  colors: Colors;
  onColorsChange: (colors: Colors) => void;
  logos: Logos;
  onLogosChange: (logos: Logos) => void;
}

const coreColors = {
  id: "core",
  title: "Core colors",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#6F4B97"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10c1.38,0,2.5-1.12,2.5-2.5c0-0.61-0.23-1.2-0.64-1.67c-0.08-0.1-0.13-0.21-0.13-0.33 c0-0.28,0.22-0.5,0.5-0.5H16c3.31,0,6-2.69,6-6C22,6.04,17.51,2,12,2z M17.5,13c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5C19,12.33,18.33,13,17.5,13z M14.5,9C13.67,9,13,8.33,13,7.5C13,6.67,13.67,6,14.5,6S16,6.67,16,7.5 C16,8.33,15.33,9,14.5,9z M5,11.5C5,10.67,5.67,10,6.5,10S8,10.67,8,11.5C8,12.33,7.33,13,6.5,13S5,12.33,5,11.5z M11,7.5 C11,8.33,10.33,9,9.5,9S8,8.33,8,7.5C8,6.67,8.67,6,9.5,6S11,6.67,11,7.5z" />
      </g>
    </svg>
  ),
  fields: [
    { id: "primary" as const, label: "Primary", helperText: "Main brand actions" },
    { id: "secondary" as const, label: "Secondary", helperText: "Supporting interactions" },
    { id: "tertiary" as const, label: "Tertiary", helperText: "Accents and highlights" },
    { id: "neutral" as const, label: "Neutral", helperText: "Backgrounds and text" },
  ],
};

const sematicColors = {
  id: "semantic",
  title: "Semantic colors",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#6F4B97">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
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
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#6F4B97">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z" />
    </svg>
  ),
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

export const BrandingDetails = ({ colors, onColorsChange, logos, onLogosChange }: BrandingDetailsProps) => {
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
      width="100%"
      maxWidth="1112px"
      padding="var(--spacing-padding-m)"
      borderRadius="var(--border-radius-l)"
      background={{ color: "var(--color-bg-neutral-lightest)" }}
      boxShadow="var(--shadow-100)"
    >
      <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-xl)">
        <BrandingInputGrid colors={colors} section={coreColors} onColorChange={handleColorChange} />

        <BrandingInputGrid colors={colors} section={sematicColors} onColorChange={handleColorChange} />

        <BrandingInputGrid logos={logos} section={brandingDetails} onLogoChange={updateLogoValue} />
      </DxcFlex>
    </DxcContainer>
  );
};
