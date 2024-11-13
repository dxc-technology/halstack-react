import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Do not use chips instead of buttons since they have a total different aim in the UI.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>Make the content of the label clear and simple.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Use chips to make tasks easier for the user.</DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ChipUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/chip/usage/ChipUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ChipUsagePage;
