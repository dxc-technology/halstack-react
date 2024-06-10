import {
  DxcParagraph,
  DxcTable,
  DxcLink,
  DxcBulletedList,
  DxcFlex,
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
import autosuggestStatesListItem from "./images/autosuggest_states_listItem.png";
import autosuggestAnatomy from "./images/autosuggest_anatomy.png";
import autosuggestSpecs from "./images/autosuggest_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Text input design specifications">
          <Image src={inputSpecs} alt="Text input design specifications" />
        </Figure>
        <Figure caption="Autosuggest text input design specifications">
          <Image
            src={autosuggestSpecs}
            alt="Autosuggest text input design specifications"
          />
        </Figure>
      </>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcParagraph>
          Text input states: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcParagraph>
        <Figure caption="Text input states">
          <Image src={inputStates} alt="Text input states" />
        </Figure>
        <DxcParagraph>
          List option states: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>active</strong> and <strong>system</strong>.
        </DxcParagraph>
        <Figure caption="List option states">
          <Image src={autosuggestStatesListItem} alt="List option states" />
        </Figure>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={inputAnatomy} alt="Text input anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Label text</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Helper text <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Error indicator</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Clear action <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Input action <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Input container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Placeholder text</DxcBulletedList.Item>
          <DxcBulletedList.Item>Error message</DxcBulletedList.Item>
          <DxcBulletedList.Item>Prefix</DxcBulletedList.Item>
        </DxcBulletedList>
        <Image src={autosuggestAnatomy} alt="Autosuggest anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>List dialog</DxcBulletedList.Item>
          <DxcBulletedList.Item>Text input</DxcBulletedList.Item>
          <DxcBulletedList.Item>List option</DxcBulletedList.Item>
          <DxcBulletedList.Item>List option value</DxcBulletedList.Item>
        </DxcBulletedList>
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
                    <td>transparent</td>
                  </tr>
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
                      <Code>listOptionFontColor</Code>
                    </td>
                    <td>List option value</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>listOptionDividerColor</Code>
                    </td>
                    <td>List option divider</td>
                    <td>
                      <Code>color-grey-200</Code>
                    </td>
                    <td>#e6e6e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>listDialogBorderColor</Code>
                    </td>
                    <td>List dialog</td>
                    <td>
                      <Code>color-grey-400</Code>
                    </td>
                    <td>#bfbfbf</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>listDialogBackgroundColor</Code>
                    </td>
                    <td>List dialog</td>
                    <td>
                      <Code>color-white</Code>
                    </td>
                    <td>#ffffff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>systemMessageFontColor</Code>
                    </td>
                    <td>System message</td>
                    <td>
                      <Code>color-grey-700</Code>
                    </td>
                    <td>#666666</td>
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
                    <th>Core token</th>
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
                    <td>Border:error:hover</td>
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
                      <Code>readOnlyBorderColor</Code>
                    </td>
                    <td>Border:readonly</td>
                    <td>
                      <Code>color-grey-500</Code>
                    </td>
                    <td>#999999</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>hoverReadOnlyBorderColor</Code>
                    </td>
                    <td>Border:readonly:hover</td>
                    <td>
                      <Code>color-grey-600</Code>
                    </td>
                    <td>#808080</td>
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
                  <tr>
                    <td>
                      <Code>hoverListOptionBackgroundColor</Code>
                    </td>
                    <td>List option:hover</td>
                    <td>
                      <Code>color-grey-100</Code>
                    </td>
                    <td>#f2f2f2</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>focusListOptionBorderColor</Code>
                    </td>
                    <td>List option:focus</td>
                    <td>
                      <Code>color-blue-600</Code>
                    </td>
                    <td>#0095ff</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>activeListOptionBackgroundColor</Code>
                    </td>
                    <td>List option:active</td>
                    <td>
                      <Code>color-grey-200</Code>
                    </td>
                    <td>#e6e6e6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorListDialogFontColor</Code>
                    </td>
                    <td>List dialog error</td>
                    <td>
                      <Code>color-black</Code>
                    </td>
                    <td>#000000</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorListDialogBackgroundColor</Code>
                    </td>
                    <td>List dialog error</td>
                    <td>
                      <Code>color-red-50</Code>
                    </td>
                    <td>#fff5f6</td>
                  </tr>
                  <tr>
                    <td>
                      <Code>errorListDialogBorderColor</Code>
                    </td>
                    <td>List dialog error</td>
                    <td>
                      <Code>color-red-700</Code>
                    </td>
                    <td>#d0011b</td>
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
                  <th>Core token</th>
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
                <tr>
                  <td>
                    <Code>listOptionFontSize</Code>
                  </td>
                  <td>List option</td>
                  <td>
                    <Code>font-scale-02</Code>
                  </td>
                  <td>0.875rem / 14px</td>
                </tr>
                <tr>
                  <td>
                    <Code>listOptionFontWeight</Code>
                  </td>
                  <td>List option</td>
                  <td>
                    <Code>font-weight-regular</Code>
                  </td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>
                    <Code>listOptionFontStyle</Code>
                  </td>
                  <td>List option</td>
                  <td>
                    <Code>font-style-normal</Code>
                  </td>
                  <td>normal</td>
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
                <tr>
                  <td>
                    <Code>font-weight</Code>
                  </td>
                  <td>List option typed</td>
                  <td>
                    <Code>font-bold</Code>
                  </td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-size</Code>
                  </td>
                  <td>System message</td>
                  <td>
                    <Code>font-scale-02</Code>
                  </td>
                  <td>0.875 / 14px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-weight</Code>
                  </td>
                  <td>System message</td>
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
                  <th>Core token</th>
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
                <tr>
                  <td>
                    <Code>prefixDividerPaddingRight</Code>
                  </td>
                  <td>Prefix</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>suffixDividerPaddingLeft</Code>
                  </td>
                  <td>Suffix</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
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
                <tr>
                  <td>
                    <Code>padding-top</Code>
                  </td>
                  <td>List dialog</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-bottom</Code>
                  </td>
                  <td>List dialog</td>
                  <td>
                    <Code>spacing-4</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-left</Code>
                  </td>
                  <td>List option</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-right</Code>
                  </td>
                  <td>List option</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-top</Code>
                  </td>
                  <td>List option</td>
                  <td>
                    <Code>spacing-2</Code>
                  </td>
                  <td>0.125rem / 2px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-bottom</Code>
                  </td>
                  <td>List option</td>
                  <td>
                    <Code>spacing-2</Code>
                  </td>
                  <td>0.125rem / 2px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-left</Code>
                  </td>
                  <td>List option value</td>
                  <td>
                    <Code>spacing-8</Code>
                  </td>
                  <td>0.5rem / 8px</td>
                </tr>
                <tr>
                  <td>
                    <Code>padding-right</Code>
                  </td>
                  <td>List option value</td>
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
                  <th>Core token</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>prefixDividerBorderWidth</Code>
                  </td>
                  <td>Prefix</td>
                  <td>-</td>
                  <td>1px</td>
                </tr>
                <tr>
                  <td>
                    <Code>suffixDividerBorderWidth</Code>
                  </td>
                  <td>Suffix</td>
                  <td>-</td>
                  <td>1px</td>
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
                  <td>-</td>
                  <td>0 0 0 2px</td>
                </tr>
                <tr>
                  <td>
                    <Code>box-shadow</Code>
                  </td>
                  <td>Input container:error</td>
                  <td>-</td>
                  <td>0 0 0 2px</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>List dialog</td>
                  <td>
                    <Code>border-width-1</Code>
                  </td>
                  <td>1px</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>List dialog</td>
                  <td>
                    <Code>border-style-solid</Code>
                  </td>
                  <td>solid</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>List dialog</td>
                  <td>
                    <Code>border-radius-medium</Code>
                  </td>
                  <td>0.25rem / 4px</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>List option divider</td>
                  <td>
                    <Code>border-width-1</Code>
                  </td>
                  <td>1px</td>
                </tr>
                <tr>
                  <td>
                    <Code>border</Code>
                  </td>
                  <td>List option divider</td>
                  <td>
                    <Code>border-style-solid</Code>
                  </td>
                  <td>solid</td>
                </tr>
                <tr>
                  <td>
                    <Code>box-shadow</Code>
                  </td>
                  <td>List dialog</td>
                  <td>
                    <Code>shadow-default</Code>
                  </td>
                  <td>0 8px 14px -2px rgba(0,0,0,0.1)</td>
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
                  <Code>medium</Code>
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
            <DxcParagraph>
              And also apply different values to each side of the component:{" "}
              <Code>top</Code>, <Code>bottom</Code>, <Code>left</Code> and{" "}
              <Code>right</Code>.
            </DxcParagraph>
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
                href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
                newWindow
              >
                1.3.1: Information and Relationships
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification"
                newWindow
              >
                3.3.1: Error Identification
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions"
                newWindow
              >
                3.3.2: Labels and Instructions
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
                newWindow
              >
                3.3.3: Error Suggestion
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
                newWindow
              >
                4.1.2: Name, Role, Value
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const TextInputSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/text-input/specs/TextInputSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default TextInputSpecsPage;
