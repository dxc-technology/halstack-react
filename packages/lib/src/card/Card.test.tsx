import { render } from "@testing-library/react";
import DxcCard from "./Card";
import "@testing-library/jest-dom";
import CardPropsType from "./types";
import userEvent from "@testing-library/user-event";

describe("Card component tests", () => {
  const image = {
    alt: "Example image",
    width: "100%",
    height: "250px",
    objectFit: "cover",
    src: "https://picsum.photos/id/11/1920/1080",
  } as CardPropsType["image"];
  test("Card renders with correct content", () => {
    const { getByText } = render(<DxcCard>test-card</DxcCard>);
    expect(getByText("test-card")).toBeTruthy();
  });

  test("Card renders with image", () => {
    const { getByAltText } = render(<DxcCard image={image}>test-card</DxcCard>);
    const imgElement = getByAltText("Example image") as HTMLImageElement;
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toBe(image?.src);
  });

  test("Card image has correct styles", () => {
    const { getByAltText } = render(<DxcCard image={image}>test-card</DxcCard>);
    const imgElement = getByAltText("Example image") as HTMLImageElement;
    expect(imgElement).toHaveStyle(`width: ${image?.width}`);
    expect(imgElement).toHaveStyle(`height: ${image?.height}`);
    expect(imgElement).toHaveStyle(`object-fit: ${image?.objectFit}`);
  });

  test("Card renders as a link when href is provided", () => {
    const { getByText } = render(<DxcCard href="https://example.com">test-card</DxcCard>);
    const cardElement = getByText("test-card");
    expect(cardElement).toBeTruthy();
    expect(cardElement.tagName).toBe("A");
    expect(cardElement).toHaveAttribute("href", "https://example.com");
  });

  test("Card renders as a button when onClick is provided", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<DxcCard onClick={onClickMock}>test-card</DxcCard>);
    const cardElement = getByRole("button");
    expect(cardElement).toBeTruthy();
    expect(cardElement).toHaveTextContent("test-card");
    userEvent.click(cardElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("Card renders as a checkbox when selectable is true", () => {
    const onchangeMock = jest.fn();
    const { getByRole } = render(
      <DxcCard selectable onChange={onchangeMock}>
        test-card
      </DxcCard>
    );
    const cardElement = getByRole("checkbox");
    expect(cardElement).toBeTruthy();
    expect(cardElement).toHaveTextContent("test-card");
    expect(cardElement).toHaveAttribute("aria-checked", "false");
    userEvent.click(cardElement);
    expect(onchangeMock).toHaveBeenCalledWith(true);
  });

  test("Empty Card renders with correct content", () => {
    const { getByText } = render(<DxcCard isEmpty>test-card</DxcCard>);
    expect(getByText("No content")).toBeTruthy();
  });

  test("Loading card does not render content", () => {
    const { queryByText } = render(<DxcCard isLoading>test-card</DxcCard>);
    expect(queryByText("test-card")).toBeNull();
  });

  test("Card with selectable and href should not be selectable", () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <DxcCard selectable selected href="https://example.com" onChange={onChangeMock}>
        test-card
      </DxcCard>
    );
    const cardElement = getByText("test-card");
    expect(cardElement).toBeTruthy();
    expect(cardElement.tagName).toBe("A");
    userEvent.click(cardElement);
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(cardElement).toHaveAttribute("href", "https://example.com");
    expect(cardElement).not.toHaveAttribute("aria-checked");
  });
});
