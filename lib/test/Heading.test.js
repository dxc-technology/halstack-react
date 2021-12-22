import React from "react";
import { render } from "@testing-library/react";
import DxcHeading from "../src/heading/Heading";

describe("Heading component tests", () => {
  test("Heading renders with default level", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 1 })).toBeTruthy();
  });

  test("Heading renders with level 1", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={1}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 1 })).toBeTruthy();
  });

  test("Heading renders with level 2", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={2}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 2 })).toBeTruthy();
  });

  test("Heading renders with level 3", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={3}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 3 })).toBeTruthy();
  });

  test("Heading renders with level 4", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={4}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 4 })).toBeTruthy();
  });

  test("Heading renders with level 5", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={5}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 5 })).toBeTruthy();
  });

  test("Heading renders with default level and as h5", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" as="h5"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 5 })).toBeTruthy();
  });

  test("Heading renders with level 1 and as h5", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={1} as="h5"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 5 })).toBeTruthy();
  });

  test("Heading renders with level 2 and as h4", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={2} as="h4"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 4 })).toBeTruthy();
  });

  test("Heading renders with level 3 and as h2", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={3} as="h2"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 2 })).toBeTruthy();
  });

  test("Heading renders with level 4 and as h3", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={4} as="h3"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 3 })).toBeTruthy();
  });

  test("Heading renders with level 5 as h4", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={5} as="h4"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 4 })).toBeTruthy();
  });

  test("Heading renders with level 5 and invalid as", () => {
    const { getByText, getByRole } = render(<DxcHeading text="my-heading-test" level={5} as="h4afdssf"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
    expect(getByRole("heading", { level: 5 })).toBeTruthy();
  });
});
