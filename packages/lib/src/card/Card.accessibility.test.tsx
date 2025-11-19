import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcCard from "./Card";

describe("Card component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcCard
        linkHref="https://www.dxc.com"
        imageSrc="https://picsum.photos/id/1022/200/300"
        imagePosition="after"
        imagePadding="xsmall"
        margin="medium"
        imageBgColor="yellow"
        imageCover
      >
        test-card
      </DxcCard>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
