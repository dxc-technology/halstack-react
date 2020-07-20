import React from "react";
import { render } from "@testing-library/react";
import DxcLink from "../src/link/Link";

describe("Link component tests", () => {
  test("Link renders with correct text", () => {
    const { getByText } = render(<DxcLink text="Link" />);
    expect(getByText("Link")).toBeTruthy();
  });

  test("Link renders with correct href", () => {
    const { getByText } = render(<DxcLink text="Link" href="/testPage" />);
    expect(getByText("Link").getAttribute("href")).toEqual("/testPage");
  });

  test("Link renders with disable attribute", () => {
    const { getByText } = render(<DxcLink text="Link" href="/testPage" disabled={true} />);
    expect(getByText("Link").hasAttribute("disabled")).toBeTruthy();
  });

  test("Link open new tab", () => {
    const { getByText } = render(<DxcLink text="Link" href="/testPage" newWindow={true} />);
    expect(getByText("Link").getAttribute("target")).toEqual("_blank");
  });
});
