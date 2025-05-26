import { ReactElement, ReactNode, useMemo, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DxcApplicationLayout, DxcTextInput, DxcToastsQueue } from "@dxc-technology/halstack-react";
import SidenavLogo from "@/common/sidenav/SidenavLogo";
import MainContent from "@/common/MainContent";
import { useRouter } from "next/router";
import { LinksSectionDetails, LinksSections } from "@/common/pagesList";
import Link from "next/link";
import StatusBadge from "@/common/StatusBadge";
import "../global-styles.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (_page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const componentWithLayout = getLayout(<Component {...pageProps} />);
  const [filter, setFilter] = useState("");
  const { asPath: currentPath } = useRouter();
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

  const matchPaths = (linkPath: string) => {
    const desiredPaths = [linkPath, `${linkPath}/code`];
    const pathToBeMatched = currentPath?.split("#")[0]?.slice(0, -1);
    return pathToBeMatched ? desiredPaths.includes(pathToBeMatched) : false;
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <DxcApplicationLayout
        visibilityToggleLabel="Menu"
        sidenav={
          <DxcApplicationLayout.SideNav title={<SidenavLogo />}>
            <DxcApplicationLayout.SideNav.Section>
              <DxcTextInput
                placeholder="Search docs"
                value={filter}
                onChange={({ value }: { value: string }) => {
                  setFilter(value);
                }}
                size="fillParent"
                clearable
                margin={{
                  top: "large",
                  bottom: "large",
                  right: "medium",
                  left: "medium",
                }}
              />
            </DxcApplicationLayout.SideNav.Section>
            {filteredLinks?.map(({ label, links }) => (
              <DxcApplicationLayout.SideNav.Section key={label}>
                <DxcApplicationLayout.SideNav.Group title={label}>
                  {links.map(({ label, path, status }) => (
                    <Link key={`${label}-${path}`} href={path} passHref legacyBehavior>
                      <DxcApplicationLayout.SideNav.Link selected={matchPaths(path)}>
                        {label}
                        {status && status !== "stable" && <StatusBadge hasTitle status={status} />}
                      </DxcApplicationLayout.SideNav.Link>
                    </Link>
                  ))}
                </DxcApplicationLayout.SideNav.Group>
              </DxcApplicationLayout.SideNav.Section>
            ))}
            <DxcApplicationLayout.SideNav.Section>
              <DxcApplicationLayout.SideNav.Link href="https://github.com/dxc-technology/halstack-react" newWindow>
                GitHub
              </DxcApplicationLayout.SideNav.Link>
            </DxcApplicationLayout.SideNav.Section>
          </DxcApplicationLayout.SideNav>
        }
      >
        <DxcApplicationLayout.Main>
          <DxcToastsQueue duration={7000}>
            <MainContent>{componentWithLayout}</MainContent>
          </DxcToastsQueue>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </>
  );
}
