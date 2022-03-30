import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcFileInput from "./FileInput";

describe("FileInput component tests", () => {
  const file1 = new File(["file1"], "file1.png", { type: "image/png" });
  const file2 = new File(["file2"], "file2.txt", {
    type: "text/plain",
  });

  const allFiles = [
    {
      file: file1,
    },
    {
      error: "Error message",
      file: file2,
    },
  ];

  test("Renders with correct labels and helper text in file mode", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" buttonLabel="Choose files" />
    );
    expect(getByText("File input label")).toBeTruthy();
    expect(getByText("File input helper text")).toBeTruthy();
    expect(getByText("Choose files")).toBeTruthy();
  });
  test("Renders with correct button label in file mode", () => {
    const { getByText } = render(<DxcFileInput label="File input label" helperText="File input helper text" />);
    expect(getByText("Select files")).toBeTruthy();
  });
  test("Renders with correct button label in file mode and single file selection", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" multiple={false} />
    );
    expect(getByText("Select file")).toBeTruthy();
  });
  test("Renders with correct labels in filedrop mode", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" mode="filedrop" />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop files")).toBeTruthy();
  });
  test("Renders with correct labels in filedrop mode and single file selection", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" mode="filedrop" multiple={false} />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop a file")).toBeTruthy();
  });
  test("Renders with correct custom labels in filedrop mode", () => {
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        mode="filedrop"
        buttonLabel="Choose"
        dropAreaLabel="(or drop the files)"
      />
    );
    expect(getByText("Choose")).toBeTruthy();
    expect(getByText("(or drop the files)")).toBeTruthy();
  });
  test("Renders with correct labels in dropzone mode", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" mode="dropzone" />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop files")).toBeTruthy();
  });
  test("Renders with correct labels in dropzone mode and single file selection", () => {
    const { getByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" mode="dropzone" multiple={false} />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop a file")).toBeTruthy();
  });
  test("Renders with correct custom labels in dropzone mode", () => {
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        mode="dropzone"
        buttonLabel="Choose"
        dropAreaLabel="(or drop the files)"
      />
    );
    expect(getByText("Choose")).toBeTruthy();
    expect(getByText("(or drop the files)")).toBeTruthy();
  });
  test("Disabled file input", () => {
    const { getByText, getByRole } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" disabled />
    );
    expect(getByText("Select files")).toBeTruthy();
    const button = getByRole("button");
    expect(button.disabled).toBeTruthy();
  });
  test("Renders file items passed in value when multiple file input", async () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        callbackFile={callbackFile}
      />
    );
    await waitFor(() => {
      expect(getByText("file1.png")).toBeTruthy();
      expect(getByText("file2.txt")).toBeTruthy();
      expect(getByText("Error message")).toBeTruthy();
    });
  });
  test("Renders file items when single file input", async () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        multiple={false}
        value={allFiles}
        callbackFile={callbackFile}
      />
    );
    await waitFor(() => {
      expect(getByText("file1.png")).toBeTruthy();
      expect(getByText("file2.txt")).toBeTruthy();
      expect(getByText("Error message")).toBeTruthy();
    });
  });
  test("Add file item when single file input", async () => {
    const newFile = new File(["newFile"], "newFile.pdf", { type: "pdf" });
    const callbackFile = jest.fn();
    const { getByText, getByLabelText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        callbackFile={callbackFile}
        multiple={false}
      />
    );
    await waitFor(() => {
      expect(getByText("file1.png")).toBeTruthy();
      expect(getByText("file2.txt")).toBeTruthy();
      expect(getByText("Error message")).toBeTruthy();
      const inputFile = getByLabelText("File input label", { hidden: true });
      fireEvent.change(inputFile, { target: { files: [newFile] } });
      expect(callbackFile).toHaveBeenCalledWith([
        {
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
        value={allFiles}
        callbackFile={callbackFile}
      />
    );
    await waitFor(() => {
      expect(getByText("file1.png")).toBeTruthy();
      expect(getByText("file2.txt")).toBeTruthy();
      expect(getByText("Error message")).toBeTruthy();
      const removeBtn = getAllByRole("button")[1];
      userEvent.click(removeBtn);
      expect(callbackFile).toHaveBeenCalledWith([
        {
          error: "Error message",
          file: file2,
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
  test("CallbackFile is correctly called", async () => {
    const newFile = new File(["newFile"], "newFile.pdf", { type: "pdf" });
    const callbackFile = jest.fn();
    const { getByLabelText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        callbackFile={callbackFile}
      />
    );
    await waitFor(() => {
      const inputFile = getByLabelText("File input label", { hidden: true });
      fireEvent.change(inputFile, { target: { files: [newFile] } });
      expect(callbackFile).toHaveBeenCalledWith([
        {
          file: file1,
          preview: "data:image/png;base64,ZmlsZTE=",
        },
        {
          error: "Error message",
          file: file2,
          preview: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
            </svg>
          ),
        },
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
    const { getByText, getByLabelText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        minSize={1000}
        maxSize={20000}
        value={allFiles}
        callbackFile={callbackFile}
      />
    );

    await waitFor(() => {
      expect(getByText("file1.png")).toBeTruthy();
      expect(getByText("file2.txt")).toBeTruthy();
      expect(getByText("Error message")).toBeTruthy();
      const inputFile = getByLabelText("File input label", { hidden: true });
      fireEvent.change(inputFile, { target: { files: [newFile] } });
      expect(callbackFile).toHaveBeenCalledWith([
        { file: file1, preview: "data:image/png;base64,ZmlsZTE=" },
        {
          error: "Error message",
          file: file2,
          preview: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
            </svg>
          ),
        },
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
