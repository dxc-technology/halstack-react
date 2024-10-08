import { render } from "@testing-library/react";
import DxcDataGrid from "./DataGrid";
import { GridColumn, HierarchyGridRow } from "./types";

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
    label: " % Complete",
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

const rowsWithChildren: HierarchyGridRow[] = [
  {
    id: 1,
    complete: 46,
    childRows: [
      {
        id: 1.1,
        complete: 46,
        childRows: [
          {
            id: "1.1a",
            complete: 46,
          },
        ],
      },
      {
        complete: 46,
        value: 1.2,
      },
    ],
  },
  {
    id: 2,
    complete: 51,
  },
  {
    id: 3,
    complete: 40,
  },
  {
    id: 4,
    complete: 10,
  },
  {
    id: 5,
    complete: 1,
  },
] as HierarchyGridRow[];

describe("Data grid component tests", () => {
  beforeAll(() => {
    (global as any).CSS = {
      escape: (str) => str,
    };
    window.HTMLElement.prototype.scrollIntoView = jest.fn;
  });
  test("Renders with correct content", async () => {
    const { getByText, getAllByRole } = await render(
      <DxcDataGrid columns={columns} rows={expandableRows} hidePaginator />
    );
    expect(getByText("46")).toBeTruthy();
    const rows = getAllByRole("row");
    expect(rows.length).toBe(5);
  });
  // test("Content is sorted correctly", async () => {
  //   const { getByText, getAllByRole } = await render(<DxcDataGrid columns={columns} rows={expandableRows} />);
  //   expect(getByText("% Complete")).toBeTruthy();
  //   const headerCell = screen.getAllByRole("columnheader")[1];
  //   expect(getAllByRole("gridcell")[0].textContent).toBe("1");
  //   expect(headerCell.textContent).toBe(" % Complete");
  //   await fireEvent.click(headerCell);
  //   expect(headerCell.getAttribute("aria-sort")).toBe("ascending");
  //   expect(getByText("5")).toBeTruthy();
  //   // await waitFor(() => expect(getAllByRole("gridcell")[0].textContent).toBe("4"));
  //   //waitFor(() => expect(getAllByRole("gridcell").length).toBe(8));
  // });
});
