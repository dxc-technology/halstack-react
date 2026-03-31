import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcQuickNav from "./QuickNav";

const links = [
  {
    label: "Overview",
    links: [
      {
        label: "Introduction",
      },
    ],
  },
  {
    label: "Components",
    links: [
      {
        label: "Introduction",
      },
      {
        label: "Accordion",
      },
    ],
  },
  {
    label: "Principles very very very very very very very very long",
    links: [
      { label: "Color very very very very very very very very long" },
      { label: "Spacingveryveryveryveryveryveryveryverylong" },
      { label: "Typography" },
    ],
  },
  {
    label: "Componentsveryveryveryveryveryveryveryverylong",
    links: [
      {
        label: "Accordion",
      },
    ],
  },
];

describe("Quick Nav component accessibility tests", () => {
  it("Should not have basic accessibility issues for icon mode", async () => {
    const { container } = render(<DxcQuickNav links={links} />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
