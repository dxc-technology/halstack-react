import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
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
        <DxcText as="p">
          Navigating through the <Code>Headings-H1</Code> and
          <Code>Headings-H3</Code> give a user an overview of a page and how its
          content is structured. The <Code>Headings-H4</Code> and
          <Code>Headings-H5</Code> elements provide a quick understanding of the
          details in each section.
        </DxcText>
        <DxcText as="p">
          The Open Sans typeface has 5 different weights, from light to
          extra-bold but Halstack use three variations, light, regular and bold.
          The font size goes from 32 pixels for the <Code>&lt;h1&gt;</Code>{" "}
          heading to 14 pixels for the <Code>&lt;h5&gt;</Code> level.
        </DxcText>
        <Image src={headingScale} alt="Variations of the heading" />
        <DxcText as="p">
          There are several scenarios where the use of heading is just right
          when we are talking about the title for a section, header of a table,
          a definition of the elements that will appear below the title or an
          introduction for a paragraph.
        </DxcText>
      </>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <>
            <DxcList>
              <DxcText>
                Use <Code>Heading</Code> componments from <Code>H1</Code> to{" "}
                <Code>H5</Code> when creating content hierarchy in the page.
              </DxcText>
              <DxcText>
                Use headings for page headings and for specific sections of
                content.
              </DxcText>
              <DxcText>
                Use purposeful words to summarize the content that follows.
              </DxcText>
            </DxcList>
          </>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcList>
            <DxcText>
              Do not style text to give the visual appearance of headings.
            </DxcText>
            <DxcText>
              Avoid &quot;stacking&quot; headings without any body content in
              between.
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const HeadingUsagePage = () => {
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

export default HeadingUsagePage;
