import { DxcFlex, DxcBulletedList, DxcParagraph, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import anatomy from "./images/contextual_menu_anatomy.png";
import contextualMenuSpecs from "./images/contextual_menu_specs.png";
import contextualMenuItemSpecs from "./images/contextual_menu_item_specs.png";
import itemStates from "./images/contextual_menu_item_states.png";
import Code from "@/common/Code";

const sections = [
  {
    title: "Specifications",
    subSections: [
      {
        title: "Contextual menu",
        content: (
          <Figure caption="Contextual menu specifications">
            <Image src={contextualMenuSpecs} alt="Contextual Menu design specifications" />
          </Figure>
        ),
      },
      {
        title: "Contextual menu item",
        content: (
          <Figure caption="Contextual menu item specifications">
            <Image src={contextualMenuItemSpecs} alt="Contextual menu item design specifications" />
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
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>backgroundColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>borderColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>menuItemFontColor</Code>
                </td>
                <td>Menu item</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverMenuItemBackgroundColor</Code>
                </td>
                <td>Menu item:hover</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>activeMenuItemBackgroundColor</Code>
                </td>
                <td>Menu item:active</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedMenuItemBackgroundColor</Code>
                </td>
                <td>Menu item selected</td>
                <td>
                  <Code>color-purple-100</Code>
                </td>
                <td>#f2eafa</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverSelectedMenuItemBackgroundColor</Code>
                </td>
                <td>Menu item:hover selected</td>
                <td>
                  <Code>color-purple-200</Code>
                </td>
                <td>#e5d5f6</td>
              </tr>
              <tr>
                <td>
                  <Code>activeSelectedMenuItemBackgroundColor</Code>
                </td>
                <td>Menu item:active selected</td>
                <td>
                  <Code>color-purple-200</Code>
                </td>
                <td>#e5d5f6</td>
              </tr>
              <tr>
                <td>
                  <Code>sectionTitleFontColor</Code>
                </td>
                <td>Section title</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
              <tr>
                <td>
                  <Code>iconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-grey-900</Code>
                </td>
                <td>#333333</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Iconography",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>iconSize</Code>
                </td>
                <td>Icon</td>
                <td>-</td>
                <td>16px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Typography",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>fontFamily</Code>
                </td>
                <td>Contextual menu</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>'Open Sans', sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>menuItemFontSize</Code>
                </td>
                <td>Menu item</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>menuItemFontStyle</Code>
                </td>
                <td>Menu item</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>menuItemFontWeight</Code>
                </td>
                <td>Menu item</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>menuItemLineHeight</Code>
                </td>
                <td>Menu item</td>
                <td>-</td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedMenuItemFontWeight</Code>
                </td>
                <td>Menu item selected</td>
                <td>
                  <Code>font-weight-semibold</Code>
                </td>
                <td>600</td>
              </tr>
              <tr>
                <td>
                  <Code>sectionTitleFontSize</Code>
                </td>
                <td>Section title</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>sectionTitleFontStyle</Code>
                </td>
                <td>Section title</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>sectionTitleFontWeight</Code>
                </td>
                <td>Section title</td>
                <td>
                  <Code>font-weight-semibold</Code>
                </td>
                <td>600</td>
              </tr>
              <tr>
                <td>
                  <Code>sectionTitleLineHeight</Code>
                </td>
                <td>Section title</td>
                <td>-</td>
                <td>24px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const ContextualMenuSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/contextual-menu/specs/ContextualMenuSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default ContextualMenuSpecsPage;
