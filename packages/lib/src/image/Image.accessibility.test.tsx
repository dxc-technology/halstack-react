import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcImage from "./Image";

describe("Image component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcImage
        alt="Example image"
        width="100%"
        src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"
        caption="Caption"
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for lazy-loading mode", async () => {
    const { container } = render(
      <DxcImage
        alt="Example image"
        width="100%"
        src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"
        caption="Caption"
        lazyLoading
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
