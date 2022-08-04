import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcAlert,
  DxcBulletedList,
  DxcLink,
  DxcParagraph,
  DxcStack,
} from "@dxc-technology/halstack-react";
import Link from "next/link";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Typography component is a primitive. This means that using this
          component, you can create any typography variant that is included in
          the Halstack Design System.
        </DxcParagraph>
        <DxcParagraph>
          It is important to highlight that the Typography component should
          always be the last option to be used as we have other components that
          add some context to be included in the sites, these components are:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <Link href="/components/bulleted-list" passHref>
              <DxcLink>Bulleted list</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="/components/paragraph" passHref>
              <DxcLink>Paragraph</DxcLink>
            </Link>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <Link href="/components/heading" passHref>
              <DxcLink>Heading</DxcLink>
            </Link>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          If any of these components do not cover your use case, please contact
          us and we will study it.
        </DxcParagraph>
      </>
    ),
  },
];

const TypographyUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/typography/usage/TypographyUsagePage.tsx" />
    </DxcStack>
  );
};

export default TypographyUsagePage;
