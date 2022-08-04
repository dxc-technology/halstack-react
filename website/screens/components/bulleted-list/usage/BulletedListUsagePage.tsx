import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcFlex,
  DxcBulletedList,
  DxcParagraph,
} from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          This component is not a 1-to-1 replacement of the <Code>ul</Code>{" "}
          <Code>ol</Code>
          native tags. These native tags have many different use-cases and the
          Bulleted List only covers one of them: listing text items within a
          document.
        </DxcParagraph>
        <DxcParagraph>
          Lists can be ordered or unordered. If the order of the list items
          matters for context to the user, an ordered list should be used. If
          the meaning of the list is not changed based on the order of the
          items, an unordered list should be used.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Ordered lists are displayed with a preceding number.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Unordered lists are displayed with a preceding bullet point.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Lists can be nested as deeply as needed.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const BulletedListUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bulleted-list/usage/BulletedListUsagePage.tsx" />
    </DxcFlex>
  );
};

export default BulletedListUsagePage;
