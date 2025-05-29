import { render } from "@testing-library/react";
import DxcBulletedList from "./BulletedList";
import DxcIcon from "../icon/Icon";

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
  test("The component renders default (disc) bullets", () => {
    const { container } = render(
      <DxcBulletedList>
        <DxcBulletedList.Item>Item 1</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("ul")).toBeTruthy();
    expect(container.querySelector("div")).toBeTruthy();
  });

  test("The component renders number bullets", () => {
    const { container, getByText } = render(
      <DxcBulletedList type="number">
        <DxcBulletedList.Item>Numbered Item</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("ol")).toBeTruthy();
    expect(getByText("1.")).toBeTruthy();
  });

  test("The component renders icon bullets with icon string", () => {
    const { container } = render(
      <DxcBulletedList type="icon" icon="home">
        <DxcBulletedList.Item>Icon Item</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("span")).toBeTruthy();
    expect(container.innerHTML).toContain("Icon Item");
  });

  test("The component renders icon bullets with React element icon", () => {
    const icon = (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    );
    const { container } = render(
      <DxcBulletedList type="icon" icon={icon}>
        <DxcBulletedList.Item>Icon React Element</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("svg")).toBeTruthy();
    expect(container.innerHTML).toContain("Icon React Element");
  });
});
