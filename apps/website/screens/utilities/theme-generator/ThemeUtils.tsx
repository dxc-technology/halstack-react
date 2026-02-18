import { DxcSpinner } from "@dxc-technology/halstack-react";
import React, { Suspense } from "react";
import { Color, BackgroundColor, Theme, type CssColor } from "@adobe/leonardo-contrast-colors";

// Types
type Tokens = Record<string, string>;
type BaseColors = Record<string, CssColor>;
type ThemeData = {
  name?: string;
  baseColors?: BaseColors;
  tokens?: Tokens;
};
type ComponentType = keyof typeof componentMap;
type ColorKey = string;

export const normalizeTokensOrder = (tokens: Tokens): Tokens => {
  if (!tokens || Object.keys(tokens).length === 0) return tokens;

  const colorOrder = [
    "primary",
    "secondary",
    "tertiary",
    "semantic01",
    "semantic02",
    "semantic03",
    "semantic04",
    "neutral",
    "alpha",
  ];

  const orderedTokens: Tokens = {};

  // Ordenar por cada color base
  colorOrder.forEach((colorBase) => {
    Object.keys(tokens)
      .filter((key) => key.includes(`--color-${colorBase}-`))
      .sort((a, b) => {
        // Extraer el shade number de forma más segura
        const extractShade = (str: string): number => {
          const parts = str.split("-");
          const lastPart = parts[parts.length - 1];
          if (!lastPart) return 0;
          return parseInt(lastPart, 10) || 0;
        };

        const shadeA = extractShade(a);
        const shadeB = extractShade(b);
        return shadeA - shadeB;
      })
      .forEach((key) => {
        if (tokens[key] !== undefined) {
          orderedTokens[key] = tokens[key];
        }
      });
  });

  return orderedTokens;
};

/**
 * Contrast ratios for generating color shades
 * Based on WCAG accessibility standards
 */
export const CONTRAST_RATIOS = [1.03, 1.18, 1.34, 1.52, 2.04, 2.79, 4.3, 6.7, 9, 12.46];

/**
 * Shade values corresponding to each contrast ratio (50-900)
 */
export const SHADE_VALUES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const getDisplayName = (colorKey: ColorKey): string => {
  return COLOR_NAME_MAPPING[colorKey] || colorKey;
};

const COLOR_NAME_MAPPING: Record<string, string> = {
  semantic01: "info",
  semantic02: "success",
  semantic03: "warning",
  semantic04: "error",
  info: "semantic01",
  success: "semantic02",
  warning: "semantic03",
  error: "semantic04",
};

const componentMap = {
  accordion: React.lazy(() => import("./previews/AccordionPreview")),
  alert: React.lazy(() => import("./previews/AlertPreview")),
  avatar: React.lazy(() => import("./previews/AvatarPreview")),
  badge: React.lazy(() => import("./previews/BadgePreview")),
  breadcrumb: React.lazy(() => import("./previews/BreadcrumbsPreview")),
  button: React.lazy(() => import("./previews/ButtonPreview")),
  checkbox: React.lazy(() => import("./previews/CheckboxPreview")),
  chip: React.lazy(() => import("./previews/ChipPreview")),
  contextual: React.lazy(() => import("./previews/ContextualMenuPreview")),
  dataGrid: React.lazy(() => import("./previews/DataGridPreview")),
  date: React.lazy(() => import("./previews/DatePreview")),
  divider: React.lazy(() => import("./previews/DividerPreview")),
  dropdown: React.lazy(() => import("./previews/DropdownPreview")),
  fileInput: React.lazy(() => import("./previews/FileInputPreview")),
  link: React.lazy(() => import("./previews/LinkPreview")),
  number: React.lazy(() => import("./previews/NumberInputPreview")),
  paginator: React.lazy(() => import("./previews/PaginatorPreview")),
  password: React.lazy(() => import("./previews/PasswordInputPreview")),
  popover: React.lazy(() => import("./previews/PopoverPreview")),
  progressBar: React.lazy(() => import("./previews/ProgressBarPreview")),
  quickNav: React.lazy(() => import("./previews/QuickNavPreview")),
  radio: React.lazy(() => import("./previews/RadioPreview")),
  resultsetTable: React.lazy(() => import("./previews/ResultsetTablePreview")),
  select: React.lazy(() => import("./previews/SelectPreview")),
  slider: React.lazy(() => import("./previews/SliderPreview")),
  spinner: React.lazy(() => import("./previews/SpinnerPreview")),
  statusLight: React.lazy(() => import("./previews/StatusLightPreview")),
  switch: React.lazy(() => import("./previews/SwitchPreview")),
  table: React.lazy(() => import("./previews/TablePreview")),
  tabs: React.lazy(() => import("./previews/TabsPreview")),
  textarea: React.lazy(() => import("./previews/TextAreaPreview")),
  textInput: React.lazy(() => import("./previews/TextInputPreview")),
  toast: React.lazy(() => import("./previews/ToastPreview")),
  toggle: React.lazy(() => import("./previews/TogglePreview")),
  wizard: React.lazy(() => import("./previews/WizardPreview")),
  simpleForm: React.lazy(() => import("./previews/FormPreview")),
  basicAppLayout: React.lazy(() => import("./previews/BasicApplicationLayoutPreview")),
  fullAppLayout: React.lazy(() => import("./previews/ApplicationPreview")),
};

