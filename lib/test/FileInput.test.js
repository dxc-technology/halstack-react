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
    const files = [
      {
        file: {
          lastModified: 1625153395476,
          lastModifiedDate: "Thu Jul 01 2021 17:29:55 GMT+0200 (Central European Summer Time)",
          name: "file-1.png",
          size: 76251,
          type: "image/png",
          webkitRelativePath: "",
        },
      },
      {
        error: "Error message",
        file: {
          lastModified: 1625153334576,
          lastModifiedDate: "Thu Jul 01 2021 17:29:55 GMT+0200 (Central European Summer Time)",
          name: "file-2.pdf",
          size: 76251,
          type: ".pdf",
          webkitRelativePath: "",
        },
      },
      {
        file: {
          lastModified: 1625153334576,
          lastModifiedDate: "Thu Jul 01 2021 17:29:55 GMT+0200 (Central European Summer Time)",
          name: "file-3.mp4",
          size: 76251,
          type: ".mp4",
          webkitRelativePath: "",
        },
      },
    ];
    const { getByText, getAllByRole, queryByText } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" value={files} />
    );
    expect(getByText("file-1.png")).toBeTruthy();
    expect(getByText("file-2.pdf")).toBeTruthy();
    expect(getByText("Error message")).toBeTruthy();
    expect(getByText("file-3.mp4")).toBeTruthy();
    const removeBtn = getAllByRole("button")[2];
    userEvent.click(removeBtn);
    expect(queryByText("file-2.png")).toBeFalsy();
    expect(queryByText("Error message")).toBeFalsy();
  });

  test("Renders file item when single file input and delete the file", () => {
    const files = [
      {
        file: {
          lastModified: 1625153395476,
          lastModifiedDate: "Thu Jul 01 2021 17:29:55 GMT+0200 (Central European Summer Time)",
          name: "file-1.png",
          size: 76251,
          type: "image/png",
          webkitRelativePath: "",
        },
      },
      {
        error: "Error message",
        file: {
          lastModified: 1625153334576,
          lastModifiedDate: "Thu Jul 01 2021 17:29:55 GMT+0200 (Central European Summer Time)",
          name: "file-2.pdf",
          size: 76251,
          type: ".pdf",
          webkitRelativePath: "",
        },
      },
    ];
    const { getByText, queryByText, getAllByRole } = render(
      <DxcFileInput label="File input label" helperText="File input helper text" value={files} multiple={false} />
    );
    expect(getByText("file-1.png")).toBeTruthy();
    expect(queryByText("file-2.pdf")).toBeFalsy();
    expect(queryByText("Error message")).toBeFalsy();
    const removeBtn = getAllByRole("button")[1];
    userEvent.click(removeBtn);
    expect(queryByText("file-1.png")).toBeFalsy();
  });
});
