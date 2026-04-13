import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemeGeneratorPreviewPage from "../../screens/theme-generator/ThemeGeneratorPreviewPage";
import { Logos } from "../../screens/theme-generator/types";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("screens/theme-generator/componentsRegistry", () => ({
  componentsRegistry: {
    "/components/button": () => <div>Button Component</div>,
  },
  examplesRegistry: {
    "/examples/application": ({ logos }: { logos: Logos }) => {
      const mainLogoPreview = logos.mainLogo[0]?.preview ?? "no-logo";
      return <div>Application Example {mainLogoPreview}</div>;
    },
  },
}));

describe("ThemeGeneratorPreviewPage", () => {
  it("shows empty state and renders component preview after selection", () => {
    const logos = { mainLogo: [], footerLogo: [], footerReducedLogo: [], favicon: [] };

    render(<ThemeGeneratorPreviewPage tokens={{}} logos={logos} />);

    expect(screen.getByText("Select a component to preview")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("combobox", { name: "Select" }));

    const buttonOption = screen.getByText("Button");
    fireEvent.click(buttonOption);

    expect(screen.getByText("Button Component")).toBeInTheDocument();
  });

  it("switches to examples mode and renders selected example", () => {
    const logos = {
      mainLogo: [{ file: new File(["x"], "main.png"), preview: "main-preview" }],
      footerLogo: [],
      footerReducedLogo: [],
      favicon: [],
    };

    render(<ThemeGeneratorPreviewPage tokens={{}} logos={logos} />);

    fireEvent.click(screen.getByRole("button", { name: "Layout examples" }));

    fireEvent.click(screen.getByRole("combobox", { name: "Select" }));

    const appExample = screen.getByText("Application example");
    fireEvent.click(appExample);

    expect(screen.getByText("Application Example main-preview")).toBeInTheDocument();
  });
});
