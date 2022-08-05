import { DxcList, DxcFlex, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import usage from "./examples/usage";
import content from "./examples/content";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <Example example={usage} />
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
        <Example example={content} />
        <DxcText as="p">
          The footer component has a custom area where many kinds of content can
          be placed, some of them are contemplated in the following list:
        </DxcText>
        <DxcList>
          <DxcFlex direction="column" gap="0.5rem">
            <DxcText>Plain text or content</DxcText>
            <DxcList type="circle">
              <DxcText>Informational purpose text</DxcText>
            </DxcList>
          </DxcFlex>
          <DxcFlex direction="column" gap="0.5rem">
            <DxcText>Menu links</DxcText>
            <DxcList type="circle">
              <DxcText>Global navigation</DxcText>
              <DxcText>Sitemap</DxcText>
              <DxcText>Useful links or resources</DxcText>
            </DxcList>
          </DxcFlex>
          <DxcFlex direction="column" gap="0.5rem">
            <DxcText>Forms</DxcText>
            <DxcList type="circle">
              <DxcText>Select language</DxcText>
              <DxcText>Login / Sing up</DxcText>
              <DxcText>Provide email adress / Subscribe</DxcText>
            </DxcList>
          </DxcFlex>
          <DxcFlex direction="column" gap="0.5rem">
            <DxcText>Actions</DxcText>
            <DxcList type="circle">
              <DxcText>Ask for help / Support</DxcText>
              <DxcText>Business related actions / Call to action</DxcText>
              <DxcText>Search</DxcText>
            </DxcList>
          </DxcFlex>
        </DxcList>
      </>
    ),
  },
];

const FooterUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/footer/usage/FooterUsagePage.tsx" />
    </DxcFlex>
  );
};

export default FooterUsagePage;
