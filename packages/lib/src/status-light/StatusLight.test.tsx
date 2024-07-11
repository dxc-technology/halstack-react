import { render } from "@testing-library/react";
import DxcStatusLight from "./StatusLight";

describe("StatusLight component tests", () => {
  test("StatusLight renders with correct label", () => {
    const { getByText } = render(<DxcStatusLight label="Status Light Test"></DxcStatusLight>);
    expect(getByText("Status Light Test")).toBeTruthy();
  });

  test("StatusLight applies accessibility attributes", () => {
    const { getByRole } = render(<DxcStatusLight label="Status Light Test" />);
    const statusLightContainer = getByRole("status");
    expect(statusLightContainer.getAttribute("aria-label")).toBe("default: Status Light Test");
  });
});
