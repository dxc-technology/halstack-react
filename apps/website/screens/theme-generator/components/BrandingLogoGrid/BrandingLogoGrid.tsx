import { DxcFileInput, DxcFlex, DxcGrid, DxcTypography } from "@dxc-technology/halstack-react";
import { Logos } from "../../types";
import BrandingLogoGridProps from "./types";

const BrandingLogoGrid = ({ section, logos, onLogoChange }: BrandingLogoGridProps) => (
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
    <DxcGrid templateColumns={["repeat(4, 1fr)"]} gap="var(--spacing-gap-m)" placeSelf="stretch">
      {section.fields.map(({ id, label, helperText }) => (
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
          callbackFile={(files) => onLogoChange(id, files)}
          value={logos[id as keyof Logos]}
        />
      ))}
    </DxcGrid>
  </DxcFlex>
);

export default BrandingLogoGrid;
