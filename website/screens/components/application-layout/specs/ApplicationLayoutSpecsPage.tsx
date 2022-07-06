import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcText,
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
        <DxcText>
          The specifications of each of the compound component children are
          defined separately:
        </DxcText>
        <DxcList>
          <DxcText>
            <Link href="/components/header/specifications" passHref>
              <DxcLink>Header</DxcLink>
            </Link>
          </DxcText>
          <DxcText>
            <Link href="/components/sidenav/specifications" passHref>
              <DxcLink>Sidenav</DxcLink>
            </Link>
          </DxcText>
          <DxcText>
            <Link href="/components/footer/specifications" passHref>
              <DxcLink>Footer</DxcLink>
            </Link>
          </DxcText>
        </DxcList>
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
        <DxcList type="number">
          <DxcText>Header</DxcText>
          <DxcText>Main content</DxcText>
          <DxcText>Footer</DxcText>
          <DxcText>Sidenav</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WAI-ARIA",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/perspective-videos/layout/"
              >
                Clear Layout and Design
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const ApplicationLayoutSpecsPage = () => {
  return (
    <DxcStack gutter="4rem">
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
