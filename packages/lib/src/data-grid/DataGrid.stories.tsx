import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcDataGrid from "./DataGrid";
import DxcContainer from "../container/Container";
import { GridColumn, HierarchyGridRow } from "./types";
import { useState } from "react";
import { disabledRules } from "../../test/accessibility/rules/specific/data-grid/disabledRules";
import preview from "../../.storybook/preview";
import { userEvent, within } from "@storybook/test";
import DxcBadge from "../badge/Badge";
import DxcTable from "../table/Table";

export default {
  title: "Data Grid",
  component: DxcDataGrid,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({ id: ruleId, reviewOnFail: true })),
          ...preview?.parameters?.a11y?.config?.rules,
        ],
      },
    },
  },
};

const actions = [
  {
    title: "icon",
    onClick: (value?) => {
      console.log(value);
    },
    options: [
      {
        value: "1",
        label: "Amazon with a very long text",
      },
      {
        value: "2",
        label: "Ebay",
      },
      {
        value: "3",
        label: "Apple",
      },
    ],
  },
  {
    title: "icon",
    onClick: (value?) => {
      console.log(value);
    },
    options: [
      {
        value: "1",
        label: "Amazon with a very long text",
      },
      {
        value: "2",
        label: "Ebay",
      },
      {
        value: "3",
        label: "Apple",
      },
    ],
  },
  {
    disabled: true,
    title: "icon",
    onClick: (value?) => {
      console.log(value);
    },
    options: [
      {
        value: "1",
        label: "Amazon with a very long text",
      },
      {
        value: "2",
        label: "Ebay",
      },
      {
        value: "3",
        label: "Apple",
      },
    ],
  },
  {
    icon: "filled_edit",
    title: "icon",
    onClick: () => {},
  },
  {
    icon: "filled_delete",
    title: "icon",
    onClick: () => {},
    disabled: true,
  },
];

const columns: GridColumn[] = [
  {
    key: "id",
    label: "ID",
    resizable: true,
    sortable: true,
    draggable: false,
    alignment: "left",
  },
  {
    key: "task",
    label: "Title",
    resizable: true,
    sortable: true,
    draggable: true,
    textEditable: true,
    alignment: "left",
  },
  {
    key: "complete",
    label: " % Complete",
    resizable: true,
    sortable: true,
    draggable: true,
    alignment: "right",
    summaryKey: "label",
  },
  {
    key: "priority",
    label: "Priority",
    resizable: true,
    draggable: true,
    alignment: "center",
    summaryKey: "total",
  },
  {
    key: "actions",
    label: "Actions",
    alignment: "center",
  },
];

const expandableRows = [
  {
    id: 1,
    task: "Task 1",
    complete: 46,
    priority: "High",
    issueType: "Bug",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    expandedContentHeight: 470,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 2,
    task: "Task 2",
    complete: 51,
    priority: "High",
    issueType: "Epic",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 3,
    task: "Task 3",
    complete: 40,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 4,
    task: "Task 4",
    complete: 10,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 5,
    task: "Task 5",
    complete: 68,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 6,
    task: "Task 6",
    complete: 37,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 7,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 8,
    task: "Task 8",
    complete: 27,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
  {
    id: 9,
    task: "Task 9",
    complete: 36,
    priority: "Critical",
    issueType: "Epic",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions as any} />,
  },
];

