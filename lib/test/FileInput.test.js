import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DxcFileInput from "../src/file-input/FileInput";

describe("FileInput component tests", () => {
  const file1 = new File(["file1"], "file1.png", { type: "image/png" });
  const file2 = new File(["file2"], "file2.txt", {
    type: "text/plain",
  });

  const files = [
    {
      error: null,
      preview: null,
      file: file1,
    },
    {
      error: "Error message",
      preview: null,
      file: file2,
    },
  ];

  test("Renders with correct labels and helper text in file mode", () => {
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
  test("Renders file items passed in value when multiple file input", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={files}
        callbackFile={callbackFile}
      />
    );
    expect(getByText("file1.png")).toBeTruthy();
    expect(getByText("file2.txt")).toBeTruthy();
    expect(getByText("Error message")).toBeTruthy();
  });
  test("Renders file items when single file input", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        multiple={false}
        value={files}
        callbackFile={callbackFile}
      />
    );
    expect(getByText("file1.png")).toBeTruthy();
    expect(getByText("file2.txt")).toBeTruthy();
    expect(getByText("Error message")).toBeTruthy();
  });
  test("Add file item when single file input", async () => {
    const newFile = new File(["newFile"], "newFile.pdf", { type: "pdf" });
    const callbackFile = jest.fn();
    const { getByText, getByTestId } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={files}
        callbackFile={callbackFile}
        multiple={false}
      />
    );
    expect(getByText("file1.png")).toBeTruthy();
    expect(getByText("file2.txt")).toBeTruthy();
    expect(getByText("Error message")).toBeTruthy();
    const inputFile = getByTestId("input-file");
    fireEvent.change(inputFile, { target: { files: [newFile] } });
    await waitFor(() => {
      expect(callbackFile).toHaveBeenCalledWith([
        {
          error: undefined,
          file: newFile,
          preview: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
            </svg>
          ),
        },
      ]);
    });
  });
  test("Renders file items and delete one file", async () => {
    const callbackFile = jest.fn();
    const { getByText, getAllByRole } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={files}
        callbackFile={callbackFile}
      />
    );
    expect(getByText("file1.png")).toBeTruthy();
    expect(getByText("file2.txt")).toBeTruthy();
    expect(getByText("Error message")).toBeTruthy();
    const removeBtn = getAllByRole("button")[1];
    userEvent.click(removeBtn);
    await waitFor(() => {
      expect(callbackFile).toHaveBeenCalledWith([{ error: "Error message", file: file2, preview: null }]);
    });
  });

  test("CallbackFile is correctly called", async () => {
    const newFile = new File(["newFile"], "newFile.pdf", { type: "pdf" });
    const callbackFile = jest.fn();
    const { getByTestId } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={files}
        callbackFile={callbackFile}
      />
    );
    const inputFile = getByTestId("input-file");
    fireEvent.change(inputFile, { target: { files: [newFile] } });
    await waitFor(() => {
      expect(callbackFile).toHaveBeenCalledWith([
        { error: null, preview: null, file: file1 },
        { error: "Error message", preview: null, file: file2 },
        {
          error: undefined,
          file: newFile,
          preview: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
            </svg>
          ),
        },
      ]);
    });
  });

  test("Callback called correctly when a file size does not comply minSize or maxSize", async () => {
    const newFile = new File(["newFile"], "newFile.pdf", { type: "pdf" });
    const callbackFile = jest.fn();
    const { getByTestId } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        minSize={1000}
        maxSize={20000}
        value={files}
        callbackFile={callbackFile}
      />
    );
    const inputFile = getByTestId("input-file");
    fireEvent.change(inputFile, { target: { files: [newFile] } });
    await waitFor(() => {
      expect(callbackFile).toHaveBeenCalledWith([
        { error: null, preview: null, file: file1 },
        { error: "Error message", preview: null, file: file2 },
        {
          error: "File size must be greater than min size.",
          file: newFile,
          preview: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
            </svg>
          ),
        },
      ]);
    });
  });
});
