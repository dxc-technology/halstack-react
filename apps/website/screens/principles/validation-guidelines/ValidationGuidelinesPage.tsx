import CodeBlock from "@/common/CodeBlock";
import DocFooter from "@/common/DocFooter";
import PageHeading from "@/common/PageHeading";
import QuickNavContainer from "@/common/QuickNavContainer";
import { DxcHeading, DxcFlex, DxcParagraph, DxcBulletedList, DxcTable } from "@dxc-technology/halstack-react";

const sections = [
  {
    title: "Phone Number Validation",
    subSections: [
      {
        title: "Overview",
        content: (
          <>
            <DxcParagraph>
              Phone number validation should be based on the ITU-E.164 international standard and country-specific
              numbering plans. This ensures consistency across all Halstack applications without requiring each team to
              implement custom validation logic.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "ITU-E.164 Standard",
        content: (
          <>
            <DxcParagraph>The ITU-E.164 defines the international format for telephone numbers.</DxcParagraph>

            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Format</strong>: "[+][Country Code][National Number]"
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Maximum length</strong>: 15 digits (excluding the + symbol)
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Country code</strong>: 1 to 3 digits
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>National number</strong>: Variable length depending on country
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Country-Specific Examples",
        content: (
          <>
            <DxcTable>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Country Code</th>
                  <th>Length</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spain</td>
                  <td>+34</td>
                  <td>9 digits</td>
                  <td>+34912345678</td>
                </tr>
                <tr>
                  <td>United States</td>
                  <td>+1</td>
                  <td>10 digits</td>
                  <td>+15551234567</td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>+44</td>
                  <td>10 digits</td>
                  <td>+447912345678</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>+49</td>
                  <td>10-11 digits</td>
                  <td>+4915123456789</td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>+33</td>
                  <td>9 digits</td>
                  <td>+33612345678</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "Implementation",
        content: (
          <>
            <DxcParagraph>
              We <strong>strongly recommend using established libraries</strong> instead of custom validation:
            </DxcParagraph>

            <CodeBlock>
              {`import { isValidPhoneNumber } from "libphonenumber-js"

const isValid = isValidPhoneNumber("+34912345678", "ES")`}
            </CodeBlock>
          </>
        ),
      },
      {
        title: "Best Practices",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>Accept multiple input formats (spaces, dashes, parentheses)</DxcBulletedList.Item>
              <DxcBulletedList.Item>Provide specific error messages</DxcBulletedList.Item>
              <DxcBulletedList.Item>Include a country code selector</DxcBulletedList.Item>
              <DxcBulletedList.Item>Validate on blur, not on every keystroke</DxcBulletedList.Item>
              <DxcBulletedList.Item>Use international format by default</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Why not custom JSON/Regex validation?",
        content: (
          <>
            <DxcParagraph>Maintaining validation rules for 200+ countries is impractical due to:</DxcParagraph>

            <DxcBulletedList>
              <DxcBulletedList.Item>Frequent changes in numbering plans</DxcBulletedList.Item>
              <DxcBulletedList.Item>Complexity of country-specific rules (length, prefixes, etc.)</DxcBulletedList.Item>
              <DxcBulletedList.Item>High risk of errors and inconsistencies</DxcBulletedList.Item>
              <DxcBulletedList.Item>High maintenance overhead for updates and edge cases</DxcBulletedList.Item>
            </DxcBulletedList>

            <DxcParagraph>Established libraries handle this complexity and receive regular updates.</DxcParagraph>
          </>
        ),
      },
    ],
  },
];

const ValidationGuidelinesPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Validation Guidelines" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/validation-guidelines/ValidationGuidelinesPage.tsx" />
  </DxcFlex>
);

export default ValidationGuidelinesPage;
