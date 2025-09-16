import { render } from "@testing-library/react";
import DxcAvatar from "./Avatar";
import { axe } from "../../test/accessibility/axe-helper";

describe("Avatar component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcAvatar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues when it works as a button", async () => {
    const { container } = render(<DxcAvatar onClick={() => console.log("")} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues when it works as an anchor", async () => {
    const { container } = render(<DxcAvatar linkHref="/components/avatar" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues when disabled", async () => {
    const { container } = render(<DxcAvatar disabled />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues when status is passed", async () => {
    const { container } = render(<DxcAvatar status={{ mode: "success", position: "top" }} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues when image is passed", async () => {
    const { container } = render(<DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
