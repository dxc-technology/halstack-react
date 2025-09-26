import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcSlider from "./Slider";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Slider component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcSlider
        helperText="Helper Text"
        margin="medium"
        name="Name"
        size="medium"
        label="label"
        step={10}
        minValue={0}
        maxValue={100}
        value={50}
        showLimitsValues
        showInput
        marks
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
      <DxcSlider
        helperText="Helper Text"
        margin="medium"
        name="Name"
        size="medium"
        label="label"
        step={10}
        minValue={0}
        maxValue={100}
        value={50}
        showLimitsValues
        showInput
        marks
        disabled
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
