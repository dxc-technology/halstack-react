import { DxcNavTabs } from "@dxc-technology/halstack-react";
import { Link as RouterLink } from "react-router-dom";

const code = `() => {
  const MyCustomLink = React.forwardRef(({href, children}, ref) => (
      <RouterLink to={href} ref={ref}>
        {children}
      </RouterLink>
  ));

  return (
    <DxcNavTabs>
        <DxcNavTabs.Tab active>
          <MyCustomLink href="/components/button">
            Tab 1
          </MyCustomLink>
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab disabled>
          <MyCustomLink href="/components/button">
            Tab 2
          </MyCustomLink>
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab notificationNumber={120}>
          <MyCustomLink href="/components/button">
            Tab 3
          </MyCustomLink>
        </DxcNavTabs.Tab>
    </DxcNavTabs>
  );
}`;

const scope = {
  DxcNavTabs,
  RouterLink,
};

export default { code, scope };
