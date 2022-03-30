import React from "react";
import { render } from "@testing-library/react";
import DxcBox from "../card/Card";

describe("Box component tests", () => {
  test("Box renders with correct text", () => {
    const { getByText } = render(<DxcBox>test-box</DxcBox>);
    expect(getByText("test-box")).toBeTruthy();
  });
});
