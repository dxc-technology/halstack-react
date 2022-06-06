import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import basicUsage from "./examples/basicUsage";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
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
            This function will be called when the user selects an item per page
            option.
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
          <td>0</td>
          <td>Value of the tabindex.</td>
        </tr>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: (
          <>
            <Example example={basicUsage} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const PaginatorCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/paginator/code/PaginatorCodePage.tsx" />
    </DxcStack>
  );
};

export default PaginatorCodePage;
