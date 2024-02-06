import {
  DxcFlex,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Status Light design specifications">
        <Image src={specsImage} alt="Status Light design specifications" />
      </Figure>
    ),
  },
  // TODO
  // {
  //   title: "Anatomy",
  //   content: (
  //   ),
  // },
  // TODO
  // {
  //   title: "Design tokens",
  //   subSections: [
  //     {
  //
  //     },
  //     {
  //       title: "Typography",
  //       content: (
  //
  //       ),
  //     },
  //     {
  //       title: "Spacing",
  //       content: (
  //
  //       ),
  //     },
  //     {
  //       title: "Size",
  //       content: (
  //
  //       ),
  //     },
  //   ],
  // },
];

const StatusLightSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/status-light/specs/StatusLightSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default StatusLightSpecsPage;
