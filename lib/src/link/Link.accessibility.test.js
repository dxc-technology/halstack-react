import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcLink from "./Link.tsx";

describe("Link component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcLink>Link</DxcLink>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
