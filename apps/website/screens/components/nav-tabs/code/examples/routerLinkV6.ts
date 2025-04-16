import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";

type routerProps = {
  replace: string;
  state: string;
  target: string;
};

const useHref = (to: string) => {
  console.log(to);
};

const useLinkClickHandler = (to: string, { replace, state, target }: routerProps) => {};

const code = `() => {
  const CustomTab = React.forwardRef(
    ({ onClick, replace = false, state, target, to, ...rest }, ref) => {
      let href = useHref(to);
      let handleClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
      });
      return (
        <DxcNavTabs.Tab
          {...rest}
          href={href}
          onClick={(event) => {
            if (!event.defaultPrevented) {
              handleClick(event);
            }
          }}
          ref={ref}
          target={target}
        />
      );
    }
  );

  return (
    <DxcInset space="var(--spacing-gap-xl)">
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
  useHref,
  useLinkClickHandler,
};

export default { code, scope };
