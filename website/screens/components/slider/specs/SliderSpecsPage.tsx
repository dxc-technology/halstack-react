import {
  DxcLink,
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import Code from "@/common/Code";
import sliderAnatomy from "./images/slider_anatomy.png";
import sliderSpecs from "./images/slider_specs.png";
import sliderStates from "./images/slider_states.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Slider Specifications">
        <Image alt="Slider Specifications" src={sliderSpecs} />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          The slider component has the following states:{" "}
          <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>active</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Slider component different states example">
          <Image
            src={sliderStates}
            alt="Slider component different states example"
          />
        </Figure>
      </>
    ),
  },

  {
    title: "Anatomy",
    content: (
      <>
        <Image src={sliderAnatomy} alt="Slider Anatomy" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Helper text</DxcText>
          <DxcText>
            Floor label <em>(Optional)</em>
          </DxcText>
          <DxcText>Total line</DxcText>
          <DxcText>
            Ceil label <em>(Optional)</em>
          </DxcText>
          <DxcText>
            Value input <em>(Optional)</em>
          </DxcText>
          <DxcText>Tick</DxcText>
          <DxcText>Thumb</DxcText>
          <DxcText>Track line</DxcText>
        </DxcList>
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
                  <Code>disabledhelperTextFontColor</Code>
                </td>
                <td>Helper text:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>thumbBackgroundColor</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>hoverThumbBackgroundColor</Code>
                </td>
                <td>Thumb:hover</td>
                <td>
                  <Code>color-blue-900</Code>
                </td>
                <td>#003c66</td>
              </tr>
              <tr>
                <td>
                  <Code>focusThumbBackgroundColor</Code>
                </td>
                <td>Thumb:focus</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>activeThumbBackgroundColor</Code>
                </td>
                <td>Thumb:active</td>
                <td>
                  <Code>color-blue-900</Code>
                </td>
                <td>#003c66</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledThumbBackgroundColor</Code>
                </td>
                <td>Thumb:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>tickMarkBackgroundColor</Code>
                </td>
                <td>Tick</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledTickMarkBackgroundColor</Code>
                </td>
                <td>Tick:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>trackLineColor</Code>
                </td>
                <td>Track line</td>
                <td>
                  <Code>color-blue-800</Code>
                </td>
                <td>#0067b3</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledTrackLineColor</Code>
                </td>
                <td>Track line:disabled</td>
                <td>
                  <Code>color-blue-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>totalLineColor</Code>
                </td>
                <td>Total line</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledTotalLineColor</Code>
                </td>
                <td>Total line:disabled</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>limitValuesFontColor</Code>
                </td>
                <td>Ceil/Floor label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>disabledLimitValuesFontColor</Code>
                </td>
                <td>Ceil/Floor label</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>focusColor</Code>
                </td>
                <td>Focus indicator</td>
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
                <td>Label</td>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>fontSize</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem / 14px</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-weight-semibold</Code>
                </td>
                <td>600</td>
              </tr>
              <tr>
                <td>
                  <Code>lineHeight</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-leading-loose-01</Code>
                </td>
                <td>1.715em</td>
              </tr>
              <tr>
                <td>
                  <Code>fontFamily</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>fontSize</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-scale-01</Code>
                </td>
                <td>0.75rem / 12px</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>lineHeight</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-leading-normal</Code>
                </td>
                <td>1.5em</td>
              </tr>
              <tr>
                <td>
                  <Code>limitValuesFontFamily</Code>
                </td>
                <td>Ceil/Floor label</td>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>limitValuesFontSize</Code>
                </td>
                <td>Ceil/Floor label</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>limitValuesFontStyle</Code>
                </td>
                <td>Ceil/Floor label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>limitValuesFontWeight</Code>
                </td>
                <td>Ceil/Floor label</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>fontFamily</Code>
                </td>
                <td>Floor/Ceil label</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>fontSize</Code>
                </td>
                <td>Floor/Ceil label</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>fontWeight</Code>
                </td>
                <td>Floor/Ceil label</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>fontStyle</Code>
                </td>
                <td>Floor/Ceil label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Spacing",
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
                  <Code>margin-left</Code>
                </td>
                <td>Floor label</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-right</Code>
                </td>
                <td>Ceil label</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>margin-left</Code>
                </td>
                <td>Input</td>
                <td>
                  <Code>spacing-32</Code>
                </td>
                <td>2rem / 32px</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "Size",
        content: (
          <>
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
                  <td>Total line</td>
                  <td>-</td>
                  <td>2px</td>
                </tr>
                <tr>
                  <td>
                    <Code>height</Code>
                  </td>
                  <td>Track line</td>
                  <td>-</td>
                  <td>2px</td>
                </tr>
                <tr>
                  <td>
                    <Code>height</Code>
                  </td>
                  <td>Thumb</td>
                  <td>-</td>
                  <td>12px</td>
                </tr>
                <tr>
                  <td>
                    <Code>width</Code>
                  </td>
                  <td>Thumb</td>
                  <td>-</td>
                  <td>12px</td>
                </tr>
                <tr>
                  <td>
                    <Code>height</Code>
                  </td>
                  <td>Thumb:hover*</td>
                  <td>-</td>
                  <td>14px</td>
                </tr>
                <tr>
                  <td>
                    <Code>width</Code>
                  </td>
                  <td>Thumb:hover</td>
                  <td>-</td>
                  <td>14px</td>
                </tr>
                <tr>
                  <td>
                    <Code>height</Code>
                  </td>
                  <td>Tick</td>
                  <td>-</td>
                  <td>4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>width</Code>
                  </td>
                  <td>Tick</td>
                  <td>-</td>
                  <td>4px</td>
                </tr>
              </tbody>
            </DxcTable>
            <DxcText as="p">
              [*] The thumb element size is 14x14px in the following states:{" "}
              <Code>:hover</Code> and <Code>:active</Code>.
            </DxcText>
          </>
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
                <td>Track line</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Track line</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Track line</td>
                <td>
                  <Code>border-radius-full</Code>
                </td>
                <td>9999px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Thumb</td>
                <td>
                  <Code>border-radius-full</Code>
                </td>
                <td>9999px</td>
              </tr>
              <tr>
                <td>
                  <Code>outline</Code>
                </td>
                <td>Focus indicator</td>
                <td>-</td>
                <td>auto 1px</td>
              </tr>
              <tr>
                <td>
                  <Code>outline-offset</Code>
                </td>
                <td>Focus indicator</td>
                <td>-</td>
                <td>2px</td>
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
        title: "WCAG",
        content: (
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
              >
                SC 1.3.1 Info and Relationships
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence"
              >
                SC 1.3.2 Meaningful Sequence
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard"
              >
                SC 2.1.1 Keyboard
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order"
              >
                SC 2.4.3 Focus Order
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels"
              >
                SC 2.4.6 Headings and Labels
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
              >
                SC 2.4.7 Focus Visible
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
              >
                SC 4.1.2 Name, Role, Value
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
      {
        title: "WAI-ARIA",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#slider"
              >
                3.19 Slider
              </DxcLink>
            </DxcText>
            <DxcText>
              WAI-ARIA Authoring practices 1.2 -{" "}
              <DxcLink
                newWindow
                href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/slider/slider-1.html"
              >
                Slider example
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const SliderSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/slider/specs/SliderSpecsPage.tsx" />
    </DxcStack>
  );
};

export default SliderSpecsPage;
