import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex, DxcTable, DxcParagraph } from "@dxc-technology/halstack-react";
import itemsPerPage from "./examples/itemsPerPage";
import TableCode from "@/common/TableCode";

const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>currentPage</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Number of the current selected page.</td>
            <td>
              <TableCode>1</TableCode>
            </td>
          </tr>
          <tr>
            <td>itemsPerPage</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Number of items per page.</td>
            <td>
              <TableCode>5</TableCode>
            </td>
          </tr>
          <tr>
            <td>itemsPerPageOptions</td>
            <td>
              <TableCode>number[]</TableCode>
            </td>
            <td>
              An array of numbers representing the items per page options. If undefined, the select with items per page
              options will not be displayed.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemsPerPageFunction</td>
            <td>
              <TableCode>{"(itemsPerPage: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user selects an item per page option. The number of items per page
              will be passed as a parameter to this function.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>totalItems</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Total number of items in the pages.</td>
            <td>
              <TableCode>1</TableCode>
            </td>
          </tr>
          <tr>
            <td>showGoToPage</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, a select will be displayed with the page numbers to move through them</td>
            <td>
              <TableCode>false</TableCode>
            </td>
          </tr>
          <tr>
            <td>onPageChange</td>
            <td>
              <TableCode>{"(page: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user clicks on any of the button to change pages. The page number
              will be passed as a parameter to this function.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute.
            </td>
            <td>
              <TableCode>0</TableCode>
            </td>
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
            <DxcParagraph>
              This is an example of how to display 'Items per Page' select and how to handle it through the{" "}
              <Code>itemsPerPageFunction</Code> function.
            </DxcParagraph>
            <Example example={itemsPerPage} defaultIsVisible />
          </>
        ),
      },
    ],
  },
];

const PaginatorCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/paginator/code/PaginatorCodePage.tsx" />
  </DxcFlex>
);

export default PaginatorCodePage;
