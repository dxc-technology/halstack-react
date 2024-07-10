import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcBox from "../box/Box";

describe("Box component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcBox shadowDepth={0} margin="medium" size="small" display="flex">
        Box
      </DxcBox>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
