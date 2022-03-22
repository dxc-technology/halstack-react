import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcTag from "../src/tag/Tag";

describe("Tag component tests", () => {
  test("Tag renders with correct label", () => {
    const { getByText } = render(<DxcTag label="tag-test"></DxcTag>);
    expect(getByText("tag-test")).toBeTruthy();
  });

  test("Tag renders with correct label before", () => {
    const { getByText } = render(<DxcTag label="tag-test" labelPosition="before"></DxcTag>);
    expect(getByText("tag-test")).toBeTruthy();
  });

  test("Tag renders with correct icon", () => {
    const { getByRole } = render(<DxcTag label="tag-test" icon="/test-icon.jpg"></DxcTag>);
    expect(getByRole("img").getAttribute("src")).toBe("/test-icon.jpg");
  });

  test("Tag renders with link href", () => {
    const { getByRole } = render(<DxcTag label="tag-test" linkHref="/test/page"></DxcTag>);
    expect(getByRole("link").getAttribute("href")).toBe("/test/page");
  });

  test("Call correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcTag label="tag-test" onClick={onClick}></DxcTag>);
    fireEvent.click(getByText("tag-test"));
    expect(onClick).toHaveBeenCalled();
  });
});
