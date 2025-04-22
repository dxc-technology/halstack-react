import { render } from "@testing-library/react";
import DxcContainer from "./Container";

describe("Container component tests", () => {
  test("The component renders properly", () => {
    const { getByText } = render(
      <DxcContainer
        boxSizing="border-box"
        width="200px"
        height="200px"
        background={{ color: "var(--color-bg-primary-medium)" }}
        border={{
          top: {
            width: "var(--border-width-m)",
            color: "var(--border-color-secondary-strong)",
            style: "var(--border-style-default)",
          },
          bottom: {
            width: "var(--border-width-l)",
            color: "var(--border-color-primary-strong)",
            style: "var(--border-style-default)",
          },
        }}
        borderRadius="var(--border-radius-none) var(--border-radius-none) var(--border-radius-s) var(--border-radius-s)"
        padding="var(--spacing-padding-m)"
        margin="var(--spacing-padding-l)"
      >
        <b>Example text</b>
      </DxcContainer>
    );
    expect(getByText("Example text")).toBeTruthy();
  });
});
