import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcBadge from "./Badge.tsx";
import DxcFlex from "../flex/Flex.tsx";

describe("Badge component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcBadge label={120} mode="notification" />
        <DxcBadge label={11} mode="notification" notificationLimit={10} />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
