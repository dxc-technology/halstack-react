import { render } from "@testing-library/react";
import DxcTypography from "./Typography";

describe("Typography component tests", () => {
  test("Renders as the selected component", () => {
    const { container } = render(<DxcTypography as="h1">Test H1 Text</DxcTypography>);
    expect(container.querySelector("h1")).not.toBeNull();
  });
});
