import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DxcFileInput from "../src/file-input/FileInput";

describe("FileInput component tests", () => {
  test("Renders with correct label and helper text", () => {
    const { getByText } = render(<DxcFileInput label="File input label" helperText="File input helper text" />);
    expect(getByText("File input label")).toBeTruthy();
    expect(getByText("File input helper text")).toBeTruthy();
  });
  test("Renders with correct button label in file mode", () => {
    const { getByText } = render(<DxcFileInput label="File input label" helperText="File input helper text" />);
    expect(getByText("Select files")).toBeTruthy();
  });
  test("Renders with correct labels in filedrop mode", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" mode="filedrop" />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop files")).toBeTruthy();
  });
  test("Renders with correct labels in dropzone mode", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" mode="dropzone" />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop files")).toBeTruthy();
  });
  test("Disabled file input", () => {
    const { getByText, getByRole } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" disabled />
    );
    expect(getByText("Select files")).toBeTruthy();
    const button = getByRole("button");
    expect(button.disabled).toBeTruthy();
  });
});
