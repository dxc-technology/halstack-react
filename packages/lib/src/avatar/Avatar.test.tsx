import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import DxcAvatar from "./Avatar";

(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Avatar component tests", () => {
  test("Avatar renders correctly", () => {
    const { getByRole } = render(<DxcAvatar />);
    const avatar = getByRole("img", { hidden: true });
    expect(avatar).toBeInTheDocument();
  });
  test("Avatar renders with custom icon when icon is a SVG", () => {
    const CustomIcon = () => <svg data-testid="custom-icon"></svg>;
    const { getByTestId } = render(<DxcAvatar icon={<CustomIcon />} />);
    const icon = getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });
  test("Avatar renders with image when src is passed", () => {
    const { getByRole } = render(<DxcAvatar imageSrc="https://example.com/avatar.png" />);
    const img = getByRole("img");
    expect(img).toHaveAttribute("src", "https://example.com/avatar.png");
  });
  test("Avatar renders with initials when initials is passed", () => {
    const { getByText } = render(<DxcAvatar label="John Doe" />);
    const initials = getByText("JD");
    expect(initials).toBeInTheDocument();
  });
  test("Avatar renders with initials when src is invalid and initials is passed", () => {
    const { getByRole, getByText, queryByText } = render(<DxcAvatar imageSrc="invalid-url" label="John Doe" />);
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    expect(queryByText("JD")).not.toBeInTheDocument();
    fireEvent.error(img);
    const initials = getByText("JD");
    expect(initials).toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
  });
  test("Avatar renders with image when src and initials are passed", () => {
    const { getByRole, queryByText } = render(
      <DxcAvatar
        imageSrc="https://developer.dxc.com/halstack/next/_next/static/media/neutral_colors.e92a8be2.png"
        label="John Doe"
      />
    );
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    const initials = queryByText("JD");
    expect(initials).not.toBeInTheDocument();
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
    const { rerender, getByTestId, queryByTestId } = render(
      <DxcAvatar label="John Doe" status={{ mode: "default", position: "top" }} />
    );
    expect(getByTestId("avatar-status")).toHaveStyle("background-color: var(--color-fg-neutral-strong)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "info", position: "top" }} />);
    expect(getByTestId("avatar-status")).toHaveStyle("background-color: var(--color-fg-secondary-medium)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "success", position: "top" }} />);
    expect(getByTestId("avatar-status")).toHaveStyle("background-color: var(--color-fg-success-medium)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "warning", position: "top" }} />);
    expect(getByTestId("avatar-status")).toHaveStyle("background-color: var(--color-fg-warning-strong)");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "error", position: "top" }} />);
    expect(getByTestId("avatar-status")).toHaveStyle("background-color: var(--color-fg-error-medium)");
    rerender(<DxcAvatar label="John Doe" />);
    expect(queryByTestId("avatar-status")).toBeNull();
  });
  test("Avatar renders status indicator in correct position", () => {
    const { rerender, getByTestId } = render(
      <DxcAvatar label="John Doe" status={{ mode: "default", position: "top" }} />
    );
    expect(getByTestId("avatar-status")).toHaveStyle("top: 0px;");
    rerender(<DxcAvatar label="John Doe" status={{ mode: "info", position: "bottom" }} />);
    expect(getByTestId("avatar-status")).toHaveStyle("bottom: 0px");
  });
});
