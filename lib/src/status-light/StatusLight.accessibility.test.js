import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcStatusLight from "./StatusLight.tsx";

describe("StatusLight component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcStatusLight label="Status Light Test" mode="info" size="large"></DxcStatusLight>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
