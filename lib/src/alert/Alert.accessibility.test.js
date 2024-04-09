import React from "react";
import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcAlert from "./Alert.tsx";

describe("Alert component accessibility tests", () => {
  it("Should not have basic accessibility issues for confirm mode", async () => {
    const { container } = render(
      <DxcAlert type="confirm" inlineText="info-alert-text" margin="small" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    const { container } = render(
      <DxcAlert type="error" inlineText="info-alert-text" margin="small" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for info mode", async () => {
    const { container } = render(
      <DxcAlert type="info" inlineText="info-alert-text" margin="small" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for warning mode", async () => {
    const { container } = render(
      <DxcAlert type="warning" inlineText="info-alert-text" margin="small" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
