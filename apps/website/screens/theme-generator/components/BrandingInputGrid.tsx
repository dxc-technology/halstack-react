import { DxcFileInput, DxcFlex, DxcGrid, DxcTypography } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";
import { ColorCard } from "./ColorCard";
import { Colors, FileData, Logos } from "../ThemeGeneratorConfigPage";

interface Field {
  id: string;
  label: string;
  helperText: string;
}

type BaseProps = {
  section: {
    id: string;
    title: string;
    icon: ReactNode;
    fields: Field[];
  };
};

type Props = BaseProps &
  (
    | {
        logos: Logos;
        onLogoChange: (logoType: string, files: FileData[]) => void;
        colors?: never;
        onColorChange?: never;
      }
    | {
        colors: Colors;
        onColorChange: (colorType: string) => (newColor: string) => void;
        logos?: never;
        onLogoChange?: never;
      }
  );

const BrandingInputGrid = ({ colors, logos, section, onColorChange, onLogoChange }: Props) => (
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
    <DxcGrid templateColumns={["repeat(auto-fit, 261px)"]} gap="var(--spacing-gap-m)" placeSelf="stretch">
      {logos
        ? section.fields.map(({ id, label, helperText }) => (
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
          ))
        : section.fields.map(({ id, label, helperText }) => (
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

export default BrandingInputGrid;
