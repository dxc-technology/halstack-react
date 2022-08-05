import { ReactElement, ReactNode, useMemo, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcSidenav,
  DxcTextInput,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import "../global-styles.css";
import { responsiveSizes } from "../screens/common/variables.js";
import SidenavLogo from "@/common/sidenav/SidenavLogo";
import { useRouter } from "next/router";
import { LinksSections } from "@/common/pagesList";
import Link from "next/link";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const componentWithLayout = getLayout(<Component {...pageProps} />);

  const [filter, setFilter] = useState("");
  const { asPath: currentPath } = useRouter();

  const onFilterInputChange = ({ value }: { value: string }) => {
    setFilter(value);
  };

  const filteredLinks = useMemo(
    () =>
      LinksSections.filter((section) => {
        const sectionFilteredLinks = section?.links.filter((link) =>
          link.label.toLowerCase().includes(filter.toLowerCase())
        );
        if (sectionFilteredLinks.length) {
          return { label: section.label, links: sectionFilteredLinks };
        }
      }),
    [filter]
  );

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <HalstackProvider advancedTheme={{}}>
        <DxcApplicationLayout visibilityToggleLabel="Menu">
          <DxcApplicationLayout.SideNav title={<SidenavLogo />}>
            <DxcSidenav.Section>
              <DxcTextInput
                placeholder="Search docs"
                value={filter}
                onChange={onFilterInputChange}
                size="fillParent"
                clearable
                margin={{
                  top: "small",
                  bottom: "small",
                  right: "xsmall",
                  left: "xsmall",
                }}
              />
            </DxcSidenav.Section>
            {filteredLinks?.map(({ label, links }) => {
              return (
                <DxcSidenav.Section key={label}>
                  <DxcSidenav.Group title={label}>
                    {links.map(({ label, path }) => (
                      <Link key={`${label}-${path}`} href={path} passHref>
                        <DxcSidenav.Link
                          selected={
                            currentPath.slice(0, -1) === path ||
                            currentPath.slice(0, -1) ===
                              path + "/specifications" ||
                            currentPath.slice(0, -1) === path + "/usage"
                          }
                        >
                          {label}
                        </DxcSidenav.Link>
                      </Link>
                    ))}
                  </DxcSidenav.Group>
                </DxcSidenav.Section>
              );
            })}
          </DxcApplicationLayout.SideNav>
          <DxcApplicationLayout.Main>
            <MainContainer>{componentWithLayout}</MainContainer>
          </DxcApplicationLayout.Main>
        </DxcApplicationLayout>
      </HalstackProvider>
    </>
  );
}

const MainContainer = styled.div`
  margin: 80px auto;
  max-width: 1124px;

  @media (max-width: ${responsiveSizes.laptop}px) {
    margin: 80px 32px;
  }

  @media (max-width: ${responsiveSizes.desktop}px) {
    margin: 80px 5%;
  }
`;

export default MyApp;
