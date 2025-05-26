import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        {/* <Example example={usage} /> */}
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The footer frame should be docked at the bottom of the page and should not scroll with any of the data
            within working section of the screen.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>The footer frame should span the entire screen width.</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The footer frame should display the copyright information at the right margin.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            We recommend uploading either an alternate version or a smaller brand image than the used in the header. If
            the company has an alternate version of the logo, isotype, imagotype or isologo available, we encourage to
            use it. In the opposite case a smaller version of the main brand image can be used.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <>
        {/* <Example example={content} /> */}
        <DxcParagraph>
          The footer component has a custom area where many kinds of content can be placed, some of them are
          contemplated in the following list:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcFlex direction="column" gap="var(--spacing-gap-s)">
            <DxcBulletedList.Item>Plain text or content</DxcBulletedList.Item>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>Informational purpose text</DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcFlex>
          <DxcFlex direction="column" gap="var(--spacing-gap-s)">
            <DxcParagraph>Menu links</DxcParagraph>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>Global navigation</DxcBulletedList.Item>
              <DxcBulletedList.Item>Sitemap</DxcBulletedList.Item>
              <DxcBulletedList.Item>Useful links or resources</DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcFlex>
          <DxcFlex direction="column" gap="var(--spacing-gap-s)">
            <DxcParagraph>Forms</DxcParagraph>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>Select language</DxcBulletedList.Item>
              <DxcBulletedList.Item>Login / Sing up</DxcBulletedList.Item>
              <DxcBulletedList.Item>Provide email adress / Subscribe</DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcFlex>
          <DxcFlex direction="column" gap="var(--spacing-gap-s)">
            <DxcParagraph>Actions</DxcParagraph>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>Ask for help / Support</DxcBulletedList.Item>
              <DxcBulletedList.Item>Business related actions / Call to action</DxcBulletedList.Item>
              <DxcBulletedList.Item>Search</DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcFlex>
        </DxcBulletedList>
      </>
    ),
  },
];

const FooterUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/footer/usage/FooterUsagePage.tsx" />
    </DxcFlex>
  );
};

export default FooterUsagePage;
