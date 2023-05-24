import {
  DxcHeading,
  DxcParagraph,
  DxcFlex,
  DxcSpinner,
  DxcGrid,
  DxcLink,
  DxcBulletedList,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { useEffect, useState } from "react";
import HalstackMarkdownParser from "@/common/HalstackMarkdownParser";
import Link from "next/link";

type Section = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
  content?: React.ReactNode;
  subSections?: Section[];
  navSubtitle?: string;
};
type Release = {
  name: string;
  body: string;
  published_at: string;
};

const sections = [
  {
    title: "Major released versions",
    content: (
      <>
        <DxcParagraph>
          Every major version of Halstack is collected below:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/halstack/9/overview/introduction/">
              Halstack 9
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/halstack/8/overview/introduction/">
              Halstack 8
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/halstack/7/overview/introduction/">
              Halstack 7
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/halstack/6/overview/introduction/">
              Halstack 6
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            To check Halstack 5 and older, you must access{" "}
            <Link
              href="/overview/introduction/#legacy-documentation-sites"
              passHref
            >
              <DxcLink>Halstack's legacy sites</DxcLink>
            </Link>{" "}
            (remember that these sites are not maintained any more and do not
            contain the latest features of Halstack).
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const getRelasesPageSections = (releases: Release[]) => {
  let section: Section = { title: "Release notes", subSections: [] };
  releases?.forEach((release) => {
    section.subSections?.push({
      title: release.name,
      content: (
        <>
          <DxcParagraph>
            <em>
              Released on{" "}
              {new Date(release.published_at).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
              .
            </em>
          </DxcParagraph>
          <HalstackMarkdownParser markdown={release.body} />
        </>
      ),
    });
  });
  return [...sections, section];
};

const Releases = () => {
  const [releases, setReleases] = useState<Release[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchVersions = async () => {
      const response = await fetch(
        "https://api.github.com/repos/dxc-technology/halstack-react/releases"
      );
      const releases: Release[] = await response.json();
      setReleases(releases);
      setIsLoading(false);
    };

    fetchVersions();
  }, []);

  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="Releases" weight="bold" />
          <DxcParagraph>
            Access all the major releases of the Halstack React library and see
            the changelog of every version available.
          </DxcParagraph>
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        {isLoading ? (
          <DxcGrid placeItems="center">
            <DxcSpinner label="Loading..." mode="large" />
          </DxcGrid>
        ) : releases ? (
          <QuickNavContainer
            sections={getRelasesPageSections(releases)}
            startHeadingLevel={2}
          />
        ) : (
          <DxcParagraph>
            The releases are not available at the moment.
          </DxcParagraph>
        )}
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/overview/releases/ReleasesPage.tsx" />
    </DxcFlex>
  );
};

export default Releases;
