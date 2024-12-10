import { render } from "@testing-library/react";
import DxcBulletedList from "./BulletedList";

describe("Bulleted list component tests", () => {
  test("The component renders properly", () => {
    const { getByText } = render(
      <DxcBulletedList>
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(getByText("Code")).toBeTruthy();
    expect(getByText("Usage")).toBeTruthy();
    expect(getByText("Specifications")).toBeTruthy();
  });
});
