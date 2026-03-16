import "@testing-library/jest-dom/jest-globals";
import React from "react";
import { afterEach, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

const mockHandleCopy = jest.fn();
let ReviewDetails: (props: {
  tokens: Record<string, string>;
  logos: Record<string, unknown>;
  themeJson: string;
}) => React.JSX.Element;

jest.mock("hooks/useCopyToClipboard", () => ({
  __esModule: true,
  default: () => mockHandleCopy,
}));

jest.mock("@dxc-technology/halstack-react", () => ({
  DxcButton: ({ onClick }: { onClick?: () => void }) => (
    <button type="button" onClick={onClick}>
      Copy theme
    </button>
  ),
  DxcFlex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcGrid: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcTypography: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("../../screens/theme-generator/components/review/ReviewSectionContainer", () => ({
  __esModule: true,
  default: ({ title, children }: { title: React.ReactNode; children: React.ReactNode }) => (
    <section>
      <div>{title}</div>
      <div>{children}</div>
    </section>
  ),
}));

jest.mock("../../screens/theme-generator/components/review/ReviewTokensGrid", () => ({
  __esModule: true,
  default: ({ tokens }: { tokens: Record<string, string> }) => <div>{tokens["--color-primary-500"]}</div>,
}));

jest.mock("../../screens/theme-generator/components/review/ReviewTokensList", () => ({
  __esModule: true,
  default: ({ themeJson }: { themeJson: string }) => <div>{themeJson}</div>,
}));

jest.mock("../../screens/theme-generator/components/review/ReviewBrandingAssets", () => ({
  __esModule: true,
  default: ({ logos }: { logos: { mainLogo: Array<unknown> } }) => <div>{`logos:${logos.mainLogo.length}`}</div>,
}));

beforeAll(async () => {
  ReviewDetails = (await import("../../screens/theme-generator/steps/ReviewDetails")).default;
});

afterEach(() => {
  cleanup();
  mockHandleCopy.mockClear();
});

describe("ReviewDetails", () => {
  it("renders review sections and copies theme json", () => {
    const tokens = { "--color-primary-500": "#101010" };
    const logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };
    const themeJson = '{"tokens":{"--color-primary-500":"#101010"}}';

    render(<ReviewDetails tokens={tokens} logos={logos} themeJson={themeJson} />);

    expect(screen.getByText("Color palette & theme")).toBeInTheDocument();
    expect(screen.getByText("Branding assets")).toBeInTheDocument();
    expect(screen.getByText("#101010")).toBeInTheDocument();
    expect(screen.getByText(themeJson)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Copy theme" }));

    expect(mockHandleCopy).toHaveBeenCalledWith(themeJson);
  });
});
