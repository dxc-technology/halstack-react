import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import DxcUpload from "../src/upload/Upload";

describe("Upload component tests", () => {
  test("Upload renders with correct text", () => {
    const { getByText } = render(<DxcUpload margin="small"></DxcUpload>);
    expect(getByText("There are no files to upload")).toBeTruthy();
    expect(getByText("Drag and drop your files here or choose one from your computer")).toBeTruthy();
    expect(getByText("CHOOSE FILES")).toBeTruthy();
  });

  test("Upload shows file information", () => {
    const myfunction = jest.fn();
    const { getByText } = render(<DxcUpload margin="small"></DxcUpload>);
    const dataTransfer = {
      files: [new File(["(⌐□_□)"], "test.png", { type: "image/png" })],
      clearData: myfunction,
    };
    act(() => {
      fireEvent.drop(getByText("There are no files to upload"), {
        dataTransfer,
      });
    });
    expect(getByText("test.png")).toBeTruthy();
    expect(getByText("image/png")).toBeTruthy();
    expect(getByText("UPLOAD")).toBeTruthy();
  });

  /*test("Calls correct function callbackUpload", () => {
    const { getByText } = render(<DxcUpload margin="small"></DxcUpload>);
    expect(getByText("There are no files to upload")).toBeTruthy();
    expect(getByText("Drag and drop your files here or choose one from your computer")).toBeTruthy();
  });*/
});
