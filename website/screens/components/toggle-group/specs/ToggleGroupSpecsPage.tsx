import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcList,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import toggleGroupAnatomy from "./images/toggle_group_anatomy.png";
import toggleGroupStates from "./images/toggle_group_states.png";
import toggleGroupSpecs from "./images/toggle_group_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Toggle design specifications">
        <Image src={toggleGroupSpecs} alt="Toggle design specifications" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          Different states are defined in the life cycle of the component:
          <strong>Unselected enabled</strong>, <strong>unselected hover</strong>
          , <strong>unselected focus</strong>,{" "}
          <strong>unselected active</strong>,{" "}
          <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected hover</strong>,{" "}
          <strong>selected focus</strong>, <strong>selected active</strong> and{" "}
          <strong>selected disabled</strong>
        </DxcText>
        <Figure caption="Toggle button states example">
          <Image src={toggleGroupStates} alt="Toggle button states example" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={toggleGroupAnatomy} alt="Toggle design specifications" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Helper text</DxcText>
          <DxcText>Container</DxcText>
          <DxcText>Button</DxcText>
          <DxcText>Button icon</DxcText>
          <DxcText>Button label</DxcText>
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
                <th>Token</th>
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
                  <Code>containerBackgroundColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-grey-50</Code>
                </td>
                <td>#fafafa</td>
              </tr>
              <tr>
                <td>
                  <Code>containerBorderColor</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedBackgroundColor</Code>
                </td>
                <td>Button fill:enabled</td>
                <td>
                  <Code>color-grey-200</Code>
                </td>
                <td>#e6e6e6</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedHoverBackgroundColor</Code>
                </td>
                <td>Button fill:hover</td>
                <td>
                  <Code>color-grey-300</Code>
                </td>
                <td>#cccccc</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedActiveBackgroundColor</Code>
                </td>
                <td>Button fill:active</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedDisabledBackgroundColor</Code>
                </td>
                <td>Button fill:disabled</td>
                <td>
                  <Code>color-grey-100</Code>
                </td>
                <td>#f2f2f2</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedFontColor</Code>
                </td>
                <td>Button label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>unselectedDisabledFontColor</Code>
                </td>
                <td>Button label:disabled</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedBackgroundColor</Code>
                </td>
                <td>Button fill:enabled</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedHoverBackgroundColor</Code>
                </td>
                <td>Button fill:hover</td>
                <td>
                  <Code>color-purple-800</Code>
                </td>
                <td>#4b1c7d</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedActiveBackgroundColor</Code>
                </td>
                <td>Button fill:active</td>
                <td>
                  <Code>color-purple-900</Code>
                </td>
                <td>#321353</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedDisabledBackgroundColor</Code>
                </td>
                <td>Button fill:disabled</td>
                <td>
                  <Code>color-purple-100</Code>
                </td>
                <td>#f2eafa</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedFontColor</Code>
                </td>
                <td>Button label</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>selectedDisabledFontColor</Code>
                </td>
                <td>Button label:disabled</td>
                <td>
                  <Code>color-purple-300</Code>
                </td>
                <td>#cbacec</td>
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
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>labelFontFamily</Code>
                </td>
                <td>Label</td>
                <td>
                  <Code>font-family</Code>
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
                  <Code>helperTextFontFamily</Code>
                </td>
                <td>Helper text</td>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
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
                  <Code>optionLabelFontFamily</Code>
                </td>
                <td>Button label</td>
                <td>
                  <Code>font-family</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>optionLabelFontSize</Code>
                </td>
                <td>Button label</td>
                <td>
                  <Code>font-scale-03</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>optionLabelFontStyle</Code>
                </td>
                <td>Button label</td>
                <td>
                  <Code>font-style-normal</Code>
                </td>
                <td>normal</td>
              </tr>
              <tr>
                <td>
                  <Code>optionLabelFontWeight</Code>
                </td>
                <td>Button label</td>
                <td>
                  <Code>font-weight-regular</Code>
                </td>
                <td>400</td>
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
                <th>Component token</th>
                <th>Element</th>
                <th>Token</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>iconPaddingRight</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>iconPaddingLeft</Code>
                </td>
                <td>Icon</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelPaddingLeft</Code>
                </td>
                <td>Label (Label + icon)</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>labelPaddingRight</Code>
                </td>
                <td>Label (Label + icon)</td>
                <td>
                  <Code>spacing-24</Code>
                </td>
                <td>1.5rem / 24px</td>
              </tr>
              <tr>
                <td>
                  <Code>iconMarginRight</Code>
                </td>
                <td>Icon (Label + icon)</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>containerMarginTop</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>spacing-4</Code>
                </td>
                <td>0.25rem / 4px</td>
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
                <td>Button</td>
                <td>
                  <Code>border-width-0</Code>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Button</td>
                <td>
                  <Code>border-style-none</Code>
                </td>
                <td>none</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Button</td>
                <td>
                  <Code>border-radius-medium</Code>
                </td>
                <td>0.25rem / 4px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-style</Code>
                </td>
                <td>Container</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Container</td>
                <td>-</td>
                <td>0.375rem / 6px</td>
              </tr>
              <tr>
                <td>
                  <Code>border-width</Code>
                </td>
                <td>Focus border</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2</td>
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
              <tr>
                <td>
                  <Code>border-radius</Code>
                </td>
                <td>Focus border</td>
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
        title: "Margin",
        content: (
          <>
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
            <DxcText as="p">
              And also apply different values to each side of the component:
              <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code> and{" "}
              <Code>right</Code>
            </DxcText>
          </>
        ),
      },
    ],
  },
];

const ToggleGroupSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/toggle-group/specs/ToggleGroupSpecsPage.tsx" />
    </DxcStack>
  );
};

export default ToggleGroupSpecsPage;
