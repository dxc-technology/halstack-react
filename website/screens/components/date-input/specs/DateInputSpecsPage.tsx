import {
  DxcParagraph,
  DxcBulletedList,
  DxcTable,
  DxcFlex,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Link from "next/link";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import dateSpecsStates from "./images/input_date_states.png";
import dateSpecsPopup from "./images/date_popup.png";
import dateSpecsAnatomy from "./images/input_date_anatomy.png";
import dateSpecs from "./images/input_date_specs.png";
import datePopupSpecs from "./images/date_popup_specs.png";

const sections = [
  {
    title: "Date input",
    content: (
      <>
        <Figure caption="Date input design specifications">
          <Image src={dateSpecs} alt="Date input design specifications" />
        </Figure>
        <DxcParagraph>
          The date input <Code>color</Code>, <Code>typography</Code>,{" "}
          <Code>border</Code>, <Code>spacing</Code>, <Code>width</Code> and{" "}
          <Code>margin</Code> specifications are inherited from the text input,
          for reference check{" "}
          <Link href="/components/text-input/specifications" passHref>
            <DxcLink>text input</DxcLink>
          </Link>{" "}
          documentation .
        </DxcParagraph>
        <DxcParagraph>
          The date input doesn&#39;t have the following text input elements or
          properties, therefore, their listed styles don&#39;t apply:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Prefix / Suffix</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The size <Code>small</Code> is not available
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Date picker dialog",
    content: (
      <Figure caption="Structure and spacing for the date picker pop-up">
        <Image src={datePopupSpecs} alt="Date specifications for picker" />
      </Figure>
    ),
  },
  {
    title: "States",
    subSections: [
      {
        title: "Date input",
        content: (
          <>
            <DxcParagraph>
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>error</strong>, and{" "}
              <strong>disabled</strong>.
            </DxcParagraph>
            <Figure caption="Examples of the date input states">
              <Image
                src={dateSpecsStates}
                alt="Examples of the date input states"
              />
            </Figure>
          </>
        ),
      },
      {
        title: "Date picker dialog",
        content: (
          <>
            <DxcParagraph>
              States: <strong>default</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>active</strong>,{" "}
              <strong>selected</strong>, <strong>today</strong> and{" "}
              <strong>disabled</strong>.
            </DxcParagraph>
            <Figure caption="Examples of a calendar day states">
              <Image
                src={dateSpecsPopup}
                alt="Examples of a calendar day states"
              />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={dateSpecsAnatomy} alt="Component anatomy example" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Helper text <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Input container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Date button</DxcBulletedList.Item>
          <DxcBulletedList.Item>Clear action</DxcBulletedList.Item>
          <DxcBulletedList.Item>Error indicator</DxcBulletedList.Item>
          <DxcBulletedList.Item>Error message</DxcBulletedList.Item>
          <DxcBulletedList.Item>Placeholder / value</DxcBulletedList.Item>
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
                  <Code>pickerBackgroundColor</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerFontColor</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerBorderColor</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>color-grey-400</Code>
                </td>
                <td>#bfbfbf</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerSelectedBackgroundColor</Code>
                </td>
                <td>Picker date/year: selected</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerSelectedFontColor</Code>
                </td>
                <td>Picker date/year: selected</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHoverBackgroundColor</Code>
                </td>
                <td>Picker date/year: hover</td>
                <td>
                  <Code>color-purple-200</Code>
                </td>
                <td>#e5d5f6</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHoverFontColor</Code>
                </td>
                <td>Picker date/year: active</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerActiveBackgroundColor</Code>
                </td>
                <td>Picker date/year: active</td>
                <td>
                  <Code>color-purple-800</Code>
                </td>
                <td>#4b1c7d</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerActiveFontColor</Code>
                </td>
                <td>Picker date/year: active</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerNonCurrentMonthFontColor</Code>
                </td>
                <td>Picker date: other month</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentDateBorderColor</Code>
                </td>
                <td>Picker date/year: current</td>
                <td>
                  <Code>color-purple-300</Code>
                </td>
                <td>#cbacec</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentDateFontColor</Code>
                </td>
                <td>Picker date: current</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentYearFontColor</Code>
                </td>
                <td>Picker year: current</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHeaderBackgroundColor</Code>
                </td>
                <td>Picker header</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHeaderFontColor</Code>
                </td>
                <td>Picker header</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHeaderHoverBackgroundColor</Code>
                </td>
                <td>Picker header: hover</td>
                <td>
                  <Code>color-purple-200</Code>
                </td>
                <td>#e5d5f6</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHeaderHoverFontColor</Code>
                </td>
                <td>Picker header: hover</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHeaderActiveBackgroundColor</Code>
                </td>
                <td>Picker header: active</td>
                <td>
                  <Code>color-purple-800</Code>
                </td>
                <td>#4b1c7d</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHeaderActiveFontColor</Code>
                </td>
                <td>Picker header: active</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerFocusColor</Code>
                </td>
                <td>Date picker container</td>
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
                  <Code>pickerBorderWidth</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerBorderStyle</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>border-style-solid</Code>
                </td>
                <td>solid</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerFocusWidth</Code>
                </td>
                <td>Date picker container: focus</td>
                <td>
                  <Code>border-width-2</Code>
                </td>
                <td>2px</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentDateBorderWidth</Code>
                </td>
                <td>Picker date/year: current</td>
                <td>
                  <Code>border-width-1</Code>
                </td>
                <td>1px</td>
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
                  <Code>pickerFontFamily</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>font-family-sans</Code>
                </td>
                <td>&#39;Open Sans&#39;, sans-serif</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerFontSize</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerFontWeight</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>font-regular</Code>
                </td>
                <td>400</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerInteractedYearFontSize</Code>
                </td>
                <td>Picker year: selected, hover, active</td>
                <td>
                  <Code>font-scale-05</Code>
                </td>
                <td>1.5rem</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHeaderFontSize</Code>
                </td>
                <td>Picker header</td>
                <td>
                  <Code>font-scale-02</Code>
                </td>
                <td>0.875rem</td>
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
                  href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard"
                  newWindow
                >
                  SC 2.1.1: Keyboard
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap"
                  newWindow
                >
                  SC 2.1.2: No keyboard trap
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels"
                  newWindow
                >
                  SC 2.4.6: Headings and labels
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
                  newWindow
                >
                  SC 2.4.7: Focus Visible
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
              WAI-ARIA authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"
                newWindow
              >
                3.9 Dialog modal
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              WAI-ARIA authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html"
                newWindow
              >
                Date picker design pattern
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const DateInputSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/date-input/specs/DateInputSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default DateInputSpecsPage;
