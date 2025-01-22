import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcDialog from "./Dialog";

(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Dialog component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(<DxcDialog>Dialog text</DxcDialog>);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for close button not visible", async () => {
    const { baseElement } = render(<DxcDialog closable={false}>Dialog text</DxcDialog>);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for overlay not visible", async () => {
    const { baseElement } = render(<DxcDialog overlay={false}>Dialog text</DxcDialog>);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
