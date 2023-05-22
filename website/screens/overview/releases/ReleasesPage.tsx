import {
  DxcLink,
  DxcHeading,
  DxcParagraph,
  DxcBulletedList,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import StatusTag from "@/common/StatusTag";

const sections = [
  {
    title: "9.1.0",
    content: (
      <DxcFlex>
        <StatusTag status="Ready">Latest</StatusTag>
      </DxcFlex>
    ),
    subSections: [
      {
        title: "🐛 Patches",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Sidenav. children prop type changed from string to
              React.ReactNode. Several styling improvements.{" "}
              <DxcLink
                href="https://github.com/dxc-technology/halstack-react/pull/1596"
                newWindow
              >
                #1596
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Focus Lock issue in Jest fixed.{" "}
              <DxcLink
                href="https://github.com/dxc-technology/halstack-react/pull/1595"
                newWindow
              >
                #1595
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              aria-disabled removed from unnecessary components.{" "}
              <DxcLink
                href="https://github.com/dxc-technology/halstack-react/pull/1595"
                newWindow
              >
                #1595
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "✨ New features",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              New Grid component added.{" "}
              <DxcLink
                href="https://github.com/dxc-technology/halstack-react/pull/1571"
                newWindow
              >
                #1571
              </DxcLink>{" "}
              <DxcLink
                href="https://github.com/dxc-technology/halstack-react/pull/1582"
                newWindow
              >
                #1582
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              New design for the pages' status tag in Halstack site.{" "}
              <DxcLink
                href="https://github.com/dxc-technology/halstack-react/pull/1591"
                newWindow
              >
                #1591
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "9.0.1",
    content: (
      <DxcParagraph>No changelog available for the moment.</DxcParagraph>
    ),
  },
  {
    title: "9.0.0",
    content: (
      <DxcParagraph>No changelog available for the moment.</DxcParagraph>
    ),
  },
  {
    title: "8.0.0",
    content: (
      <DxcParagraph>No changelog available for the moment.</DxcParagraph>
    ),
  },
  {
    title: "7.0.0",
    content: (
      <DxcParagraph>No changelog available for the moment.</DxcParagraph>
    ),
  },
];

const Releases = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <DxcHeading level={1} text="⚠️ Releases" weight="bold" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/overview/releases/ReleasesPage.tsx" />
    </DxcFlex>
  );
};

export default Releases;
