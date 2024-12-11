import { render } from "@testing-library/react";
import DxcParagraph from "./Paragraph";

describe("Paragraph component tests", () => {
  test("The component renders properly", () => {
    const { getByText } = render(
      <DxcParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tortor sit amet velit auctor cursus id eget
        nisl. Vivamus luctus egestas eros, at mattis libero eleifend ac. Integer vel urna rutrum, pretium arcu
        dignissim, fringilla turpis.
      </DxcParagraph>
    );
    expect(getByText(/Lorem ipsum/i)).toBeTruthy();
  });
});
