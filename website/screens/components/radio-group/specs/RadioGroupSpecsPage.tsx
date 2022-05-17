import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import HeadingLink from "@/common/HeadingLink";
import Image from "@/common/Image";
import Code from "../../../common/Code";
import {
  DxcList,
  DxcStack,
  DxcText,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import radioGroupBaseStates from "./images/radio_group_base_states.png";
import radioGroupStates from "./images/radio_group_states.png";
import radioGroupAnatomy from "./images/radio_group_anatomy.png";
import radioGroupSpecs from "./images/radio_group_specs.png";

const RadioGroupSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Component design specifications">
          <Image src={radioGroupSpecs} alt="Component design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The following states are defined in the life cycle of the component:{" "}
          <strong>unselected enabled</strong>, <strong>unselected hover</strong>
          , <strong>unselected focus</strong>,{" "}
          <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected hover</strong>,{" "}
          <strong>selected focus</strong> and <strong>selected disabled</strong>
          .
        </DxcText>
        <Figure caption="Radio button states">
          <Image src={radioGroupBaseStates} alt="Radio button input states" />
        </Figure>
        <DxcText as="p">
          The following states are defined in the life cycle of the component:{" "}
          <strong>enabled</strong>, <strong>error</strong>,{" "}
          <strong>readonly</strong> and <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Radio group states">
          <Image src={radioGroupStates} alt="Radio group states" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Figure
          caption={
            <DxcList type="number">
              <DxcText>Label</DxcText>
              <DxcText>Helper text</DxcText>
              <DxcText>Radio input</DxcText>
              <DxcText>Radio input label</DxcText>
              <DxcText>Error message</DxcText>
            </DxcList>
          }
        >
          <Image src={radioGroupAnatomy} alt="Radio button component anatomy" />
        </Figure>
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
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>radioInputColor</Code>
              </td>
              <td>Radio input</td>
              <td>
                <Code>color-blue-700</Code>
              </td>
              <td>#0086e6</td>
            </tr>
            <tr>
              <td>
                <Code>hoverRadioInputColor</Code>
              </td>
              <td>Radio input:hover</td>
              <td>
                <Code>color-blue-800</Code>
              </td>
              <td>#0067b3</td>
            </tr>
            <tr>
              <td>
                <Code>focusRadioInputColor</Code>
              </td>
              <td>Radio input:focus</td>
              <td>
                <Code>color-blue-600</Code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <Code>activeRadioInputColor</Code>
              </td>
              <td>Radio input:active</td>
              <td>
                <Code>color-blue-900</Code>
              </td>
              <td>#003c66</td>
            </tr>
            <tr>
              <td>
                <Code>errorRadioInputColor</Code>
              </td>
              <td>Radio input:error</td>
              <td>
                <Code>color-red-700</Code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <Code>hoverErrorRadioInputColor</Code>
              </td>
              <td>Radio input:error:hover</td>
              <td>
                <Code>color-red-800</Code>
              </td>
              <td>#980115</td>
            </tr>
            <tr>
              <td>
                <Code>activeErrorRadioInputColor</Code>
              </td>
              <td>Radio input:error:active</td>
              <td>
                <Code>color-red-900</Code>
              </td>
              <td>#65010e</td>
            </tr>
            <tr>
              <td>
                <Code>disabledRadioInputColor</Code>
              </td>
              <td>Radio input:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>readonlyRadioInputColor</Code>
              </td>
              <td>Radio input:readonly</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>hoverReadonlyRadioInputColor</Code>
              </td>
              <td>Radio input:readonly:hover</td>
              <td>
                <Code>color-grey-600</Code>
              </td>
              <td>#808080</td>
            </tr>
            <tr>
              <td>
                <Code>activeReadonlyRadioInputColor</Code>
              </td>
              <td>Radio input:readonly:active</td>
              <td>
                <Code>color-grey-700</Code>
              </td>
              <td>#666666</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontColor</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>disabledLabelFontColor</Code>
              </td>
              <td>Label:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontColor</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>disabledHelperTextFontColor</Code>
              </td>
              <td>Helper text:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>radioInputLabelFontColor</Code>
              </td>
              <td>Input label</td>
              <td>
                <Code>color-black</Code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <Code>disabledRadioInputLabelFontColor</Code>
              </td>
              <td>Input label:disabled</td>
              <td>
                <Code>color-grey-500</Code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <Code>errorMessageColor</Code>
              </td>
              <td>Error message</td>
              <td>
                <Code>color-red-700</Code>
              </td>
              <td>#d0011b</td>
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
                <Code>fontFamily</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-family-sans</Code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontSize</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontWeight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-weight-semibold</Code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <Code>labelLineHeight</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-leading-loose-01</Code>
              </td>
              <td>1.715em</td>
            </tr>
            <tr>
              <td>
                <Code>labelFontStyle</Code>
              </td>
              <td>Label</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontSize</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontWeight</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextFontStyle</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>helperTextLineHeight</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-leading-normal</Code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <Code>radioInputLabelFontSize</Code>
              </td>
              <td>Input label</td>
              <td>
                <Code>font-scale-02</Code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <Code>radioInputLabelFontWeight</Code>
              </td>
              <td>Input label</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>radioInputLabelFontStyle</Code>
              </td>
              <td>Input label</td>
              <td>
                <Code>font-style-normal</Code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <Code>radioInputLabelLineHeight</Code>
              </td>
              <td>Helper text</td>
              <td>
                <Code>font-leading-loose-01</Code>
              </td>
              <td>1.715em</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>font-size</Code>
              </td>
              <td>Error message</td>
              <td>
                <Code>font-scale-01</Code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <Code>font-weight</Code>
              </td>
              <td>Error message</td>
              <td>
                <Code>font-weight-regular</Code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <Code>line-height</Code>
              </td>
              <td>Error message</td>
              <td>
                <Code>font-leading-normal</Code>
              </td>
              <td>1.5em</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
              <td>Radio input</td>
              <td>
                <Code>border-width-2</Code>
              </td>
              <td>2px</td>
            </tr>
            <tr>
              <td>
                <Code>border-style</Code>
              </td>
              <td>Radio input</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <Code>border-width</Code>
              </td>
              <td>Focus border</td>
              <td>
                <Code>border-width-2</Code>
              </td>
              <td>2px</td>
            </tr>
            <tr>
              <td>
                <Code>border-style</Code>
              </td>
              <td>Focus border</td>
              <td>
                <Code>border-style-solid</Code>
              </td>
              <td>solid</td>
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
                <Code>groupLabelMargin</Code>
              </td>
              <td>Label/Helper text</td>
              <td>
                <Code>spacing-8</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>radioInputLabelMargin</Code>
              </td>
              <td>Input Label</td>
              <td>
                <Code>spacing-8</Code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <Code>groupVerticalGutter</Code>
              </td>
              <td>Radio item*</td>
              <td>
                <Code>spacing-4</Code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <Code>groupHorizontalGutter</Code>
              </td>
              <td>Radio item</td>
              <td>
                <Code>spacing-32</Code>
              </td>
              <td>2rem / 32px</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">(*) Radio item = Radio input + Radio label</DxcText>
        <HeadingLink level={4}>Size</HeadingLink>
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
                <Code>width</Code>
              </td>
              <td>Radio input</td>
              <td>18px</td>
            </tr>
            <tr>
              <td>
                <Code>width</Code>
              </td>
              <td>focus outline</td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <Code>height</Code>
              </td>
              <td>Radio input</td>
              <td>18px</td>
            </tr>
            <tr>
              <td>
                <Code>height</Code>
              </td>
              <td>focus outline</td>
              <td>24px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcText as="p">
          Margin can be set independently for <Code>top</Code>,{" "}
          <Code>right</Code>, <Code>bottom</Code>, and <Code>left</Code>.
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>margin</th>
              <th>value</th>
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
              newWindow
            >
              SC 1.3.1: Info and Relationships
            </DxcLink>
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
              newWindow
            >
              SC 3.3.2: Labels or Instructions
            </DxcLink>
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
              newWindow
            >
              SC 2.4.6: Headings and Labels
            </DxcLink>
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton"
              newWindow
            >
              3.12 Radio group
            </DxcLink>
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/radio-group/specs/RadioGroupSpecsPage.tsx" />
    </DxcStack>
  );
};

export default RadioGroupSpecsPage;
