import React from "react";
import { render, fireEvent, act, createEvent } from "@testing-library/react";
import V3DxcUpload from "../src/upload/Upload";

describe("Upload component tests", () => {
  test("Upload renders with correct text", () => {
    const { getByText } = render(<V3DxcUpload margin="small"></V3DxcUpload>);
    expect(getByText("There are no files to upload")).toBeTruthy();
    expect(getByText("Drag and drop your files here or choose one from your computer")).toBeTruthy();
    expect(getByText("CHOOSE FILES")).toBeTruthy();
  });

  test("Upload shows file information", () => {
    const myfunction = jest.fn();
    const { getByText } = render(<V3DxcUpload margin="small"></V3DxcUpload>);

    const dropZone = getByText("There are no files to upload");
    const dropEvent = createEvent.drop(dropZone);
    const fileList = [new File(["(⌐□_□)"], "test.png", { type: "image/png" })];

    Object.defineProperty(dropEvent, "dataTransfer", {
      value: {
        files: fileList,
        clearData: myfunction,
      },
    });

    act(() => {
      fireEvent(dropZone, dropEvent);
    });
    expect(getByText("test.png")).toBeTruthy();
    expect(getByText("image/png")).toBeTruthy();
    expect(getByText("UPLOAD")).toBeTruthy();
  });

  test("Calls correct function callbackUpload", () => {
    const onCallbackUpload = jest.fn(() => new Promise((resolve) => setTimeout(resolve, 1000)));
    const myfunction = jest.fn();
    const { getByText } = render(<V3DxcUpload margin="small" callbackUpload={onCallbackUpload}></V3DxcUpload>);

    const dropZone = getByText("There are no files to upload");
    const dropEvent = createEvent.drop(dropZone);
    const fileList = [new File(["(⌐□_□)"], "test.png", { type: "image/png" })];

    Object.defineProperty(dropEvent, "dataTransfer", {
      value: {
        files: fileList,
        clearData: myfunction,
      },
    });

    act(() => {
      fireEvent(dropZone, dropEvent);
    });
    act(() => {
      fireEvent.click(getByText("UPLOAD"));
    });
    expect(onCallbackUpload).toHaveBeenCalled();
  });
});
