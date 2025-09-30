import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";
import { ElementType } from "react";

type RouterLinkProps = {
  to: string;
  component?: ElementType;
  children: string;
} & React.ComponentProps<typeof DxcNavTabs.Tab>;

const RouterLink = ({ to, component: Component = DxcNavTabs.Tab, children, ...other }: RouterLinkProps) => {
  return (
    <Component {...other} href={to}>
      {children}
    </Component>
  );
};

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcNavTabs>
        <RouterLink
          to="/components/nav-tabs/"
          component={DxcNavTabs.Tab}
          active
        >
          Tab 1
        </RouterLink>
        <RouterLink to="/components/nav-tabs/" component={DxcNavTabs.Tab}>
          Tab 2
        </RouterLink>
        <RouterLink to="/components/nav-tabs/" component={DxcNavTabs.Tab}>
          Tab 3
        </RouterLink>
      </DxcNavTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcNavTabs,
  DxcInset,
  RouterLink,
};

export default { code, scope };
