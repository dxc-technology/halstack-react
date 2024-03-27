import React from "react";
import { render } from "@testing-library/react";
import DxcTypography from "./Typography";

describe("Typography component tests", () => {
  test("Renders as the selected component", () => {
    const { container } = render(<DxcTypography as="h1">Test H1 Text</DxcTypography>);
    expect(container.querySelector('h1')).not.toBeNull();
  });
  test("Renders as span if it receives invalid tag", () => {
    const { container } = render(<DxcTypography as="br">Test BR Text</DxcTypography>);
    expect(container.querySelector('br')).toBeNull();
    expect(container.querySelector('span')).not.toBeNull();
  });
});