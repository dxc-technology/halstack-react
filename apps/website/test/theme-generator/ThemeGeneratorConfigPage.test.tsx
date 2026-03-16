import "@testing-library/jest-dom/jest-globals";
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeAll, beforeEach, describe, expect, it, jest } from "@jest/globals";

const mockGenerateTokens = jest.fn((_: Record<string, string>) => ({ "--color-primary-500": "#101010" }));
const mockHandleExport = jest.fn((_: string) => undefined);
let ThemeGeneratorConfigPage: (props: Record<string, never>) => React.JSX.Element;

jest.mock("../../screens/theme-generator/utils", () => ({
  generateTokens: (baseColors: Record<string, string>) => mockGenerateTokens(baseColors),
  handleExport: (themeJson: string) => mockHandleExport(themeJson),
}));

jest.mock("@dxc-technology/halstack-react", () => ({
  DxcContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcFlex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcWizard: ({ currentStep, onStepClick }: { currentStep: number; onStepClick: (index: number) => void }) => (
    <div>
      <span data-testid="current-step">{currentStep}</span>
      <button onClick={() => onStepClick(0)} type="button">
        Go step 0
      </button>
      <button onClick={() => onStepClick(1)} type="button">
        Go step 1
      </button>
      <button onClick={() => onStepClick(2)} type="button">
        Go step 2
      </button>
    </div>
  ),
}));

jest.mock("../../screens/theme-generator/components/StepHeading", () => ({
  __esModule: true,
  default: ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  ),
}));

jest.mock("../../screens/theme-generator/steps/BrandingDetails", () => ({
  BrandingDetails: ({
    colors,
    onColorsChange,
  }: {
    colors: Record<string, string>;
    onColorsChange: (value: Record<string, string>) => void;
  }) => (
    <div>
      <span data-testid="branding-primary">{colors.primary}</span>
      <button
        type="button"
        onClick={() =>
          onColorsChange({
            ...colors,
            primary: "#123456",
          })
        }
      >
        Change primary color
      </button>
    </div>
  ),
}));

jest.mock("../../screens/utilities/theme-generator/componentsRegistry", () => ({
  componentsRegistry: {},
  examplesRegistry: {},
}));

jest.mock("../../screens/theme-generator/ThemeGeneratorPreviewPage", () => ({
  __esModule: true,
  default: ({ tokens }: { tokens: Record<string, string> }) => (
    <div data-testid="preview-tokens">{JSON.stringify(tokens)}</div>
  ),
}));

jest.mock("../../screens/theme-generator/steps/ReviewDetails", () => ({
  __esModule: true,
  default: ({ themeJson }: { themeJson: string }) => <pre data-testid="review-theme-json">{themeJson}</pre>,
}));

jest.mock("../../screens/theme-generator/components/BottomButtons", () => ({
  __esModule: true,
  default: ({
    currentStep,
    onChangeStep,
    onExport,
  }: {
    currentStep: number;
    onChangeStep: (step: 0 | 1 | 2) => void;
    onExport: () => void;
  }) => (
    <div>
      <span data-testid="bottom-current-step">{currentStep}</span>
      <button type="button" onClick={() => onChangeStep(Math.max(0, currentStep - 1) as 0 | 1 | 2)}>
        Bottom back
      </button>
      <button type="button" onClick={() => onChangeStep(Math.min(2, currentStep + 1) as 0 | 1 | 2)}>
        Bottom next
      </button>
      <button type="button" onClick={onExport}>
        Export
      </button>
    </div>
  ),
}));

beforeAll(async () => {
  ThemeGeneratorConfigPage = (await import("../../screens/theme-generator/ThemeGeneratorConfigPage")).default;
});

afterEach(() => {
  cleanup();
});

describe("ThemeGeneratorConfigPage", () => {
  beforeEach(() => {
    mockGenerateTokens.mockClear();
    mockHandleExport.mockClear();
  });

  it("shows initial step content and heading", () => {
    render(<ThemeGeneratorConfigPage />);

    expect(screen.getByRole("heading", { name: "Add your theme specifics" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Change primary color" })).toBeInTheDocument();
    expect(screen.getByTestId("current-step")).toHaveTextContent("0");
  });

  it("generates tokens when leaving step 0", () => {
    render(<ThemeGeneratorConfigPage />);

    fireEvent.click(screen.getByRole("button", { name: "Go step 1" }));

    expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
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
    expect(screen.getByTestId("current-step")).toHaveTextContent("1");
  });

  it("does not regenerate tokens when moving from step 1 to step 2 with unchanged colors", () => {
    render(<ThemeGeneratorConfigPage />);

    fireEvent.click(screen.getByRole("button", { name: "Go step 1" }));
    fireEvent.click(screen.getByRole("button", { name: "Go step 2" }));

    expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("current-step")).toHaveTextContent("2");
  });

  it("regenerates tokens with updated colors", () => {
    render(<ThemeGeneratorConfigPage />);

    fireEvent.click(screen.getByRole("button", { name: "Change primary color" }));
    fireEvent.click(screen.getByRole("button", { name: "Go step 1" }));

    expect(mockGenerateTokens).toHaveBeenCalledTimes(1);
    expect(mockGenerateTokens).toHaveBeenCalledWith(
      expect.objectContaining({
        primary: "#123456",
      })
    );
  });

  it("exports the generated theme json", () => {
    render(<ThemeGeneratorConfigPage />);

    fireEvent.click(screen.getByRole("button", { name: "Go step 2" }));
    fireEvent.click(screen.getByRole("button", { name: "Export" }));

    expect(mockHandleExport).toHaveBeenCalledTimes(1);
    const exportedTheme = mockHandleExport.mock.calls.at(0)?.[0];
    expect(exportedTheme).toBeDefined();
    if (!exportedTheme) return;

    expect(exportedTheme).toContain('"tokens": {');
    expect(exportedTheme).toContain('"--color-primary-500": "#101010"');
    expect(exportedTheme).toContain('"logos": {');
  });
});
