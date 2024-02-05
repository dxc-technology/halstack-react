import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcStatusLight from "./StatusLight.tsx";

describe("StatusLight component tests", () => {
  test("StatusLight renders with correct label", () => {
    const { getByText } = render(<DxcStatusLight label="status-light-test"></DxcStatusLight>);
    expect(getByText("status-light-test")).toBeTruthy();
  });

  test("StatusLight renders with correct label before", () => {
    const { getByText } = render(<DxcStatusLight label="status-light-test" labelPosition="before"></DxcStatusLight>);
    expect(getByText("status-light-test")).toBeTruthy();
  });

  test("StatusLight renders with correct icon", () => {
    const { getByRole } = render(<DxcStatusLight label="status-light-test" icon="/test-icon.jpg"></DxcStatusLight>);
    expect(getByRole("img").getAttribute("src")).toBe("/test-icon.jpg");
  });

  test("StatusLight renders with link href", () => {
    const { getByRole } = render(<DxcStatusLight label="status-light-test" linkHref="/test/page"></DxcStatusLight>);
    expect(getByRole("link").getAttribute("href")).toBe("/test/page");
  });

  test("Call correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcStatusLight label="status-light-test" onClick={onClick}></DxcStatusLight>);
    fireEvent.click(getByText("status-light-test"));
    expect(onClick).toHaveBeenCalled();
  });
});
