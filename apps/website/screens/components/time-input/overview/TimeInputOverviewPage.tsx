import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import anatomy from "./images/time_input_anatomy.png";
import timeInputPickerPopup from "./images/time_picker_popup.png";
import timeInputPickerAction from "./images/time_picker_action.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Time inputs allow users to enter or select a specific time using a time picker or manual text entry. Designed to
        support a wide range of use cases - particularly in working with the date input component - from booking systems
        to form submissions, using this component ensures clarity and consistency in date and time formats, helps
        prevent input errors, and adapts to different locale and accessibility requirements. Its combination of manual
        input and guided selection provides flexibility while maintaining a streamlined user experience.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Time input anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional)</em>: a descriptive text that helps users understand what information
            is expected in the input field. It should be clear, concise, and placed near the input for better
            readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Optional indicator</strong> <em>(Optional)</em>: a small indicator that signals the input field is
            not mandatory. It helps users know they can leave the field empty without causing validation errors.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clear action</strong> <em>(Optional)</em>: a small button, usually represented by an "X" icon, that
            allows users to quickly clear the time specified or selected without manually deleting each value.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Time button:</strong> an interactive element inside the input field that triggers the time picker of
            the component, where the user can select hour, minute, and AM/PM values.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: additional text placed below the input field that provides
            guidance, examples, or explanations to assist users in filling out the field correctly.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the visual wrapper around the input field that provides structure, ensures
            accessibility, and helps differentiate the input from other UI elements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Value:</strong> displays the selected or manually entered time in the input field, following an
            hour, minutes, AM/PM format.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Form inputs",
    content: (
      <>
        <DxcParagraph>
          Form inputs are essential UI elements that allow users to interact with digital products by{" "}
          <strong>entering or selecting data</strong>. Choosing the right input type and structure is key to designing
          efficient, user-friendly forms that support task completion and data accuracy.
        </DxcParagraph>
        <DxcParagraph>
          A form input (also known as a form field) is used to capture user data. Common input types include text
          fields, date pickers, number fields, radio buttons, checkboxes, toggles, and dropdowns. Forms should always
          include a submission method, such as a submit button, link, or keyboard trigger, to complete the interaction.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Shared input characteristics",
        content: (
          <>
            <DxcParagraph>
              Although input fields vary in type and purpose, they often share a common set of features:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Placeholder:</strong> a short hint displayed inside the input field that describes its expected
                value or purpose.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Helper text:</strong> additional information displayed below the field to guide the user in
                providing the correct input.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Optional label:</strong> inputs that are not mandatory can be marked with an "Optional" tag to
                set clear expectations.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Common input states",
        content: (
          <>
            <DxcParagraph>Most inputs can also present standard interactive or informative states:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Disabled:</strong> this state prevents users from interacting with the field. It's typically
                used when a value is not applicable or editable under certain conditions or roles.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Error:</strong> when a user enters invalid or incomplete data, the input shows an error state,
                often accompanied by a helpful message to guide corrections.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Read-only:</strong> the input is visible, focusable, and hoverable, but not editable. This is
                ideal for fields with auto-calculated values. Unlike disabled fields, read-only inputs can still be
                submitted with the form and are part of the form data.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Using time inputs",
    content: (
      <DxcParagraph>
        Time inputs are designed to help users provide valid, well-formatted times with minimal friction. Similar to the
        date inputs, they combine manual input with an interactive picker, making them ideal for scenarios like
        bookings, forms, or scheduling events. They are particularly useful for reducing input errors and ensuring
        consistent formatting across different regions and use cases.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Actions",
        subSections: [
          {
            title: "Clear action",
            content: (
              <>
                <DxcParagraph>
                  Similar to the date input, the time input includes a clear (close) icon that allows users to quickly
                  remove the selected or typed time with a single click. This is especially helpful when correcting
                  mistakes or resetting the field during form completion. The icon is only visible when a value is
                  present, keeping the interface clean and focused.
                </DxcParagraph>
              </>
            ),
          },
          {
            title: "Time picker popup",
            content: (
              <>
                <DxcParagraph>
                  The component features a built-in time picker popup that can be opened via the time icon.
                </DxcParagraph>
                <Figure caption="States for the time picker action">
                  <Image src={timeInputPickerAction} alt="States for the time picker action" />
                </Figure>
                <DxcParagraph>
                  This popup allows users to select the hour, minute, and AM/PM values visually, reducing the likelihood
                  of formatting errors. The minutes values are presented as 5-minute increments to provide an optimal
                  balance of selectable items. Users can manually enter minutes values that are not part of the
                  selectable list. The 24-hour variant does not include the AM/PM selection.
                </DxcParagraph>
                <Figure caption="States for the time picker popup">
                  <Image src={timeInputPickerPopup} alt="States for the time picker popup" />
                </Figure>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "General",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Always use the time input when a valid time format is required. This helps ensure consistency and prevents
              user error.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Display time formats clearly and consistently across your application.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Include a clear label that describes the context or purpose of the time (e.g., "Notification time" or
              "Start time").
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid setting default times unless the context explicitly calls for it, such as pre-filling the current
              time for quick scheduling.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Formatting and validation",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Provide clear feedback if the user types an invalid time manually.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid using text inputs with custom formatting masks in place of the time input component — this can
              confuse users and complicate validation.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Clear action",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use the clear (close) icon to let users easily remove an already selected time. This improves usability
              for forms where the time might not be required.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Ensure the clear icon is only visible when a value is present, keeping the interface clean.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Time picker dropdown",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Utilize the time picker to reduce formatting errors and speed up time selection, especially for less
              tech-savvy users or on mobile.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              You have the option to use a combination of the dropdown (for hours) then manually adjust the minute
              values for values that are not part of the selectable list.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Accessibility and internationalization",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Provide clear feedback if the user types an invalid time manually.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid using text inputs with custom formatting masks in place of the time input component — this can
              confuse users and complicate validation.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const TimeInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/time-input/overview/TimeInputOverviewPage.tsx" />
  </DxcFlex>
);

export default TimeInputOverviewPage;
