import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcBulletedList, DxcParagraph, DxcAlert } from "@dxc-technology/halstack-react";
import anatomy from "./images/bulleted_list_anatomy.png";
import Example from "@/common/example/Example";
import disc from "./examples/disc";
import circle from "./examples/circle";
import square from "./examples/square";
import number from "./examples/number";
import icon from "./examples/icon";
import Image from "@/common/Image";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Bulleted lists are used to present grouped information in a clear, scannable format. They help users quickly
          identify key points or related items without following a specific order. In Halstack, the bulleted list
          component supports customizable icon variants, and nesting levels to adapt to different content needs while
          maintaining consistency and readability across the interface. Use this component to enhance clarity and break
          down complex information into digestible chunks.
        </DxcParagraph>
        <DxcAlert
          title="Use cases"
          semantic="warning"
          message={{
            text: (
              <DxcParagraph>
                Disclaimer - This component is not a 1-to-1 replacement of the <Code>ul</Code> <Code>ol</Code> native
                tags. These native tags have many different use-cases and the Bulleted List only covers one of them:
                listing text items within a document.
              </DxcParagraph>
            ),
          }}
          closable={false}
        />
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Bulleted list's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Bullet point:</strong> a small visual marker placed before each list item. It provides visual
            separation and helps emphasize each individual entry within the list. The default style is a filled circle.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> the text content associated with each bullet point. It conveys the actual
            information and should be clear, concise, and scannable for easy reading.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Types",
    subSections: [
      {
        title: "Disc",
        content: (
          <>
            <DxcParagraph>
              Disc are the default type, represented by a filled circle. It is commonly used for the most standard lists
              where content doesn't require special emphasis or categorization.
            </DxcParagraph>
            <Example example={disc} />
          </>
        ),
      },
      {
        title: "Circle",
        content: (
          <>
            <DxcParagraph>
              Showcased like an empty circle marker, they offer a lighter visual alternative. It is frequently used for
              secondary or nested lists, or when a subtler design is preferred.
            </DxcParagraph>
            <Example example={circle} />
          </>
        ),
      },
      {
        title: "Square",
        content: (
          <>
            <DxcParagraph>
              Square types consist of a solid square marker that draws slightly more attention. This type is mostly used
              for lists that need more visual weight, or for lists that need to be differentiated from standard content
              blocks.
            </DxcParagraph>
            <Example example={square} />
          </>
        ),
      },
      {
        title: "Number",
        content: (
          <>
            <DxcParagraph>
              This type of bulleted list display items in a numbered sequence. They are used for lists that contain
              ordered steps, instructions, or any content where sequence or priority is important.
            </DxcParagraph>
            <Example example={number} />
          </>
        ),
      },
      {
        title: "Icon",
        content: (
          <>
            <DxcParagraph>
              In this type of bulleted list, the visual marker is an icon instead of a standard one. They are commonly
              used for lists that benefit from visual cues to reinforce meaning, such as warning icons, checkmarks or
              status indicators.
            </DxcParagraph>
            <Example example={icon} />
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Choose the appropriate bullet type for the context:</strong> use discs for standard lists, numbers
            for sequences or steps, and icons when a visual cue adds clarity or emphasis.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keep list items concise and scannable:</strong> lists should be easy to read at a glance. Use brief,
            clear phrasing.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maintain parallel structure:</strong> ensure that all list items follow a consistent grammatical
            pattern to improve readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid overusing nested lists:</strong> deeply nested lists can be hard to follow. Limit nesting to
            one level if possible.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use punctuation consistently:</strong> if one item ends in a period, all items should, unless
            they're just short phrases or single words.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use spacing to improve legibility:</strong> ensure there is enough vertical space between items,
            especially in longer lists.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const BulletedListOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/bulleted-list/overview/BulletedListOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default BulletedListOverviewPage;
