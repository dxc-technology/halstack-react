import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ReviewDetails from "../../screens/theme-generator/steps/ReviewDetails";

// Mock @adobe/leonardo-contrast-colors (ESM module)
jest.mock("@adobe/leonardo-contrast-colors", () => {
  return {
    Color: jest.fn(),
  };
});

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const mockHandleCopy = jest.fn();

jest.mock("hooks/useCopyToClipboard", () => ({
  __esModule: true,
  default: () => mockHandleCopy,
}));

describe("ReviewDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders review sections with real components", () => {
    const tokens = { "--color-primary-500": "#101010" };
    const logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };
    const themeJson = '{"tokens":{"--color-primary-500":"#101010"}}';

    render(<ReviewDetails tokens={tokens} logos={logos} themeJson={themeJson} />);

    expect(screen.getByText("Color palette & theme")).toBeInTheDocument();
    expect(screen.getByText("Branding assets")).toBeInTheDocument();
  });

  it("copies theme json when clicking copy button", () => {
    const tokens = { "--color-primary-500": "#101010" };
    const logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };
    const themeJson = '{"tokens":{"--color-primary-500":"#101010"}}';

    render(<ReviewDetails tokens={tokens} logos={logos} themeJson={themeJson} />);

    const copyButton = screen.getByLabelText("Copy theme");
    fireEvent.click(copyButton);

    expect(mockHandleCopy).toHaveBeenCalledWith(themeJson);
  });
});
