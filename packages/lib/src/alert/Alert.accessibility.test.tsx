import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcAlert from "./Alert";
import { vi } from "vitest";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const messages = [
  { text: "Message 1", onClose: () => {} },
  { text: "Message 2", onClose: () => {} },
  { text: "Message 3", onClose: () => {} },
  { text: "Message 4", onClose: () => {} },
];

describe("Alert component accessibility tests", () => {
  it("Should not have basic accessibility issues for inline mode", async () => {
    const { container } = render(<DxcAlert semantic="success" title="Success" message={messages} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for banner mode", async () => {
    const { container } = render(<DxcAlert title="Info" mode="banner" message={messages} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for modal mode", async () => {
    const { container } = render(
      <DxcAlert title="Info" mode="modal" message={{ text: "info-alert-text", onClose: () => {} }} />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
