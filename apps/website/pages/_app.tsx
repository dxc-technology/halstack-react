import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DxcApplicationLayout, DxcToastsQueue } from "@dxc-technology/halstack-react";
import MainContent from "@/common/MainContent";
import { useRouter } from "next/router";
import { LinksSectionDetails, LinksSections } from "@/common/pagesList";
import StatusBadge from "@/common/StatusBadge";
import "../global-styles.css";
import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { usePathname } from "next/navigation";

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
  // const [filter, setFilter] = useState("");
  // const filteredLinks = useMemo(() => {
  //   const filtered: LinksSectionDetails[] = [];
  //   LinksSections.map((section) => {
  //     const sectionFilteredLinks = section?.links.filter((link) =>
  //       link.label.toLowerCase().includes(filter.toLowerCase())
  //     );
  //     if (sectionFilteredLinks.length) {
  //       filtered.push({ label: section.label, links: sectionFilteredLinks });
  //     }
  //   });
  //   return filtered;
  // }, [filter]);

  const mapLinksToGroupItems = (sections: LinksSectionDetails[]) => {
    const matchPaths = (linkPath: string) => {
      const desiredPaths = [linkPath, `${linkPath}/code`];
      const pathToBeMatched = pathname?.split("#")[0]?.slice(0, -1);
      return pathToBeMatched ? desiredPaths.includes(pathToBeMatched) : false;
    };

    return sections.map((section) => ({
      title: section.label,
      items: section.links.map((link) => ({
        label: link.label,
        onSelect: () => router.push(link.path),
        selected: matchPaths(link.path),
        ...(link.status && {
          badge: link.status !== "stable" ? <StatusBadge hasTitle status={link.status} /> : undefined,
        }),
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

  // TODO: ADD FILTERING
  // TODO: ADD CATEGORIZATION

  const sections = mapLinksToGroupItems(LinksSections);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <DxcApplicationLayout
        sidenav={
          <DxcApplicationLayout.SideNav
            items={sections}
            //  title={<SidenavLogo />}
          >
            {/* {filteredLinks?.map(({ label, links }) => (
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
            </DxcApplicationLayout.SideNav.Section> */}
          </DxcApplicationLayout.SideNav>
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
