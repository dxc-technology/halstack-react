import { render } from "@testing-library/react";
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
});
