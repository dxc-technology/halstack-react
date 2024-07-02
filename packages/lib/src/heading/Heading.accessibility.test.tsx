import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcHeading from "./Heading";

describe("Heading component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcHeading text="my-heading-test" level={1} margin="medium" weight="bold"></DxcHeading>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
