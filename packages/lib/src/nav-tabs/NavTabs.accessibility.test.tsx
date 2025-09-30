import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcNavTabs from "./NavTabs";

const favoriteIcon = "filled_Favorite";
const pinIcon = "Location_On";

describe("Tabs component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcNavTabs iconPosition="left">
        <DxcNavTabs.Tab href="/test1" icon={favoriteIcon} active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test2" icon={favoriteIcon} disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test3" icon={pinIcon} notificationNumber={12}>
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
