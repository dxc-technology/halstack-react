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
  beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => "blob:mock-url");
  });

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

  it("renders color sections with ColorCard components", () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const logos: Logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    expect(screen.getByDisplayValue("#5F249F")).toBeInTheDocument();
    expect(screen.getByText("Primary")).toBeInTheDocument();
  });

  it("updates colors when input value changes", () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const logos: Logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    const primaryInput = screen.getByDisplayValue("#5F249F");
    fireEvent.change(primaryInput, { target: { value: "#111111" } });
    fireEvent.blur(primaryInput);

    expect(onColorsChange).toHaveBeenCalledWith(
      expect.objectContaining({
        primary: "#111111",
      })
    );
  });

  it("renders logo sections with FileInput components", () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const logos: Logos = {
      mainLogo: [],
      footerLogo: [{ file: new File(["f"], "footer.png", { type: "image/png" }) }],
      footerReducedLogo: [],
      favicon: [],
    };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    expect(screen.getByText("Main logo")).toBeInTheDocument();
    expect(screen.getByText("Default footer logo")).toBeInTheDocument();
  });

  it("updates logos when a file is selected", async () => {
    const onColorsChange = jest.fn();
    const onLogosChange = jest.fn();

    const logos: Logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(
      <BrandingDetails colors={colors} onColorsChange={onColorsChange} logos={logos} onLogosChange={onLogosChange} />
    );

    const file = new File(["logo content"], "main-logo.png", { type: "image/png" });
    const mainLogoInput = screen.getByLabelText("Main logo");
    fireEvent.change(mainLogoInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(onLogosChange).toHaveBeenCalled();
      const firstCallArguments = onLogosChange.mock.calls[0] as [Logos];
      const updatedLogos = firstCallArguments[0];
      expect(updatedLogos.mainLogo).toHaveLength(1);
      expect(updatedLogos.mainLogo[0]?.file).toBeInstanceOf(File);
      expect(updatedLogos.mainLogo[0]?.file.name).toBe("main-logo.png");
    });
  });
});
