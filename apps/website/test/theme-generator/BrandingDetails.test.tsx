import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrandingDetails } from "../../screens/theme-generator/steps/BrandingDetails";
import { Colors, Logos } from "../../screens/theme-generator/types";
import { CssColor } from "@adobe/leonardo-contrast-colors";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock SketchColorPicker to avoid react-color issues (Canvas/Context errors)
jest.mock("react-color", () => ({
  SketchPicker: ({ color, onChange }: { color: string; onChange: (color: { hex: string }) => void }) => (
    <div data-testid="mock-sketch-picker">
      Picker for {color}
      <button onClick={() => onChange({ hex: "#ffffff" })}>Select White</button>
    </div>
  ),
}));

describe("BrandingDetails", () => {
  it("renders color sections with ColorCard components", () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const colors: Colors = {
      primary: "#5F249F" as CssColor,
      secondary: "#0067B3" as CssColor,
      tertiary: "#F7CF2B" as CssColor,
      neutral: "#999999" as CssColor,
      info: "#0067B3" as CssColor,
      success: "#59D97D" as CssColor,
      error: "#FE344F" as CssColor,
      warning: "#F59F3D" as CssColor,
    };

    const logos: Logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    // Verify that primary color input is rendered with correct value
    expect(screen.getByDisplayValue("#5F249F")).toBeInTheDocument();
    expect(screen.getByText("Primary")).toBeInTheDocument();
  });

  it("updates colors when input value changes", async () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const colors: Colors = {
      primary: "#5F249F" as CssColor,
      secondary: "#0067B3" as CssColor,
      tertiary: "#F7CF2B" as CssColor,
      neutral: "#999999" as CssColor,
      info: "#0067B3" as CssColor,
      success: "#59D97D" as CssColor,
      error: "#FE344F" as CssColor,
      warning: "#F59F3D" as CssColor,
    };

    const logos: Logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    // Find the primary color input and change it
    const primaryInput = screen.getByDisplayValue("#5F249F");
    fireEvent.change(primaryInput, { target: { value: "#111111" } });
    fireEvent.blur(primaryInput);

    await waitFor(() => {
      expect(onColorsChange).toHaveBeenCalledWith(
        expect.objectContaining({
          primary: "#111111",
          secondary: "#0067B3",
        })
      );
    });
  });

  it("renders logo sections with FileInput components", () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const colors: Colors = {
      primary: "#5F249F" as CssColor,
      secondary: "#0067B3" as CssColor,
      tertiary: "#F7CF2B" as CssColor,
      neutral: "#999999" as CssColor,
      info: "#0067B3" as CssColor,
      success: "#59D97D" as CssColor,
      error: "#FE344F" as CssColor,
      warning: "#F59F3D" as CssColor,
    };

    const logos: Logos = {
      mainLogo: [],
      footerLogo: [{ file: new File(["f"], "footer.png", { type: "image/png" }) }],
      footerReducedLogo: [],
      favicon: [],
    };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    // Verify logo sections are rendered
    expect(screen.getByText("Main logo")).toBeInTheDocument();
    expect(screen.getByText("Default footer logo")).toBeInTheDocument();
  });
});
