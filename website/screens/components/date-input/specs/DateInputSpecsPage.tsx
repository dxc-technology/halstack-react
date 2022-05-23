import {
  DxcText,
  DxcList,
  DxcTable,
  DxcStack,
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
        <DxcText as="p">
          The date input <Code>color</Code>, <Code>typography</Code>,{" "}
          <Code>border</Code>, <Code>spacing</Code>, <Code>width</Code> and{" "}
          <Code>margin</Code> specifications are inherited from the text input,
          for reference{" "}
          <DxcLink>
            <Link href="/components/text-input/specifications">
              <a>check the text input component documentation</a>
            </Link>
          </DxcLink>
          .
        </DxcText>
        <DxcText as="p">
          The date input doesn&#39;t have the following text input elements or
          properties, therefore, their listed styles don&#39;t apply:
        </DxcText>
        <DxcList>
          <DxcText>Prefix / Suffix</DxcText>
          <DxcText>
            The size <Code>small</Code> is not available
          </DxcText>
        </DxcList>
      </>
    ),
  },
  {
    title: "Datepicker dialog",
    content: (
      <Figure caption="Structure and spacing for date picker calendar pop-up">
        <Image src={datePopupSpecs} alt="Date specifications for picker" />
      </Figure>
    ),
  },
  {
    title: "States",
    subSections: [
      {
        title: " Date input",
        content: (
          <>
            <DxcText as="p">
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>error</strong>, and{" "}
              <strong>disabled</strong>.
            </DxcText>
            <Figure caption="Examples of date input states">
              <Image
                src={dateSpecsStates}
                alt="Examples of date input states"
              />
            </Figure>
          </>
        ),
      },
      {
        title: " Date dialog",
        content: (
          <>
            <DxcText as="p">
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, and <strong>selected</strong>.
            </DxcText>
            <Figure caption="Examples of the calendar dialog states">
              <Image
                src={dateSpecsPopup}
                alt="Examples of the calendar dialog states"
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
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>
            Helper text <em>(Optional)</em>
          </DxcText>
          <DxcText>Input container</DxcText>
          <DxcText>Date button</DxcText>
          <DxcText>Clear action</DxcText>
          <DxcText>Error indicator</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Placeholder / value</DxcText>
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
                  <Code>pickerBackgroundColor</Code>
                </td>
                <td>Dialog container</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerDayFontColor</Code>
                </td>
                <td>Dialog text</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentDateColor</Code>
                </td>
                <td>Dialog title</td>
                <td>
                  <Code>color-grey-500</Code>
                </td>
                <td>#999999</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHoverDateBackgroundColor</Code>
                </td>
                <td>Container background</td>
                <td>
                  <Code>color-purple-200</Code>
                </td>
                <td>#e5d5f6</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerSelectedDateColor</Code>
                </td>
                <td>Date text:selected</td>
                <td>
                  <Code>color-white</Code>
                </td>
                <td>#ffffff</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerSelectedDateBackgroundColor</Code>
                </td>
                <td>Date background:hover</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerHoverDateFontColor</Code>
                </td>
                <td>Date text:hover</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerYearFontColor</Code>
                </td>
                <td>Year label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerMonthFontColor</Code>
                </td>
                <td>Mont label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerWeekFontColor</Code>
                </td>
                <td>Weekday label</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerMonthArrowsBackgroundColor</Code>
                </td>
                <td>Month selection controls</td>
                <td>
                  <Code>color-transparent</Code>
                </td>
                <td>transparent</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerFocusColor</Code>
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
                    <Code>pickerFontFamily</Code>
                  </td>
                  <td>Datepicker dialog</td>
                  <td>font-family-sans`</td>
                  <td>&#39;Open Sans&#39;, sans-serif</td>
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
                  <td>Year selector</td>
                  <td>
                    <Code>font-scale-03</Code>
                  </td>
                  <td>1rem / 16px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-size</Code>
                  </td>
                  <td>Current month</td>
                  <td>-</td>
                  <td>13px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-size</Code>
                  </td>
                  <td>Day</td>
                  <td>-</td>
                  <td>13px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-weight</Code>
                  </td>
                  <td>Year selector</td>
                  <td>
                    <Code>font-weight-semibold</Code>
                  </td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-weight</Code>
                  </td>
                  <td>Current month</td>
                  <td>
                    <Code>font-weight-regular</Code>
                  </td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-weight</Code>
                  </td>
                  <td>Day</td>
                  <td>
                    <Code>font-weight-regular</Code>
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
                  <Code>padding</Code>
                </td>
                <td>Calendar container</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-left/right</Code>
                </td>
                <td>Month container</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-left/right</Code>
                </td>
                <td>Year selector</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-top/bottom</Code>
                </td>
                <td>Separator</td>
                <td>
                  <Code>spacing-8</Code>
                </td>
                <td>0.5rem / 8px</td>
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
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>height/width</Code>
                </td>
                <td>Selected date circle</td>
                <td>28/28px</td>
              </tr>
              <tr>
                <td>
                  <Code>height/width</Code>
                </td>
                <td>Year selection caret</td>
                <td>24/24px</td>
              </tr>
              <tr>
                <td>
                  <Code>height/width</Code>
                </td>
                <td>Calendar top controls</td>
                <td>24/24px</td>
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
            <DxcList>
              <DxcText>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard"
                  newWindow
                >
                  SC 2.1.1: Keyboard
                </DxcLink>
              </DxcText>
              <DxcText>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap"
                  newWindow
                >
                  SC 2.1.2: No keyboard trap
                </DxcLink>
              </DxcText>
              <DxcText>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels"
                  newWindow
                >
                  SC 2.4.6: Headings and labels
                </DxcLink>
              </DxcText>
              <DxcText>
                Understanding WCAG 2.2 -{" "}
                <DxcLink
                  href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
                  newWindow
                >
                  SC 2.4.7: Focus Visible
                </DxcLink>
              </DxcText>
            </DxcList>
          </>
        ),
      },
      {
        title: "WAI-ARIA 1.2",
        content: (
          <DxcList>
            <DxcText>
              WAI-ARIA authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"
                newWindow
              >
                3.9 Dialog modal
              </DxcLink>
            </DxcText>
            <DxcText>
              WAI-ARIA authoring practices 1.2 -{" "}
              <DxcLink
                href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html"
                newWindow
              >
                Date picker design pattern
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const DateInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/date-input/specs/DateInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default DateInputSpecsPage;
