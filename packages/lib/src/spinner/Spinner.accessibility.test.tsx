import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFlex from "../flex/Flex";
import DxcSpinner from "./Spinner";

describe("Spinner component accessibility tests", () => {
  it("Should not have basic accessibility issues for overlay mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner label="test-loading" margin="medium" mode="overlay" value={50} showValue />
        <DxcSpinner label="test-loading" margin="medium" mode="overlay" value={50} />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for large mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner label="test-loading" margin="medium" mode="large" value={50} showValue />
        <DxcSpinner label="test-loading" margin="medium" mode="large" value={50} />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for small mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner label="test-loading" margin="medium" mode="small" value={50} showValue />
        <DxcSpinner label="test-loading" margin="medium" mode="small" value={50} />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
