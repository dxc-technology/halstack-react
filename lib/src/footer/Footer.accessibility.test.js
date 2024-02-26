import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcFooter from "./Footer.tsx";

describe("Footer component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcFooter></DxcFooter>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
