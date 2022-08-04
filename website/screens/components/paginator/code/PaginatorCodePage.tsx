import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcTable, DxcText } from "@dxc-technology/halstack-react";
import itemsPerPage from "./examples/itemsPerPage";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
            <HeaderDescriptionCell>Description</HeaderDescriptionCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>currentPage: number</td>
            <td>
              <Code>1</Code>
            </td>
            <td>Number of the current selected page.</td>
          </tr>
          <tr>
            <td>itemsPerPage: number</td>
            <td>
              <Code>5</Code>
            </td>
            <td>Number of items per page.</td>
          </tr>
          <tr>
            <td>itemsPerPageOptions: number[]</td>
            <td>
              <Code>[]</Code>
            </td>
            <td>
              An array of numbers representing the items per page options. If
              undefined, the select with items per page options will not be
              displayed.
            </td>
          </tr>
          <tr>
            <td>itemsPerPageFunction: function</td>
            <td></td>
            <td>
              This function will be called when the user selects an item per
              page option.
            </td>
          </tr>
          <tr>
            <td>totalItems: number</td>
            <td>
              <Code>1</Code>
            </td>
            <td>Total number of items in the pages.</td>
          </tr>
          <tr>
            <td>showGoToPage: boolean</td>
            <td>
              <Code>false</Code>
            </td>
            <td>
              If true, a select will be displayed with the page numbers to move
              through them
            </td>
          </tr>
          <tr>
            <td>onPageChange: function</td>
            <td></td>
            <td>
              This function will be called when the user clicks on any of the
              button to change pages. The page number will be passed as a
              parameter to this function.
            </td>
          </tr>
          <tr>
            <td>tabIndex: number</td>
            <td>
              <Code>0</Code>
            </td>
            <td>Value of the tabindex.</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Items per page",
        content: (
          <>
            <DxcText as="p">
              This is an example of how to display 'Items per Page' select and
              how to handle it through the itemsPerPageFunction.
            </DxcText>
            <Example example={itemsPerPage} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const PaginatorCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/paginator/code/PaginatorCodePage.tsx" />
    </DxcFlex>
  );
};

export default PaginatorCodePage;
