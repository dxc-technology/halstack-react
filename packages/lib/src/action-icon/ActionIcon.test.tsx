import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import DxcActionIcon from "./ActionIcon";

describe("ActionIcon component tests", () => {
  test("ActionIcon renders correctly", () => {
    const { getByRole } = render(<DxcActionIcon icon="house" />);
    const ActionIcon = getByRole("img", { hidden: true });
    expect(ActionIcon).toBeInTheDocument();
  });
  test("ActionIcon renders with custom icon when icon is a SVG", () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;
    const { getByTestId } = render(<DxcActionIcon icon={<CustomIcon />} />);
    const icon = getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });
  test("ActionIcon renders as a link when linkHref is passed", () => {
    const { getByRole } = render(<DxcActionIcon icon="house" linkHref="/components/ActionIcon" />);
    const link = getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/components/ActionIcon");
  });
  test("ActionIcon calls onClick when onClick is passed and component is clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<DxcActionIcon icon="house" onClick={handleClick} />);
    const buttonDiv = getByRole("button");
    expect(buttonDiv).toBeInTheDocument();
    fireEvent.click(buttonDiv);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("ActionIcon is focusable when onClick is passed", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<DxcActionIcon icon="house" onClick={handleClick} />);
    const buttonDiv = getByRole("button");
    expect(buttonDiv).toBeInTheDocument();
    buttonDiv.focus();
    expect(buttonDiv).toHaveFocus();
  });
  test("ActionIcon is not focusable when onClick is not passed", () => {
    const { getByRole } = render(<DxcActionIcon icon="house" />);
    const buttonDiv = getByRole("img", { hidden: true });
    expect(buttonDiv).toBeInTheDocument();
    buttonDiv.focus();
    expect(buttonDiv).not.toHaveFocus();
  });
  test("ActionIcon has the correct role when onClick is passed", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<DxcActionIcon icon="house" onClick={handleClick} />);
    const buttonDiv = getByRole("button");
    expect(buttonDiv).toBeInTheDocument();
  });
  test("ActionIcon has the correct role when onClick is not passed", () => {
    const { getByRole } = render(<DxcActionIcon icon="house" />);
    const buttonDiv = getByRole("img", { hidden: true });
    expect(buttonDiv).toBeInTheDocument();
  });
  test("ActionIcon renders with the correct aria-label when ariaLabel is passed", () => {
    const { getByLabelText } = render(
      <DxcActionIcon icon="house" ariaLabel="custom label" onClick={() => console.log()} />
    );
    const buttonDiv = getByLabelText("custom label");
    expect(buttonDiv).toBeInTheDocument();
  });
});
