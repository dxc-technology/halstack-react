import { DxcNavTabs, DxcInset } from "@dxc-technology/halstack-react";
import Link from "next/link";
import { forwardRef } from "react";

const code = `() => {
  const CustomNavTab = forwardRef(({ href, children, ...other }, ref) => {
    return (
      <DxcNavTabs.Tab {...other} href={href}>
        {children}
      </DxcNavTabs.Tab>
    );
  });

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcNavTabs>
        <Link href="/components/nav-tabs/" passHref legacyBehavior>
          <CustomNavTab active>Tab 1</CustomNavTab>
        </Link>
        <Link href="/components/nav-tabs/" passHref legacyBehavior>
          <CustomNavTab>Tab 2</CustomNavTab>
        </Link>
        <Link href="/components/nav-tabs/" passHref legacyBehavior>
          <CustomNavTab>Tab 3</CustomNavTab>
        </Link>
      </DxcNavTabs>
    </DxcInset>
  );
}`;

const scope = {
  DxcNavTabs,
  DxcInset,
  Link,
  forwardRef,
};

export default { code, scope };
