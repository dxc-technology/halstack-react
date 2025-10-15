import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import DxcGorgorito from "./Gorgorito";

describe("Gorgorito component tests", () => {
  test("Gorgorito renders correctly", () => {
    const { getByRole } = render(<DxcGorgorito />);
    const Gorgorito = getByRole("img", { hidden: true });
    expect(Gorgorito).toBeInTheDocument();
  });
  test("Gorgorito renders with custom icon when icon is a SVG", () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;
    const { getByTestId } = render(<DxcGorgorito icon={<CustomIcon />} />);
    const icon = getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });
  test("Gorgorito renders as a link when linkHref is passed", () => {
    const { getByRole } = render(<DxcGorgorito linkHref="/components/Gorgorito" />);
    const link = getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/components/Gorgorito");
  });
  test("Gorgorito calls onClick when onClick is passed and component is clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<DxcGorgorito onClick={handleClick} />);
    const buttonDiv = getByRole("button");
    expect(buttonDiv).toBeInTheDocument();
    fireEvent.click(buttonDiv);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("Gorgorito renders status indicator correctly", () => {
    const { rerender, queryByRole, getByRole } = render(
      <DxcGorgorito label="John Doe" status={{ mode: "default", position: "top" }} />
    );
    expect(getByRole("status")).toHaveStyle("background-color: var(--color-fg-neutral-strong)");
    rerender(<DxcGorgorito label="John Doe" status={{ mode: "info", position: "top" }} />);
    expect(getByRole("status")).toHaveStyle("background-color: var(--color-fg-secondary-medium)");
    rerender(<DxcGorgorito label="John Doe" status={{ mode: "success", position: "top" }} />);
    expect(getByRole("status")).toHaveStyle("background-color: var(--color-fg-success-medium)");
    rerender(<DxcGorgorito label="John Doe" status={{ mode: "warning", position: "top" }} />);
    expect(getByRole("status")).toHaveStyle("background-color: var(--color-fg-warning-strong)");
    rerender(<DxcGorgorito label="John Doe" status={{ mode: "error", position: "top" }} />);
    expect(getByRole("status")).toHaveStyle("background-color: var(--color-fg-error-medium)");
    rerender(<DxcGorgorito label="John Doe" />);
    expect(queryByRole("status")).toBeNull();
  });
  test("Gorgorito renders status indicator in correct position", () => {
    const { rerender, getByRole } = render(
      <DxcGorgorito label="John Doe" status={{ mode: "default", position: "top" }} />
    );
    expect(getByRole("status")).toHaveStyle("top: 0px;");
    rerender(<DxcGorgorito label="John Doe" status={{ mode: "info", position: "bottom" }} />);
    expect(getByRole("status")).toHaveStyle("bottom: 0px");
  });
});
