import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import footerExample from "./images/footer_example.png";
import footerCustomContent from "./images/footer_custom_content.png";
import Image from "@/common/Image";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <Figure caption="Footer component example">
          <Image src={footerExample} alt="Footer component example" />
        </Figure>
        <DxcList>
          <DxcText>
            The footer frame should be docked at the bottom of the page and
            should not scroll with any of the data within working section of the
            screen.
          </DxcText>
          <DxcText>
            The footer frame should span the entire screen width.
          </DxcText>
          <DxcText>
            The footer frame should display the copyright information at the
            right margin.
          </DxcText>
          <DxcText>
            We recommend uploading either an alternate version or a smaller
            brand image than the used in the header. If the company has an
            alternate version of the logo, isotype, imagotype or isologo
            available, we encourage to use it. In the opposite case a smaller
            version of the main brand image can be used.
          </DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <>
        <Figure caption="Footer custom content examples">
          <Image
            src={footerCustomContent}
            alt="Footer custom content examples"
          />
        </Figure>
        <DxcText as="p">
          The footer component has a custom area where many kinds of content can
          be placed, some of them are contemplated in the following list:
        </DxcText>
        <DxcList>
          <DxcStack gutter="xsmall">
            <DxcText>Plain text or content</DxcText>
            <DxcList type="circle">
              <DxcText>Informational purpose text</DxcText>
            </DxcList>
          </DxcStack>
          <DxcStack gutter="xsmall">
            <DxcText>Menu links</DxcText>
            <DxcList type="circle">
              <DxcText>Global navigation</DxcText>
              <DxcText>Sitemap</DxcText>
              <DxcText>Useful links or resources</DxcText>
            </DxcList>
          </DxcStack>
          <DxcStack gutter="xsmall">
            <DxcText>Forms</DxcText>
            <DxcList type="circle">
              <DxcText>Select language</DxcText>
              <DxcText>Login / Sing up</DxcText>
              <DxcText>Provide email adress / Subscribe</DxcText>
            </DxcList>
          </DxcStack>
          <DxcStack gutter="xsmall">
            <DxcText>Actions</DxcText>
            <DxcList type="circle">
              <DxcText>Ask for help / Support</DxcText>
              <DxcText>Business related actions / Call to action</DxcText>
              <DxcText>Search</DxcText>
            </DxcList>
          </DxcStack>
        </DxcList>
      </>
    ),
  },
];

const FooterUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/accordion/usage/AccordionUsagePage.tsx" />
    </DxcStack>
  );
};

export default FooterUsagePage;
