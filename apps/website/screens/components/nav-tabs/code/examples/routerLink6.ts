import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";

type routerProps = {
  replace?: string;
  state?: string;
  target?: string;
};

const useNavigate = () => {
  return (to: string, options?: { replace?: boolean; state?: any }) => {
    console.log(`Use navigate mock function called "${to}"`, options);
  };
};

const code = `() => {
  const CustomTab = React.forwardRef(
    ({ children, to, replace = false, state, ...rest }, ref) => {
      const navigate = useNavigate();

      const handleClick = () => {
        navigate(to, { replace, state });
      };

      return (
        <DxcNavTabs.Tab
          {...rest}
          onClick={handleClick}
          ref={ref}
        />
      );
    }
  );
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcNavTabs>
        <CustomTab active to="/components/nav-tabs/">
          Tab 1
        </CustomTab>
        <CustomTab to="/components/nav-tabs/">Tab 2</CustomTab>
        <CustomTab to="/components/nav-tabs/">Tab 3</CustomTab>
      </DxcNavTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcNavTabs,
  DxcInset,
  useNavigate,
};

export default { code, scope };
