import { render } from "@testing-library/react";
import DxcStatusLight from "./StatusLight";

describe("StatusLight component tests", () => {
  test("StatusLight renders with correct label", () => {
    const { getByText } = render(<DxcStatusLight label="Status Light Test" />);
    expect(getByText("Status Light Test")).toBeTruthy();
  });
  test("StatusLight renders with role 'status'", () => {
    const { getByRole } = render(<DxcStatusLight label="Status Light Test" />);
    expect(getByRole("status")).toBeTruthy();
  });
});
