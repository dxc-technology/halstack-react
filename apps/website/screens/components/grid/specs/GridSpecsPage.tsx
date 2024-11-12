import { DxcFlex } from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import gridAutoFlowSpecs from "./images/grid-autoFlow-specs.png";
import gridTemplateSpecs from "./images/grid-templates-specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Grid auto-flow: row, column and row dense design specifications">
          <Image src={gridAutoFlowSpecs} alt="Grid auto-flow: row, column and rows dense design specifications" />
        </Figure>
        <Figure caption="Grid template: areas, rows and columns design specifications">
          <Image src={gridTemplateSpecs} alt="Grid template: areas, rows and columns design specifications" />
        </Figure>
      </>
    ),
  },
];

const GridSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/grid/specs/GridSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default GridSpecsPage;
