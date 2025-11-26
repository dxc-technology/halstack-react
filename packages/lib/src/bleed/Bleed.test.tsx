import { render } from "@testing-library/react";
import DxcBleed from "./Bleed";

describe("Bleed component tests", () => {
  test("Bleed renders correctly with children", () => {
    const testContent = "Test content";
    const { getByText } = render(
      <DxcBleed space="1rem">
        <div>{testContent}</div>
      </DxcBleed>
    );
    expect(getByText(testContent)).toBeTruthy();
  });
});
