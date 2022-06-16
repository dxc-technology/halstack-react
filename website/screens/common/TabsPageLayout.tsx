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
    <TabsContainer>
      <DxcNavTabs>
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.path} passHref>
            <DxcNavTabs.Tab active={tab.path === router.pathname}>
              {tab.label}
            </DxcNavTabs.Tab>
          </Link>
        ))}
      </DxcNavTabs>
      <Space></Space>
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

const Space = styled.div`
  border-bottom: 2px solid #0000001a;
  width: 100%;
`;

export default TabsPageLayout;
