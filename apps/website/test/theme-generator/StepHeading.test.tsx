import "@testing-library/jest-dom/jest-globals";
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, jest } from "@jest/globals";
import StepHeading from "../../screens/theme-generator/components/StepHeading";

jest.mock("@dxc-technology/halstack-react", () => ({
  DxcContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcFlex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DxcHeading: ({ text }: { text: string }) => <h2>{text}</h2>,
  DxcTypography: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
}));

afterEach(() => {
  cleanup();
});

describe("StepHeading", () => {
  it("renders title and subtitle", () => {
    render(<StepHeading title="Step title" subtitle="Step subtitle" />);

    expect(screen.getByRole("heading", { name: "Step title" })).toBeInTheDocument();
    expect(screen.getByText("Step subtitle")).toBeInTheDocument();
  });
});
