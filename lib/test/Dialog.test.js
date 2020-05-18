import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcDialog from "../src/dialog/Dialog";

describe("Dialog component tests", () => {
  test("Dialog renders with correct text", () => {
    const { getByText } = render(<DxcDialog>dialog-text</DxcDialog>);
    expect(getByText("dialog-text")).toBeTruthy();
  });

  test("Dialog renders without close button", () => {
    const { queryByRole } = render(<DxcDialog isCloseVisible={false}>dialog-text</DxcDialog>);
    expect(queryByRole("button")).toBeFalsy();
  });

  test("Calls correct function onCloseClick", () => {
    const onCloseClick = jest.fn();
    const { getByRole } = render(<DxcDialog onCloseClick={onCloseClick}>dialog-text</DxcDialog>);
    const closeButton = getByRole("button");
    fireEvent.click(closeButton);
    expect(onCloseClick).toHaveBeenCalled();
  });
});
