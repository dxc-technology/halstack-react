import { DxcFlex, DxcGrid, DxcTypography } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";
import { ColorCard } from "./ColorCard";
import { Colors, Field } from "../types";

interface BrandingColorGridProps {
  section: {
    id: string;
    title: string;
    icon: ReactNode;
    fields: Field[];
  };
  colors: Colors;
  onColorChange: (colorType: string) => (newColor: string) => void;
}

const BrandingColorGrid = ({ section, colors, onColorChange }: BrandingColorGridProps) => (
  <DxcFlex direction="column" alignItems="flex-start" gap="var(--spacing-gap-m)" alignSelf="stretch">
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
      <DxcTypography
        as="div"
        color="var(--color-fg-primary-strong)"
        fontSize="var(--typography-body-xxl)"
        lineHeight="var(--height-xxs)"
      >
        {section.icon}
      </DxcTypography>
      <DxcTypography
        as="h3"
        fontSize="var(--typography-title-l)"
        fontWeight="var(--typography-title-bold)"
        lineHeight="normal"
      >
        {section.title}
      </DxcTypography>
    </DxcFlex>
    <DxcGrid placeSelf="stretch" templateColumns={["repeat(4, 1fr)"]} gap="var(--spacing-gap-m)">
      {section.fields.map(({ id, label, helperText }) => (
        <ColorCard
          key={id}
          label={label}
          helperText={helperText}
          color={colors[id as keyof Colors]}
          onChange={onColorChange(id)}
        />
      ))}
    </DxcGrid>
  </DxcFlex>
);

export default BrandingColorGrid;
