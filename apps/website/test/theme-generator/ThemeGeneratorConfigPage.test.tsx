import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ThemeGeneratorConfigPage from "../../screens/theme-generator/ThemeGeneratorConfigPage";

const mockGenerateTokens = jest.fn((_: Record<string, string>) => ({ "--color-primary-500": "#101010" }));
const mockHandleExport = jest.fn((_: string) => undefined);

jest.mock("../../screens/theme-generator/utils", () => ({
  generateTokens: (baseColors: Record<string, string>) => mockGenerateTokens(baseColors),
  handleExport: (themeJson: string) => mockHandleExport(themeJson),
  divideColorTokens: (tokens: Record<string, string>) => ({
    primary: [tokens["--color-primary-500"]],
    secondary: [],
    tertiary: [],
    semantic01: [],
    semantic02: [],
    semantic03: [],
    semantic04: [],
    neutral: [],
    alpha: [],
  }),
  SHADE_VALUES: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  CONTRAST_RATIOS: [1.03, 1.18, 1.34, 1.52, 2.04, 2.79, 4.3, 6.7, 9, 12.46],
}));

// Mock @adobe/leonardo-contrast-colors (ESM module)
jest.mock("@adobe/leonardo-contrast-colors", () => ({
  Color: jest.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock useCopyToClipboard
jest.mock("hooks/useCopyToClipboard", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));

// Mock react-color SketchPicker
jest.mock("react-color", () => ({
  SketchPicker: () => <div>Color Picker</div>,
}));

// Mock componentsRegistry and examplesRegistry
jest.mock("../../screens/theme-generator/componentsRegistry", () => ({
  componentsRegistry: {},
  examplesRegistry: {},
}));

describe("ThemeGeneratorConfigPage", () => {
  beforeEach(() => {
    mockGenerateTokens.mockClear();
    mockHandleExport.mockClear();
  });

  it("shows initial step content and heading", () => {
    render(<ThemeGeneratorConfigPage />);

    expect(screen.getByText("Add your theme specifics")).toBeInTheDocument();
    expect(screen.getByText("Core colors")).toBeInTheDocument();
    expect(screen.getByText("Semantic colors")).toBeInTheDocument();
    expect(screen.getByLabelText("Primary")).toBeInTheDocument();
  });

  it("generates tokens when leaving step 0", async () => {
    render(<ThemeGeneratorConfigPage />);

    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
    });

    expect(mockGenerateTokens).toHaveBeenCalledWith({
      primary: "#5F249F",
      secondary: "#0067B3",
      tertiary: "#F7CF2B",
      semantic01: "#0067B3",
      semantic02: "#59D97D",
      semantic03: "#F59F3D",
      semantic04: "#FE344F",
      neutral: "#999999",
    });

    expect(screen.getByText("Preview how your theme applies")).toBeInTheDocument();
  });

  it("does not regenerate tokens when moving from step 1 to step 2 with unchanged colors", async () => {
    render(<ThemeGeneratorConfigPage />);

    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
    });

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText("Review and export your theme")).toBeInTheDocument();
    });

    expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
  });

  it("regenerates tokens with updated colors", async () => {
    render(<ThemeGeneratorConfigPage />);

    const primaryInput = screen.getByLabelText("Primary");
    fireEvent.change(primaryInput, { target: { value: "#123456" } });
    fireEvent.blur(primaryInput);

    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
    });

    expect(mockGenerateTokens).toHaveBeenCalledWith(
      expect.objectContaining({
        primary: "#123456",
      })
    );
  });

  it("exports the generated theme json", async () => {
    render(<ThemeGeneratorConfigPage />);

    // Navigate to step 2
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
    });

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText("Review and export your theme")).toBeInTheDocument();
    });

    const exportButton = screen.getByRole("button", { name: "Export theme" });
    fireEvent.click(exportButton);

    expect(mockHandleExport).toHaveBeenCalledTimes(1);
    const exportedTheme = mockHandleExport.mock.calls.at(0)?.[0];
    expect(exportedTheme).toBeDefined();
    if (!exportedTheme) return;

    expect(exportedTheme).toContain('"tokens": {');
    expect(exportedTheme).toContain('"--color-primary-500": "#101010"');
    expect(exportedTheme).toContain('"logos": {');
  });
});
