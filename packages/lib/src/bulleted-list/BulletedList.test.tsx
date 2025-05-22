import { render } from "@testing-library/react";
import DxcBulletedList from "./BulletedList";
import DxcIcon from "../icon/Icon";

describe("Bulleted list component tests", () => {
  test("The component The component renders properly", () => {
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
  test("The component The component renders default (disc) bullets", () => {
    const { container } = render(
      <DxcBulletedList>
        <DxcBulletedList.Item>Item 1</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("ul")).toBeTruthy();
    expect(container.querySelector("div")).toBeTruthy();
  });

  test("The component renders square bullets", () => {
    const { container } = render(
      <DxcBulletedList type="square">
        <DxcBulletedList.Item>Square Item</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("ul")).toBeTruthy();
    expect(container.querySelector("div")).toBeTruthy();
    expect(container.innerHTML).toContain("Square Item");
  });

  test("The component renders circle bullets", () => {
    const { container } = render(
      <DxcBulletedList type="circle">
        <DxcBulletedList.Item>Circle Item</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("ul")).toBeTruthy();
    expect(container.innerHTML).toContain("Circle Item");
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
    const { container } = render(
      <DxcBulletedList type="icon" icon={<DxcIcon icon="home" />}>
        <DxcBulletedList.Item>Icon React Element</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    expect(container.querySelector("span")).toBeTruthy();
    expect(container.innerHTML).toContain("Icon React Element");
  });
});
