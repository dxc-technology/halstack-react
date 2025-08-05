import { DxcLink, DxcInset } from "@dxc-technology/halstack-react";
import { forwardRef } from "react";

const useHref = (to: string) => {
  console.log(to);
};

const useNavigate = () => {
  return (to: string, options?: { replace?: boolean; state?: any }) => {
    console.log(`Use navigate mock function called "${to}"`, options);
  };
};
const code = `() => {
  const CustomLink = forwardRef(
    ({ children, to, replace = false, state, ...rest }, ref) => {
      const navigate = useNavigate();

      const handleClick = () => {
        navigate(to, { replace, state });
      };

      return (
        <DxcLink {...rest} onClick={handleClick} ref={ref}>
          {children}
        </DxcLink>
      );
    }
  );
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      This is a text with a
      <CustomLink to="/components/link" component={DxcLink}>
        React Router v6
      </CustomLink>{" "}
      link.
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcLink,
  forwardRef,
  useHref,
  useNavigate,
};

export default { code, scope };
