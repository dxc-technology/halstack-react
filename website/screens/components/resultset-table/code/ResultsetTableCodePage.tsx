import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import sortable from "./examples/sortable";
import TableCode from "@/common/TableCode";
import StatusTag from "@/common/StatusTag";
import reduced from "./examples/reduced";

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
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusTag status="Required">Required</StatusTag>columns
              </DxcFlex>
            </td>
            <td>
              <TableCode>
                {"{ displayValue: React.ReactNode; isSortable?: boolean; }[]"}
              </TableCode>
            </td>
            <td>
              An array of objects representing the columns of the table. Each
              object has the following properties:
              <ul>
                <li>
                  <b>displayValue</b>: Column display value.
                </li>
                <li>
                  <b>isSortable</b>: Boolean value to indicate whether the
                  column is sortable or not.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusTag status="Required">Required</StatusTag>rows
              </DxcFlex>
            </td>
            <td>
              <TableCode>
                {"{ displayValue: React.ReactNode; sortValue?: string; }[]"}
              </TableCode>
            </td>
            <td>
              An array of objects representing the rows of the table, you will
              have as many objects as columns in the table. Each object has the
              following properties:
              <ul>
                <li>
                  <b>displayValue</b>: Value to be displayed in the cell.
                </li>
                <li>
                  <b>sortValue</b>: Value to be used when sorting the table by
                  that column. If not indicated displayValue will be used for
                  sorting.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                <StatusTag status="Information">New</StatusTag>mode
              </DxcFlex>
            </td>
            <td>
              <TableCode>'default' | 'reduced'</TableCode>
            </td>
            <td>
              The available table modes:
              <ul>
                <li>
                  <b>default</b>: Table with big spacing, applicable to most cases.
                </li>
                <li>
                  <b>reduced</b>: Smaller table with minimal spacing for high density information.
                </li>
              </ul>
            </td>
            <td>
              <TableCode>'default'</TableCode>
            </td>
          </tr>
          <tr>
            <td>showGoToPage</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>
              If true, a select component for navigation between pages will be
              displayed.
            </td>
            <td>
              <TableCode>true</TableCode>
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
              An array of numbers representing the items per page options.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemsPerPageFunction</td>
            <td>
              <TableCode>{"(value: number) => void"}</TableCode>
            </td>
            <td>
              This function will be called when the user selects an item per
              page option. The value selected will be passed as a parameter.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>
              <TableCode>
                'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' |
                'xxlarge' | Margin
              </TableCode>
            </td>
            <td>
              Size of the margin to be applied to the component. You can pass an
              object with 'top', 'bottom', 'left' and 'right' properties in
              order to specify different margin sizes.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabIndex</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>
              Value of the <Code>tabindex</Code> attribute applied to the
              sortable icon.
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
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
      {
        title: "Reduced usage",
        content: (
          <Example example={reduced} defaultIsVisible />
        ),
      },
      {
        title: "Sortable",
        content: <Example example={sortable} defaultIsVisible />,
      },
    ],
  },
];

const ResultsetTableCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/resultset-table/code/ResultsetTableCodePage.tsx" />
    </DxcFlex>
  );
};

export default ResultsetTableCodePage;
