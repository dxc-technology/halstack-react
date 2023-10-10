import {
  DxcTable,
  DxcParagraph,
  DxcBulletedList,
  DxcFlex,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import specsImage from "./images/dropdown_specs.png";
import statesImage from "./images/dropdown_states.png";
import optionListStatesImage from "./images/dropdown_option_list_states.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Dropdown design specifications">
        <Image src={specsImage} alt="Dropdown design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    subSections: [
      {
        title: "Dropdown button",
        content: (
          <>
            <DxcParagraph>
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>active</strong> and{" "}
              <strong>disabled</strong>.
            </DxcParagraph>
            <Figure caption="Dropdown button states">
              <Image src={statesImage} alt="Dropdown button states" />
            </Figure>
          </>
        ),
      },
      {
        title: "Option list",
        content: (
          <>
            <DxcParagraph>
              States: <strong>Enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong> and <strong>selected</strong>.
            </DxcParagraph>
            <Figure caption="Option list states">
              <Image src={optionListStatesImage} alt="Option list states" />
            </Figure>
          </>
        ),
      },
    ],
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
                <th>Component Token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>buttonBackgroundColor</Code>
                </td>
                <td>Button</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>buttonFontColor</Code>
                </td>
                <td>Button</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverButtonBackgroundColor</Code>
                </td>
                <td>Button:hover</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>activeButtonBackgroundColor</Code>
                </td>
                <td>Button:active</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
              </tr>
              <tr>
                <td>
                  <Code>buttonIconColor</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledColor</Code>
                </td>
                <td>Button font:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledButtonBackgroundColor</Code>
                </td>
                <td>Button:disabled</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>optionBackgroundColor</Code>
                </td>
                <td>Option</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverOptionBackgroundColor</Code>
                </td>
                <td>Option:hover</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>activeOptionBackgroundColor</Code>
                </td>
                <td>Option:active</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarThumbColor</Code>
                </td>
                <td>Scroll thumb</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollBarTrackColor</Code>
                </td>
                <td>Scroll track</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
              </tr>
              <tr>
                <td>
                  <Code>focusColor</Code>
                </td>
                <td>Focus</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Width",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Width</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>small</Code>
                </td>
                <td>60px</td>
              </tr>
              <tr>
                <td>
                  <Code>medium</Code>
                </td>
                <td>240px</td>
              </tr>
              <tr>
                <td>
                  <Code>large</Code>
                </td>
                <td>480px</td>
              </tr>
              <tr>
                <td>
                  <Code>fitContent</Code>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <Code>fillParent</Code>
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Margin",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Margin</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>xxsmall</Code>
                </td>
                <td>6px</td>
              </tr>
              <tr>
                <td>
                  <Code>xsmall</Code>
                </td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>small</Code>
                </td>
                <td>24px</td>
              </tr>
              <tr>
                <td>
                  <Code>medium</Code>
                </td>
                <td>36px</td>
              </tr>
              <tr>
                <td>
                  <Code>large</Code>
                </td>
                <td>48px</td>
              </tr>
              <tr>
                <td>
                  <Code>xlarge</Code>
                </td>
                <td>64px</td>
              </tr>
              <tr>
                <td>
                  <Code>xxlarge</Code>
                </td>
                <td>100px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Padding",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>padding-left</Code>
                </td>
                <td>Dropdown button</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-left</Code>
                </td>
                <td>Options list</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-right</Code>
                </td>
                <td>Dropdown button</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-right</Code>
                </td>
                <td>Options list</td>
                <td>16px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Border",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Property</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Dropdown button</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Dropdown button</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Dropdown button</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Options list</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Options list</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Options list</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Focus outline</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Focus outline</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Focus outline</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
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
                <th>Property</th>
                <th>Element</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>Dropdown button</td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-size</Code>
                </td>
                <td>List item</td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>Dropdown button</td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>font-weight</Code>
                </td>
                <td>List item</td>
                <td>400</td>
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
                <th>Property</th>
                <th>Element</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>height</Code> / <Code>width</Code>
                </td>
                <td>Caret</td>
                <td>24 / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>height</Code> / <Code>width</Code>
                </td>
                <td>Custom icon</td>
                <td>20 / 20px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG 2.2",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  newWindow
                  href="https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html"
                >
                  SC 1.4.13: Content on Hover or Focus
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  newWindow
                  href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html"
                >
                  SC 3.2.2: On Input
                </DxcLink>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "WAI-ARIA 1.2",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton"
              >
                3.16 Menu button
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const DropdownSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/dropdown/specs/DropdownSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default DropdownSpecsPage;
