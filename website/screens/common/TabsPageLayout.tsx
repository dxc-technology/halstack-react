import React from "react";
import { useRouter } from "next/router";
import { DxcNavTabs } from "@dxc-technology/halstack-react";
import Link from "next/link";

type TabsPageLayoutProps = {
  tabs: { label: string; path: string }[];
};

const MyLink = React.forwardRef(({ path, children }, ref) => {
  return (
    <Link href={path} passHref>
      <a ref={ref}>{children}</a>
    </Link>
  );
});

const TabsPageLayout = ({ tabs }: TabsPageLayoutProps) => {
  const router = useRouter();

  return (
    <DxcNavTabs>
      {tabs.map((tab, index) => (
        <DxcNavTabs.Tab active={tab.path === router.pathname}>
          <MyLink path={tab.path}>{tab.label}</MyLink>
        </DxcNavTabs.Tab>
      ))}
    </DxcNavTabs>
  );
};

export default TabsPageLayout;
