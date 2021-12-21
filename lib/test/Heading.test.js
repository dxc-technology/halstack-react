import React from "react";
import { render } from "@testing-library/react";
import DxcHeading from "../src/heading/Heading";

describe("Heading component tests", () => {
  test("Heading renders with default level", () => {
    const { getByText } = render(<DxcHeading text="my-heading-test"></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
  });

  test("Heading renders with level 1", () => {
    const { getByText } = render(<DxcHeading text="my-heading-test" level={1}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
  });

  test("Heading renders with level 2", () => {
    const { getByText } = render(<DxcHeading text="my-heading-test" level={2}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
  });

  test("Heading renders with level 3", () => {
    const { getByText } = render(<DxcHeading text="my-heading-test" level={3}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
  });

  test("Heading renders with level 4", () => {
    const { getByText } = render(<DxcHeading text="my-heading-test" level={4}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
  });

  test("Heading renders with level 5", () => {
    const { getByText } = render(<DxcHeading text="my-heading-test" level={5}></DxcHeading>);
    expect(getByText("my-heading-test")).toBeTruthy();
  });
});
