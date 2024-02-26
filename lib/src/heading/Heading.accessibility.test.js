import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcHeading from "./Heading.tsx";

describe("Heading component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcHeading text="my-heading-test"></DxcHeading>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
