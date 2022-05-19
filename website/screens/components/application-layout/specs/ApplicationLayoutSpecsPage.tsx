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
            <DxcLink>
              <Link href="/components/header/specifications">
                <a>Header</a>
              </Link>
            </DxcLink>
          </DxcText>
          <DxcText>
            <DxcLink>
              <Link href="/components/sidenav/specifications">
                <a>Sidenav</a>
              </Link>
            </DxcLink>
          </DxcText>
          <DxcText>
            <DxcLink>
              <Link href="/components/footer/specifications">
                <a>Footer</a>
              </Link>
            </DxcLink>
          </DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={ApplicationLayoutAnatomy} alt="Alert anatomy" />
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
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/alert/specs/ApplicationLayoutSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ApplicationLayoutSpecsPage;
