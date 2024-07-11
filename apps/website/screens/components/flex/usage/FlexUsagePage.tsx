import { DxcFlex, DxcParagraph, DxcBulletedList } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Axes",
    content: (
      <>
        <DxcParagraph>
          Flexboxes are comprised mainly of two axes: the main axis and the cross axis. The main axis is defined by the
          flex-direction property, and the cross axis runs perpendicular to it.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The main axis is defined by flex-direction, which has four possible values: <Code>row</Code>,{" "}
            <Code>row-reverse</Code>, <Code>column</Code> and <Code>column-reverse</Code>.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The cross axis runs perpendicular to the main axis.
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                If the flex-direction (main axis) is set to <Code>row</Code> or <Code>row-reverse</Code> the cross axis
                runs down the columns.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                If the flex-direction is set to <Code>column</Code> or <Code>column-reverse</Code>, the cross axis runs
                down the rows.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Start and end",
    content: (
      <>
        <DxcParagraph>
          The flexbox makes no assumption about the writing mode of the document. Left to right or right to left can be
          used depending, for example, on the language used. A start and end edge is used to refer to the direction of
          the placement of elements.
        </DxcParagraph>
        <DxcParagraph>
          For example, If the flex-direction is row and the language is English, then the start edge of the main axis
          will be on the left, the end edge on the right.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Flexbox container",
    content: (
      <>
        <DxcParagraph>An area of a document laid out using flexbox is called a flex container.</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The items display in a row (the flex-direction property&#39;s default is <Code>row</Code>).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>The items start from the start edge of the main axis.</DxcBulletedList.Item>
          <DxcBulletedList.Item>The items do not stretch on the main dimension, but can shrink.</DxcBulletedList.Item>
          <DxcBulletedList.Item>The items will stretch to fill the size of the cross axis.</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const FlexUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/flex/usage/FlexUsagePage.tsx" />
    </DxcFlex>
  );
};

export default FlexUsagePage;
