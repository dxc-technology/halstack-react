import {
  DxcFlex,
  DxcBulletedList,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import anatomy from "./images/contextual_menu_anatomy.png";
import contextualMenuSpecs from "./images/contextual_menu_specs.png";
import contextualMenuItemSpecs from "./images/contextual_menu_item_specs.png";
import itemStates from "./images/contextual_menu_item_states.png";

const sections = [
  {
    title: "Specifications",
    subSections: [
      {
        title: "Contextual menu",
        content: (
          <Figure caption="Contextual menu specifications">
            <Image
              src={contextualMenuSpecs}
              alt="Contextual Menu design specifications"
            />
          </Figure>
        ),
      },
      {
        title: "Contextual menu item",
        content: (
          <Figure caption="Contextual menu item specifications">
            <Image
              src={contextualMenuItemSpecs}
              alt="Contextual menu item design specifications"
            />
          </Figure>
        ),
      },
    ],
  },
  {
    title: "States",
    content: (
      <>
        <Figure caption="Contextual menu item states">
          <Image src={itemStates} alt="Contextual menu item states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Contextual menu anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Section title</DxcBulletedList.Item>
          <DxcBulletedList.Item>Container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Badge</DxcBulletedList.Item>
          <DxcBulletedList.Item>Menu item</DxcBulletedList.Item>
          <DxcBulletedList.Item>Expand/collapse icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Divider</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const ContextualMenuSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/contextual-menu/specs/ContextualMenuSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ContextualMenuSpecsPage;
