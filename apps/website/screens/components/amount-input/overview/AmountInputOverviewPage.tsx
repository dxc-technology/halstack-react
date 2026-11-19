import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/amount_input_anatomy.png";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Distinct from the standard number input, the amount input is optimized for values where{" "}
          <strong>numeric formatting is required</strong> (ex. currency, financial values, percentages, and
          measurements). It can present values using grouping, decimal separators, and symbols to provide contextual
          information to users.
        </DxcParagraph>
        <DxcParagraph>
          This makes the component particularly useful for financial forms, payments, budgets, transactions, quotations,
          and other experiences where users enter financial or values requiring specific units and formatting.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Amount input anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional)</em>: a descriptive text that identifies the amount users are expected
            to enter. Labels should be concise and should communicate the purpose of the value rather than its
            formatting.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Optional indicator</strong> <em>(Optional)</em>: indicates that providing an amount is not required.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: provides additional information about the expected amount,
            currency, restrictions, or other requirements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the visual wrapper for the input. It establishes the interactive area and
            communicates states such as hover, focus, error, disabled, and read-only.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Placeholder/Value:</strong> provides an example or hint before a value is entered. The value
            represents the number provided by the user and can be automatically formatted based on currency, percentage,
            or unit settings.
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
          Form inputs allow users to enter or select data. Choosing an input that matches the type of information being
          collected helps improve task completion and data accuracy.
        </DxcParagraph>
        <DxcParagraph>
          Amount input should be used when the numeric information being collected has value and formatting-specific
          presentation requirements. For numeric data where rigid formatting is unnecessary, use the more general number
          input instead.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Shared input characteristics",
        content: (
          <>
            <DxcParagraph>Amount input shares the common characteristics of other Halstack form inputs:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Placeholder:</strong> provides a hint or example of the expected value.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Helper text:</strong> provides instructions or additional information about the expected amount.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Optional label:</strong> communicates that entering a value is not mandatory.
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
    title: "Using amount inputs",
    content: (
      <DxcParagraph>
        Amount inputs should be used whenever users need to enter monetary values or other numeric values where{" "}
        <strong>amount formatting and readability are important</strong>.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Amount Input vs Number Input vs Text Input",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Use <strong>amount input</strong> when the value represents an amount and requires currency-specific,
                percentage, or measurement unit formatting.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Use <strong>number input</strong> for discrete, countable quantities like Item counts, guests, age, or
                ratings where the numeric value itself is calculated or compared.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Use <strong>text input</strong> for general numeric values that need more flexibility or a combination
                of numbers and letters. These can include location information like address, contact number, and zip
                code.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcTable>
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Component</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Address, phone number, zip code</td>
                  <td>Text Input</td>
                </tr>
                <tr>
                  <td>Quantities that Increment/decrement with a defined step (ex. age, object count, ratings)</td>
                  <td>Number Input</td>
                </tr>
                <tr>
                  <td>Currency or locale-formatted values</td>
                  <td>Amount Input</td>
                </tr>
                <tr>
                  <td>
                    Price, cost, payment or financial amounts that require specific digits, separators, decimals, or
                    formatting
                  </td>
                  <td>Amount Input</td>
                </tr>
                <tr>
                  <td>Quantities with units(percent, weight, distance, volume)</td>
                  <td>Amount Input</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
    ],
  },
  {
    title: "Formatting",
    content: (
      <>
        <DxcParagraph>
          Users should be able to type an amount directly into the field using familiar numeric input conventions.
        </DxcParagraph>
        <DxcParagraph>
          The component should distinguish between a user's <strong>editing state</strong> and the{" "}
          <strong>formatted representation</strong> of the final value. This prevents formatting from interfering
          unnecessarily while users are entering or correcting an amount.
        </DxcParagraph>
        <DxcParagraph>For example, a user typing:</DxcParagraph>
        <div>
          <Code>1234567.89</Code>
        </div>
        <DxcParagraph>may ultimately see:</DxcParagraph>
        <div>
          <Code>1,234,567.89</Code>
        </div>
        <DxcParagraph>after the value has been accepted and formatted.</DxcParagraph>
        <DxcParagraph>Common use cases and corresponding amount input formatting examples:</DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Use case</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Currency</td>
              <td>
                $ 2,532.50
                <br />
                123.456,79 €<br />
                -3,500.00 US dollars
              </td>
            </tr>
            <tr>
              <td>Units</td>
              <td>
                1,000 km
                <br />
                58.2 litres
              </td>
            </tr>
            <tr>
              <td>Percentage</td>
              <td>
                97.999 %
                <br />
                2.5%
              </td>
            </tr>
            <tr>
              <td>Digit grouping and separators</td>
              <td>
                R$ 1.250.500,75
                <br />
                1 250 500,75 €
                <br />
                ₹12,50,500.75
              </td>
            </tr>
            <tr>
              <td>Decimal values</td>
              <td>
                0.00075
                <br />
                9.81
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "General",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Always use clear labels:</strong> describe what the amount represents rather than relying on its
              formatting or currency symbol alone.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Make currency clear:</strong> when the value represents money, users should be able to determine
              which currency applies without relying on context elsewhere on the page.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Use helper text when necessary:</strong> explain constraints, expected values, or other
              requirements that cannot be inferred from the label.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Indicate optional fields:</strong> use the standard Halstack optional indicator when entering an
              amount is not mandatory.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Formatting",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Format for readability, not decoration:</strong> thousand/grouping separators are especially
              useful for large values making them easier to read. Alignment also plays a significant role in improving
              the readability of multiple values, particularly those with fixed decimal digits.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Consider locale carefully and communicate it clearly with users:</strong> Decimal and grouping
              separators differ between locales. For example, <Code>1,234.56</Code> and <Code>1.234,56</Code> can
              represent the same amount under different conventions.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Validation",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Provide useful validation messages:</strong> explain why an amount is invalid and, where possible,
              what users need to do to correct it.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Explain constraints in human-readable terms:</strong> for example, prefer “Enter an amount between
              $100 and $1,000” over a generic “Invalid value.”
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Preserve user input when displaying an error:</strong> so users can correct the value rather than
              entering it again.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const AmountInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/amount-input/overview/AmountInputOverviewPage.tsx" />
  </DxcFlex>
);

export default AmountInputOverviewPage;
