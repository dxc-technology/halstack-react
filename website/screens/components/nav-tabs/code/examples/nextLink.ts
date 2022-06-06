import { DxcNavTabs } from "@dxc-technology/halstack-react";
import Link from "next/link";
import React from "react";

const code = `() => {
  const CustomNavTab = React.forwardRef(({ href, children, ...other }) => {
    return (
      <DxcNavTabs.Tab {...other} href={href}>
        {children}
      </DxcNavTabs.Tab>
    );
  });
  return (
    <DxcNavTabs>
      <Link href="components/nav-tabs/" passHref>
        <CustomNavTab active>
          Tab 1
        </CustomNavTab>
      </Link>
      <Link href="components/nav-tabs/" passHref>
        <CustomNavTab>
          Tab 2
        </CustomNavTab>
      </Link>
      <Link href="components/nav-tabs/" passHref>
        <CustomNavTab>
          Tab 3
        </CustomNavTab>
      </Link>
    </DxcNavTabs>
  );
}`;

const scope = {
  DxcNavTabs,
  Link,
  React,
};

export default { code, scope };