const expandableRowsPaginated = [
  {
    id: 11,
    task: "Task 1",
    complete: 46,
    priority: "High",
    issueType: "Bug",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
    expandedContentHeight: 470,
  },
  {
    id: 22,
    task: "Task 2",
    complete: 51,
    priority: "High",
    issueType: "Epic",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 33,
    task: "Task 3",
    complete: 40,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 44,
    task: "Task 4",
    complete: 10,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 55,
    task: "Task 5",
    complete: 68,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 66,
    task: "Task 6",
    complete: 37,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 77,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 88,
    task: "Task 8",
    complete: 27,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
  {
    id: 99,
    task: "Task 9",
    complete: 36,
    priority: "Critical",
    issueType: "Epic",
    expandedContent: <DxcContainer> Custom content 1</DxcContainer>,
  },
];

const childcolumns: GridColumn[] = [
  {
    key: "name",
    label: "Name",
    resizable: true,
    sortable: true,
    alignment: "center",
  },
  {
    key: "value",
    label: "Value",
    resizable: true,
    sortable: true,
    draggable: true,
    textEditable: true,
    alignment: "right",
  },
];

const childRows: HierarchyGridRow[] = [
  {
    name: "Root Node 1",
    value: "1",
    id: "a",
    childRows: [
      {
        name: "Child Node 1.1",
        value: "1.1",
        id: "aa",
        childRows: [
          {
            name: "Grandchild Node 1.1.1",
            value: "1.1.1",
            id: "aaa",
          },
          {
            name: "Grandchild Node 1.1.2",
            value: "1.1.2",
            id: "aab",
          },
        ],
      },
      {
        name: "Child Node 1.2",
        value: "1.2",
        id: "ab",
      },
    ],
  },
  {
    name: "Root Node 2",
    value: "2",
    id: "b",
    childRows: [
      {
        name: "Child Node 2.1",
        value: "2.1",
        id: "ba",
        childRows: [
          {
            name: "Grandchild Node 2.1.1",
            value: "2.1.1",
            id: "baa",
          },
        ],
      },
      {
        name: "Child Node 2.2",
        value: "2.2",
        id: "bb",
      },
      {
        name: "Child Node 2.3",
        value: "2.3",
        id: "bc",
      },
    ],
  },
  {
    name: "Root Node 3",
    value: "3",
    id: "c",
    childRows: [
      {
        name: "Child Node 3.1",
        value: "3.1",
        id: "cc",
        childRows: [
          {
            name: "Grandchild Node 3.1.1",
            value: "3.1.1",
            id: "ccc",
          },
          {
            name: "Grandchild Node 3.1.2",
            value: "3.1.2",
            id: "ccd",
          },
        ],
      },
      {
        name: "Child Node 3.2",
        value: "3.2",
        id: "cd",
      },
    ],
  },
  {
    name: "Root Node 4",
    value: "4",
    id: "d",
    childRows: [
      {
        name: "Child Node 4.1",
        value: "4.1",
        id: "da",
        childRows: [
          {
            name: "Grandchild Node 4.1.1",
            value: "4.1.1",
            id: "daa",
          },
        ],
      },
      {
        name: "Child Node 4.2",
        value: "4.2",
        id: "dd",
      },
      {
        name: "Child Node 4.3",
        value: "4.3",
        id: "de",
      },
    ],
  },
] as HierarchyGridRow[];

const childRowsPaginated: HierarchyGridRow[] = [
  {
    name: "Paginated Node 1",
    value: "1",
    id: "w",
    childRows: [
      {
        name: "Paginated Node 1.1",
        value: "1.1",
        id: "ww",
        childRows: [
          {
            name: "Paginated Node 1.1.1",
            value: "1.1.1",
            id: "www",
          },
          {
            name: "Paginated Node 1.1.2",
            value: "1.1.2",
            id: "wwx",
          },
        ],
      },
      {
        name: "Paginated Node 1.2",
        value: "1.2",
        id: "wx",
      },
    ],
  },
  {
    name: "Paginated Node 2",
    value: "2",
    id: "x",
    childRows: [
      {
        name: "Paginated Node 2.1",
        value: "2.1",
        id: "xw",
        childRows: [
          {
            name: "Paginated Node 2.1.1",
            value: "2.1.1",
            id: "xww",
          },
        ],
      },
      {
        name: "Paginated Node 2.2",
        value: "2.2",
        id: "xx",
      },
      {
        name: "Paginated Node 2.3",
        value: "2.3",
        id: "xy",
      },
    ],
  },
  {
    name: "Paginated Node 3",
    value: "3",
    id: "y",
    childRows: [
      {
        name: "Paginated Node 3.1",
        value: "3.1",
        id: "yy",
        childRows: [
          {
            name: "Paginated Node 3.1.1",
            value: "3.1.1",
            id: "yyy",
          },
          {
            name: "Paginated Node 3.1.2",
            value: "3.1.2",
            id: "yyz",
          },
        ],
      },
      {
        name: "Paginated Node 3.2",
        value: "3.2",
        id: "yz",
      },
    ],
  },
  {
    name: "Paginated Node 4",
    value: "4",
    id: "z",
    childRows: [
      {
        name: "Paginated Node 4.1",
        value: "4.1",
        id: "zw",
        childRows: [
          {
            name: "Paginated Node 4.1.1",
            value: "4.1.1",
            id: "zww",
          },
        ],
      },
      {
        name: "Paginated Node 4.2",
        value: "4.2",
        id: "zz",
      },
      {
        name: "Paginated Node 4.3",
        value: "4.3",
        id: "za",
      },
    ],
  },
] as HierarchyGridRow[];

export const Chromatic = () => {
  const [selectedRows, setSelectedRows] = useState((): Set<number | string> => new Set());
  const [selectedChildRows, setSelectedChildRows] = useState((): Set<number | string> => new Set());

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [rowsControlled, setRowsControlled] = useState(expandableRows.slice(0, itemsPerPage));
  const [page, setPage] = useState(0);

  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Expandable" theme="light" level={4} />
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" expandable />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Selectable" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="task"
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Selectable & expandable" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="task"
          expandable
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="DataGrid with children" theme="light" level={4} />
        <DxcDataGrid columns={childcolumns} rows={childRows} uniqueRowId="id" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="DataGrid with children" theme="light" level={4} />
        <DxcDataGrid
          columns={childcolumns}
          rows={childRows}
          uniqueRowId="value"
          selectable
          selectedRows={selectedChildRows}
          onSelectRows={setSelectedChildRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Summary row" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          summaryRow={{ label: "Total", total: 100 }}
          uniqueRowId="id"
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Scrollable Data Grid" theme="light" level={4} />
        <DxcContainer height="250px">
          <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" />
        </DxcContainer>
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Controlled Rows" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={rowsControlled}
          uniqueRowId="id"
          showPaginator
          onSort={(sortColumn) => {
            if (sortColumn) {
              const { columnKey, direction } = sortColumn;
              console.log(`Sorting the column '${columnKey}' by '${direction}' direction`);
              setRowsControlled((currentRows) => {
                return currentRows.sort((a, b) => {
                  if (direction === "ASC") {
                    return a[columnKey] < b[columnKey] ? -1 : a[columnKey] > b[columnKey] ? 1 : 0;
                  } else {
                    return a[columnKey] < b[columnKey] ? 1 : a[columnKey] > b[columnKey] ? -1 : 0;
                  }
                });
              });
            } else {
              console.log("Removed sorting criteria");
              setRowsControlled(expandableRows.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage));
            }
          }}
          onPageChange={(page) => {
            const internalPage = page - 1;
            setPage(internalPage);
            setRowsControlled(
              expandableRows.slice(internalPage * itemsPerPage, internalPage * itemsPerPage + itemsPerPage)
            );
          }}
          itemsPerPage={itemsPerPage}
          itemsPerPageOptions={[5, 10]}
          itemsPerPageFunction={(n) => {
            setItemsPerPage(n);
            setRowsControlled(expandableRows.slice(0, n));
          }}
          totalItems={expandableRows.length}
        />
      </ExampleContainer>
    </>
  );
};

