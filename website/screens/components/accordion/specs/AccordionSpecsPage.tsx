import {
  DxcFlex,
  DxcTable,
  DxcLink,
  DxcParagraph,
  DxcBulletedList,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import accordionStates from "./images/accordion_states.png";
import accordionAnatomy from "./images/accordion_anatomy.png";
import accordionSpecs from "./images/accordion_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Accordion design specifications">
        <Image src={accordionSpecs} alt="Accordion design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcParagraph>
          The accordion header can get four different states based on user
          interaction. States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong> and <strong>disabled</strong>.
        </DxcParagraph>
        <Figure caption="Accordion states">
          <Image src={accordionStates} alt="Accordion states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Formatting",
    subSections: [
      {
        title: "Anatomy",
        content: (
          <>
            <Image src={accordionAnatomy} alt="Accordion anatomy" />
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>Header</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Custom icon <em>(Optional)</em>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Title</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Helper text <em>(Optional)</em>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Caret icon <em>(Expand/collapse)</em>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Expanded panel</DxcBulletedList.Item>
            </DxcBulletedList>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>titleLabelFontColor</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledTitleLabelFontColor</Code>
                </td>
                <td>Title:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>arrowColor</Code>
                </td>
                <td>Caret icon</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledArrowColor</Code>
                </td>
                <td>Title:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>iconColor</Code>
                </td>
                <td>Custom icon</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledIconColor</Code>
                </td>
                <td>Custom icon:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>assistiveTextFontColor</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>color-grey-700</Code>
                </td>
                <td>#666666</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledAssistiveTextFontColor</Code>
                </td>
                <td>Helper text:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverBackgroundColor</Code>
                </td>
                <td>Header background:hover</td>
                <td>
                  <Code>color-purple-100</Code>
                </td>
                <td>#f2eafa</td>
              </tr>
              <tr>
                <td>
                  <Code>focusBorderColor</Code>
                </td>
                <td>Header outline:focus</td>
                <td>
                  <Code>color-blue-600</Code>
                </td>
                <td>#0095ff</td>
              </tr>
              <tr>
                <td>
                  <Code>backgroundColor</Code>
                </td>
                <td>Container background</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>boxShadowColor</Code>
                </td>
                <td>Container shadow</td>
                <td>-</td>
                <td>#0000001a</td>
              </tr>
              <tr>
                <td>
                  <Code>accordionGroupSeparatorBorderColor</Code>
                </td>
                <td>Separator</td>
                <td>-</td>
                <td>#0000001a</td>
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
                  <Code>titleLabelFontFamily</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>titleLabelFontSize</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>titleLabelFontWeight</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>titleLabelFontStyle</Code>
                </td>
                <td>Title</td>
                <td>
                  <Code>font-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>assistiveTextFontFamily</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>assistiveTextFontSize</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>16px</td>
              </tr>
              <tr>
                <td>
                  <Code>assistiveTextFontWeight</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-light</Code>
                </td>
                <td>300</td>
              </tr>
              <tr>
                <td>
                  <Code>assistiveTextFontStyle</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>italic</td>
              </tr>
              <tr>
                <td>
                  <Code>assistiveTextLetterSpacing</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-tracking-wide-01</Code>
                </td>
                <td>0.025em</td>
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
                <td>Custom icon/Caret icon</td>
                <td>-</td>
                <td>24x24px</td>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Core token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>focusBorderStyle</Code>
                </td>
                <td>Header:focus border</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>focusBorderThickness</Code>
                </td>
                <td>Header:focus border</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>borderRadius</Code>
                </td>
                <td>Accordion container</td>
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
        title: "Size",
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
                  <Code>height</Code>
                </td>
                <td>Header</td>
                <td>-</td>
                <td>48px</td>
              </tr>
              <tr>
                <td>
                  <Code>min-width</Code>
                </td>
                <td>Accordion container</td>
                <td>-</td>
                <td>280px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Spacing",
        content: (
          <>
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
                    <Code>titleLabelPaddingRight</Code>
                  </td>
                  <td>Title</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>1rem / 16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>titleLabelPaddingLeft</Code>
                  </td>
                  <td>Title</td>
                  <td>
                    <Code>spacing-0 </Code>
                  </td>
                  <td>0rem / 0px</td>
                </tr>
                <tr>
                  <td>
                    <Code>titleLabelPaddingTop</Code>
                  </td>
                  <td>Title</td>
                  <td>
                    <Code>spacing-0 </Code>
                  </td>
                  <td>0rem / 0px</td>
                </tr>
                <tr>
                  <td>
                    <Code>titleLabelPaddingBottom</Code>
                  </td>
                  <td>Title</td>
                  <td>
                    <Code>spacing-0 </Code>
                  </td>
                  <td>0rem / 0px</td>
                </tr>
              </tbody>
            </DxcTable>
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
                    <Code>padding-left</Code>
                  </td>
                  <td>Header</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-right</Code>
                  </td>
                  <td>Header</td>
                  <td>
                    <Code>spacing-16</Code>
                  </td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-right</Code>
                  </td>
                  <td>Helper text</td>
                  <td>
                    <Code>spacing-24</Code>
                  </td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding</Code>
                  </td>
                  <td>Caret icon</td>
                  <td>
                    <Code>spacing-12</Code>
                  </td>
                  <td>12px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-right</Code>
                  </td>
                  <td>Custom icon</td>
                  <td>
                    <Code>spacing-12</Code>
                  </td>
                  <td>12px</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Margin",
        content: (
          <>
            <DxcParagraph>
              Margin properties can be applied independently to <Code>top</Code>
              , <Code>right</Code>, <Code>bottom</Code> and <Code>left</Code>{" "}
              sides of the card container.
            </DxcParagraph>
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
          </>
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
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
                newWindow
              >
                SC 2.1.1 Keyboard
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html"
                newWindow
              >
                SC 4.1.2 Name, Role, Value
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "WAI-ARIA 1.2",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#accordion"
                newWindow
              >
                3.1 Accordion (Sections With Show/Hide Functionality)
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA Authoring Practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/accordion/accordion.html"
                newWindow
              >
                Accordion Design Pattern
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Usability known issues",
        subSections: [
          {
            title: "Printing",
            content: (
              <DxcParagraph>
                Accordions are often not well suited for printing documents and
                require people to print snippets of content at a time.
              </DxcParagraph>
            ),
          },
        ],
      },
    ],
  },
];

const AccordionSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/accordion/specs/AccordionSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default AccordionSpecsPage;
