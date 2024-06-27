import { useRouter } from "next/router";
import { DxcNavTabs } from "@dxc-technology/halstack-react";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

type TabsPageLayoutProps = {
  tabs: { label: string; path: string }[];
};

const TabsPageLayout = ({ tabs }: TabsPageLayoutProps) => {
  const router = useRouter();

  return (
    <DxcNavTabs>
      {tabs.map((tab, index) => (
        <Link key={index} href={tab.path} passHref legacyBehavior>
          <DxcNavTabs.Tab active={tab.path === router.pathname}>{tab.label}</DxcNavTabs.Tab>
        </Link>
      ))}
    </DxcNavTabs>
  );
};

export default TabsPageLayout;
