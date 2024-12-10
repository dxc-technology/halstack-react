import { render } from "@testing-library/react";
import DxcImage from "./Image";

describe("Image component tests", () => {
  test("The component renders properly", () => {
    const { getByText } = render(
      <DxcImage
        alt="Example image"
        caption="Example caption"
        width="100%"
        src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg"
      />
    );
    expect(getByText("Example caption")).toBeTruthy();
  });
});
