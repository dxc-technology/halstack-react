import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import DxcAvatar from "./Avatar";

describe("Avatar component tests", () => {
  test("Avatar renders correctly", () => {
    const { getByRole } = render(<DxcAvatar />);
    const avatar = getByRole("img", { hidden: true });
    expect(avatar).toBeInTheDocument();
  });
  test("Avatar renders with custom icon when icon is a SVG", () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;
    const { getByTestId } = render(<DxcAvatar icon={<CustomIcon />} />);
    const icon = getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });
  test("Avatar renders with image when src is passed", () => {
    const { getByRole } = render(
      <DxcAvatar imageSrc="https://developer.assure.dxc.com/halstack/next/_next/static/media/neutral_colors.e92a8be2.png" />
    );
    const img = getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      "https://developer.assure.dxc.com/halstack/next/_next/static/media/neutral_colors.e92a8be2.png"
    );
  });
  test("Avatar renders with initials when label is passed", () => {
    const { getByText } = render(<DxcAvatar label="John Doe" />);
    const initials = getByText("JD");
    expect(initials).toBeInTheDocument();
  });
  test("Avatar renders with initials when src is invalid and label is passed", () => {
    const { getByRole, getByText, queryByText } = render(<DxcAvatar imageSrc="invalid-url" label="John Doe" />);
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    expect(queryByText("JD")).not.toBeInTheDocument();
    fireEvent.error(img);
    const initials = getByText("JD");
    expect(initials).toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
  });
  test("Avatar renders with image when src and label are passed", () => {
    const { getByRole, queryByText } = render(
      <DxcAvatar
        imageSrc="https://developer.assure.dxc.com/halstack/next/_next/static/media/neutral_colors.e92a8be2.png"
        label="John Doe"
      />
    );
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    const initials = queryByText("JD");
    expect(initials).not.toBeInTheDocument();
  });
  test("Avatar content fallback renders correctly in all cases", () => {
    const CustomIcon = () => <svg data-testid="custom-icon" />;
    const { rerender, getByRole, getByText, getByTestId, queryByRole, queryByText, queryByTestId } = render(
      <DxcAvatar
        imageSrc="https://developer.assure.dxc.com/halstack/next/_next/static/media/neutral_colors.e92a8be2.png"
        label="John Doe"
        icon={<CustomIcon />}
      />
    );
    expect(getByRole("img")).toBeInTheDocument();
    expect(queryByText("JD")).not.toBeInTheDocument();
    expect(queryByTestId("custom-icon")).not.toBeInTheDocument();
    expect(queryByRole("img", { hidden: true, name: "" })).not.toBeInTheDocument();
    rerender(<DxcAvatar label="John Doe" icon={<CustomIcon />} />);
    expect(queryByRole("img")).not.toBeInTheDocument();
    expect(getByText("JD")).toBeInTheDocument();
    expect(queryByTestId("custom-icon")).not.toBeInTheDocument();
    expect(queryByRole("img", { hidden: true, name: "" })).not.toBeInTheDocument();
    rerender(<DxcAvatar icon={<CustomIcon />} />);
    expect(queryByRole("img")).not.toBeInTheDocument();
    expect(queryByText("JD")).not.toBeInTheDocument();
    expect(getByTestId("custom-icon")).toBeInTheDocument();
    expect(queryByRole("img", { hidden: true, name: "" })).not.toBeInTheDocument();
    rerender(<DxcAvatar />);
    expect(queryByRole("img")).not.toBeInTheDocument();
    expect(queryByText("JD")).not.toBeInTheDocument();
    expect(queryByTestId("custom-icon")).not.toBeInTheDocument();
    expect(getByRole("img", { hidden: true, name: "" })).toBeInTheDocument();
  });
  test("Avatar renders as a link when linkHref is passed", () => {
    const { getByRole } = render(<DxcAvatar linkHref="/components/avatar" />);
    const link = getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/components/avatar");
  });
  test("Avatar calls onClick when onClick is passed and component is clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<DxcAvatar onClick={handleClick} />);
    const buttonDiv = getByRole("button");
    expect(buttonDiv).toBeInTheDocument();
    fireEvent.click(buttonDiv);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("Avatar renders status indicator correctly", () => {
    const { rerender, queryByRole, getByRole } = render(
      <DxcAvatar label="John Doe" status={{ mode: "default", position: "top" }} />
    );
    expect(getByRole("status", { hidden: true })).toHaveStyle("background-color: var(--color-fg-neutral-strong)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "info", position: "top" }} />);
    expect(getByRole("status", { hidden: true })).toHaveStyle("background-color: var(--color-fg-secondary-medium)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "success", position: "top" }} />);
    expect(getByRole("status", { hidden: true })).toHaveStyle("background-color: var(--color-fg-success-medium)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "warning", position: "top" }} />);
    expect(getByRole("status", { hidden: true })).toHaveStyle("background-color: var(--color-fg-warning-strong)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "error", position: "top" }} />);
    expect(getByRole("status", { hidden: true })).toHaveStyle("background-color: var(--color-fg-error-medium)");
    rerender(<DxcAvatar label="John Doe" />);
    expect(queryByRole("status", { hidden: true })).toBeNull();
  });
  test("Avatar renders status indicator in correct position", () => {
    const { rerender, getByRole } = render(
      <DxcAvatar label="John Doe" status={{ mode: "default", position: "top" }} />
    );
    expect(getByRole("status", { hidden: true })).toHaveStyle("top: 0px;");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "info", position: "bottom" }} />);
    expect(getByRole("status", { hidden: true })).toHaveStyle("bottom: 0px");
  });
  test("Avatar renders primaryText and secondaryText correctly", () => {
    const { rerender, getByText } = render(<DxcAvatar primaryText="Primary Text" secondaryText="Secondary Text" />);
    expect(getByText("Primary Text")).toBeInTheDocument();
    expect(getByText("Secondary Text")).toBeInTheDocument();
    rerender(<DxcAvatar primaryText="Primary Text" />);
    expect(getByText("Primary Text")).toBeInTheDocument();
    expect(() => getByText("Secondary Text")).toThrow();
    rerender(<DxcAvatar secondaryText="Secondary Text" />);
    expect(() => getByText("Primary Text")).toThrow();
    expect(getByText("Secondary Text")).toBeInTheDocument();
  });
});
