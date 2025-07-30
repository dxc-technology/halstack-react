import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";

type routerProps = {
  replace?: string;
  state?: string;
  target?: string;
};

const useLinkClickHandler = (to: string, { replace, state, target }: routerProps = {}) => {
  return (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("Mock navigation to:", to, { replace, state, target });
  };
};

const code = `() => {
  const CustomTab = React.forwardRef(
    ({ onClick, replace = false, state, target, to, ...rest }, ref) => {
      const handleClick = useLinkClickHandler(to, { replace, state, target });
      return (
        <DxcNavTabs.Tab
          {...rest}
          onClick={handleClick}
          ref={ref}
          target={target}
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
  useLinkClickHandler,
};

export default { code, scope };
