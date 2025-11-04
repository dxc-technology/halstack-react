import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcActionIcon from "./ActionIcon";

describe("ActionIcon component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcActionIcon icon="house" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when it works as a button", async () => {
    const { container } = render(<DxcActionIcon icon="house" onClick={() => console.log("")} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when it works as an anchor", async () => {
    const { container } = render(<DxcActionIcon icon="house" linkHref="/components/avatar" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when disabled", async () => {
    const { container } = render(<DxcActionIcon icon="house" disabled />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when status is passed", async () => {
    const { container } = render(<DxcActionIcon icon="house" status={{ mode: "success", position: "top" }} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
