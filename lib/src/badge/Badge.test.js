import React from "react";
import { render } from "@testing-library/react";
import DxcBadge from "./Badge.tsx";

describe("Badge component tests", () => {
  test("Badge renders with correct label when it is less than notification limit", () => {
    const { getByText } = render(<DxcBadge label={99} mode="notification" />);
    expect(getByText("99")).toBeTruthy();
  });

  test("Badge renders +99 as label when it is greater than notification limit", () => {
    const { getByText } = render(<DxcBadge label={120} mode="notification" />);
    expect(getByText("+99")).toBeTruthy();
  });
});
