import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Organize the card collection so thery are easy to use, take a layout that presents the information in a clear
          way and apply the same styles for every card.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          If a collection want be create, won&#39;t use different card styles, use the same to keep consistency.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const CardUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/card/usage/CardUsagePage.tsx" />
    </DxcFlex>
  );
};

export default CardUsagePage;
