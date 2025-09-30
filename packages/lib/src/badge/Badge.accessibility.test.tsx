import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcBadge from "./Badge";
import DxcFlex from "../flex/Flex";

const icon = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z" />
    <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
);

describe("Badge component accessibility tests", () => {
  it("Should not have basic accessibility issues for contextual mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcBadge color="blue" mode="contextual" label="Label" size="small" icon={icon} title="Badge1" />
        <DxcBadge color="green" mode="contextual" label="Label" size="small" icon={icon} title="Badge1" />
        <DxcBadge color="grey" mode="contextual" label="Label" size="small" icon={icon} title="Badge1" />
        <DxcBadge color="orange" mode="contextual" label="Label" size="small" icon={icon} title="Badge1" />
        <DxcBadge color="purple" mode="contextual" label="Label" size="small" icon={icon} title="Badge1" />
        <DxcBadge color="red" mode="contextual" label="Label" size="small" icon={icon} title="Badge1" />
        <DxcBadge color="yellow" mode="contextual" label="Label" size="small" icon={icon} title="Badge1" />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for notification mode", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcBadge mode="notification" label={100} size="large" icon={icon} notificationLimit={99} title="Badge2" />
        <DxcBadge mode="notification" label={50} size="large" icon={icon} notificationLimit={99} title="Badge2" />
        <DxcBadge
          mode="notification"
          label={1000000}
          size="large"
          icon={icon}
          notificationLimit={99999999}
          title="Badge2"
        />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
