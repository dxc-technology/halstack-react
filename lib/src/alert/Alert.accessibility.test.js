import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcAlert from "./Alert.tsx";
import DxcFlex from "../flex/Flex.tsx";

describe("Alert component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcAlert type="confirm" inlineText="info-alert-text" margin="small" />
        <DxcAlert type="error" inlineText="info-alert-text" margin="small" />
        <DxcAlert type="info" inlineText="info-alert-text" margin="small" />
        <DxcAlert type="warning" inlineText="info-alert-text" margin="small" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
