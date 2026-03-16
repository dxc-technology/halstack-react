import "@testing-library/jest-dom/jest-globals";
import { describe, expect, it, jest, beforeEach } from "@jest/globals";

const mockValues = [
  { value: "#101010" },
  { value: "#202020" },
  { value: "#303030" },
  { value: "#404040" },
  { value: "#505050" },
  { value: "#606060" },
  { value: "#707070" },
  { value: "#808080" },
  { value: "#909090" },
  { value: "#a0a0a0" },
];

jest.mock("@adobe/leonardo-contrast-colors", () => ({
  BackgroundColor: class {
    name: string;
    colorKeys: string[];
    ratios: number[];

    constructor({ name, colorKeys, ratios }: { name: string; colorKeys: string[]; ratios: number[] }) {
      this.name = name;
      this.colorKeys = colorKeys;
      this.ratios = ratios;
    }
  },
  Color: class {
    name: string;
    colorKeys: string[];
    ratios: number[];
    colorSpace: string;
    smooth: boolean;

    constructor({
      name,
      colorKeys,
      ratios,
      colorSpace,
      smooth,
    }: {
      name: string;
      colorKeys: string[];
      ratios: number[];
      colorSpace: string;
      smooth: boolean;
    }) {
      this.name = name;
      this.colorKeys = colorKeys;
      this.ratios = ratios;
      this.colorSpace = colorSpace;
      this.smooth = smooth;
    }
  },
  Theme: class {
    contrastColors: Array<{ values: Array<{ value: string }> }>;

    constructor({ colors }: { colors: Array<{ colorKeys: string[] }> }) {
      if (colors[0]?.colorKeys?.[0] === "throw") {
        throw new Error("Palette error");
      }
      this.contrastColors = [{ values: [] }, { values: mockValues }];
    }
  },
}));

let generatePalette: (hex: string) => string[];
let generateTokens: (baseColors: Record<string, string>) => Record<string, string>;
let handleExport: (themeJson: string) => void;
let divideColorTokens: (tokens: Record<string, string>) => Record<string, string[]>;

beforeEach(async () => {
  jest.resetModules();
  const utils = await import("../../screens/theme-generator/utils");
  generatePalette = utils.generatePalette;
  generateTokens = utils.generateTokens;
  handleExport = utils.handleExport;
  divideColorTokens = utils.divideColorTokens;
});

describe("theme-generator utils", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("generatePalette returns generated palette values", () => {
    const palette = generatePalette("#5F249F");

    expect(palette).toHaveLength(10);
    expect(palette[0]).toBe("#101010");
    expect(palette[9]).toBe("#a0a0a0");
  });

  it("generatePalette handles errors and returns empty array", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => undefined);

    const palette = generatePalette("throw");

    expect(palette).toEqual([]);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("generateTokens includes base, alpha and absolute tokens", () => {
    const tokens = generateTokens({
      primary: "#111111",
      secondary: "#222222",
      neutral: "#333333",
    });

    expect(tokens["--color-primary-50"]).toBe("#101010");
    expect(tokens["--color-secondary-900"]).toBe("#a0a0a0");
    expect(tokens["--color-alpha-100-a"]).toBe("#2020201a");
    expect(tokens["--color-alpha-900-a"]).toBe("#a0a0a0e5");
    expect(tokens["--color-absolutes-black"]).toBe("#000000");
    expect(tokens["--color-absolutes-white"]).toBe("#ffffff");
  });

  it("handleExport creates and clicks a download link", () => {
    const anchor = document.createElement("a");
    const clickSpy = jest.spyOn(anchor, "click").mockImplementation(() => undefined);
    const createElementSpy = jest.spyOn(document, "createElement").mockReturnValue(anchor);

    handleExport('{"tokens":{}}');

    expect(createElementSpy).toHaveBeenCalledWith("a");
    expect(anchor.getAttribute("download")).toBe("halstack-theme-tokens.json");
    expect(anchor.getAttribute("href")).toContain("data:text/json;charset=utf-8,");
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it("divideColorTokens groups only matching color token keys", () => {
    const grouped = divideColorTokens({
      "--color-primary-500": "#111111",
      "--color-semantic01-500": "#222222",
      "--color-alpha-100-a": "#333333",
      "--color-neutral-300": "#444444",
      "--spacing-padding-s": "8px",
    });

    expect(grouped.primary).toEqual(["#111111"]);
    expect(grouped.semantic01).toEqual(["#222222"]);
    expect(grouped.alpha).toEqual(["#333333"]);
    expect(grouped.neutral).toEqual(["#444444"]);
  });
});
