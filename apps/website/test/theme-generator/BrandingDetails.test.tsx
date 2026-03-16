import React from "react";
import { afterEach, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

let BrandingDetails: (props: {
  colors: Record<string, string>;
  onColorsChange: (colors: Record<string, string>) => void;
  logos: Record<string, File[]>;
  onLogosChange: (logos: Record<string, File[]>) => void;
}) => React.JSX.Element;

jest.mock("@dxc-technology/halstack-react", () => ({
  DxcContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcFlex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("../../screens/theme-generator/components/branding/BrandingColorGrid", () => ({
  __esModule: true,
  default: ({
    section,
    onColorChange,
  }: {
    section: { id: string };
    onColorChange: (id: string) => (value: string) => void;
  }) => (
    <div>
      <span>{section.id}</span>
      <button type="button" onClick={() => onColorChange("primary")("#111111")}>
        Change primary
      </button>
      <button type="button" onClick={() => onColorChange("info")("#222222")}>
        Change info
      </button>
    </div>
  ),
}));

jest.mock("../../screens/theme-generator/components/branding/BrandingLogoGrid", () => ({
  __esModule: true,
  default: ({ onLogoChange }: { onLogoChange: (logoType: string, files: File[]) => void }) => (
    <button
      type="button"
      onClick={() => onLogoChange("mainLogo", [new File(["x"], "logo.png", { type: "image/png" })])}
    >
      Change main logo
    </button>
  ),
}));

beforeAll(async () => {
  BrandingDetails = (await import("../../screens/theme-generator/steps/BrandingDetails")).BrandingDetails;
});

afterEach(() => {
  cleanup();
});

describe("BrandingDetails", () => {
  it("updates colors preserving existing values", () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const colors = {
      primary: "#5F249F",
      secondary: "#0067B3",
      tertiary: "#F7CF2B",
      neutral: "#999999",
      info: "#0067B3",
      success: "#59D97D",
      error: "#FE344F",
      warning: "#F59F3D",
    };

    const logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    fireEvent.click(screen.getAllByRole("button", { name: "Change primary" })[0]);

    expect(onColorsChange).toHaveBeenCalledWith(
      expect.objectContaining({
        primary: "#111111",
        secondary: "#0067B3",
      })
    );
  });

  it("updates logos preserving other logo values", () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const colors = {
      primary: "#5F249F",
      secondary: "#0067B3",
      tertiary: "#F7CF2B",
      neutral: "#999999",
      info: "#0067B3",
      success: "#59D97D",
      error: "#FE344F",
      warning: "#F59F3D",
    };

    const logos = {
      mainLogo: [],
      footerLogo: [new File(["f"], "footer.png", { type: "image/png" })],
      footerReducedLogo: [],
      favicon: [],
    };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    fireEvent.click(screen.getByRole("button", { name: "Change main logo" }));

    expect(onLogosChange).toHaveBeenCalledTimes(1);
    expect(onLogosChange).toHaveBeenCalledWith(
      expect.objectContaining({
        mainLogo: expect.any(Array),
        footerLogo: logos.footerLogo,
      })
    );
  });
});
