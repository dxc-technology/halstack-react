import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcAlert from "./Alert";

describe("Alert component accessibility tests", () => {
  it("Should not have basic accessibility issues for confirm mode", async () => {
    const { container } = render(
      <DxcAlert semantic="success" title="Success" message={{ messageText: "info-alert-text" }} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    const { container } = render(
      <DxcAlert semantic="error" title="Error" message={{ messageText: "info-alert-text" }} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for info mode", async () => {
    const { container } = render(
      <DxcAlert semantic="info" title="Info" message={{ messageText: "info-alert-text" }} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for warning mode", async () => {
    const { container } = render(
      <DxcAlert semantic="warning" title="Warning" message={{ messageText: "info-alert-text" }} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
