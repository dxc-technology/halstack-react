import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import anatomy from "./images/date_input-anatomy.png";
import clearContent from "./images/date_input-clearcontent.png";
import datePicker from "./images/date_input-datepicker.png";
import Image from "@/common/Image";
import Figure from "@/common/Figure";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The Date Input component allows users to enter or select a specific date using a calendar picker or manual text
        entry. Designed to support a wide range of use cases, from booking systems to form submissions, it ensures
        clarity and consistency in date formats, helps prevent input errors, and adapts to different locale and
        accessibility requirements. Its combination of manual input and guided selection provides flexibility while
        maintaining a streamlined user experience.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Date input's anatomy" />
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
            <strong>Date button:</strong> an interactive element inside the input field that triggers the date picker of
            the component, where the user can select a date based on the day, month and year.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clear action</strong> <em>(Optional)</em>: a small button, usually represented by an "X" icon, that
            allows users to clear the date selected or introduced quickly without manually deleting it.
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
            <strong>Value:</strong> displays the selected or manually entered date in the input field, following the
            specified format.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Form Inputs",
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
                <strong>Disabled:</strong> This state prevents users from interacting with the field. It's typically
                used when a value is not applicable or editable under certain conditions or roles.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Error:</strong> When a user enters invalid or incomplete data, the input shows an error state,
                often accompanied by a helpful message to guide corrections.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Read-only:</strong> The input is visible, focusable, and hoverable, but not editable. This is
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
    title: "Using date inputs",
    content: (
      <>
        <DxcParagraph>
          Date inputs are designed to help users provide valid, well-formatted dates with minimal friction. Unlike
          standard text fields, <strong>they combine manual input with an interactive date picker</strong>, making them
          ideal for scenarios like bookings, forms, or scheduling events. They are particularly useful for reducing
          input errors and ensuring consistent formatting across different regions and use cases.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Clear action",
        content: (
          <>
            <DxcParagraph>
              As most of our form inputs, the date input includes a clear (close) icon that allows users to quickly
              remove the selected or typed date with a single click. This is especially helpful when correcting mistakes
              or resetting the field during form completion. The icon is only visible when a value is present, keeping
              the interface clean and focused.
            </DxcParagraph>
            <Figure caption="Example of a date input with a clear action">
              <Image src={clearContent} alt="Example of a date input with a clear action" />
            </Figure>
          </>
        ),
      },
      {
        title: "Date picker dialog",
        content: (
          <>
            <DxcParagraph>
              The component features a built-in date picker dialog that can be opened via the calendar icon. This dialog
              allows users to <strong>select a date visually from a calendar</strong>, reducing the likelihood of
              formatting errors. The picker includes navigational controls to switch between months and years, ensuring
              users can easily access both past and future dates.
            </DxcParagraph>
            <Figure caption="Example of a date picker dialog">
              <Image src={datePicker} alt="Example of a date picker dialog" />
            </Figure>
          </>
        ),
      },
      {
        title: "Internationalization",
        content: (
          <DxcParagraph>
            Our date input supports internationalization by <strong>adapting to locale-specific formats</strong> (e.g., DD/MM/YYYY vs.
            MM/DD/YYYY) and calendar language. This ensures that users across different regions understand the input
            format and interact with the component comfortably. It's especially important to align the expected format
            with the user's regional settings or provide format guidance with placeholders and helper text.
          </DxcParagraph>
        ),
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
              Always use the date input when a valid date format is required. This helps ensure consistency and prevents
              user error.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Display date formats clearly and consistently across your application, especially if users from multiple
              locales are expected.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Include a clear label that describes the context or purpose of the date (e.g., "Date of birth" or "Start
              date").
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid setting default dates unless the context explicitly calls for it, such as pre-filling today's date
              for quick scheduling.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Formatting and validation",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Match the date format to the user’s regional settings (DD/MM/YYYY or MM/DD/YYYY), and consider using
              placeholder text to guide formatting.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Provide clear feedback if the user types an invalid date manually.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid using text inputs with custom formatting masks in place of the date input component—this can confuse
              users and complicate validation.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Clear action",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use the clear (close) icon to let users easily remove an already selected date. This improves usability
              for forms where the date might not be required.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Ensure the clear icon is only visible when a value is present, keeping the interface clean.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Date picker dialog",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Include the date picker to reduce formatting errors and speed up date selection, especially for less
              tech-savvy users or on mobile.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              For workflows that involve selecting a wide range of dates (e.g., historical records), make sure the date
              picker supports quick navigation between months and years.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Accessibility and internationalization",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Support multiple locales to accommodate different date formats and calendar languages, and update labels
              accordingly.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use ISO 8601 format internally (YYYY-MM-DD) to prevent errors during submission or back-end processing.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const DateInputOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/date-input/overview/DateInputOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default DateInputOverviewPage;
