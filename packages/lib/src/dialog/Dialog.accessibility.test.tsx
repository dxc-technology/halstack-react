import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcDialog from "./Dialog";

describe("Dialog component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(<DxcDialog>Dialog text</DxcDialog>);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for close button not visible", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(<DxcDialog closable={false}>Dialog text</DxcDialog>);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for overlay not visible", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(<DxcDialog overlay={false}>Dialog text</DxcDialog>);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
