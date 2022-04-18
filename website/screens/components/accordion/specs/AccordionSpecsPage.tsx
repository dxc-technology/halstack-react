import {
  DxcList,
  DxcText,
  DxcStack,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import Code from "../../../common/Code";
import accordionStates from "./images/accordion_states.png";
import accordionAnatomy from "./images/accordion_anatomy.png";
import accordionSpecs from "./images/accordion_specs.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import Image from "@/common/Image";

const AccordionSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={accordionSpecs} alt="Component design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The accordion header can get four different states based on user
          interaction. States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong> and <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Accordion component states">
          <Image src={accordionStates} alt="Accordion component states" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Formatting</HeadingLink>
        <HeadingLink level={4}>Anatomy</HeadingLink>
        <Image src={accordionAnatomy} alt="Accordion anatomy" />
        <DxcList type="number">
          <DxcText>Header</DxcText>
          <DxcText>Custom icon (Optional)</DxcText>
          <DxcText>Title</DxcText>
          <DxcText>Helper text (Optional)</DxcText>
          <DxcText>Caret icon (Expand/collapse)</DxcText>
          <DxcText>Expanded panel</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value (HEX)</th>
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
        <HeadingLink level={4}>Typography</HeadingLink>
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
              <td>&#39;Open Sans&#39;, sans-serif;</td>
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
              <td>&#39;Open Sans&#39;, sans-serif;</td>
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
        <HeadingLink level={4}>Iconography</HeadingLink>
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
        <HeadingLink level={4}>Border</HeadingLink>
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
        <HeadingLink level={4}>Size</HeadingLink>
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
        <HeadingLink level={4}>Spacing</HeadingLink>
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
            <tr>
              <td>
                <Code>padding</Code>
              </td>
              <td>Custom content</td>
              <td>
                <DxcLink
                  href="https://github.com/dxc-technology/halstack-style-guide/tree/master/guidelines/principles/spacing#component-spacing-tokens"
                  text="Component spacing"
                />
              </td>
              <td>
                <DxcLink
                  href="https://developer.dxc.com/tools/react/next/#/components/accordion"
                  text="[Prop] padding"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Code>margin</Code>
              </td>
              <td>Accordion container</td>
              <td>
                <DxcLink
                  href="https://github.com/dxc-technology/halstack-style-guide/tree/master/guidelines/principles/spacing#component-spacing-tokens"
                  text="Component spacing"
                />
              </td>
              <td>
                <DxcLink
                  href="https://developer.dxc.com/tools/react/next/#/components/accordion"
                  text="[Prop] margin"
                />
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
              text="SC 2.1.1 Keyboard"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html"
              text="SC 4.1.2 Name, Role, Value"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#accordion"
              text="3.1 Accordion (Sections With Show/Hide Functionality)"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/accordion/accordion.html"
              text="Accordion Design Pattern"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>Usability known issues</HeadingLink>
        <HeadingLink level={5}>Printing</HeadingLink>
        <DxcText as="p">
          Accordions are often not well suited for printing documents and
          require people to print snippets of content at a time.
        </DxcText>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/accordion/specs/AccordionSpecsPage.tsx" />
    </DxcStack>
  );
};

export default AccordionSpecsPage;
