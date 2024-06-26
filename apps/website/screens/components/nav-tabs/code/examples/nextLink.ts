import { DxcNavTabs, DxcInset } from "@repo/ui";
import Link from "next/link";
import React from "react";

const code = `() => {
  const CustomNavTab = React.forwardRef(({ href, children, ...other }, ref) => {
    return (
      <DxcNavTabs.Tab {...other} href={href}>
        {children}
      </DxcNavTabs.Tab>
    );
  });

  return (
    <DxcInset space="2rem">
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
  React,
};

export default { code, scope };
