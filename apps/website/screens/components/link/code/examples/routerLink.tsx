import { DxcLink, DxcInset } from "@dxc-technology/halstack-react";
import { ElementType } from "react";

type RouterLinkProps = {
  to: string;
  component?: ElementType;
  children: string;
} & React.ComponentProps<typeof DxcLink>;

const RouterLink = ({ to, component: Component = DxcLink, children, ...other }: RouterLinkProps) => {
  return (
    <Component {...other} href={to}>
      {children}
    </Component>
  );
};

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      This is a text with a 
      <RouterLink to="/components/link" component={DxcLink}>React Router v5</RouterLink>
      {" "}link.
    </DxcInset>
  );
}`;

const scope = {
  DxcLink,
  RouterLink,
  DxcInset,
};

export default { code, scope };
