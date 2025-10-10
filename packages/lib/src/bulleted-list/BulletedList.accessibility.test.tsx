import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcBulletedList from "./BulletedList";

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
);

describe("Bulleted List component accessibility tests", () => {
  it("Should not have basic accessibility issues for disc mode", async () => {
    const { container } = render(
      <DxcBulletedList type="disc">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for icon mode", async () => {
    const { container } = render(
      <DxcBulletedList type="icon" icon={icon}>
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for number mode", async () => {
    const { container } = render(
      <DxcBulletedList type="number">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for square mode", async () => {
    const { container } = render(
      <DxcBulletedList type="square">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for circle mode", async () => {
    const { container } = render(
      <DxcBulletedList type="circle">
        <DxcBulletedList.Item>Code</DxcBulletedList.Item>
        <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
        <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
      </DxcBulletedList>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
