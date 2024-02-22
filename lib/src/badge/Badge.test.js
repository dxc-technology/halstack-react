import React from "react";
import { render } from "@testing-library/react";
import DxcBadge from "./Badge.tsx";
import DxcFlex from "../flex/Flex.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Badge component tests", () => {
  test("Badge renders with correct label when it is less than notification limit", () => {
    const { getByText } = render(<DxcBadge label={99} mode="notification" />);
    expect(getByText("99")).toBeTruthy();
  });

  test("Badge renders +99 as label when it is greater than notification limit", () => {
    const { getByText } = render(
      <DxcFlex>
        <DxcBadge label={120} mode="notification" />
        <DxcBadge label={11} mode="notification" notificationLimit={10} />
      </DxcFlex>
    );
    expect(getByText("+99")).toBeTruthy();
    expect(getByText("+10")).toBeTruthy();
  });
});

expect.extend(toHaveNoViolations);

it("should not have basic accessibility issues", async () => {
  const { container } = render(
    <DxcFlex>
      <DxcBadge label={120} mode="notification" />
      <DxcBadge label={11} mode="notification" notificationLimit={10} />
    </DxcFlex>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
