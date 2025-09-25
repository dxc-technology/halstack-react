import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcProgressBar from "./ProgressBar";

describe("ProgressBar component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcProgressBar label="test-label" helperText="helper-text" margin="medium" value={50} showValue overlay />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
