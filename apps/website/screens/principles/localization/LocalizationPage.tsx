import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import PageHeading from "@/common/PageHeading";
import QuickNavContainer from "@/common/QuickNavContainer";
import { DxcHeading, DxcFlex, DxcTable, DxcParagraph, DxcLink } from "@dxc-technology/halstack-react";
import Link from "next/link";
import translations from "./examples/translations";

const sections = [
  {
    title: "Translation",
    content: (
      <>
        <DxcParagraph>
          Halstack Design System provides the possibility to translate all the labels that cannot be changed by the
          component properties through the{" "}
          <Link href="/utilities/halstack-provider/#localization" passHref legacyBehavior>
            <DxcLink>Halstack Provider</DxcLink>
          </Link>{" "}
          and its property <Code>labels</Code>.
        </DxcParagraph>
        <DxcParagraph>
          You will need to create an object with your translations. In this object, you will have as many objects as
          components you want to translate, using the label from the list we show here below, following the structure of
          the example.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Translation example",
    content: <Example example={translations} defaultIsVisible />,
  },
  {
    title: "Default labels",
    content: (
      <DxcParagraph>
        The following sections define the structure of the JSON object with the different components and their
        respective labels.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "formFields",
        content: (
          <>
            <DxcParagraph>These labels are common to several components of the design system.</DxcParagraph>
            <DxcTable>
              <thead>
                <tr>
                  <th>Label Name</th>
                  <th>Default value</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Code>optionalLabel</Code>
                  </td>
                  <td>(Optional)</td>
                </tr>
                <tr>
                  <td>
                    <Code>requiredSelectionErrorMessage</Code>
                  </td>
                  <td>This field is required. Please, choose an option.</td>
                </tr>
                <tr>
                  <td>
                    <Code>requiredValueErrorMessage</Code>
                  </td>
                  <td>This field is required. Please, enter a value.</td>
                </tr>
                <tr>
                  <td>
                    <Code>formatRequestedErrorMessage</Code>
                  </td>
                  <td>Please match the format requested.</td>
                </tr>
                <tr>
                  <td>
                    <Code>lengthErrorMessage</Code>
                  </td>
                  <td>
                    Min length <Code>minLength</Code>, max length <Code>maxLength</Code>.
                  </td>
                  <td>
                    It is a function that receives two parameters (minlength and maxlength) and returns the text with
                    those parameters.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Code>logoAlternativeText</Code>
                  </td>
                  <td>Logo</td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "applicationLayout",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>visibilityToggleTitle</Code>
                </td>
                <td>Toggle visibility sidenav</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "alert",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>previousMessageActionTitle</Code>
                </td>
                <td>Previous message</td>
              </tr>
              <tr>
                <td>
                  <Code>nextMessageActionTitle</Code>
                </td>
                <td>Next message</td>
              </tr>
              <tr>
                <td>
                  <Code>closeAlertActionTitle</Code>
                </td>
                <td>Close alert</td>
              </tr>
              <tr>
                <td>
                  <Code>closeMessageActionTitle</Code>
                </td>
                <td>Close message</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "calendar",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>daysShort</Code>
                </td>
                <td>[Mo, Tu, We, Th, Fr, Sa, Su]</td>
              </tr>
              <tr>
                <td>
                  <Code>months</Code>
                </td>
                <td>
                  [January, February, March, April, May, June, July, August, September, October, November, December]
                </td>
              </tr>
              <tr>
                <td>
                  <Code>previousMonthTitle</Code>
                </td>
                <td>Previous month</td>
              </tr>
              <tr>
                <td>
                  <Code>nextMonthTitle</Code>
                </td>
                <td>Next month</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "dateInput",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>invalidDateErrorMessage</Code>
                </td>
                <td>Invalid date.</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "dialog",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>closeIconAriaLabel</Code>
                </td>
                <td>Close dialog</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "fileInput",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>fileSizeGreaterThanErrorMessage</Code>
                </td>
                <td>File size must be greater than min size.</td>
              </tr>
              <tr>
                <td>
                  <Code>fileSizeLessThanErrorMessage</Code>
                </td>
                <td>File size must be less than max size.</td>
              </tr>
              <tr>
                <td>
                  <Code>multipleButtonLabelDefault</Code>
                </td>
                <td>Select files</td>
              </tr>
              <tr>
                <td>
                  <Code>singleButtonLabelDefault</Code>
                </td>
                <td>Select file</td>
              </tr>
              <tr>
                <td>
                  <Code>dropAreaButtonLabelDefault</Code>
                </td>
                <td>Select</td>
              </tr>
              <tr>
                <td>
                  <Code>multipleDropAreaLabelDefault</Code>
                </td>
                <td>or drop files</td>
              </tr>
              <tr>
                <td>
                  <Code>singleDropAreaLabelDefault</Code>
                </td>
                <td>or drop file</td>
              </tr>
              <tr>
                <td>
                  <Code>deleteFileActionTitle</Code>
                </td>
                <td>Remove file</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "footer",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>copyrightText</Code>
                </td>
                <td>
                  © DXC Technology <Code>year</Code>. All rights reserved.
                </td>
                <td>It is a function that receives one parameter (year) and returns the text with that parameter.</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "header",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>closeIcon</Code>
                </td>
                <td>Close menu</td>
              </tr>
              <tr>
                <td>
                  <Code>hamburgerTitle</Code>
                </td>
                <td>Menu</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "numberInput",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>valueGreaterThanOrEqualToErrorMessage</Code>
                </td>
                <td>
                  Value must be greater than or equal to <Code>value</Code>.
                </td>
                <td>It is a function that receives one parameter (value) and returns the text with that parameter.</td>
              </tr>
              <tr>
                <td>
                  <Code>valueLessThanOrEqualToErrorMessage</Code>
                </td>
                <td>
                  Value must be less than or equal to <Code>value</Code>.
                </td>
                <td>It is a function that receives one parameter (value) and returns the text with that parameter.</td>
              </tr>
              <tr>
                <td>
                  <Code>decrementValueTitle</Code>
                </td>
                <td>Decrement value</td>
              </tr>
              <tr>
                <td>
                  <Code>incrementValueTitle</Code>
                </td>
                <td>Increment value</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "paginator",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>itemsPerPageText</Code>
                </td>
                <td>Items per page:</td>
              </tr>
              <tr>
                <td>
                  <Code>minToMaxOfText</Code>
                </td>
                <td>
                  <Code>minNumberOfItems</Code> to <Code>maxNumberOfItems</Code> of <Code>totalItems</Code>
                </td>
                <td>
                  It is a function that receives three parameters (minNumberOfItems, maxNumberOfItems and totalItems)
                  and returns the text with those parameters.
                </td>
              </tr>
              <tr>
                <td>
                  <Code>goToPageText</Code>
                </td>
                <td>Go to page:</td>
              </tr>
              <tr>
                <td>
                  <Code>pageOfText</Code>
                </td>
                <td>
                  Page: <Code>pageNumber</Code> of <Code>totalPagesNumber</Code>
                </td>
                <td>
                  It is a function that receives two parameters (pageNumber and totalPagesNumber) and returns the text
                  with those parameters.
                </td>
              </tr>
              <tr>
                <td>
                  <Code>firstResultsTitle</Code>
                </td>
                <td>First results</td>
              </tr>
              <tr>
                <td>
                  <Code>previousResultsTitle</Code>
                </td>
                <td>Previous results</td>
              </tr>
              <tr>
                <td>
                  <Code>nextResultsTitle</Code>
                </td>
                <td>Next results</td>
              </tr>
              <tr>
                <td>
                  <Code>lastResultsTitle</Code>
                </td>
                <td>Last results</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "passwordInput",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>inputShowPasswordTitle</Code>
                </td>
                <td>Show password</td>
              </tr>
              <tr>
                <td>
                  <Code>inputHidePasswordTitle</Code>
                </td>
                <td>Hide password</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "quickNav",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>contentTitle</Code>
                </td>
                <td>Contents</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "radioGroup",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>optionalItemLabelDefault</Code>
                </td>
                <td>N/A</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "searchBar",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>clearFieldActionTitle</Code>
                </td>
                <td>Clear field</td>
              </tr>
              <tr>
                <td>
                  <Code>inputAriaLabel</Code>
                </td>
                <td>Search input</td>
              </tr>
              <tr>
                <td>
                  <Code>triggerTitle</Code>
                </td>
                <td>Search</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "select",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>actionClearSelectionTitle</Code>
                </td>
                <td>Clear selection</td>
              </tr>
              <tr>
                <td>
                  <Code>actionClearSearchTitle</Code>
                </td>
                <td>Clear search</td>
              </tr>
              <tr>
                <td>
                  <Code>noMatchesErrorMessage</Code>
                </td>
                <td>No matches found</td>
              </tr>
              <tr>
                <td>
                  <Code>selectAllLabel</Code>
                </td>
                <td>Select all</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "tabs",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>scrollLeft</Code>
                </td>
                <td>Scroll left</td>
              </tr>
              <tr>
                <td>
                  <Code>scrollRight</Code>
                </td>
                <td>Scroll right</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
      {
        title: "textInput",
        content: (
          <DxcTable>
            <thead>
              <tr>
                <th>Label Name</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Code>clearFieldActionTitle</Code>
                </td>
                <td>Clear field</td>
              </tr>
              <tr>
                <td>
                  <Code>searchingMessage</Code>
                </td>
                <td>Searching...</td>
              </tr>
              <tr>
                <td>
                  <Code>fetchingDataErrorMessage</Code>
                </td>
                <td>Error fetching data</td>
              </tr>
            </tbody>
          </DxcTable>
        ),
      },
    ],
  },
];

const LocalizationPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <PageHeading>
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
        <DxcHeading level={1} text="Localization" />
      </DxcFlex>
    </PageHeading>
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/localization/LocalizationPage.tsx" />
  </DxcFlex>
);

export default LocalizationPage;
