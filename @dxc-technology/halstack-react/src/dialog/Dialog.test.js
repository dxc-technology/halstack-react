import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcDialog from "./Dialog";

describe("Dialog component tests", () => {
  test("Dialog renders with correct text and accesibility attributes", () => {
    const { getByText, getByRole } = render(<DxcDialog>dialog-text</DxcDialog>);
    expect(getByRole("dialog")).toBeTruthy();
    expect(getByRole("dialog").getAttribute("aria-modal")).toBe("true");
    expect(getByText("dialog-text")).toBeTruthy();
  });

  test("Dialog renders without close button", () => {
    const { queryByRole } = render(<DxcDialog isCloseVisible={false}>dialog-text</DxcDialog>);
    expect(queryByRole("button")).toBeFalsy();
  });

  test("Dialog renders with aria-modal false when overlay is not used", () => {
    const { getByRole } = render(
      <DxcDialog isCloseVisible={false} overlay={false}>
        dialog-text
      </DxcDialog>
    );
    expect(getByRole("dialog")).toBeTruthy();
    expect(getByRole("dialog").getAttribute("aria-modal")).toBe("false");
  });

  test("Calls correct function onCloseClick", () => {
    const onCloseClick = jest.fn();
    const { getByRole } = render(<DxcDialog onCloseClick={onCloseClick}>dialog-text</DxcDialog>);
    const closeButton = getByRole("button");
    fireEvent.click(closeButton);
    expect(onCloseClick).toHaveBeenCalled();
  });

  test("Calls correct function onCloseClick when 'escape' key is pressed", () => {
    const onCloseClick = jest.fn();
    const { getByRole } = render(<DxcDialog onCloseClick={onCloseClick}>dialog-text</DxcDialog>);
    fireEvent.keyDown(getByRole("button"), { key: "Escape", code: "Escape", keyCode: 27, charCode: 27 });
    expect(onCloseClick).toHaveBeenCalled();
  });
});
