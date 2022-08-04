import { DxcBulletedList, DxcStack } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use the textarea when users need to enter text longer than a single
          line.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Avoid using the textarea when complex questions can break up in
          simpler ones.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TextareaUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/textarea/usage/TextareaUsagePage.tsx" />
    </DxcStack>
  );
};

export default TextareaUsagePage;
