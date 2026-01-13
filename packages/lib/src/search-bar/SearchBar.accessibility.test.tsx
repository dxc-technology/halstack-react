import { render } from "@testing-library/react";
import DxcSearchBar from "./SearchBar";
import { axe } from "../../test/accessibility/axe-helper";

describe("SearchBar component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcSearchBar />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it("Should not have basic accessibility issues with placeholder", async () => {
    const { container } = render(<DxcSearchBar placeholder="Search here..." />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it("Should not have basic accessibility issues with disabled state", async () => {
    const { container } = render(<DxcSearchBar disabled />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it("Should not have basic accessibility issues with cancel button", async () => {
    const { container } = render(<DxcSearchBar onCancel={() => {}} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it("Should not have basic accessibility issues with all props", async () => {
    const { container } = render(
      <DxcSearchBar
        placeholder="Search items..."
        onChange={() => {}}
        onEnter={() => {}}
        onBlur={() => {}}
        onCancel={() => {}}
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
