import { DxcStack, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
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
          <td>columns: object[]</td>
          <td>
            <Code>[]</Code>
          </td>
          <td>
            An array of objects representing the columns of the table. Each
            object has the following properties:
            <ul>
              <li>
                <b>displayValue</b>: Column display value.
              </li>
              <li>
                <b>isSortable</b>: Boolean value to indicate whether the column
                is sortable or not.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>rows: object[]</td>
          <td>
            <Code>[]</Code>
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
        </tr>
        <tr>
          <td>showGoToPage: boolean</td>
          <td>
            <Code>true</Code>
          </td>
          <td>
            If true, a select component for navigation between pages will be
            displayed.
          </td>
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
          <td>An array of numbers representing the items per page options.</td>
        </tr>
        <tr>
          <td>tabIndex: number</td>
          <td>
            <Code>0</Code>
          </td>
          <td>Value of the tabindex attribute given to the sortable icon.</td>
        </tr>
        <tr>
          <td>itemsPerPageFunction: function</td>
          <td></td>
          <td>
            This function will be called when the user selects an item per page
            option. The value selected will be passed as a parameter.
          </td>
        </tr>
        <tr>
          <td>margin: string | object</td>
          <td></td>
          <td>
            Size of the margin to be applied to the component ('xxsmall' |
            'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
            can pass an object with 'top', 'bottom', 'left' and 'right'
            properties in order to specify different margin sizes.
          </td>
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

const ResultsetTableCodePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/resultset-table/code/ResultsetTableCodePage.tsx" />
    </DxcStack>
  );
};

export default ResultsetTableCodePage;
