import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ReviewDetails from "../../screens/theme-generator/steps/ReviewDetails";
import { Logos } from "screens/theme-generator/types";

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

  it("renders tokens section and branding assets section", () => {
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

  it("renders all branding assets when logos are provided", () => {
    const tokens = { "--color-primary-500": "#101010" };
    const logos: Logos = {
      mainLogo: [{ file: new File(["main"], "main.png", { type: "image/png" }), preview: "blob:main-logo" }],
      footerLogo: [{ file: new File(["footer"], "footer.png", { type: "image/png" }), preview: "blob:footer-logo" }],
      footerReducedLogo: [
        { file: new File(["reduced"], "reduced.png", { type: "image/png" }), preview: "blob:reduced-logo" },
      ],
      favicon: [{ file: new File(["favicon"], "favicon.ico", { type: "image/x-icon" }), preview: "blob:favicon" }],
    };
    const themeJson = '{"tokens":{"--color-primary-500":"#101010"}}';

    render(<ReviewDetails tokens={tokens} logos={logos} themeJson={themeJson} />);

    expect(screen.getByText("Main logo")).toBeInTheDocument();
    expect(screen.getByText("Footer logo")).toBeInTheDocument();
    expect(screen.getByText("Reduced footer logo")).toBeInTheDocument();
    expect(screen.getByText("Favicon")).toBeInTheDocument();

    expect(screen.getByAltText("Main logo")).toHaveAttribute("src", "blob:main-logo");
    expect(screen.getByAltText("Footer logo")).toHaveAttribute("src", "blob:footer-logo");
    expect(screen.getByAltText("Reduced footer logo")).toHaveAttribute("src", "blob:reduced-logo");
    expect(screen.getByAltText("Favicon")).toHaveAttribute("src", "blob:favicon");
  });
});
