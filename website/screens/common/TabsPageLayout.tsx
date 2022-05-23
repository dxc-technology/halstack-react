import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  DxcTabs,
  DxcStack,
  DxcText,
  DxcHeading,
  DxcNavTabs,
} from "@dxc-technology/halstack-react";
import { responsiveSizes } from "../common/variables";
import Link from "next/link";

type PageHeadingProps = {
  title: string;
  description: string;
  tabs: { label: string; path: string }[];
  children: React.ReactNode;
};

const MyLink = React.forwardRef(({ path, children }, ref) => {
  return (
    <Link href={path} passHref>
      <a ref={ref}>{children}</a>
    </Link>
  );
});

const PageHeading = ({
  title,
  tabs,
  description,
  children,
}: PageHeadingProps) => {
  const router = useRouter();

  return (
    <>
      <LayoutContainer>
        <DxcStack gutter="xxlarge">
          <DxcStack gutter="large">
            <DxcHeading text={title} level={1}></DxcHeading>
            <DxcText>{description}</DxcText>
          </DxcStack>

          <DxcNavTabs>
            {tabs.map((tab, index) => (
              <DxcNavTabs.Tab active={tab.path === router.pathname}>
                <MyLink path={tab.path}>{tab.label}</MyLink>
              </DxcNavTabs.Tab>
            ))}
          </DxcNavTabs>

          <div>{children}</div>
        </DxcStack>
      </LayoutContainer>
    </>
  );
};

const LayoutContainer = styled.div`
  max-width: var(--content-width);
  margin-left: var(--content-margin-left);
  margin-right: var(--content-margin-right);
  margin-top: var(--content-margin-top);
  margin-bottom: var(--content-margin-bottom);
  @media screen and (max-width: ${responsiveSizes.desktop}px) {
    margin-left: var(--content-mobile-margin-left);
    margin-right: var(--content-mobile-margin-right);
    margin-top: var(--content-mobile-margin-top);
    margin-bottom: var(--content-mobile-margin-bottom);
  }
`;

export default PageHeading;
