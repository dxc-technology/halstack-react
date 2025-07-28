import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcDataGrid from "./DataGrid";
import DxcContainer from "../container/Container";
import { GridColumn, GridRow, HierarchyGridRow } from "./types";
import { isValidElement, useState } from "react";
import { disabledRules } from "../../test/accessibility/rules/specific/data-grid/disabledRules";
import preview from "../../.storybook/preview";
import { userEvent, within } from "storybook/test";
import DxcBadge from "../badge/Badge";
import { ActionsCellPropsType } from "../table/types";
import { Meta, StoryObj } from "@storybook/react-vite";
import { isKeyOfRow } from "./utils";

export default {
  title: "Data Grid",
  component: DxcDataGrid,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...preview?.parameters?.a11y?.config?.rules,
          ...disabledRules.map((ruleId) => ({ id: ruleId, reviewOnFail: true })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcDataGrid>;

const actions: ActionsCellPropsType["actions"] = [
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
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    expandedContentHeight: 470,
    contentIsExpanded: true,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 2,
    task: "Task 2",
    complete: 51,
    priority: "High",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 3,
    task: "Task 3",
    complete: 40,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 4,
    task: "Task 4",
    complete: 10,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 5,
    task: "Task 5",
    complete: 68,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 6,
    task: "Task 6",
    complete: 37,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 7,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 8,
    task: "Task 8",
    complete: 27,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
  {
    id: 9,
    task: "Task 9",
    complete: 36,
    priority: "Critical",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    actions: <DxcDataGrid.ActionsCell actions={actions} />,
  },
];

const expandableRowsPaginated = [
  {
    id: 11,
    task: "Task 1",
    complete: 46,
    priority: "High",
    issueType: "Bug",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
    expandedContentHeight: 470,
  },
  {
    id: 22,
    task: "Task 2",
    complete: 51,
    priority: "High",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 33,
    task: "Task 3",
    complete: 40,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 44,
    task: "Task 4",
    complete: 10,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 55,
    task: "Task 5",
    complete: 68,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 66,
    task: "Task 6",
    complete: 37,
    priority: "High",
    issueType: "Improvement",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 77,
    task: "Task 7",
    complete: 73,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 88,
    task: "Task 8",
    complete: 27,
    priority: "Medium",
    issueType: "Story",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
  },
  {
    id: 99,
    task: "Task 9",
    complete: 36,
    priority: "Critical",
    issueType: "Epic",
    expandedContent: <DxcContainer>Custom content 1</DxcContainer>,
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

const childRows = [
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

const childrenTrigger = (open: boolean, triggerRow: HierarchyGridRow) => {
  if (open) {
    return new Promise<HierarchyGridRow[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: `${triggerRow.name} Child 1`,
            value: triggerRow.value,
            id: `${triggerRow.id}-child-1`,
            childrenTrigger,
          },
          {
            name: `${triggerRow.name} Child 2`,
            value: triggerRow.value,
            id: `${triggerRow.id}-child-2`,
            childrenTrigger,
          },
        ] as unknown as HierarchyGridRow[]);
      }, 5000);
    });
  } else {
    return [] as HierarchyGridRow[];
  }
};

const childRowsLazy = [
  {
    name: "Root Node 1 Lazy",
    value: "1",
    id: "lazy-a",
    childrenTrigger,
  },
  {
    name: "Root Node 2 Lazy",
    value: "2",
    id: "lazy-b",
    childrenTrigger,
  },
  {
    name: "Root Node 3 Lazy",
    value: "3",
    id: "lazy-c",
    childrenTrigger,
  },
  {
    name: "Root Node 4 Lazy",
    value: "4",
    id: "lazy-d",
    childrenTrigger,
  },
] as unknown as HierarchyGridRow[];

const childRowsPaginated = [
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
    sortFn: (a, b) => {
      if (isValidElement(a) && isValidElement(b)) {
        return a.props.label < b.props.label ? -1 : a.props.label > b.props.label ? 1 : 0;
      }
      return 0;
    },
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

const DataGrid = () => {
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
        <Title title="Summary row" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          summaryRow={{ label: "Total", total: 100 }}
          uniqueRowId="id"
        />
      </ExampleContainer>
      {/* <ExampleContainer>
        <Title title="Scrollable Data Grid" theme="light" level={4} />
        <DxcContainer height="250px">
          <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" />
        </DxcContainer>
      </ExampleContainer> */}
    </>
  );
};

