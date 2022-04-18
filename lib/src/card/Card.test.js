import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcCard from "./Card";

describe("Card component tests", () => {
  test("Card renders with correct content", () => {
    const { getByText } = render(<DxcCard>test-card</DxcCard>);
    expect(getByText("test-card")).toBeTruthy();
  });

  test("Card renders with correct href", () => {
    const { getByRole } = render(<DxcCard linkHref="/testPage">test-card</DxcCard>);
    const card = getByRole("link");
    expect(card.getAttribute("href")).toEqual("/testPage");
  });

  test("Card renders with correct image", () => {
    const { getByRole } = render(<DxcCard imageSrc="/testImage">test-card</DxcCard>);
    const card = getByRole("img");
    expect(card.getAttribute("src")).toEqual("/testImage");
  });

  test("OnClick function is called", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcCard onClick={onClick}>test-card</DxcCard>);
    const card = getByText("test-card");
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalled();
  });
});
