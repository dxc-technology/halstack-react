import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcToggleGroup from "./ToggleGroup.tsx";

const options = [
  {
    value: 1,
    label: "Amazon",
  },
  {
    value: 2,
    label: "Ebay",
  },
  {
    value: 3,
    label: "Apple",
  },
  {
    value: 4,
    label: "Google",
  },
];

describe("Toggle group component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcToggleGroup
        label="Toggle group label"
        helperText="Toggle group helper text"
        options={options}
        margin="medium"
        defaultValue={2}
        multiple
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
