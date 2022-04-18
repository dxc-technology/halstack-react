import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";

const CardUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Organize the card collection so thery are easy to use, take a layout
            that presents the information in a clear way and apply the same
            styles for every card.
          </DxcText>
          <DxcText>
            If a collection want be create, won&#39;t use different card styles,
            use the same to keep consistency.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/card/usage/CardUsagePage.tsx" />
    </DxcStack>
  );
};

export default CardUsagePage;
