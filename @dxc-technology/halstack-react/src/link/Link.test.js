import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcLink from "./Link";

describe("Link component tests", () => {
  test("Link renders with correct text", () => {
    const { getByText } = render(<DxcLink>Link</DxcLink>);
    expect(getByText("Link")).toBeTruthy();
  });

  test("Link renders with correct href", () => {
    const { getByRole } = render(<DxcLink href="/testPage">Link</DxcLink>);
    expect(getByRole("link").getAttribute("href")).toEqual("/testPage");
  });

  test("Link renders with correct disabled state", () => {
    const { getByText } = render(
      <DxcLink href="/testPage" disabled>
        Link
      </DxcLink>
    );
    expect(getByText("Link").hasAttribute("href")).toBeFalsy();
    const { getByText: getByTextLinkButton } = render(
      <DxcLink onClick={() => console.log("Andorra")} disabled>
        LinkButton
      </DxcLink>
    );
    expect(getByTextLinkButton("LinkButton").hasAttribute("onclick")).toBeFalsy();
  });

  test("Link open new tab", () => {
    const { getByRole } = render(
      <DxcLink href="/testPage" newWindow>
        Link
      </DxcLink>
    );
    expect(getByRole("link").getAttribute("target")).toEqual("_blank");
  });

  test("Link onClick called", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcLink onClick={onClick}>Link</DxcLink>);
    const link = getByText("Link");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalled();
  });

  test("Disabled link onClick not called", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcLink onClick={onClick} disabled>
        Link
      </DxcLink>
    );
    const link = getByText("Link");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
