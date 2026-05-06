import "@testing-library/jest-dom";
import { CssColor } from "@adobe/leonardo-contrast-colors";
import {
  CONTRAST_RATIOS,
  SHADE_VALUES,
  generatePalette,
  generateTokens,
  handleExport,
  divideColorTokens,
} from "../../screens/theme-generator/utils";

const mockValues = [
  { value: "#fff5f5" },
  { value: "#ffe5e5" },
  { value: "#ffd5d5" },
  { value: "#ffc5c5" },
  { value: "#ffb5b5" },
  { value: "#ffa5a5" },
  { value: "#ff9595" },
  { value: "#ff8585" },
  { value: "#ff7575" },
  { value: "#ff6565" },
];

jest.mock("@adobe/leonardo-contrast-colors", () => ({
  Color: jest.fn().mockImplementation(({ colorKeys }: { colorKeys: string[] }) => {
    if (colorKeys[0] === "throw") {
      throw new Error("Invalid color");
    }
    return {};
  }),
  BackgroundColor: jest.fn().mockImplementation(() => ({})),
  Theme: jest.fn().mockImplementation(() => ({
    contrastColors: [null, { values: mockValues }],
  })),
}));

describe("theme-generator utils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Constants", () => {
    it("should export CONTRAST_RATIOS with correct length", () => {
      expect(CONTRAST_RATIOS).toHaveLength(10);
      expect(CONTRAST_RATIOS[0]).toBe(1.03);
      expect(CONTRAST_RATIOS[9]).toBe(12.46);
    });

    it("should export SHADE_VALUES with correct values", () => {
      expect(SHADE_VALUES).toEqual([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]);
    });
  });

  describe("generatePalette", () => {
    it("should generate palette with 10 colors", () => {
      const palette = generatePalette("#FF5733" as CssColor);
      expect(palette).toHaveLength(10);
    });

    it("should return array of hex colors", () => {
      const palette = generatePalette("#FF5733" as CssColor);
      palette.forEach((color) => {
        expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });

    it("should handle errors and return empty array", () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => undefined);

      const palette = generatePalette("throw" as CssColor);

      expect(palette).toEqual([]);
      expect(consoleSpy).toHaveBeenCalled();
    });

    it("should return consistent palette structure", () => {
      const palette = generatePalette("#5F249F" as CssColor);
      expect(palette).toHaveLength(10);
      expect(Array.isArray(palette)).toBe(true);
    });

    it("should return correct values from mocked Leonardo", () => {
      const palette = generatePalette("#5F249F" as CssColor);
      expect(palette[0]).toBe("#fff5f5");
      expect(palette[9]).toBe("#ff6565");
    });
  });

  describe("generateTokens", () => {
    it("should include base color tokens for all provided colors", () => {
      const tokens = generateTokens({
        primary: "#111111" as CssColor,
        secondary: "#222222" as CssColor,
        neutral: "#333333" as CssColor,
      });

      expect(tokens["--color-primary-50"]).toBeDefined();
      expect(tokens["--color-primary-900"]).toBeDefined();
      expect(tokens["--color-secondary-50"]).toBeDefined();
      expect(tokens["--color-secondary-900"]).toBeDefined();
      expect(tokens["--color-neutral-50"]).toBeDefined();
      expect(tokens["--color-neutral-900"]).toBeDefined();
    });

    it("should include alpha tokens", () => {
      const tokens = generateTokens({
        primary: "#111111" as CssColor,
        neutral: "#333333" as CssColor,
      });

      expect(tokens["--color-alpha-100-a"]).toBeDefined();
      expect(tokens["--color-alpha-200-a"]).toBeDefined();
      expect(tokens["--color-alpha-900-a"]).toBeDefined();
    });

    it("should include absolute color tokens", () => {
      const tokens = generateTokens({
        primary: "#111111" as CssColor,
      });

      expect(tokens["--color-absolutes-black"]).toBe("#000000");
      expect(tokens["--color-absolutes-white"]).toBe("#ffffff");
    });

    it("should generate correct alpha values with opacity", () => {
      const tokens = generateTokens({
        neutral: "#999999" as CssColor,
      });

      expect(tokens["--color-alpha-100-a"]).toMatch(/^#[0-9a-fA-F]{6}1a$/);
      expect(tokens["--color-alpha-900-a"]).toMatch(/^#[0-9a-fA-F]{6}e5$/);
    });

    it("should handle single color input", () => {
      const tokens = generateTokens({
        primary: "#FF5733" as CssColor,
      });

      expect(Object.keys(tokens).length).toBeGreaterThan(0);
      expect(tokens["--color-primary-500"]).toBeDefined();
    });

    it("should convert color names to lowercase in tokens", () => {
      const tokens = generateTokens({
        Primary: "#FF5733" as CssColor,
      });

      expect(tokens["--color-primary-50"]).toBeDefined();
    });

    it("should use default neutral color if not provided", () => {
      const tokens = generateTokens({
        primary: "#FF5733" as CssColor,
      });

      // Alpha tokens should still be generated with default neutral
      expect(tokens["--color-alpha-100-a"]).toBeDefined();
    });
  });

  describe("handleExport", () => {
    let anchor: HTMLAnchorElement;
    let clickSpy: jest.SpyInstance;
    let createElementSpy: jest.SpyInstance;
    let appendChildSpy: jest.SpyInstance;
    let removeSpy: jest.SpyInstance;

    beforeEach(() => {
      anchor = document.createElement("a");
      clickSpy = jest.spyOn(anchor, "click").mockImplementation(() => undefined);
      removeSpy = jest.spyOn(anchor, "remove").mockImplementation(() => undefined);
      createElementSpy = jest.spyOn(document, "createElement").mockReturnValue(anchor);
      appendChildSpy = jest.spyOn(document.body, "appendChild").mockImplementation(() => anchor);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("should create an anchor element", () => {
      handleExport('{"tokens":{}}');
      expect(createElementSpy).toHaveBeenCalledWith("a");
    });

    it("should set correct download attribute", () => {
      handleExport('{"tokens":{}}');
      expect(anchor.getAttribute("download")).toBe("halstack-theme.json");
    });

    it("should set href with encoded JSON data", () => {
      handleExport('{"tokens":{}}');
      expect(anchor.getAttribute("href")).toContain("data:text/json;charset=utf-8,");
      expect(anchor.getAttribute("href")).toContain(encodeURIComponent('{"tokens":{}}'));
    });

    it("should append anchor to body", () => {
      handleExport('{"tokens":{}}');
      expect(appendChildSpy).toHaveBeenCalledWith(anchor);
    });

    it("should click the anchor element", () => {
      handleExport('{"tokens":{}}');
      expect(clickSpy).toHaveBeenCalledTimes(1);
    });

    it("should remove anchor after click", () => {
      handleExport('{"tokens":{}}');
      expect(removeSpy).toHaveBeenCalledTimes(1);
    });

    it("should handle complex JSON data", () => {
      const complexJson = JSON.stringify({
        tokens: {
          "--color-primary-500": "#FF5733",
          "--color-secondary-500": "#33FF57",
        },
        metadata: { version: "1.0" },
      });

      handleExport(complexJson);
      expect(anchor.getAttribute("href")).toContain(encodeURIComponent(complexJson));
    });

    it("should handle empty JSON", () => {
      handleExport("{}");
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe("divideColorTokens", () => {
    it("should group tokens by color type", () => {
      const grouped = divideColorTokens({
        "--color-primary-500": "#111111",
        "--color-secondary-500": "#222222",
        "--color-tertiary-500": "#333333",
      });

      expect(grouped.primary).toEqual(["#111111"]);
      expect(grouped.secondary).toEqual(["#222222"]);
      expect(grouped.tertiary).toEqual(["#333333"]);
    });

    it("should group semantic color tokens", () => {
      const grouped = divideColorTokens({
        "--color-semantic01-500": "#111111",
        "--color-semantic02-600": "#222222",
        "--color-semantic03-700": "#333333",
        "--color-semantic04-800": "#444444",
      });

      expect(grouped.semantic01).toEqual(["#111111"]);
      expect(grouped.semantic02).toEqual(["#222222"]);
      expect(grouped.semantic03).toEqual(["#333333"]);
      expect(grouped.semantic04).toEqual(["#444444"]);
    });

    it("should group alpha tokens", () => {
      const grouped = divideColorTokens({
        "--color-alpha-100-a": "#33333333",
        "--color-alpha-200-a": "#33333366",
      });

      expect(grouped.alpha).toEqual(["#33333333", "#33333366"]);
    });

    it("should group neutral tokens", () => {
      const grouped = divideColorTokens({
        "--color-neutral-300": "#999999",
        "--color-neutral-500": "#666666",
      });

      expect(grouped.neutral).toEqual(["#999999", "#666666"]);
    });

    it("should ignore non-color tokens", () => {
      const grouped = divideColorTokens({
        "--color-primary-500": "#111111",
        "--spacing-padding-s": "8px",
        "--font-size-large": "16px",
        "--border-radius": "4px",
      });

      expect(grouped.primary).toEqual(["#111111"]);
      expect(Object.values(grouped).flat()).toHaveLength(1);
    });

    it("should handle multiple values for same color group", () => {
      const grouped = divideColorTokens({
        "--color-primary-50": "#fff5f5",
        "--color-primary-100": "#ffe5e5",
        "--color-primary-200": "#ffd5d5",
        "--color-primary-500": "#ff5733",
      });

      expect(grouped.primary).toHaveLength(4);
      expect(grouped.primary).toContain("#fff5f5");
      expect(grouped.primary).toContain("#ff5733");
    });

    it("should return empty arrays for unused color groups", () => {
      const grouped = divideColorTokens({
        "--color-primary-500": "#111111",
      });

      expect(grouped.secondary).toEqual([]);
      expect(grouped.tertiary).toEqual([]);
      expect(grouped.neutral).toEqual([]);
      expect(grouped.alpha).toEqual([]);
    });

    it("should handle empty input", () => {
      const grouped = divideColorTokens({});

      expect(grouped.primary).toEqual([]);
      expect(grouped.secondary).toEqual([]);
      expect(grouped.tertiary).toEqual([]);
      expect(grouped.semantic01).toEqual([]);
      expect(grouped.semantic02).toEqual([]);
      expect(grouped.semantic03).toEqual([]);
      expect(grouped.semantic04).toEqual([]);
      expect(grouped.neutral).toEqual([]);
      expect(grouped.alpha).toEqual([]);
    });

    it("should preserve order of tokens within each group", () => {
      const grouped = divideColorTokens({
        "--color-primary-900": "#333333",
        "--color-primary-50": "#111111",
        "--color-primary-500": "#222222",
      });

      expect(grouped.primary).toEqual(["#333333", "#111111", "#222222"]);
    });
  });
});
