import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";
import Example from "@/common/example/Example";
import TableCode, { ExtendedTableCode } from "@/common/TableCode";
import StatusBadge from "@/common/StatusBadge";
import basicUsage from "./examples/basicUsage";
import selectable from "./examples/selectable";
import expandable from "./examples/expandable";
import hierarchical from "./examples/hierarchical";
import hierarchicalSelectable from "./examples/hierarchicalSelectable";
import paginatorHidden from "./examples/paginatorHidden";
import controlled from "./examples/controlled";

const columnsTypeString = `{
  key: string;
  label: string;
  resizable?: boolean;
  sortable?: boolean;
  draggable?: boolean;
  textEditable?: boolean;
  summaryKey?: string;
  alignment?: "left" | "right" | "center";
}`;

const GridRowTypeString = `{
  [key: string]: React.ReactNode | undefined;
}`;

const HierarchyGridRowTypeString = `GridRow & {
  childRows?: HierarchyGridRow[] | GridRow[];
}`;

const ExpandableGridRowTypeString = `GridRow & {
  expandedContent?: React.ReactNode;
  expandedContentHeight?: number;
}`;

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
              <StatusBadge status="required" />
              columns
            </td>
            <td>
              <p>
                <Code>GridColumn[]</Code>
                being <Code>GridColumn</Code>:
              </p>
              <ExtendedTableCode>{columnsTypeString}</ExtendedTableCode>
            </td>
            <td>
              Each <Code>GridColumn</Code> object has the following properties:
              <ul>
                <li>
                  <b>key</b>: Key that will be rendered from each row in <TableCode>rows</TableCode>.
                </li>
                <li>
                  <b>label</b>: Label that will be used for the column header.
                </li>
                <li>
                  <b>resizable</b>: Whether the column is resizable or not.
                </li>
                <li>
                  <b>sortable</b>: Whether the column is sortable or not.
                </li>
                <li>
                  <b>draggable</b>: Whether the column can be dragged or not to another position or not.
                </li>
                <li>
                  <b>textEditable</b>: Whether the column cells are editable or not.
                </li>
                <li>
                  <b>summaryKey</b>: Value that will be rendered from the <TableCode>summaryRow</TableCode>
                </li>
                <li>
                  <b>alignment</b>: Sets the alignment inside the cells.
                </li>
              </ul>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <StatusBadge status="required" />
              rows
            </td>
            <td>
              <TableCode>GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]</TableCode>
              <p>Each one of them being in order:</p>
              <p>
                <ExtendedTableCode>{GridRowTypeString}</ExtendedTableCode>
              </p>
              <p>
                <ExtendedTableCode>{HierarchyGridRowTypeString}</ExtendedTableCode>
              </p>
              <p>
                <ExtendedTableCode>{ExpandableGridRowTypeString}</ExtendedTableCode>
              </p>
            </td>
            <td>
              List of rows that will be rendered in each cell based on the <Code>key</Code> in each column.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>expandable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Whether the rows can expand or not.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>summaryRow</td>
            <td>
              <TableCode>GridRow</TableCode>
            </td>
            <td>Extra row that will be always visible.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>selectable</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>Whether the rows are selectable or not.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>selectedRows</td>
            <td>
              <TableCode>{`Set<string | number>`}</TableCode>
            </td>
            <td>
              Set of selected rows. This prop is mandatory if <Code>selectable</Code> is set to true. The{" "}
              <Code>uniqueRowId</Code> key will be used to identify the each row.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onSelectRows</td>
            <td>
              <TableCode>{`(selectedRows: Set<number | string>) => void`}</TableCode>
            </td>
            <td>
              Function called whenever the selected values changes. This prop is mandatory if <Code>selectable</Code> is
              set to true.The <Code>uniqueRowId</Code> key will be used to identify the rows.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>uniqueRowId</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>
              This prop indicates the unique key that can be used to identify each row. This prop is mandatory if{" "}
              <Code>selectable</Code> is set to true, <Code>expandable</Code> is set to true or <Code>rows</Code> is of
              type <Code>HierarchyGridRow[]</Code>.
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>onGridRowsChange</td>
            <td>
              <TableCode>{`(rows: GridRow[] | HierarchyGridRow[] | ExpandableGridRow[]) => void`}</TableCode>
            </td>
            <td>Function called whenever a cell is edited.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onSort</td>
            <td>
              <TableCode>{`(sortColumn?: { columnKey: string, direction: 'ASC' | 'DESC' }) => void`}</TableCode>
            </td>
            <td>Function called whenever a new sorting criteria is applied.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onPageChange</td>
            <td>
              <TableCode>{`(page: number) => void`}</TableCode>
            </td>
            <td>Function called whenever the current page is changed.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>hidePaginator</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, paginator will not be displayed.</td>
            <td>false</td>
          </tr>
          <tr>
            <td>totalItems</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Number of total items.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>showGoToPage</td>
            <td>
              <TableCode>boolean</TableCode>
            </td>
            <td>If true, a select component for navigation between pages will be displayed.</td>
            <td>true</td>
          </tr>
          <tr>
            <td>itemsPerPage</td>
            <td>
              <TableCode>number</TableCode>
            </td>
            <td>Number of items per page.</td>
            <td>5</td>
          </tr>
          <tr>
            <td>itemsPerPageOptions</td>
            <td>
              <TableCode>number[]</TableCode>
            </td>
            <td>An array of numbers representing the items per page options.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemsPerPageFunction</td>
            <td>
              <TableCode>{`(value: number) => void`}</TableCode>
            </td>
            <td>
              This function will be called when the user selects an item per page option. The value selected will be
              passed as a parameter.
            </td>
            <td>-</td>
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
        title: "Selectable data grid",
        content: <Example example={selectable} defaultIsVisible />,
      },
      {
        title: "Expandable data grid",
        content: <Example example={expandable} defaultIsVisible />,
      },
      {
        title: "Hierarchical data grid",
        content: <Example example={hierarchical} defaultIsVisible />,
      },
      {
        title: "Hierarchical and selectable data grid",
        content: <Example example={hierarchicalSelectable} defaultIsVisible />,
      },
      {
        title: "Controlled",
        content: <Example example={controlled} defaultIsVisible />,
      },
      {
        title: "No paginator",
        content: <Example example={paginatorHidden} defaultIsVisible />,
      },
    ],
  },
];

const DataGridCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/data-grid/code/DataGridCodePage.tsx" />
    </DxcFlex>
  );
};

export default DataGridCodePage;