const customSortColumns: GridColumn[] = [
  {
    key: "id",
    label: "ID",
    alignment: "left",
  },
  {
    key: "task",
    label: "Title",
    alignment: "left",
  },
  {
    key: "complete",
    label: " % Complete",
    alignment: "right",
  },
  {
    key: "priority",
    label: "Priority",
    alignment: "center",
  },
  {
    key: "component",
    label: "Component",
    alignment: "center",
    summaryKey: "total",
    sortable: true,
    sortFn: (a: JSX.Element, b: JSX.Element) =>
      a.props.label < b.props.label ? -1 : a.props.label > b.props.label ? 1 : 0,
  },
];

const customSortRows = [
  {
    id: 1,
    task: "Task 1",
    complete: 46,
    priority: "High",
    component: <DxcBadge label={"CCC"} />,
  },
  {
    id: 2,
    task: "Task 2",
    complete: 51,
    priority: "High",
    component: <DxcBadge label={"BBB"} />,
  },
  {
    id: 3,
    task: "Task 3",
    complete: 40,
    priority: "High",
    component: <DxcBadge label={"AAA"} />,
  },
  {
    id: 4,
    task: "Task 4",
    complete: 10,
    component: <DxcBadge label={"EEE"} />,
    priority: "High",
  },
  {
    id: 5,
    task: "Task 5",
    complete: 68,
    priority: "High",
    component: <DxcBadge label={"DDD"} />,
  },
  {
    id: 6,
    task: "Task 6",
    complete: 37,
    priority: "High",
    component: <DxcBadge label={"FFF"} />,
  },
  {
    id: 7,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    component: <DxcBadge label={"GGG"} />,
  },
];

