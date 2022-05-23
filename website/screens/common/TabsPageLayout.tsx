import { useRouter } from "next/router";
import { DxcTabs } from "@dxc-technology/halstack-react";

type TabsPageLayoutProps = {
  tabs: { label: string; path: string }[];
};

const TabsPageLayout = ({ tabs }: TabsPageLayoutProps) => {
  const router = useRouter();
  const tabsList = tabs ? tabs.map((tab) => ({ label: tab.label })) : [];
  const activeTabIndex = tabs.findIndex((tab) => tab.path === router.pathname);

  const handleTabChange = (index: number) => {
    router.push(tabs[index].path);
  };

  return (
    <DxcTabs
      activeTabIndex={activeTabIndex}
      tabs={tabsList}
      onTabClick={handleTabChange}
    ></DxcTabs>
  );
};

export default TabsPageLayout;
