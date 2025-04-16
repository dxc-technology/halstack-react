import { DxcLink, DxcInset } from "@dxc-technology/halstack-react";
import Link from "next/link";
import { forwardRef } from "react";

const code = `() => {
  const CustomLink = forwardRef(
    ({ onClick, href, children, ...other }, ref) => {
      return (
        <DxcLink {...other} href={href} onClick={onClick} ref={ref}>
          {children}
        </DxcLink>
      );
    }
  );
  return (
    <DxcInset space="var(--spacing-gap-xl)">
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
  forwardRef,
  DxcInset,
};

export default { code, scope };