export const CustomSort = () => {
  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcDataGrid columns={customSortColumns} rows={customSortRows} uniqueRowId="id" />
      </ExampleContainer>
    </>
  );
};

export const Paginator = () => {
  const [selectedRows, setSelectedRows] = useState((): Set<number | string> => new Set());
  const [selectedChildRows, setSelectedChildRows] = useState((): Set<number | string> => new Set());
  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Expandable" theme="light" level={4} />
        <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" expandable showPaginator />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Selectable" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="task"
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
          showPaginator
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Selectable & expandable" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="task"
          expandable
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
          showPaginator
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="DataGrid with children" theme="light" level={4} />
        <DxcDataGrid columns={childcolumns} rows={childRows} uniqueRowId="id" showPaginator />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="DataGrid with children" theme="light" level={4} />
        <DxcDataGrid
          columns={childcolumns}
          rows={childRows}
          uniqueRowId="value"
          selectable
          selectedRows={selectedChildRows}
          onSelectRows={setSelectedChildRows}
          showPaginator
          itemsPerPage={2}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Summary row" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          summaryRow={{ label: "Total", total: 100 }}
          uniqueRowId="id"
          showPaginator
        />
      </ExampleContainer>
    </>
  );
};

const DataGridSortedChildren = () => {
  const [selectedChildRows, setSelectedChildRows] = useState((): Set<number | string> => new Set());
  return (
    <>
      <ExampleContainer>
        <Title title="Non Paginated" theme="light" level={4} />
        <DxcDataGrid
          columns={childcolumns}
          rows={childRows}
          uniqueRowId="id"
          selectable
          onSelectRows={setSelectedChildRows}
          selectedRows={selectedChildRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Paginated" theme="light" level={4} />
        <DxcDataGrid
          columns={childcolumns}
          rows={childRowsPaginated}
          uniqueRowId="id"
          showPaginator
          selectable
          onSelectRows={setSelectedChildRows}
          selectedRows={selectedChildRows}
          itemsPerPage={2}
        />
      </ExampleContainer>
    </>
  );
};

export const DataGridSortedWithChildren = DataGridSortedChildren.bind({});
DataGridSortedWithChildren.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getAllByRole("checkbox")[0]);
  await userEvent.click(canvas.getByText("Root Node 1"));
  await userEvent.click(canvas.getByText("Root Node 2"));
  await userEvent.click(canvas.getByText("Child Node 1.1"));
  await userEvent.click(canvas.getByText("Child Node 2.1"));
  await userEvent.click(canvas.getAllByRole("columnheader")[1]);
  await userEvent.click(canvas.getAllByRole("columnheader")[1]);
  await userEvent.click(canvas.getAllByRole("checkbox")[5]);

  await userEvent.click(canvas.getAllByRole("checkbox")[13]);
  await userEvent.click(canvas.getByText("Paginated Node 1"));
  await userEvent.click(canvas.getByText("Paginated Node 2"));
  await userEvent.click(canvas.getByText("Paginated Node 1.1"));
  await userEvent.click(canvas.getByText("Paginated Node 2.1"));
  await userEvent.click(canvas.getAllByRole("columnheader")[4]);
  await userEvent.click(canvas.getAllByRole("checkbox")[18]);
};

const DataGridSortedExpandable = () => {
  const [selectedRows, setSelectedRows] = useState((): Set<number | string> => new Set());
  return (
    <>
      <ExampleContainer>
        <Title title="Non Paginated" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="task"
          expandable
          selectable
          onSelectRows={setSelectedRows}
          selectedRows={selectedRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Paginated" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRowsPaginated}
          uniqueRowId="task"
          expandable
          selectable
          showPaginator
          onSelectRows={setSelectedRows}
          selectedRows={selectedRows}
          itemsPerPage={5}
        />
      </ExampleContainer>
    </>
  );
};

export const DataGridSortedExpanded = DataGridSortedExpandable.bind({});
DataGridSortedExpanded.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("button")[0]);
  await userEvent.click(canvas.getAllByRole("button")[1]);
  await userEvent.click(canvas.getAllByRole("columnheader")[4]);
  await userEvent.click(canvas.getAllByRole("button")[9]);
  await userEvent.click(canvas.getAllByRole("button")[10]);
  await userEvent.click(canvas.getAllByRole("columnheader")[10]);
  await userEvent.click(canvas.getAllByRole("button")[16]);
};
