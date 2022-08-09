import { ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcInset,
  DxcSelect,
  DxcTextInput,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import "../global-styles.css";
import { responsiveSizes } from "../screens/common/variables.js";
import SidenavLogo from "@/common/sidenav/SidenavLogo";
import { useRouter } from "next/router";
import { LinksSectionDetails, LinksSections } from "@/common/pagesList";
import Link from "next/link";
import axios from "axios";
import portal from "@/common/portal.json";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type VersionsResponse = {
  versionNumber: number | string;
  versionURL: string;
  current: boolean;
};

type Version = {
  label: string;
  value: string;
  url: string;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const componentWithLayout = getLayout(<Component {...pageProps} />);

  const [filter, setFilter] = useState("");
  const { asPath: currentPath } = useRouter();

  const [versions, setVersions] = useState<Version[]>([]);
  const [selectedVersion, setSelectedVersion] = useState("");

  const onFilterInputChange = ({ value }: { value: string }) => {
    setFilter(value);
  };

  const filteredLinks = useMemo(() => {
    const filtered: LinksSectionDetails[] = [];
    LinksSections.map((section) => {
      const sectionFilteredLinks = section?.links.filter((link) =>
        link.label.toLowerCase().includes(filter.toLowerCase())
      );
      if (sectionFilteredLinks.length) {
        filtered.push({ label: section.label, links: sectionFilteredLinks });
      }
    });
    return filtered;
  }, [filter]);

  useEffect(() => {
    const fetchVersions = async () => {
      const versionsResp = await axios({
        method: "get",
        url: portal.url,
      });
      setVersions(
        versionsResp.data.map(
          ({ versionNumber, versionURL }: VersionsResponse) => ({
            label: versionNumber.toString(),
            value: versionNumber.toString(),
            url: versionURL,
          })
        )
      );
      const versionUrl = window.location.pathname;
      const currentSelectedVersion =
        versionUrl.split("/")[2] ||
        versionsResp.data
          .find((v: VersionsResponse) => v.current)
          .versionNumber.toString();
      setSelectedVersion(currentSelectedVersion);
    };

    fetchVersions();
  }, []);

  const changeVersion = ({ value }: { value: string | undefined }) => {
    if (typeof value === "string" && versions) {
      const newVersion: Version | undefined = versions?.find(
        (v: Version) => v.label === value
      );
      if (newVersion) window.location.href = newVersion.url;
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <HalstackProvider advancedTheme={{}}>
        <DxcApplicationLayout
          visibilityToggleLabel="Menu"
          header={
            <DxcApplicationLayout.Header
              underlined
              content={
                <DxcSelect
                  options={versions}
                  value={selectedVersion}
                  onChange={changeVersion}
                  size="small"
                />
              }
              responsiveContent={() => (
                <DxcInset top="1rem">
                  <DxcSelect
                    options={versions}
                    value={selectedVersion}
                    onChange={changeVersion}
                    size="small"
                  />
                </DxcInset>
              )}
            />
          }
          sidenav={
            <DxcApplicationLayout.SideNav title={<SidenavLogo />}>
              <DxcApplicationLayout.SideNav.Section>
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
              </DxcApplicationLayout.SideNav.Section>
              {filteredLinks?.map(({ label, links }) => {
                return (
                  <DxcApplicationLayout.SideNav.Section key={label}>
                    <DxcApplicationLayout.SideNav.Group title={label}>
                      {links.map(({ label, path }) => (
                        <Link key={`${label}-${path}`} href={path} passHref>
                          <DxcApplicationLayout.SideNav.Link
                            selected={
                              currentPath.slice(0, -1) === path ||
                              currentPath.slice(0, -1) ===
                                path + "/specifications" ||
                              currentPath.slice(0, -1) === path + "/usage"
                            }
                          >
                            {label}
                          </DxcApplicationLayout.SideNav.Link>
                        </Link>
                      ))}
                    </DxcApplicationLayout.SideNav.Group>
                  </DxcApplicationLayout.SideNav.Section>
                );
              })}
            </DxcApplicationLayout.SideNav>
          }
        >
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
