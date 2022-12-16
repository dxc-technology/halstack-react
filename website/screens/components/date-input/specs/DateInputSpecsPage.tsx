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
          for reference{" "}
          <Link href="/components/text-input/specifications" passHref>
            <DxcLink>check the text input component documentation</DxcLink>
          </Link>
          .
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
            <DxcParagraph>
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, <strong>error</strong>, and{" "}
              <strong>disabled</strong>.
            </DxcParagraph>
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
            <DxcParagraph>
              States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
              <strong>focus</strong>, and <strong>selected</strong>.
            </DxcParagraph>
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
                  <Code>pickerOtherMonthDateFontColor</Code>
                </td>
                <td>Dialog text</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentDateFontColor</Code>
                </td>
                <td>Current date</td>
                <td>
                  <Code>color-black</Code>
                </td>
                <td>#000000</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentDateBorderColor</Code>
                </td>
                <td>Current date</td>
                <td>
                  <Code>color-purple-300</Code>
                </td>
                <td>#cbacec</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentYearFontColor</Code>
                </td>
                <td>Current year button</td>
                <td>
                  <Code>color-purple-700</Code>
                </td>
                <td>#5f249f</td>
              </tr>
              <tr>
                <td>
                  <Code>pickerCurrentYearBorderColor</Code>
                </td>
                <td>Current year button</td>
                <td>
                  <Code>color-purple-300</Code>
                </td>
                <td>#cbacec</td>
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
                    <Code>font-scale-02</Code>
                  </td>
                  <td>0.875rem / 14px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-size</Code>
                  </td>
                  <td>Current month</td>
                  <td>-</td>
                  <td>0.875rem / 14px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-size</Code>
                  </td>
                  <td>Day</td>
                  <td>-</td>
                  <td>0.875rem / 14px</td>
                </tr>
                <tr>
                  <td>
                    <Code>font-weight</Code>
                  </td>
                  <td>Year selector</td>
                  <td>
                    <Code>font-weight-regular</Code>
                  </td>
                  <td>400</td>
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
                  <Code>padding-top</Code>
                </td>
                <td>Date picker container</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-left/right</Code>
                </td>
                <td>Year picker trigger</td>
                <td>
                  <Code>spacing-16</Code>
                </td>
                <td>1rem / 16px</td>
              </tr>
              <tr>
                <td>
                  <Code>padding-left/right/bottom</Code>
                </td>
                <td>Calendar container</td>
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
                <td>36/36px</td>
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
              <tr>
                <td>
                  <Code>height/width</Code>
                </td>
                <td>Year picker trigger</td>
                <td>40/172px</td>
              </tr>
              <tr>
                <td>
                  <Code>height/width</Code>
                </td>
                <td>Year picker</td>
                <td>40/80px</td>
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
