import { ReactElement, ReactNode, useMemo, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DxcApplicationLayout, DxcLink, DxcToastsQueue } from "@dxc-technology/halstack-react";
import MainContent from "@/common/MainContent";
import { useRouter } from "next/router";
import { LinkDetails, LinksSectionDetails, LinksSections } from "@/common/pagesList";
import StatusBadge from "@/common/StatusBadge";
import "../global-styles.css";
import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Link from "next/link";
import { GroupItem, Item, Section } from "../../../packages/lib/src/base-menu/types";
import { isGroupItem } from "../../../packages/lib/src/base-menu/utils";
import SidenavLogo from "@/common/sidenav/SidenavLogo";
import { dxcLogo } from "@/common/images/dxc_logo";

type NextPageWithLayout = NextPage & {
  getLayout?: (_page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createCache({ key: "css", prepend: true });

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const componentWithLayout = getLayout(<Component {...pageProps} />);
  const [filter, setFilter] = useState("");
  const { asPath: currentPath } = useRouter();
  const isThemeGenerator = currentPath.includes("/theme-generator");

  const matchPaths = (linkPath: string) => {
    const desiredPaths = [linkPath, `${linkPath}/code`];
    const pathToBeMatched = currentPath?.split("#")[0]?.slice(0, -1);
    return pathToBeMatched ? desiredPaths.includes(pathToBeMatched) : false;
  };

  const createNavItem = (link: LinkDetails): Item => ({
    label: link.label,
    href: link.path,
    selected: matchPaths(link.path),
    badge: link.status && link.status !== "stable" ? <StatusBadge hasTitle status={link.status} /> : undefined,
    icon: link.icon,
    renderItem: ({ children }: { children: ReactNode }) => (
      <Link href={link.path} passHref legacyBehavior>
        {children}
      </Link>
    ),
  });

  const normalizeNavTabs = (links: (LinkDetails | LinksSectionDetails)[]): (Item | GroupItem)[] => {
    return links.map((link) => {
      if ("links" in link) {
        return {
          label: link.label,
          icon: link.icon,
          items: normalizeNavTabs(link.links),
        } as GroupItem;
      }

      return createNavItem(link);
    });
  };

  const filterNavTree = (items: (Item | GroupItem)[], q: string): (Item | GroupItem)[] => {
    const result: (Item | GroupItem)[] = [];

    for (const item of items) {
      if (isGroupItem(item)) {
        const matches = item.label.toLowerCase().includes(q);
        const filteredChildren = matches ? item.items : filterNavTree(item.items, q);

        if (matches || filteredChildren.length > 0) {
          result.push({ ...item, items: filteredChildren, defaultOpen: true });
        }
      } else {
        if (item.label.toLowerCase().includes(q)) {
          result.push(item);
        }
      }
    }

    return result;
  };

  const navItems: Section[] = useMemo(() => {
    const q = filter.trim().toLowerCase();

    return LinksSections.map((section) => {
      const baseItems = normalizeNavTabs(section.links);
      const sectionMatches = section.label.toLowerCase().includes(q);

      const items = filter ? (sectionMatches ? baseItems : filterNavTree(baseItems, q)) : baseItems;

      return {
        title: section.label,
        items: section.label === "Components" ? items.map((item) => ({ ...item, defaultOpen: true })) : items,
      };
    }).filter((section) => section.items.length > 0);
  }, [currentPath, filter]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <DxcApplicationLayout
        logo={{ src: dxcLogo, alt: "DXC Technology" }}
        header={
          isThemeGenerator ? (
            <DxcApplicationLayout.Header
              appTitle="Theme Generator"
              sideContent={
                // Will navigate to a documentation page that will probably be open in a different tab.
                <Link href="">
                  <DxcLink icon="description">Documentation</DxcLink>
                </Link>
              }
            />
          ) : (
            <DxcApplicationLayout.Header />
          )
        }
        sidenav={
          !isThemeGenerator && (
            <DxcApplicationLayout.Sidenav
              navItems={navItems}
              appTitle={<SidenavLogo />}
              searchBar={{ placeholder: "Search docs", onChange: (value) => setFilter(value) }}
            />
          )
        }
        footer={isThemeGenerator && <DxcApplicationLayout.Footer mode="reduced" />}
      >
        <DxcApplicationLayout.Main>
          <DxcToastsQueue duration={7000}>
            {!isThemeGenerator ? <MainContent>{componentWithLayout}</MainContent> : <>{componentWithLayout}</>}
          </DxcToastsQueue>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </CacheProvider>
  );
}
