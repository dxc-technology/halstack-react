import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcLink from "../src/link/Link";

describe("Link component tests", () => {
  test("Link renders with correct text", () => {
    const { getByText } = render(<DxcLink text="Link" />);
    expect(getByText("Link")).toBeTruthy();
  });

  test("Link renders with correct href", () => {
    const { getByRole } = render(<DxcLink text="Link" href="/testPage" />);
    expect(getByRole("link").getAttribute("href")).toEqual("/testPage");
  });

  test("Link renders with disable attribute", () => {
    const { getByText } = render(<DxcLink text="Link" href="/testPage" disabled={true} />);
    expect(getByText("Link").hasAttribute("disabled")).toBeTruthy();
  });

  test("Link open new tab", () => {
    const { getByRole } = render(<DxcLink text="Link" href="/testPage" newWindow={true} />);
    expect(getByRole("link").getAttribute("target")).toEqual("_blank");
  });

  test("Link onClick called", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcLink text="Link" onClick={onClick} />);
    const link = getByText("Link");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalled();
  });
});
