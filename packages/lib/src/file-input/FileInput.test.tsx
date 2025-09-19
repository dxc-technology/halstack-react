import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcFileInput from "./FileInput";

const file1 = new File([new Uint8Array([137, 80, 78, 71])], "file1.png", {
  type: "image/png",
});
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

describe("FileInput component tests", () => {
  beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => "blob:mock-url");
  });
  test("Renders with correct labels and helper text in file mode", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        buttonLabel="Choose files"
        callbackFile={callbackFile}
      />
    );
    expect(getByText("File input label")).toBeTruthy();
    expect(getByText("File input helper text")).toBeTruthy();
    expect(getByText("Choose files")).toBeTruthy();
  });

  test("Renders with correct button label in file mode", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Select files")).toBeTruthy();
  });

  test("Renders with correct button label in file mode and single file selection", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        multiple={false}
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Select file")).toBeTruthy();
  });

  test("Renders with correct labels in filedrop mode", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        mode="filedrop"
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop files")).toBeTruthy();
  });

  test("Renders with correct labels in filedrop mode and single file selection", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        mode="filedrop"
        multiple={false}
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop a file")).toBeTruthy();
  });

  test("Renders with correct custom labels in filedrop mode", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        mode="filedrop"
        buttonLabel="Choose"
        dropAreaLabel="(or drop the files)"
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Choose")).toBeTruthy();
    expect(getByText("(or drop the files)")).toBeTruthy();
  });

  test("Renders with correct labels in dropzone mode", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        mode="dropzone"
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop files")).toBeTruthy();
  });

  test("Renders with correct labels in dropzone mode and single file selection", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        mode="dropzone"
        multiple={false}
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Select")).toBeTruthy();
    expect(getByText("or drop a file")).toBeTruthy();
  });

  test("Renders with correct custom labels in dropzone mode", () => {
    const callbackFile = jest.fn();
    const { getByText } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        mode="dropzone"
        buttonLabel="Choose"
        dropAreaLabel="(or drop the files)"
        callbackFile={callbackFile}
      />
    );
    expect(getByText("Choose")).toBeTruthy();
    expect(getByText("(or drop the files)")).toBeTruthy();
  });

  test("Disabled file input", () => {
    const callbackFile = jest.fn();
    const { getByText, getByRole } = render(
      <DxcFileInput
        label="File input label"
        helperText="File input helper text"
        value={allFiles}
        callbackFile={callbackFile}
        disabled
      />
    );
    expect(getByText("Select files")).toBeTruthy();
    const button = getByRole("button") as HTMLButtonElement;
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

  test("Renders non-duplicated items passed in value when multiple file input", async () => {
    const callbackFile = jest.fn();
    const { getByLabelText, getByText } = render(
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
      const inputFile = getByLabelText("File input label");
      fireEvent.change(inputFile, { target: { files: [file1] } });
      expect(callbackFile).toHaveBeenCalledWith([
        {
          file: file1,
          preview: "blob:mock-url",
        },
        {
          error: "Error message",
          file: file2,
          preview: "draft",
        },
      ]);
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
      const inputFile = getByLabelText("File input label");
      fireEvent.change(inputFile, { target: { files: [newFile] } });
      expect(callbackFile).toHaveBeenCalledWith([
        {
          file: newFile,
          preview: "draft",
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
      removeBtn != null && userEvent.click(removeBtn);
      expect(callbackFile).toHaveBeenCalledWith([
        {
          error: "Error message",
          file: file2,
          preview: "draft",
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
      const inputFile = getByLabelText("File input label");
      fireEvent.change(inputFile, { target: { files: [newFile] } });
      expect(callbackFile).toHaveBeenCalledWith([
        {
          file: file1,
          preview: "blob:mock-url",
        },
        {
          error: "Error message",
          file: file2,
          preview: "draft",
        },
        {
          error: undefined,
          file: newFile,
          preview: "draft",
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
      const inputFile = getByLabelText("File input label");
      fireEvent.change(inputFile, { target: { files: [newFile] } });
      expect(callbackFile).toHaveBeenCalledWith([
        { file: file1, preview: "blob:mock-url" },
        {
          error: "Error message",
          file: file2,
          preview: "draft",
        },
        {
          error: "File size must be greater than min size.",
          file: newFile,
          preview: "draft",
        },
      ]);
    });
  });
});
