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
  test("Renders file items when multiple file input and delete files", () => {
    const file1 = new File(["file1"], "file1.png", { type: "image/png" });
    const file2 = new File(["file2"], "file2.txt", {
      type: "text/plain",
    });
    const file3 = new File(["file3"], "file3.pdf", {
      type: "pdf",
    });

    const files = [
      {
        file: file1,
      },
      {
        error: "Error message",
        file: file2,
      },
      {
        file: file3,
      },
    ];

    const { getByText, getAllByRole, queryByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" value={files} />
    );
    expect(getByText("file1.png")).toBeTruthy();
    expect(getByText("file2.txt")).toBeTruthy();
    expect(getByText("Error message")).toBeTruthy();
    expect(getByText("file3.pdf")).toBeTruthy();
    const removeBtn = getAllByRole("button")[2];
    userEvent.click(removeBtn);
    expect(queryByText("file2.txt")).toBeFalsy();
    expect(queryByText("Error message")).toBeFalsy();
  });

  test("Renders file item when single file input and delete the file", () => {
    const file1 = new File(["file1"], "file1.png", { type: "image/png" });
    const file2 = new File(["file2"], "file2.txt", {
      type: "text/plain",
    });

    const files = [
      {
        file: file1,
      },
      {
        error: "Error message",
        file: file2,
      },
    ];
    const { getByText, queryByText, getAllByRole } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" value={files} multiple={false} />
    );
    expect(getByText("file1.png")).toBeTruthy();
    expect(queryByText("file2.txt")).toBeFalsy();
    expect(queryByText("Error message")).toBeFalsy();
    const removeBtn = getAllByRole("button")[1];
    userEvent.click(removeBtn);
    expect(queryByText("file1.png")).toBeFalsy();
  });
});
