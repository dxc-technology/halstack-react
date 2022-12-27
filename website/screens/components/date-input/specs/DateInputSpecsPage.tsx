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
    title: "🚧 Design tokens",
    content:
      "The design tokens are currently under review and will be added soon.",
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
