import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcHeader from "./Header.tsx";

describe("Header component accessibility tests", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
      })),
    });
  });
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcHeader></DxcHeader>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
