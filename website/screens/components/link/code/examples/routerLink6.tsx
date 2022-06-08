import { DxcLink } from "@dxc-technology/halstack-react";

const useHref = (to: string) => {
  console.log(to);
};

type routerProps = {
  replace: string;
  state: string;
  target: string;
};

const useLinkClickHandler = (to: string, { replace, state, target }: routerProps) => {};

const code = `() => {
  const CustomLink = React.forwardRef(
    ({ onClick, replace = false, state, target, to, ...rest }, ref) => {
      let href = useHref(to);
      let handleClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
      });

      return (
        <DxcLink
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
    <p>
      This is a text with a
      <CustomLink to="/components/link" component={DxcLink}>
        React Router v6
      </CustomLink>{" "}
      link.
    </p>
  );
}`;

const scope = {
  DxcLink,
  useHref,
  useLinkClickHandler,
};

export default { code, scope };
