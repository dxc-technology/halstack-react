import { ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DxcApplicationLayout, DxcTextInput, DxcToastsQueue } from "@dxc-technology/halstack-react";
import MainContent from "@/common/MainContent";
import { useRouter } from "next/router";
import { LinksSectionDetails, LinksSections } from "@/common/pagesList";
import StatusBadge from "@/common/StatusBadge";
import "../global-styles.css";
import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GroupItem, Item, Section } from "../../../packages/lib/src/base-menu/types";
import { isGroupItem } from "../../../packages/lib/src/base-menu/utils";
import SidenavLogo from "@/common/sidenav/SidenavLogo";

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
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  const filterSections = (sections: Section[], query: string): Section[] => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;

    const filterItem = (item: Item | GroupItem): Item | GroupItem | null => {
      const labelMatches = item.label.toLowerCase().includes(q);

      if (!isGroupItem(item)) return labelMatches ? item : null;

      const items = item.items.reduce<(Item | GroupItem)[]>((acc, child) => {
        const filtered = filterItem(child);
        if (filtered) acc.push(filtered);
        return acc;
      }, []);

      return labelMatches || items.length ? { ...item, items } : null;
    };

    return sections.reduce<Section[]>((acc, section) => {
      const items = section.items.reduce<(Item | GroupItem)[]>((acc, item) => {
        const filtered = filterItem(item);
        if (filtered) acc.push(filtered);
        return acc;
      }, []);
      if (items.length) acc.push({ ...section, items });
      return acc;
    }, []);
  };

  const mapLinksToGroupItems = (sections: LinksSectionDetails[]): Section[] => {
    const matchPaths = (linkPath: string) => {
      const desiredPaths = [linkPath, `${linkPath}/code`];
      const pathToBeMatched = pathname?.split("#")[0]?.slice(0, -1);
      return pathToBeMatched ? desiredPaths.includes(pathToBeMatched) : false;
    };

    return sections.map((section) => ({
      title: section.label,
      items: section.links.map((link) => ({
        label: link.label,
        href: link.path,
        selected: matchPaths(link.path),
        ...(link.status && {
          badge: link.status !== "stable" ? <StatusBadge hasTitle status={link.status} /> : undefined,
        }),
        renderItem: ({ children }: { children: ReactNode }) => (
          <Link key={link.path} href={link.path} passHref legacyBehavior>
            {children}
          </Link>
        ),
      })),
    }));
  };

  useEffect(() => {
    const paths = [...new Set(LinksSections.flatMap((s) => s.links.map((l) => l.path)))];
    const prefetchPaths = async () => {
      for (const path of paths) {
        await router.prefetch(path);
      }
    };
    void prefetchPaths();
  }, []);

  // TODO: ADD NEW CATEGORIZATION

  const filteredSections = useMemo(() => {
    const sections = mapLinksToGroupItems(LinksSections);
    console.log("SECTIONS", sections);
    return filterSections(sections, filter);
  }, [filter]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <DxcApplicationLayout
        sidenav={
          <DxcApplicationLayout.Sidenav
            navItems={filteredSections}
            branding={<SidenavLogo expanded={isExpanded} />}
            topContent={
              isExpanded ? (
                <DxcTextInput
                  placeholder="Search docs"
                  value={filter}
                  onChange={({ value }: { value: string }) => {
                    setFilter(value);
                  }}
                  size="fillParent"
                  clearable
                />
              ) : (
                <></>
              )
            }
            expanded={isExpanded}
            onExpandedChange={() => {
              setIsExpanded((currentlyExpanded) => !currentlyExpanded);
            }}
          />
        }
      >
        <DxcApplicationLayout.Main>
          <DxcToastsQueue duration={7000}>
            <MainContent>{componentWithLayout}</MainContent>
          </DxcToastsQueue>
        </DxcApplicationLayout.Main>
      </DxcApplicationLayout>
    </CacheProvider>
  );
}
