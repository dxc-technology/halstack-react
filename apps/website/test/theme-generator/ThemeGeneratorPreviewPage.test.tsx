import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemeGeneratorPreviewPage from "../../screens/theme-generator/ThemeGeneratorPreviewPage";

jest.mock("screens/utilities/theme-generator/componentsRegistry", () => ({
  componentsRegistry: {
    "/components/button": () => <div>Button Preview</div>,
  },
  examplesRegistry: {
    "/examples/application": ({ logos }: { logos: { mainLogo?: Array<{ preview?: string }> } }) => (
      <div>{`Example with ${logos.mainLogo?.[0]?.preview ?? "no-logo"}`}</div>
    ),
  },
}));

jest.mock("@dxc-technology/halstack-react", () => ({
  DxcButton: ({ title, onClick }: { title?: string; onClick?: () => void }) => (
    <button type="button" onClick={onClick}>
      {title ?? "Button"}
    </button>
  ),
  DxcContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcFlex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcSelect: ({
    placeholder,
    multiple,
    onChange,
  }: {
    placeholder: string;
    multiple?: boolean;
    onChange: (v: { value: string | string[] }) => void;
  }) => (
    <button
      type="button"
      onClick={() => onChange({ value: multiple ? ["/components/button"] : "/examples/application" })}
    >
      {placeholder}
    </button>
  ),
  DxcToggleGroup: ({ onChange }: { onChange: (value: number) => void }) => (
    <div>
      <button type="button" onClick={() => onChange(1)}>
        Components mode
      </button>
      <button type="button" onClick={() => onChange(2)}>
        Examples mode
      </button>
    </div>
  ),
  DxcTypography: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  HalstackProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("ThemeGeneratorPreviewPage", () => {
  it("shows empty state and renders component preview after selection", () => {
    const logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(<ThemeGeneratorPreviewPage tokens={{}} logos={logos} />);

    expect(screen.getByText("Select a component to preview")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Select components" }));

    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button Preview")).toBeInTheDocument();
  });

  it("switches to examples mode and renders selected example", () => {
    const logos = {
      mainLogo: [{ file: new File(["x"], "main.png"), preview: "main-preview" }],
      footerLogo: [],
      footerReducedLogo: [],
      favicon: [],
    };

    render(<ThemeGeneratorPreviewPage tokens={{}} logos={logos} />);

    fireEvent.click(screen.getByRole("button", { name: "Examples mode" }));
    fireEvent.click(screen.getByRole("button", { name: "Select examples" }));

    expect(screen.getByText(/Some components are presentational examples\./)).toBeInTheDocument();
    expect(screen.getByText("Example with main-preview")).toBeInTheDocument();
  });
});
