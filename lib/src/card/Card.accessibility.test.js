import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcCard from "./Card.tsx";

describe("Card component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcCard>test-card</DxcCard>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
