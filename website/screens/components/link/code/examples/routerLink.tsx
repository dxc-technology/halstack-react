import { DxcLink } from "@dxc-technology/halstack-react";

const RouterLink = ({ to, component, children }) => {
  return <DxcLink href={to}>{children}</DxcLink>;
};

const code = `() => {
  return (
    <p>
        This is a text with a 
        <RouterLink to="/components/link" component={DxcLink}>React Router v5</RouterLink>
        {" "}link.
    </p>
  );
}`;

const scope = {
  DxcLink,
  RouterLink,
};

export default { code, scope };
