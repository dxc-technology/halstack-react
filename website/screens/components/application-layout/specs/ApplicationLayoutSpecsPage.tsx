import {
  DxcLink,
  DxcBulletedList,
  DxcStack,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import Link from "next/link";
import ApplicationLayoutAnatomy from "./images/application_layout_anatomy.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <DxcParagraph>
          The specifications of each of the compound component children are
          defined separately:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Link href="/components/header/specifications" passHref>
              <DxcLink>Header</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="/components/sidenav/specifications" passHref>
              <DxcLink>Sidenav</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="/components/footer/specifications" passHref>
              <DxcLink>Footer</DxcLink>
            </Link>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image
          src={ApplicationLayoutAnatomy}
          alt="Application layout anatomy"
        />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Header</DxcBulletedList.Item>
          <DxcBulletedList.Item>Main content</DxcBulletedList.Item>
          <DxcBulletedList.Item>Footer</DxcBulletedList.Item>
          <DxcBulletedList.Item>Sidenav</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WAI-ARIA",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/perspective-videos/layout/"
              >
                Clear Layout and Design
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const ApplicationLayoutSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/application-layout/specs/ApplicationLayoutSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ApplicationLayoutSpecsPage;
