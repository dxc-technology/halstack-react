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
          Use the Status Light component to clearly communicate statuses of tasks, processes or any other relevant indicators.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Make sure the label used is no longer than 3 words and not too detailed. Keep it simple.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          If the semantic colors are not suitable for your use case, consider using a Badge instead.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Do not use multiple Status Lights within the same view. It could be confusing as they are not interactive items.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const StatusLightUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/status-light/usage/StatusLightUsagePage.tsx" />
    </DxcFlex>
  );
};

export default StatusLightUsagePage;
