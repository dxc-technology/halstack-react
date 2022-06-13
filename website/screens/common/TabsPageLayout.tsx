import { useRouter } from "next/router";
import { DxcNavTabs } from "@dxc-technology/halstack-react";
import React from "react";
import Link from "next/link";

type TabsPageLayoutProps = {
  tabs: { label: string; path: string }[];
};

const CustomTabLink = React.forwardRef(({ path, children, active }, ref) => {
  return (
    <Link href={path} passHref>
      <DxcNavTabs.Tab active={active} ref={ref}>
        {children}
      </DxcNavTabs.Tab>
    </Link>
  );
});

const TabsPageLayout = ({ tabs }: TabsPageLayoutProps) => {
  const router = useRouter();
  const tabsList = tabs ? tabs.map((tab) => ({ label: tab.label })) : [];
  const activeTabIndex = tabs.findIndex((tab) => tab.path === router.pathname);

  const handleTabChange = (index: number) => {
    router.push(tabs[index].path);
  };

  return (
    <DxcNavTabs>
      {tabs.map((tab, index) => (
        <CustomTabLink active={tab.path === router.pathname} path={tab.path}>
          {tab.label}
        </CustomTabLink>
      ))}
    </DxcNavTabs>
  );
};

export default TabsPageLayout;
