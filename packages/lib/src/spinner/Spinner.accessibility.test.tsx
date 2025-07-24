import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFlex from "../flex/Flex";
import DxcSpinner from "./Spinner";

describe("Spinner component accessibility tests", () => {
  it("Should not have basic accessibility issues for indeterminate spinner", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner size="small" />
        <DxcSpinner size="medium" />
        <DxcSpinner size="large" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for determinate spinner", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner size="small" value={25} />
        <DxcSpinner size="medium" value={50} showValue />
        <DxcSpinner size="large" value={75} showValue />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for spinner with custom labels", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner label="Processing data..." />
        <DxcSpinner label="Loading content..." value={30} showValue />
        <DxcSpinner ariaLabel="Custom progress indicator" value={60} />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for overlay spinner", async () => {
    const { container } = render(
      <DxcSpinner overlay label="Loading application..." />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should not have basic accessibility issues for various progress values", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcSpinner value={0} showValue />
        <DxcSpinner value={25} showValue />
        <DxcSpinner value={50} showValue />
        <DxcSpinner value={75} showValue />
        <DxcSpinner value={100} showValue />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Should have proper ARIA attributes for screen readers", async () => {
    const { getByRole } = render(<DxcSpinner value={42} label="Test progress" />);
    const spinner = getByRole("progressbar");
    
    expect(spinner).toHaveAttribute("aria-valuenow", "42");
    expect(spinner).toHaveAttribute("aria-valuemin", "0");
    expect(spinner).toHaveAttribute("aria-valuemax", "100");
    expect(spinner).toHaveAttribute("aria-label", "Loading 42%");
    
    const { container } = render(<DxcSpinner value={42} label="Test progress" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
