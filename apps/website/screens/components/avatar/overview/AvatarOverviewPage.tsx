import DocFooter from "@/common/DocFooter";
import DxcQuickNavContainer from "@/common/QuickNavContainer";
import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Introduction",
    content: <DxcParagraph>Halstack's Avatar component is designed to...</DxcParagraph>,
  },
];

const AvatarOverviewPage = () => (
   <DxcFlex direction="column" gap="4rem">
        <DxcQuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/avatar/overview/AvatarOverviewPage.tsx" />
    </DxcFlex>
)

export default AvatarOverviewPage;
