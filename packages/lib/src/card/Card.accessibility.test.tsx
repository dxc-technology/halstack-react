import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcCard from "./Card";
import CardPropsType from "./types";
import woodenDockImage from "../../.storybook/assets/images/wooden_dock.avif";

describe("Card component accessibility tests", () => {
  const image = {
    alt: "Example image",
    width: "100%",
    height: "250px",
    objectFit: "cover",
    src: woodenDockImage,
  } as CardPropsType["image"];
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcCard image={image}>test-card</DxcCard>);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues with href", async () => {
    const { container } = render(
      <DxcCard href="https://example.com" image={image}>
        test-card
      </DxcCard>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
