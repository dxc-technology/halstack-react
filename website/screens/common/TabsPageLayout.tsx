import { useRouter } from "next/router";
import { DxcNavTabs } from "@dxc-technology/halstack-react";
import React from "react";
import Link from "next/link";

type TabsPageLayoutProps = {
  tabs: { label: string; path: string }[];
};

const TabsPageLayout = ({ tabs }: TabsPageLayoutProps) => {
  const router = useRouter();
  // const tabsList = tabs ? tabs.map((tab) => ({ label: tab.label })) : [];
  // const activeTabIndex = tabs.findIndex((tab) => tab.path === router.pathname);

  const handleTabChange = (index: number) => {
    router.push(tabs[index].path);
  };

  return (
    <DxcNavTabs>
      {tabs.map((tab, index) => (
        <Link key={index} href={tab.path} passHref>
          <DxcNavTabs.Tab active={tab.path === router.pathname}>
            {tab.label}
          </DxcNavTabs.Tab>
        </Link>
      ))}
    </DxcNavTabs>
  );
};

export default TabsPageLayout;
