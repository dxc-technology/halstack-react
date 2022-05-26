import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Organize the card collection so thery are easy to use, take a layout
          that presents the information in a clear way and apply the same styles
          for every card.
        </DxcText>
        <DxcText>
          If a collection want be create, won&#39;t use different card styles,
          use the same to keep consistency.
        </DxcText>
      </DxcList>
    ),
  },
];

const CardUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/card/usage/CardUsagePage.tsx" />
    </DxcStack>
  );
};

export default CardUsagePage;
