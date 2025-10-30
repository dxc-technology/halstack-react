import { render, fireEvent } from "@testing-library/react";
import DxcQuickNav from "./QuickNav";

const links = [
  {
    label: "Overview",
  },
  {
    label: "Principles",
    links: [{ label: "Color" }, { label: "Spacing" }, { label: "Typography" }],
  },
  {
    label: "Components",
    links: [
      {
        label: "Accordion",
      },
      {
        label: "Button",
      },
    ],
  },
];

describe("QuickNav component tests", () => {
  test("The component renders properly", () => {
    const { getByText } = render(<DxcQuickNav links={links} />);
    expect(getByText("Overview")).toBeTruthy();
    expect(getByText("Spacing")).toBeTruthy();
    expect(getByText("Button")).toBeTruthy();
  });

  test("should call scrollIntoView when clicking on a link in hash router mode", () => {
    // Mock window.location.href to simulate hash router
    Object.defineProperty(window, "location", {
      value: {
        href: "http://localhost:3000/#/components",
      },
      writable: true,
    });

    // Mock document.getElementById and scrollIntoView
    const mockScrollIntoView = jest.fn();
    const mockElement = { scrollIntoView: mockScrollIntoView };
    const mockGetElementById = jest.fn().mockReturnValue(mockElement);
    document.getElementById = mockGetElementById;

    const { getByText } = render(<DxcQuickNav links={links} />);
    const overviewLink = getByText("Overview");

    fireEvent.click(overviewLink);

    expect(mockGetElementById).toHaveBeenCalledWith("overview");
    expect(mockScrollIntoView).toHaveBeenCalled();
  });

  test("should call scrollIntoView when clicking on a sublink in hash router mode", () => {
    // Mock window.location.href to simulate hash router
    Object.defineProperty(window, "location", {
      value: {
        href: "http://localhost:3000/#/components",
      },
      writable: true,
    });

    // Mock document.getElementById and scrollIntoView
    const mockScrollIntoView = jest.fn();
    const mockElement = { scrollIntoView: mockScrollIntoView };
    const mockGetElementById = jest.fn().mockReturnValue(mockElement);
    document.getElementById = mockGetElementById;

    const { getByText } = render(<DxcQuickNav links={links} />);
    const colorLink = getByText("Color");

    fireEvent.click(colorLink);

    expect(mockGetElementById).toHaveBeenCalledWith("principles-color");
    expect(mockScrollIntoView).toHaveBeenCalled();
  });
});
