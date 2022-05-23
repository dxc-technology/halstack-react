import {
  DxcText,
  DxcTable,
  DxcLink,
  DxcStack,
  DxcList,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import Image from "@/common/Image";
import inputStates from "./images/input_states.png";
import inputAnatomy from "./images/input_anatomy.png";
import inputSpecs from "./images/input_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <Figure caption="Specifications for text input component">
        <Image src={inputSpecs} alt="Specifications for text input component" />
      </Figure>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcText as="p">
          Text input states: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Example of the text input component states">
          <Image
            src={inputStates}
            alt="Example of the text input component states"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={inputAnatomy} alt="Text input anatomy" />
        <DxcList type="number">
          <DxcText>Label text</DxcText>
          <DxcText>Helper text (Optional)</DxcText>
          <DxcText>Error indicator</DxcText>
          <DxcText>Clear action (Optional)</DxcText>
          <DxcText>Input action (Optional)</DxcText>
          <DxcText>Input container</DxcText>
          <DxcText>Placeholder text</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Prefix</DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Design tokens",
    subSections: [
      {
        title: "Color",
        subSections: [
          {
            title: "Base",
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
                      <Code>valueFontColor</Code>
                    </td>
                    <td>Value</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
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
                      <Code>placeholderFontColor</Code>
                    </td>
                    <td>Placeholder</td>
                    <td>
                      <Code>color-grey-600</Code>
                    </td>
                    <td>#808080</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>enabledBorderColor</Code>
                    </td>
                    <td>Border:enabled</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>actionIconColor</Code>
                    </td>
                    <td>Action icon</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>actionBackgroundColor</Code>
                    </td>
                    <td>Action</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>#transparent</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Interactive",
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
                      <Code>hoverBorderColor</Code>
                    </td>
                    <td>Border:hover</td>
                    <td>
                      <Code>color-purple-500</Code>
                    </td>
                    <td>#a46ede</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusBorderColor</Code>
                    </td>
                    <td>Border:focus</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorBorderColor</Code>
                    </td>
                    <td>Border:error</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>hoverErrorBorderColor</Code>
                    </td>
                    <td>Border:hover on error</td>
                    <td>
                      <Code>color-red-600</Code>
                    </td>
                    <td>#fe0123</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledBorderColor</Code>
                    </td>
                    <td>Border:disabled</td>
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
                  <tr>
                    <td>
                      <Code>disabledContainerFillColor</Code>
                    </td>
                    <td>Input container:disabled</td>
                    <td>
                      <Code>color-grey-100</Code>
                    </td>
                    <td>#f2f2f2</td>
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
                      <Code>disabledValueFontColor</Code>
                    </td>
                    <td>Value:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
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
                      <Code>disabledPlaceholderFontColor</Code>
                    </td>
                    <td>Placeholder:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>hoverActionBackgroundColor</Code>
                    </td>
                    <td>Action:hover</td>
                    <td>
                      <Code>color-grey-100</Code>
                    </td>
                    <td>#f2f2f2</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusActionBorderColor</Code>
                    </td>
                    <td>Action:focus</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>activeActionBackgroundColor</Code>
                    </td>
                    <td>Action:active</td>
                    <td>
                      <Code>color-grey-300</Code>
                    </td>
                    <td>#cccccc</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledActionBackgroundColor</Code>
                    </td>
                    <td>Action:disabled</td>
                    <td>
                      <Code>color-transparent</Code>
                    </td>
                    <td>transparent</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>hoverActionIconColor</Code>
                    </td>
                    <td>Action icon:hover</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusActionIconColor</Code>
                    </td>
                    <td>Action icon:focus</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>activeActionIconColor</Code>
                    </td>
                    <td>Action icon:active</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledActionIconColor</Code>
                    </td>
                    <td>Action icon:disabled</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
          {
            title: "Suffix/Prefix",
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
                      <Code>suffixColor</Code>
                    </td>
                    <td>Suffix</td>
                    <td>
                      <Code>color-grey-700</Code>
                    </td>
                    <td>#666666</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>prefixColor</Code>
                    </td>
                    <td>Prefix</td>
                    <td>
                      <Code>color-grey-700</Code>
                    </td>
                    <td>#666666</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledSuffixColor</Code>
                    </td>
                    <td>Suffix:disabled</td>
                    <td>
                      <Code>color-grey-400</Code>
                    </td>
                    <td>#bfbfbf</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>disabledPrefixColor</Code>
                    </td>
                    <td>Prefix:disabled</td>
                    <td>
                      <Code>color-grey-400</Code>
                    </td>
                    <td>#bfbfbf</td>
                  </tr>
                </tbody>
              </DxcTable>
            ),
          },
        ],
      },
      {
        title: "Typography",
        content: (
          <>
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
                    <Code>fontFamily</Code>
                  </td>
                  <td>All</td>
                  <td>
                    <Code>font-family-sans</Code>
                  </td>
                  <td>Open Sans</td>
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
                    <Code>font-weight-bold</Code>
                  </td>
                  <td>600</td>
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
                    <Code>valueFontSize</Code>
                  </td>
                  <td>Value</td>
                  <td>
                    <Code>font-scale-03</Code>
                  </td>
                  <td>1rem / 16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>valueFontWeight</Code>
                  </td>
                  <td>Value</td>
                  <td>
                    <Code>font-weight-regular</Code>
                  </td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>
                    <Code>valueFontStyle</Code>
                  </td>
                  <td>Value</td>
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
                  <td>12px</td>
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
                    <Code>optionalLabelFontWeight</Code>
                  </td>
                  <td>Optional indicator</td>
                  <td>
                    <Code>font-weight-regular</Code>
                  </td>
                  <td>400</td>
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
                  <td>Value</td>
                  <td>
                    <Code>font-leading-normal</Code>
                  </td>
                  <td>1.5em</td>
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
                <tr>
                  <td>
                    <Code>font-size</Code>
                  </td>
                  <td>Placeholder</td>
                  <td>
                    <Code>font-scale-03</Code>
                  </td>
                  <td>1rem / 16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-weight</Code>
                  </td>
                  <td>Placeholder</td>
                  <td>
                    <Code>font-regular</Code>
                  </td>
                  <td>400</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
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
                  <th>Token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>inputMarginTop</Code>
                  </td>
                  <td>Input container</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>inputMarginBottom</Code>
                  </td>
                  <td>Input container</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
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
                    <Code>margin-left</Code>
                  </td>
                  <td>Error icon</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-left</Code>
                  </td>
                  <td>Action</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-left</Code>
                  </td>
                  <td>Prefix</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-right</Code>
                  </td>
                  <td>Prefix</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-left</Code>
                  </td>
                  <td>Suffix</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-left</Code>
                  </td>
                  <td>Suffix</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>margin-right</Code>
                  </td>
                  <td>Suffix</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-left</Code>
                  </td>
                  <td>Input</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-right</Code>
                  </td>
                  <td>Input</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-left</Code>
                  </td>
                  <td>Input container</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-right</Code>
                  </td>
                  <td>Input container</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Border",
        content: (
          <>
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
                    <Code>border</Code>
                  </td>
                  <td>Input container</td>
                  <td>
                    <Code>border-width-1</Code>
                  </td>
                  <td>1px</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>Input container</td>
                  <td>
                    <Code>border-style-solid</Code>
                  </td>
                  <td>solid</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>Input container:focus</td>
                  <td>
                    <Code>border-width-1</Code>
                  </td>
                  <td>1px</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>Input container:focus</td>
                  <td>
                    <Code>border-style-solid</Code>
                  </td>
                  <td>solid</td>
                </tr>
                <tr>
                  <td>
                    <Code>box-shadow</Code>
                  </td>
                  <td>Input container:focus</td>
                  <td>
                    <Code>-</Code>
                  </td>
                  <td>0 0 0 2px</td>
                </tr>
                <tr>
                  <td>
                    <Code>box-shadow</Code>
                  </td>
                  <td>Input container:error</td>
                  <td>
                    <Code>-</Code>
                  </td>
                  <td>0 0 0 2px</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
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
                <td>240px</td>
              </tr>
              <tr>
                <td>
                  <Code>medium</Code> (<em>default</em>)
                </td>
                <td>360px</td>
              </tr>
              <tr>
                <td>
                  <Code>large</Code>
                </td>
                <td>480px</td>
              </tr>
              <tr>
                <td>
                  <Code>fillParent</Code>
                </td>
                <td>100%</td>
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
            <DxcText>
              And also apply different values to each side of the component:{" "}
              <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code> and{" "}
              <Code>right</Code>.
            </DxcText>
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
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
                newWindow
              >
                1.3.1: Information and Relationships
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification"
                newWindow
              >
                3.3.1: Error Identification
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
                newWindow
              >
                3.3.2: Labels and Instructions
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
                newWindow
              >
                3.3.3: Error Suggestion
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
                newWindow
              >
                4.1.2: Name, Role, Value
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const TextInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/text-input/specs/TextInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TextInputSpecsPage;
