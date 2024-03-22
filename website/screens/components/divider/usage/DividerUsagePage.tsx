import {
  DxcBulletedList,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use dividers to separate content into distinct groups.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          A divider should be visibly noticeable enough to divide a section but
          should not be so distinct that it attracts attention away from the
          content.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Use dividers to create groups, not individual items.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Apply the use of dividers in the right context. Determine when it is
          appropriate to use white space and when it is better to use a divider
          to separate content.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const DividerUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/divider/usage/DividerUsagePage.tsx" />
    </DxcFlex>
  );
};

export default DividerUsagePage;
