import { DxcLink, DxcInset } from "@dxc-technology/halstack-react";
import Link from "next/link";

const code = `() => {
  const CustomLink = React.forwardRef(
    ({ onClick, href, children, ...other }, ref) => {
      return (
        <DxcLink {...other} href={href} onClick={onClick} ref={ref}>
          {children}
        </DxcLink>
      );
    }
  );
  return (
    <DxcInset space="2rem">
      This is a text with a
      <Link href="/components/link" passHref legacyBehavior>
        <CustomLink>next</CustomLink>
      </Link>{" "}
      link.
    </DxcInset>
  );
}`;

const scope = {
  DxcLink,
  Link,
  React,
  DxcInset,
};

export default { code, scope };
