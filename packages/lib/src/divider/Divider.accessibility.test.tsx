import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcDivider from "./Divider";

describe("Divider accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcDivider orientation="vertical" color="darkGrey" decorative={false} weight="strong" />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
