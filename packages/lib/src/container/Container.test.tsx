import { render } from "@testing-library/react";
import DxcContainer from "./Container";

describe("Container component tests", () => {
  test("The component renders properly", () => {
    const { getByText } = render(
      <DxcContainer
        boxSizing="border-box"
        width="200px"
        height="200px"
        background={{ color: "color_purple_400" }}
        border={{
          top: {
            width: "2px",
            color: "color_blue_600",
            style: "solid",
          },
          bottom: {
            width: "thick",
            color: "color_purple_600",
            style: "solid",
          },
        }}
        borderRadius="0 0 0.25rem 0.25rem"
        padding="medium"
        margin="large"
      >
        <b>Example text</b>
      </DxcContainer>
    );
    expect(getByText("Example text")).toBeTruthy();
  });
});