const DataGridControlled = () => {
  const [selectedRows, setSelectedRows] = useState((): Set<number | string> => new Set());
  const [selectedChildRows, setSelectedChildRows] = useState((): Set<number | string> => new Set());
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [rowsControlled, setRowsControlled] = useState(expandableRows.slice(0, itemsPerPage));
  const [page, setPage] = useState(0);

  return (
    <>
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
        <Title title="DataGrid with childrenTrigger function" theme="light" level={4} />
        <DxcDataGrid
          columns={childcolumns}
          rows={childRowsLazy}
          uniqueRowId="id"
          selectable
          selectedRows={selectedRows}
          onSelectRows={(selectedRows) => {
            console.log("SELECTEDROWS", selectedRows);
            return setSelectedRows(selectedRows);
          }}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Empty Data Grid" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={[]}
          uniqueRowId="id"
          selectable
          selectedRows={selectedChildRows}
          onSelectRows={setSelectedChildRows}
        />
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
                  if (isKeyOfRow(columnKey, a) && isKeyOfRow(columnKey, b)) {
                    const valueA = a[columnKey];
                    const valueB = b[columnKey];
                    if (valueA != null && valueB != null) {
                      if (direction === "ASC") {
                        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
                      } else {
                        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
                      }
                    } else {
                      return 0;
                    }
                  } else {
                    return 0;
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

const DataGridSort = () => {
  return (
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcDataGrid columns={customSortColumns} rows={customSortRows} uniqueRowId="id" />
      </ExampleContainer>
    </>
  );
};

const DataGridPaginator = () => {
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
          defaultPage={2}
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
          defaultPage={2}
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

const DataGridUnknownUniqueRowId = () => {
  const [selectedRows, setSelectedRows] = useState((): Set<number | string> => new Set());
  const [selectedChildRows, setSelectedChildRows] = useState((): Set<number | string> => new Set());

  return (
    <>
      <ExampleContainer>
        <Title title="Selectable" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={expandableRows}
          uniqueRowId="error"
          selectable
          selectedRows={selectedRows}
          onSelectRows={setSelectedRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="DataGrid with children" theme="light" level={4} />
        <DxcDataGrid columns={childcolumns} rows={childRows} uniqueRowId="error" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="DataGrid with children" theme="light" level={4} />
        <DxcDataGrid
          columns={childcolumns}
          rows={childRows}
          uniqueRowId="error"
          selectable
          selectedRows={selectedChildRows}
          onSelectRows={setSelectedChildRows}
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Empty Data Grid" theme="light" level={4} />
        <DxcDataGrid
          columns={columns}
          rows={[]}
          uniqueRowId="error"
          selectable
          selectedRows={selectedChildRows}
          onSelectRows={setSelectedChildRows}
        />
      </ExampleContainer>
    </>
  );
};

type Story = StoryObj<typeof DxcDataGrid>;

export const Chromatic: Story = {
  render: DataGrid,
};

export const Controlled: Story = {
  render: DataGridControlled,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Root Node 1 Lazy"));
    await userEvent.click(canvas.getByText("Root Node 2 Lazy"));
  },
};

export const CustomSort: Story = {
  render: DataGridSort,
};

export const Paginator: Story = {
  render: DataGridPaginator,
};

export const DataGridSortedWithChildren: Story = {
  render: DataGridSortedChildren,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox0 = (await canvas.findAllByRole("checkbox"))[0];
    checkbox0 && (await userEvent.click(checkbox0));
    await userEvent.click(await canvas.findByText("Root Node 1"));
    await userEvent.click(await canvas.findByText("Root Node 2"));
    await userEvent.click(await canvas.findByText("Child Node 1.1"));
    await userEvent.click(await canvas.findByText("Child Node 2.1"));
    let columnheader1 = (await canvas.findAllByRole("columnheader"))[1];
    columnheader1 && (await userEvent.click(columnheader1));
    columnheader1 = (await canvas.findAllByRole("columnheader"))[1];
    columnheader1 && (await userEvent.click(columnheader1));
    const checkbox5 = (await canvas.findAllByRole("checkbox"))[5];
    checkbox5 && (await userEvent.click(checkbox5));
    const checkbox13 = (await canvas.findAllByRole("checkbox"))[13];
    checkbox13 && (await userEvent.click(checkbox13));
    await userEvent.click(await canvas.findByText("Paginated Node 1"));
    await userEvent.click(await canvas.findByText("Paginated Node 2"));
    await userEvent.click(await canvas.findByText("Paginated Node 1.1"));
    await userEvent.click(await canvas.findByText("Paginated Node 2.1"));
    const columnheader4 = (await canvas.findAllByRole("columnheader"))[4];
    columnheader4 && (await userEvent.click(columnheader4));
    const checkbox18 = (await canvas.findAllByRole("checkbox"))[18];
    checkbox18 && (await userEvent.click(checkbox18));
  },
};

export const DataGridSortedExpanded: Story = {
  render: DataGridSortedExpandable,
  play: async ({ canvasElement }) => {
    // TODO: Fix this test, it is throwing an error: ResizeObserver loop limit exceeded
    // const canvas = within(canvasElement);
    // const button0 = (await canvas.findAllByRole("button"))[0];
    // button0 && (await userEvent.click(button0));
    // const button1 = (await canvas.findAllByRole("button"))[1];
    // button1 && (await userEvent.click(button1));
    // const columnHeaders4 = (await canvas.findAllByRole("columnheader"))[4];
    // columnHeaders4 && (await userEvent.click(columnHeaders4));
    // const columnHeaders10 = (await canvas.findAllByRole("columnheader"))[10];
    // columnHeaders10 && (await userEvent.click(columnHeaders10));
    // const button16 = (await canvas.findAllByRole("button"))[16];
    // button16 && (await userEvent.click(button16));
    // const button43 = (await canvas.findAllByRole("button"))[43];
    // button43 && (await userEvent.click(button43));
    // const button36 = (await canvas.findAllByRole("button"))[36];
    // button36 && (await userEvent.click(button36));
    // const button37 = (await canvas.findAllByRole("button"))[37];
    // button37 && (await userEvent.click(button37));
    // const button9 = (await canvas.findAllByRole("button"))[9];
    // button9 && (await userEvent.click(button9));
    // const button10 = (await canvas.findAllByRole("button"))[10];
    // button10 && (await userEvent.click(button10));
  },
};

export const UnknownUniqueId: Story = {
  render: DataGridUnknownUniqueRowId,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const editorCell = (await canvas.findAllByText("Task 1"))[0];
    editorCell && (await userEvent.dblClick(editorCell));
  },
};
