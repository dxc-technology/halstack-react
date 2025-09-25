import { fireEvent, render, waitFor } from "@testing-library/react";
import DxcDataGrid from "./DataGrid";
import { GridColumn, HierarchyGridRow } from "./types";

Object.defineProperty(window, "getComputedStyle", {
  value: () => ({
    getPropertyValue: (prop: string) => {
      if (prop === "--height-l") return "36px";
      return "";
    },
  }),
});

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
    key: "complete",
    label: "% Complete",
    resizable: true,
    sortable: true,
    draggable: true,
  },
];

const expandableRows = [
  {
    id: 1,
    complete: 46,
    expandedContent: <div> Custom content 1</div>,
  },
  {
    id: 2,
    complete: 51,
    expandedContent: <div> Custom content 2</div>,
  },
  {
    id: 3,
    complete: 40,
    expandedContent: <div> Custom content 3</div>,
  },
  {
    id: 4,
    complete: 10,
    expandedContent: <div> Custom content 4</div>,
  },
  {
    id: 5,
    complete: 1,
    expandedContent: <div> Custom content 5</div>,
  },
];

const hierarchyRows: HierarchyGridRow[] = [
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
  {
    name: "Root Node 5",
    value: "5",
    id: "d",
    childRows: [
      {
        name: "Child Node 5.1",
        value: "5.1",
        id: "da",
        childRows: [
          {
            name: "Grandchild Node 5.1.1",
            value: "5.1.1",
            id: "daa",
          },
        ],
      },
      {
        name: "Child Node 5.2",
        value: "5.2",
        id: "dd",
      },
      {
        name: "Child Node 5.3",
        value: "5.3",
        id: "de",
      },
    ],
  },
] as HierarchyGridRow[];

const loadedChildrenMock = [
  { id: "child-1", name: "Child 1", value: "Child 1" },
  { id: "child-2", name: "Child 2", value: "Child 2" },
];

const childrenTriggerMock = jest.fn().mockResolvedValue(loadedChildrenMock);

const hierarchyRowsLazy: HierarchyGridRow[] = [
  {
    name: "Root Node 1 Lazy",
    value: "1",
    id: "lazy-a",
    childrenTrigger: childrenTriggerMock,
  },
  {
    name: "Root Node 2 Lazy",
    value: "2",
    id: "lazy-b",
  },
  {
    name: "Root Node 3 Lazy",
    value: "3",
    id: "lazy-c",
  },
  {
    name: "Root Node 4 Lazy",
    value: "4",
    id: "lazy-d",
  },
  {
    name: "Root Node 5 Lazy",
    value: "5",
    id: "lazy-e",
  },
] as HierarchyGridRow[];

describe("Data grid component tests", () => {
  beforeAll(() => {
    (global as any).CSS = {
      escape: (str: string) => str,
    };
    window.HTMLElement.prototype.scrollIntoView = jest.fn;
  });

  test("Renders with correct content", async () => {
    const { getByText, getAllByRole } = await render(<DxcDataGrid columns={columns} rows={expandableRows} />);
    expect(getByText("46")).toBeTruthy();
    const rows = getAllByRole("row");
    expect(rows.length).toBe(5);
  });

  test("Renders hierarchy rows", () => {
    const onSelectRows = jest.fn();
    const selectedRows = new Set<number | string>();
    const { getAllByRole } = render(
      <DxcDataGrid
        columns={columns}
        rows={hierarchyRows}
        uniqueRowId="id"
        selectable
        onSelectRows={onSelectRows}
        selectedRows={selectedRows}
      />
    );
    const rows = getAllByRole("row");
    expect(rows.length).toBe(5);
  });

  test("Triggers childrenTrigger when expanding hierarchy row", async () => {
    const onSelectRows = jest.fn();
    const selectedRows = new Set<number | string>();

    const { getAllByRole } = render(
      <DxcDataGrid
        columns={columns}
        rows={hierarchyRowsLazy}
        uniqueRowId="id"
        selectable
        onSelectRows={onSelectRows}
        selectedRows={selectedRows}
      />
    );

    expect(getAllByRole("row").length).toBe(5);

    const buttons = getAllByRole("button");

    buttons[0] && fireEvent.click(buttons[0]);

    expect(childrenTriggerMock).toHaveBeenCalledWith(true, expect.objectContaining({ id: "lazy-a" }));
  });

  test("Renders column headers", () => {
    const { getByText } = render(<DxcDataGrid columns={columns} rows={expandableRows} />);
    expect(getByText("ID")).toBeTruthy();
    expect(getByText("% Complete")).toBeTruthy();
  });

  test("Expands and collapses a row to show custom content", async () => {
    const { getAllByRole, getByText, queryByText } = render(
      <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" expandable />
    );
    const buttons = getAllByRole("button");
    buttons[0] && fireEvent.click(buttons[0]);
    expect(getByText("Custom content 1")).toBeTruthy();
    buttons[0] && fireEvent.click(buttons[0]);
    expect(queryByText("Custom content 1")).not.toBeTruthy();
  });

  test("Sorting by column works as expected", async () => {
    const { getAllByRole } = render(
      <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" expandable />
    );
    const headers = getAllByRole("columnheader");
    const sortableHeader = headers[1];

    sortableHeader && fireEvent.click(sortableHeader);
    expect(sortableHeader?.getAttribute("aria-sort")).toBe("ascending");
    await waitFor(() => {
      const cells = getAllByRole("gridcell");
      expect(cells[1]?.textContent).toBe("1");
    });
    sortableHeader && fireEvent.click(sortableHeader);
    expect(sortableHeader?.getAttribute("aria-sort")).toBe("descending");
    await waitFor(() => {
      const cells = getAllByRole("gridcell");
      expect(cells[1]?.textContent).toBe("5");
    });
  });

  test("Expands multiple rows at once", () => {
    const { getAllByRole, getByText } = render(
      <DxcDataGrid columns={columns} rows={expandableRows} uniqueRowId="id" expandable />
    );

    const buttons = getAllByRole("button");
    buttons[0] && fireEvent.click(buttons[0]);
    buttons[1] && fireEvent.click(buttons[1]);

    expect(getByText("Custom content 1")).toBeTruthy();
    expect(getByText("Custom content 2")).toBeTruthy();
  });
});
