import { render } from "@testing-library/react";
import DxcAvatar from "./Avatar";
import { axe } from "../../test/accessibility/axe-helper";

(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Avatar component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcAvatar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
