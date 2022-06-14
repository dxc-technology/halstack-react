import { DxcNavTabs } from "@dxc-technology/halstack-react";

type routerProps = {
  to: string;
  component: Node;
  children: string;
};

const RouterLink = ({ to, component, children, ...other }: routerProps) => {
  return (
    <DxcNavTabs.Tab {...other} href={to}>
      {children}
    </DxcNavTabs.Tab>
  );
};

const code = `() => {
  return (
    <DxcNavTabs>
        <RouterLink to="/components/nav-tabs/" component={DxcNavTabs.Tab} active>
          Tab 1
        </RouterLink>
        <RouterLink to="/components/nav-tabs/" component={DxcNavTabs.Tab}>
          Tab 2
        </RouterLink>
        <RouterLink to="/components/nav-tabs/" component={DxcNavTabs.Tab}>
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
