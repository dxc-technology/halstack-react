import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSpinner from "./Spinner.tsx";
import DxcFlex from "../flex/Flex.tsx";

describe("Spinner component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner label="test-loading" margin="medium" mode="overlay" value={50} showValue></DxcSpinner>
        <DxcSpinner label="test-loading" margin="medium" mode="large" value={50} showValue></DxcSpinner>
        <DxcSpinner label="test-loading" margin="medium" mode="small" value={50} showValue></DxcSpinner>
        <DxcSpinner label="test-loading" margin="medium" mode="overlay" value={50}></DxcSpinner>
        <DxcSpinner label="test-loading" margin="medium" mode="large" value={50}></DxcSpinner>
        <DxcSpinner label="test-loading" margin="medium" mode="small" value={50}></DxcSpinner>
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
