import { DxcNavTabs } from "@dxc-technology/halstack-react";

const RouterLink = ({ to, component, children }) => {
  return <DxcNavTabs.Tab href={to}>{children}</DxcNavTabs.Tab>;
};

const code = `() => {
  return (
    <DxcNavTabs>
        <RouterLink to="/components/button" component={DxcNavTabs.Tab} active>
          Tab 1
        </RouterLink>
        <RouterLink to="/components/button" component={DxcNavTabs.Tab} disabled>
          Tab 2
        </RouterLink>
        <RouterLink to="/components/button" component={DxcNavTabs.Tab} notificationNumber={120}>
          Tab 3
        </RouterLink>
    </DxcNavTabs>
  );
}`;

const scope = {
  DxcNavTabs,
  RouterLink,
};

export default { code, scope };
