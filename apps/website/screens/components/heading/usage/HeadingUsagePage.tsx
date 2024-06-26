import { DxcBulletedList, DxcFlex, DxcParagraph } from "@repo/ui";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import headingScale from "./images/heading_scale.png";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Navigating through the <Code>Headings-H1</Code> and <Code>Headings-H3</Code> give a user an overview of a page
          and how its content is structured. The <Code>Headings-H4</Code> and <Code>Headings-H5</Code> elements provide
          a quick understanding of the details in each section.
        </DxcParagraph>
        <DxcParagraph>
          The Open Sans typeface has 5 different weights, from light to extra-bold but Halstack use three variations,
          light, regular and bold. The font size goes from 32 pixels for the <Code>&lt;h1&gt;</Code> heading to 14
          pixels for the <Code>&lt;h5&gt;</Code> level.
        </DxcParagraph>
        <Figure caption="Heading variations">
          <Image src={headingScale} alt="Heading variations" />
        </Figure>
        <DxcParagraph>
          There are several scenarios where the use of heading is just right when we are talking about the title for a
          section, header of a table, a definition of the elements that will appear below the title or an introduction
          for a paragraph.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Use <Code>Heading</Code> componments from <Code>H1</Code> to <Code>H5</Code> when creating content
                hierarchy in the page.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Use headings for page headings and for specific sections of content.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Use purposeful words to summarize the content that follows.</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>Do not style text to give the visual appearance of headings.</DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid &quot;stacking&quot; headings without any body content in between.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const HeadingUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/heading/usage/HeadingUsagePage.tsx" />
    </DxcFlex>
  );
};

export default HeadingUsagePage;
