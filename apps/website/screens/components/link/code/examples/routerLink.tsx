import { DxcLink, DxcInset } from "@dxc-technology/halstack-react";
import { ReactNode } from "react";

type routerProps = {
  to: string;
  component: ReactNode;
  children: string;
};

const RouterLink = ({ to, component, children }: routerProps) => {
  return <DxcLink href={to}>{children}</DxcLink>;
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