export const renderComponent = (componentType: ComponentType): JSX.Element | null => {
  const Component = componentMap[componentType];

  if (!Component) return null;

  return (
    <Suspense fallback={<DxcSpinner mode="small" />}>
      <Component />
    </Suspense>
  );
};

const ALPHA_VALUES = ["1a", "33", "4d", "66", "80", "99", "b2", "cc", "e5"];

/**
 * Generate a full color palette (50-900 shades) from a base hex color
 * Uses Adobe Leonardo to ensure accessible contrast ratios
 */

export const generatePalette = (hex: CssColor): string[] => {
  try {
    const bg = new BackgroundColor({
      //Definir color de fondo blanco
      name: "bg",
      colorKeys: ["#fff"],
      ratios: CONTRAST_RATIOS,
    });
    const color = new Color({
      //Definir color base
      name: "custom",
      colorKeys: [hex],
      ratios: CONTRAST_RATIOS,
      colorspace: "LCH",
      smooth: false,
    });
    const theme = new Theme({
      colors: [color],
      backgroundColor: bg,
      lightness: 97,
    });

    return theme.contrastColors[1]?.values?.map((v) => v.value) || [];
  } catch (error) {
    console.error("Error generating palette for hex:", hex, error);
    return [];
  }
};

const generateAlphaColorsObject = (neutralPalette: string[]): Tokens => {
  const neutralColorsFrom100 = neutralPalette.slice(1, 10);
  const alphaObj: Tokens = {};

  neutralColorsFrom100.forEach((neutralColor, i) => {
    const key = `--color-alpha-${(i + 1) * 100}-a`;
    alphaObj[key] = `${neutralColor}${ALPHA_VALUES[i]}`;
  });

  return alphaObj;
};

const generateAbsolutesObject = (): Tokens => ({
  "--color-absolutes-black": "#000000",
  "--color-absolutes-white": "#ffffff",
});

const generateTokensObject = (baseColors: BaseColors): Tokens => {
  const neutralColor = baseColors.Neutral || "#999999";
  const neutralPalette = generatePalette(neutralColor);
  //For each base color, generate its palette
  //and create an object with the tokens
  //in the format color_<name>_<value>
  //where <name> is the color name in lowercase
  //and <value> is the palette value (50, 100, 200, etc.)
  //Example: color_primary_50, color_primary_100,
  const baseTokensObj: Tokens = {};
  Object.entries(baseColors).forEach(([name, hex]) => {
    const palette = generatePalette(hex);
    palette.forEach((color, i) => {
      const key = `--color-${name.toLowerCase()}-${SHADE_VALUES[i]}`;
      baseTokensObj[key] = color;
    });
  });

  const alphaObj = generateAlphaColorsObject(neutralPalette);
  const absolutesObj = generateAbsolutesObject();

  const allTokensObj = { ...baseTokensObj, ...alphaObj, ...absolutesObj };

  return allTokensObj;
};

export const updateCSSVariables = (colorName: string, newHex: CssColor): void => {
  const palette = generatePalette(newHex);
  palette.forEach((color, i) => {
    const tokenName = `color-${colorName.toLowerCase()}-${SHADE_VALUES[i]}`;
    document.documentElement.style.setProperty(`--${tokenName}`, color, "important");
  });
};

export const generateTokens = (currentThemeData: ThemeData, originalThemeData: ThemeData): Tokens => {
  const normalizedName = currentThemeData?.name?.toLowerCase();
  const isDXCorBloom = normalizedName === "dxc" || normalizedName === "bloom";
  const baseColors = currentThemeData?.baseColors || {};
  const originalBaseColors = originalThemeData?.baseColors || {};

  // Verificar si hay cambios en los colores base
  const hasChanges = Object.keys(baseColors).some((key) => baseColors[key] !== originalBaseColors?.[key]);
  // Si es DXC o Bloom sin cambios, usar los tokens existentes del tema original
  return isDXCorBloom && !hasChanges && originalThemeData?.tokens
    ? normalizeTokensOrder(originalThemeData.tokens)
    : generateTokensObject(baseColors);
};
