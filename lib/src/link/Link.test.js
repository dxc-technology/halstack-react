import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcLink from "./Link";

describe("Link component tests", () => {
  test("Link renders with correct text", () => {
    const { getByText } = render(<DxcLink text="Link" />);
    expect(getByText("Link")).toBeTruthy();
  });

  test("Link renders with correct href", () => {
    const { getByRole } = render(<DxcLink text="Link" href="/testPage" />);
    expect(getByRole("link").getAttribute("href")).toEqual("/testPage");
  });

  test("Link renders with correct disabled state", () => {
    const { getByText } = render(<DxcLink text="Link" href="/testPage" disabled={true} />);
    expect(getByText("Link").hasAttribute("href")).toBeFalsy();
    const { getByText: getByTextLinkButton } = render(
      <DxcLink text="LinkButton" onClick={() => console.log("Andorra")} disabled={true} />
    );
    expect(getByTextLinkButton("LinkButton").hasAttribute("onclick")).toBeFalsy();
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

  test("Disabled link onClick not called", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcLink text="Link" onClick={onClick} disabled={true} />);
    const link = getByText("Link");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
