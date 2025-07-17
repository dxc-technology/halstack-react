import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcBulletedList, DxcParagraph } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The Paragraph component is used to present text content in well-structured, readable blocks across the UI.
        </DxcParagraph>
        <DxcParagraph>
          It is designed to render blocks of text with predefined typography styles, including consistent{" "}
          <strong>font-size</strong>, <strong>font-weight</strong> and <strong>color</strong>. It displays content as
          text blocks separated by line breaks and follows the visual language of the design system.
        </DxcParagraph>
        <DxcParagraph>
          However, by default, it <strong>does not add spacing between itself and other elements</strong> — for managing
          layout and spacing between Paragraphs or other components, use it in combination with layout components like{" "}
          <Code>DxcFlex</Code>.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Ideal for body content such as descriptions, instructions, explanations, or legal text.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Automatically handles line height and text alignment but relies on layout components for external spacing.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Use Paragraphs to group related sentences and divide longer content into manageable, readable chunks.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Avoid using Paragraph as a layout or structural element—it is intended strictly for text content.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use Paragraph for blocks of text only:</strong> This component is designed to present readable text
          content. Avoid using it for non-text elements like buttons or images.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep paragraphs short and scannable:</strong> Dense blocks of text can be intimidating and hard to
          scan. Break content into shorter sections whenever possible. Break content into smaller paragraphs to make it
          easier for users to read and for screen readers to navigate.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Don't nest paragraphs inside each other:</strong> Paragraph tags (&lt;p&gt;) cannot be nested in valid
          HTML. Instead, use separate Paragraph components for each block of text.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use layout components for spacing:</strong> Paragraph does not include spacing between itself and
          surrounding elements. Use layout wrappers like DxcFlex to manage spacing between components.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Support accessibility:</strong> Clear separation of paragraphs and appropriate structure improves
          screen reader support and makes content easier to digest for all users.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure visual and semantic clarity:</strong> Paragraphs should support the overall information
          hierarchy. Use headings for titles and Paragraphs for descriptive or supporting text.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ParagraphOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/paragraph/overview/ParagraphOverviewPage.tsx" />
  </DxcFlex>
);

export default ParagraphOverviewPage;
