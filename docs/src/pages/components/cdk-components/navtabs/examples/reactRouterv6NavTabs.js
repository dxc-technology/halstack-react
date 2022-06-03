import { DxcNavTabs } from "@dxc-technology/halstack-react";

const useHref = (to) => {
  console.log(to);
};

const useLinkClickHandler = (to, { replace, state, target }) => {};

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
    <>
      <DxcNavTabs>
        <CustomTab active to="/components/">
          Tab 1
        </CustomTab>
        <CustomTab active to="/components/">
          Tab 2
        </CustomTab>
        <CustomTab active to="/components/">
          Tab 3
        </CustomTab>
      </DxcNavTabs>
    </>
  );
}`;

const scope = {
  DxcNavTabs,
  useHref,
  useLinkClickHandler,
};

export default { code, scope };
