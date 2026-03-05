import { Color, BackgroundColor, Theme, type CssColor } from "@adobe/leonardo-contrast-colors";
import { BaseColors, Tokens } from "./types";

/**
 * Contrast ratios for generating color shades
 * Based on WCAG accessibility standards
 */
export const CONTRAST_RATIOS = [1.03, 1.18, 1.34, 1.52, 2.04, 2.79, 4.3, 6.7, 9, 12.46];

/**
 * Shade values corresponding to each contrast ratio (50-900)
 */
export const SHADE_VALUES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const ALPHA_VALUES = ["1a", "33", "4d", "66", "80", "99", "b2", "cc", "e5"];

/**
 * Generate a full color palette (50-900 shades) from a base hex color
 * Uses Adobe Leonardo to ensure accessible contrast ratios
 */

export const generatePalette = (hex: CssColor): string[] => {
  try {
    const bg = new BackgroundColor({
      name: "bg",
      colorKeys: ["#fff"],
      ratios: CONTRAST_RATIOS,
    });
    const color = new Color({
      name: "custom",
      colorKeys: [hex],
      ratios: CONTRAST_RATIOS,
      colorSpace: "RGB",
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

export const generateTokens = (baseColors: BaseColors): Tokens => {
  return generateTokensObject(baseColors);
};

export const handleExport = (tokens: Tokens) => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tokens, null, 2));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "halstack-theme-tokens.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

export const copyToClipboard = (value: string) => {
  return navigator.clipboard.writeText(value);
};
