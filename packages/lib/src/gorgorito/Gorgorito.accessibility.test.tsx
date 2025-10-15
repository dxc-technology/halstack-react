import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcGorgorito from "./Gorgorito";

describe("Gorgorito component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcGorgorito />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when it works as a button", async () => {
    const { container } = render(<DxcGorgorito onClick={() => console.log("")} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when it works as an anchor", async () => {
    const { container } = render(<DxcGorgorito linkHref="/components/avatar" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when disabled", async () => {
    const { container } = render(<DxcGorgorito disabled />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when status is passed", async () => {
    const { container } = render(<DxcGorgorito status={{ mode: "success", position: "top" }} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
