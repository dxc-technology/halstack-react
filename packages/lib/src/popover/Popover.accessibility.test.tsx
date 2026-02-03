import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcPopover from "./Popover";

describe("Popover component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcPopover actionToOpen="hover" popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
