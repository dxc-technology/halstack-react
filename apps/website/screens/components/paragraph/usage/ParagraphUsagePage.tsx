import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcBulletedList, DxcParagraph } from "@repo/ui";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Paragraphs display blocks of text separated by a line break with some configuration in terms of font-size,
          font-weight and color. It does not add any spacing with respect to any other element and should be used to
          structure text blocks only.
        </DxcParagraph>
        <DxcParagraph>
          To space different paragraphs from each other or a paragraph with other elements we must include them in a
          DxcFlex.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>Use paragraphs for text blocks.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Break text into paragraphs to help screen readers provide shortcuts to the user.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Split content into small paragraphs to make it easier to read.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use paragraphs that are too long and make it difficult to find information within the text.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>Nest paragraphs inside each other.</DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use paragraph for anything other than text. Paragraphs are for text blocks and not for any other thing.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const ParagraphUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/paragraph/usage/ParagraphUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ParagraphUsagePage;
