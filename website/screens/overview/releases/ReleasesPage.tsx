import {
  DxcHeading,
  DxcParagraph,
  DxcFlex,
  DxcLink,
  DxcBulletedList,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import HalstackMarkdownParser from "@/common/HalstackMarkdownParser";
import Link from "next/link";
import Code from "@/common/Code";

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
          Every major release of Halstack is collected below:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/halstack/12/overview/introduction/">
              Halstack 12
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/halstack/11/overview/introduction/">
              Halstack 11
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/halstack/10/overview/introduction/">
              Halstack 10
            </DxcLink>
          </DxcBulletedList.Item>
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
        </DxcBulletedList>
        <DxcParagraph>
          All the other previous versions, such as Halstack 5 or Halstack 4, are
          still available on the{" "}
          <Link
            href="/overview/introduction/#legacy-documentation-sites"
            passHref
            legacyBehavior
          >
            <DxcLink>legacy sites</DxcLink>
          </Link>
          . But remember, these sites are no longer maintained. Consider
          upgrading if you are currently using one of them.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Next version",
        content: (
          <DxcParagraph>
            To check the latest features under development by the Halstack team,
            you can access the <Code>next</Code> version of the documentation
            through this{" "}
            <DxcLink href="https://developer.dxc.com/halstack/next/">
              link
            </DxcLink>
            . Please note that this version is unstable and may contain minor
            bugs. For a better experience with Halstack, we recommend, if
            possible, always using the latest release available.
          </DxcParagraph>
        ),
      },
    ],
  },
];

const getReleasesPageSections = (releases: Release[]) => {
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

const Releases = ({ releases }: { releases: Release[] }) => (
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
      <QuickNavContainer
        sections={getReleasesPageSections(releases)}
        startHeadingLevel={2}
      />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/overview/releases/ReleasesPage.tsx" />
  </DxcFlex>
);

export default Releases;
