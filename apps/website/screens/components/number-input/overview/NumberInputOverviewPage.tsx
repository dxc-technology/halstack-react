import { DxcFlex, DxcParagraph, DxcBulletedList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/number_anatomy.png";
import spinButtons from "./images/number_spin_buttons.png";
import Example from "@/common/example/Example";
import Figure from "@/common/Figure";
import prefixSuffix from "./examples/prefixSuffix";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Number inputs are essential UI elements for collecting <strong>quantitative data</strong> from users. They are
          designed to handle numerical values such as quantities, prices, percentages, or any input that requires
          mathematical validation or calculations. Common use cases include forms involving payment amounts, product
          quantities, ages, measurements, or ratings.
        </DxcParagraph>
        <DxcParagraph>
          Unlike text inputs, number inputs offer built-in constraints like minimum and maximum values, step intervals,
          and automatic validation of non-numeric entries. These features help reduce errors, guide users toward valid
          entries, and ensure consistent data formatting.
        </DxcParagraph>
        <DxcParagraph>
          Proper labeling, error messaging, and the use of increment/decrement controls can further enhance usability
          and accessibility, leading to a more efficient and user-friendly experience.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Number input anatomy" />
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
            <strong>Spin buttons increase/decrease</strong> <em>(Optional)</em>: small interactive controls, displayed
            as plus (+) and minus (-) icons, that allow users to increment or decrement the numeric value using mouse
            clicks or keyboard input. These buttons improve usability by offering an alternative to manual typing, help
            prevent entry errors, and support accessibility for users who may prefer step-based adjustments.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: additional text placed below the input label that provides
            guidance, examples, or explanations to assist users in filling out the field correctly.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the visual wrapper around the input field that provides structure, ensures
            accessibility, and helps differentiate the input from other UI elements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Placeholder/Value:</strong> a short hint displayed inside the input field before any text is
            entered, offering a brief example or instruction on what type of data is expected. It disappears when the
            user starts typing. The value represents the actual content entered by the user. Unlike the placeholder, the
            value persists during interaction and is what gets submitted with the form.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Prefix</strong> <em>(Optional)</em>: a visual element placed before or after the user input, like
            currency symbols or units, to help clarify the expected data.
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
                <strong>Size and max length:</strong> inputs can have both a visual size (width of the field) and a
                character limit that defines how much text can be entered.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Prefix or suffix:</strong> some inputs include a visual element before or after the user input,
                like currency symbols or units, to help clarify the expected data.
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
    title: "Using number inputs",
    content: (
      <DxcParagraph>
        Number inputs are commonly used in forms and interfaces where users are required to provide numeric values such
        as quantities, prices, percentages, or other measurable data. Our number input component is highly configurable,
        allowing designers and developers to tailor it to a wide range of use cases while ensuring consistency,
        usability, and accessibility. In this section, we will highlight the key characteristics and behaviors of our
        number input, helping you understand how and when to use it effectively.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Actions",
        subSections: [
          {
            title: "Using spin buttons",
            content: (
              <>
                <DxcParagraph>
                  Spin buttons are one of the key interaction features of the number input. They allow users to{" "}
                  <strong>increment or decrement the value</strong> using simple clicks, rather than typing manually.
                  This is especially useful when working with step-based inputs, such as quantities or percentages, as
                  it ensures more accurate entries and improves overall efficiency for both keyboard and mouse users.
                </DxcParagraph>
                <Figure caption="States for the spin buttons">
                  <Image src={spinButtons} alt="States for the spin buttons" />
                </Figure>
              </>
            ),
          },
        ],
      },
      {
        title: "Prefix and suffix",
        content: (
          <>
            <DxcParagraph>
              Halstack number inputs also support the use of prefixes and suffixes, which are visual elements that help
              users quickly <strong>understand the format or context of the numeric value</strong> being entered. These
              elements clarify what type of number is expected, such as currency, units, or percentages, and ensure
              greater consistency in data entry.
            </DxcParagraph>
            <DxcParagraph>
              This added context is especially helpful in forms with multiple numeric fields, allowing users to scan and
              comprehend each field's purpose at a glance, ultimately improving the overall experience and reducing
              entry errors.
            </DxcParagraph>
            <Example example={prefixSuffix} />
          </>
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
              <strong>Always use clear labels:</strong> provide a clear and concise label to describe the expected
              numeric input. Avoid relying solely on the placeholder to communicate the field's purpose.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Use helper text for additional guidance:</strong> if the expected input range, format, or units
              might be unclear, add helper text to avoid confusion and input errors.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Indicate when the field is optional:</strong> use an "Optional" label when applicable to reduce
              user hesitation or over-input.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Ensure consistent visual states:</strong> clearly differentiate between focus, error, disabled,
              and read-only states using accessible visual cues and messages.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Set valid constraints:</strong> always define <Code>min</Code>, <Code>max</Code>, or{" "}
              <Code>step</Code> values when the input must fall within a numeric range to improve accuracy and prevent
              invalid entries.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Actions",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Enable keyboard and button control:</strong> users should be able to input values manually or use
              the spin buttons to increment/decrement the value.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid aggressive auto-corrections:</strong> do not override user input instantly or without
              warning; let users control their interaction unless invalid input requires immediate correction.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Validate on interaction:</strong> validate values when the user finishes interacting with the
              field, not while they're typing, to prevent frustration.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Allow incremental control:</strong> use appropriate <Code>step</Code> values to help users input
              valid values more efficiently when using spin buttons.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Prefix/suffix",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Use prefixes and suffixes for context:</strong> clearly indicate units (e.g., kg, cm), currency
              (e.g., USD, EUR), or domain-specific values to help users understand what's expected.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid clutter:</strong> only use prefixes or suffixes when they add value and improve clarity.
              Don't overload the field with unnecessary UI elements.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const NumberInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/number-input/overview/NumberInputOverviewPage.tsx" />
  </DxcFlex>
);

export default NumberInputOverviewPage;
