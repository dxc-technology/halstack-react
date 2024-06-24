import {
  DxcParagraph,
  DxcBulletedList,
  DxcFlex,
  DxcTable,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import positions from "./images/tooltip_positions.png";
import Figure from "@/common/Figure";
import Image from "@/common/Image";

const sections = [
  {
    title: "Usage",
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use tooltips when sharing valuable information as clearly and
              concisely as possible.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Describe icons by using tooltips. Tooltips effectively provide
              context and clarity for components without labels, delivering
              helpful information directly to the user when they hover over or
              focus on an icon.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Maintain consistency in the positioning of tooltips throughout the
              user interface.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use clear and accurate phrasing when placing the text inside a
              tooltip.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Avoid using tooltips to convey crucial information. This type of
              information must always be present, not only when the user hovers
              over or focuses on a component.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Don't place tooltips where they might cover or obscure important
              information or critical areas of the interface that need to remain
              visible at all times.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Don't use tooltips to communicate error messages.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid using tooltips in interfaces where there is sufficient space
              to display additional information directly, without the need for
              hiding it.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Position",
    content: (
      <>
        <DxcParagraph>
          Depending on the tooltip's placement relative to the object it
          describes, there are four possible configurations: top, right, bottom
          and left.
        </DxcParagraph>
        <Figure caption="Tooltip positions">
          <Image src={positions} alt="Tooltip positions" />
        </Figure>
      </>
    ),
  },
];

const TooltipUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tooltip/usage/TooltipUsagePage.tsx" />
    </DxcFlex>
  );
};

export default TooltipUsagePage;
